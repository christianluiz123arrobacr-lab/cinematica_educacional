import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CreditCard,
  Loader2,
  Sparkles,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import {
  formatPriceFromCents,
  formatSubscriptionStatus,
} from "@/types/billing";

type MySubscriptionRow = {
  subscription_id: string;
  status: string;
  gateway: string;
  payment_url: string | null;

  started_at: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  next_due_date: string | null;

  plan_id: string;
  plan_slug: string;
  plan_name: string;
  plan_description: string | null;
  plan_price_cents: number;
};

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

function getStatusInfo(status: string) {
  switch (status) {
    case "active":
      return {
        icon: CheckCircle2,
        title: "Assinatura ativa",
        description: "Seu acesso está liberado.",
        className: "border-emerald-200 bg-emerald-50 text-emerald-800",
      };

    case "manual_review":
      return {
        icon: Clock3,
        title: "Aguardando confirmação",
        description:
          "Sua solicitação foi registrada. O acesso será liberado após a confirmação do pagamento.",
        className: "border-yellow-200 bg-yellow-50 text-yellow-800",
      };

    case "pending":
      return {
        icon: Clock3,
        title: "Pagamento pendente",
        description: "Finalize o pagamento para liberar o acesso.",
        className: "border-yellow-200 bg-yellow-50 text-yellow-800",
      };

    case "overdue":
      return {
        icon: AlertTriangle,
        title: "Pagamento em atraso",
        description: "Regularize sua assinatura para manter o acesso.",
        className: "border-orange-200 bg-orange-50 text-orange-800",
      };

    case "canceled":
      return {
        icon: XCircle,
        title: "Assinatura cancelada",
        description: "Sua assinatura foi cancelada.",
        className: "border-slate-200 bg-slate-50 text-slate-700",
      };

    default:
      return {
        icon: CreditCard,
        title: "Status da assinatura",
        description: "Veja os detalhes do seu plano.",
        className: "border-blue-200 bg-blue-50 text-blue-800",
      };
  }
}

export default function MinhaAssinaturaPage() {
  const [subscription, setSubscription] = useState<MySubscriptionRow | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  async function loadSubscription() {
    try {
      setLoading(true);
      setErrorMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setErrorMessage("Você precisa estar logado para ver sua assinatura.");
        return;
      }

      const { data, error } = await supabase
        .from("billing_subscriptions")
        .select(
          `
          id,
          status,
          gateway,
          payment_url,
          started_at,
          current_period_start,
          current_period_end,
          next_due_date,
          billing_plans (
            id,
            slug,
            name,
            description,
            price_cents
          )
        `
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Erro ao carregar assinatura:", error);
        setErrorMessage("Não foi possível carregar sua assinatura.");
        return;
      }

      if (!data) {
        setSubscription(null);
        return;
      }

      const plan = Array.isArray(data.billing_plans)
        ? data.billing_plans[0]
        : data.billing_plans;

      setSubscription({
        subscription_id: data.id,
        status: data.status,
        gateway: data.gateway,
        payment_url: data.payment_url,
        started_at: data.started_at,
        current_period_start: data.current_period_start,
        current_period_end: data.current_period_end,
        next_due_date: data.next_due_date,

        plan_id: plan?.id ?? "",
        plan_slug: plan?.slug ?? "",
        plan_name: plan?.name ?? "Plano",
        plan_description: plan?.description ?? null,
        plan_price_cents: plan?.price_cents ?? 0,
      });
    } catch (error) {
      console.error("Erro inesperado ao carregar assinatura:", error);
      setErrorMessage("Ocorreu um erro inesperado ao carregar sua assinatura.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubscription();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-xl">
            <Loader2 className="h-5 w-5 animate-spin text-cyan-200" />
            <span className="text-sm text-slate-200">
              Carregando assinatura...
            </span>
          </div>
        </section>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4">
          <Card className="w-full max-w-xl border-red-200 bg-red-50 p-8 text-center">
            <AlertTriangle className="mx-auto h-10 w-10 text-red-600" />
            <h1 className="mt-4 text-2xl font-black text-red-900">
              Não foi possível carregar
            </h1>
            <p className="mt-2 text-sm text-red-700">{errorMessage}</p>

            <div className="mt-6 flex justify-center gap-3">
              <Link href="/login">
                <Button>Fazer login</Button>
              </Link>

              <Link href="/planos">
                <Button variant="outline">Ver planos</Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>
    );
  }

  if (!subscription) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
              <Sparkles className="h-8 w-8" />
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
              Você ainda não tem assinatura
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
              Escolha um plano para liberar o acesso ao banco de questões e aos
              recursos premium da plataforma.
            </p>

            <div className="mt-8">
              <Link href="/planos">
                <Button className="rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200">
                  Ver planos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const statusInfo = getStatusInfo(subscription.status);
  const StatusIcon = statusInfo.icon;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <CreditCard className="h-4 w-4" />
            Minha assinatura
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Seu plano
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            Acompanhe o status da sua assinatura e o período de acesso.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-white/10 bg-white/[0.04] p-6 text-white">
            <div
              className={`rounded-2xl border p-4 ${statusInfo.className}`}
            >
              <div className="flex items-start gap-3">
                <StatusIcon className="mt-0.5 h-5 w-5" />
                <div>
                  <h2 className="font-black">{statusInfo.title}</h2>
                  <p className="mt-1 text-sm leading-6">
                    {statusInfo.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                Plano atual
              </p>

              <h2 className="mt-2 text-3xl font-black text-white">
                {subscription.plan_name}
              </h2>

              {subscription.plan_description && (
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {subscription.plan_description}
                </p>
              )}

              <div className="mt-6 text-4xl font-black text-white">
                {formatPriceFromCents(subscription.plan_price_cents)}
                <span className="ml-2 text-base font-medium text-slate-400">
                  / mês
                </span>
              </div>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.04] p-6 text-white">
            <h2 className="text-xl font-black">Detalhes</h2>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-slate-400">Status</span>
                <strong className="text-white">
                  {formatSubscriptionStatus(subscription.status as never)}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-slate-400">Gateway</span>
                <strong className="text-white">{subscription.gateway}</strong>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-slate-400">Início</span>
                <strong className="text-white">
                  {formatDate(subscription.started_at)}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-slate-400">Vencimento</span>
                <strong className="text-white">
                  {formatDate(subscription.current_period_end)}
                </strong>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Próxima cobrança</span>
                <strong className="text-white">
                  {formatDate(subscription.next_due_date)}
                </strong>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {subscription.status === "active" ? (
                <Link href="/banco-de-questoes">
                  <Button className="w-full rounded-2xl bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                    Acessar banco de questões
                  </Button>
                </Link>
              ) : (
                <Link href="/planos">
                  <Button className="w-full rounded-2xl bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                    Ver planos
                  </Button>
                </Link>
              )}

              <Button
                variant="outline"
                onClick={loadSubscription}
                className="w-full rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Atualizar status
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
