import { useEffect, useMemo, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CreditCard,
  Loader2,
  RefreshCw,
  XCircle,
} from "lucide-react";
import { formatPriceFromCents, formatSubscriptionStatus } from "@/types/billing";

type AdminBillingSubscriptionRow = {
  subscription_id: string;
  user_id: string;
  user_name: string;
  user_email: string;

  plan_id: string;
  plan_slug: string;
  plan_name: string;
  plan_price_cents: number;

  status: string;
  gateway: string;
  payment_url: string | null;

  started_at: string | null;
  current_period_end: string | null;
  next_due_date: string | null;

  created_at: string;
  updated_at: string;
};

type StatusFilter = "all" | "manual_review" | "active" | "canceled" | "overdue";

function formatDate(date?: string | null) {
  if (!date) return "Sem data";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Sem data";
  }

  return parsed.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getStatusBadge(status: string) {
  switch (status) {
    case "manual_review":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "active":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "overdue":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "canceled":
      return "bg-slate-100 text-slate-600 border-slate-200";
    case "failed":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-blue-50 text-blue-700 border-blue-200";
  }
}

export default function AdminBillingPage() {
  const [subscriptions, setSubscriptions] = useState<AdminBillingSubscriptionRow[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const filteredSubscriptions = useMemo(() => {
    if (statusFilter === "all") return subscriptions;

    return subscriptions.filter((subscription) => subscription.status === statusFilter);
  }, [subscriptions, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: subscriptions.length,
      manualReview: subscriptions.filter((item) => item.status === "manual_review")
        .length,
      active: subscriptions.filter((item) => item.status === "active").length,
      canceled: subscriptions.filter((item) => item.status === "canceled").length,
    };
  }, [subscriptions]);

  async function loadSubscriptions() {
    try {
      setLoading(true);
      setError("");

      const { data, error: rpcError } = await supabase.rpc(
        "admin_list_billing_subscriptions"
      );

      if (rpcError) {
        console.error("Erro ao carregar assinaturas:", rpcError);
        setError(rpcError.message || "Não foi possível carregar as assinaturas.");
        return;
      }

      setSubscriptions((data ?? []) as AdminBillingSubscriptionRow[]);
    } catch (err) {
      console.error("Erro inesperado ao carregar assinaturas:", err);
      setError("Ocorreu um erro inesperado ao carregar as assinaturas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubscriptions();
  }, []);

  async function approveSubscription(subscriptionId: string) {
    const confirmed = window.confirm(
      "Aprovar esta assinatura e liberar 1 mês de acesso?"
    );

    if (!confirmed) return;

    try {
      setActionLoadingId(subscriptionId);
      setError("");
      setSuccess("");

      const { error: rpcError } = await supabase.rpc(
        "admin_approve_manual_subscription",
        {
          target_subscription_id: subscriptionId,
          access_months: 1,
        }
      );

      if (rpcError) {
        console.error("Erro ao aprovar assinatura:", rpcError);
        setError(rpcError.message || "Não foi possível aprovar a assinatura.");
        return;
      }

      setSuccess("Assinatura aprovada com sucesso.");
      await loadSubscriptions();
    } catch (err) {
      console.error("Erro inesperado ao aprovar assinatura:", err);
      setError("Ocorreu um erro inesperado ao aprovar a assinatura.");
    } finally {
      setActionLoadingId(null);
    }
  }

  async function cancelSubscription(subscriptionId: string) {
    const confirmed = window.confirm("Cancelar esta assinatura?");

    if (!confirmed) return;

    try {
      setActionLoadingId(subscriptionId);
      setError("");
      setSuccess("");

      const { error: rpcError } = await supabase.rpc(
        "admin_cancel_billing_subscription",
        {
          target_subscription_id: subscriptionId,
        }
      );

      if (rpcError) {
        console.error("Erro ao cancelar assinatura:", rpcError);
        setError(rpcError.message || "Não foi possível cancelar a assinatura.");
        return;
      }

      setSuccess("Assinatura cancelada com sucesso.");
      await loadSubscriptions();
    } catch (err) {
      console.error("Erro inesperado ao cancelar assinatura:", err);
      setError("Ocorreu um erro inesperado ao cancelar a assinatura.");
    } finally {
      setActionLoadingId(null);
    }
  }

  return (
    <AdminGuard allowedRoles={["admin"]}>
      <AdminLayout
        title="Assinaturas"
        subtitle="Aprove solicitações, acompanhe planos e gerencie acessos manuais da plataforma."
      >
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-5 border-slate-200">
            <p className="text-sm text-slate-500">Total</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{stats.total}</p>
          </Card>

          <Card className="p-5 border-yellow-200 bg-yellow-50">
            <p className="text-sm text-yellow-700">Aguardando análise</p>
            <p className="mt-2 text-3xl font-black text-yellow-900">
              {stats.manualReview}
            </p>
          </Card>

          <Card className="p-5 border-emerald-200 bg-emerald-50">
            <p className="text-sm text-emerald-700">Ativas</p>
            <p className="mt-2 text-3xl font-black text-emerald-900">
              {stats.active}
            </p>
          </Card>

          <Card className="p-5 border-slate-200 bg-slate-50">
            <p className="text-sm text-slate-500">Canceladas</p>
            <p className="mt-2 text-3xl font-black text-slate-900">
              {stats.canceled}
            </p>
          </Card>
        </div>

        <Card className="p-5 border-slate-200">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Solicitações e assinaturas
              </h2>
              <p className="text-sm text-slate-500">
                Use essa tela enquanto o gateway automático ainda não está conectado.
              </p>
            </div>

            <Button
              variant="outline"
              onClick={loadSubscriptions}
              disabled={loading}
              className="gap-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              Atualizar
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { value: "all", label: "Todas" },
              { value: "manual_review", label: "Análise manual" },
              { value: "active", label: "Ativas" },
              { value: "overdue", label: "Atrasadas" },
              { value: "canceled", label: "Canceladas" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setStatusFilter(item.value as StatusFilter)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  statusFilter === item.value
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Card>

        {error && (
          <Card className="p-5 border-red-200 bg-red-50">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </Card>
        )}

        {success && (
          <Card className="p-5 border-emerald-200 bg-emerald-50">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <p className="text-sm text-emerald-700">{success}</p>
            </div>
          </Card>
        )}

        {loading ? (
          <Card className="p-10 flex items-center justify-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
            <p className="text-slate-600">Carregando assinaturas...</p>
          </Card>
        ) : filteredSubscriptions.length === 0 ? (
          <Card className="p-10 text-center border-slate-200">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <CreditCard className="h-6 w-6 text-slate-500" />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Nenhuma assinatura encontrada
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Quando alguém clicar em um plano, a solicitação aparecerá aqui.
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredSubscriptions.map((subscription) => {
              const isActionLoading =
                actionLoadingId === subscription.subscription_id;

              return (
                <Card
                  key={subscription.subscription_id}
                  className="overflow-hidden border-slate-200"
                >
                  <div className="grid gap-4 p-5 lg:grid-cols-[1.4fr_1fr_auto] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={[
                            "rounded-full border px-3 py-1 text-xs font-bold",
                            getStatusBadge(subscription.status),
                          ].join(" ")}
                        >
                          {formatSubscriptionStatus(subscription.status as never)}
                        </span>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                          {subscription.gateway}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-black text-slate-900">
                        {subscription.user_name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {subscription.user_email}
                      </p>

                      <p className="mt-2 text-xs text-slate-400">
                        Solicitada em {formatDate(subscription.created_at)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Plano
                      </p>

                      <p className="mt-1 font-bold text-slate-900">
                        {subscription.plan_name}
                      </p>

                      <p className="text-sm text-slate-600">
                        {formatPriceFromCents(subscription.plan_price_cents)} / mês
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <Clock3 className="h-4 w-4" />
                        Vence em: {formatDate(subscription.current_period_end)}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-48">
                      {subscription.status === "manual_review" && (
                        <Button
                          onClick={() =>
                            approveSubscription(subscription.subscription_id)
                          }
                          disabled={isActionLoading}
                          className="gap-2"
                        >
                          {isActionLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4" />
                          )}
                          Aprovar
                        </Button>
                      )}

                      {subscription.status !== "canceled" && (
                        <Button
                          variant="outline"
                          onClick={() =>
                            cancelSubscription(subscription.subscription_id)
                          }
                          disabled={isActionLoading}
                          className="gap-2 border-red-200 text-red-700 hover:bg-red-50"
                        >
                          {isActionLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <XCircle className="h-4 w-4" />
                          )}
                          Cancelar
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </AdminLayout>
    </AdminGuard>
  );
}
