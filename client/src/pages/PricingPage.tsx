import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Crown,
  Lock,
  Loader2,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import {
  canUserChoosePlan,
  getBillingPlans,
  getMyBillingSubscription,
  requestManualSubscription,
} from "@/services/billing.service";

import type {
  BillingPlanWithStats,
  BillingSubscription,
} from "@/types/billing";

import {
  formatBillingCycle,
  formatPriceFromCents,
  formatSubscriptionStatus,
} from "@/types/billing";

function getPlanIcon(slug: string) {
  if (slug === "selecionados_5") return Crown;
  if (slug === "fundador_8") return Zap;
  return Sparkles;
}

function getPlanBadge(plan: BillingPlanWithStats) {
  if (plan.slug === "selecionados_5") {
    return "Apenas convidados";
  }

  if (plan.slug === "fundador_8") {
    return `Limitado: ${plan.active_subscriptions_count}/${plan.max_active_subscriptions ?? 15}`;
  }

  return "Plano padrão";
}

function getPlanHighlight(plan: BillingPlanWithStats) {
  if (plan.slug === "fundador_8") return true;
  return false;
}

export default function PricingPage() {
  const [plans, setPlans] = useState<BillingPlanWithStats[]>([]);
  const [subscription, setSubscription] = useState<BillingSubscription | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [loadingPlanSlug, setLoadingPlanSlug] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sortedPlans = useMemo(() => {
    return [...plans].sort((a, b) => a.price_cents - b.price_cents);
  }, [plans]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setErrorMessage(null);

        const [plansData, subscriptionData] = await Promise.all([
          getBillingPlans(),
          getMyBillingSubscription(),
        ]);

        setPlans(plansData);
        setSubscription(subscriptionData);
      } catch (error) {
        console.error(error);
        setErrorMessage("Não foi possível carregar os planos.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleChoosePlan(plan: BillingPlanWithStats) {
    try {
      setLoadingPlanSlug(plan.slug);
      setErrorMessage(null);
      setSuccessMessage(null);

      const permission = await canUserChoosePlan(plan);

      if (!permission.allowed) {
        setErrorMessage(permission.reason ?? "Você não pode escolher esse plano.");
        return;
      }

      const createdSubscription = await requestManualSubscription(plan.slug);

      setSubscription(createdSubscription);

      setSuccessMessage(
        "Sua solicitação foi registrada. Agora falta confirmar o pagamento para liberar o acesso."
      );
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Não foi possível solicitar esse plano.");
      }
    } finally {
      setLoadingPlanSlug(null);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-xl">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm text-slate-200">Carregando planos...</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Banco de questões em lançamento
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Escolha seu plano
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            Acesso ao banco de questões, resoluções e recursos da plataforma.
            Os valores iniciais são promocionais para o lançamento.
          </p>
        </div>

        {errorMessage && (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm text-red-100">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
            {successMessage}
          </div>
        )}

        {subscription && (
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-5 py-4 text-sm text-yellow-100">
            Você já possui uma assinatura em andamento. Status:{" "}
            <strong>{formatSubscriptionStatus(subscription.status)}</strong>.
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sortedPlans.map((plan) => {
            const Icon = getPlanIcon(plan.slug);
            const highlighted = getPlanHighlight(plan);
            const unavailable = !plan.has_available_slots;
            const isLoadingThisPlan = loadingPlanSlug === plan.slug;

            return (
              <article
                key={plan.id}
                className={[
                  "relative flex flex-col rounded-3xl border p-6 shadow-2xl transition",
                  highlighted
                    ? "border-cyan-300/60 bg-cyan-400/10"
                    : "border-white/10 bg-white/[0.04]",
                  unavailable ? "opacity-70" : "hover:-translate-y-1 hover:bg-white/[0.07]",
                ].join(" ")}
              >
                {highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 px-4 py-1 text-xs font-bold text-slate-950 shadow-lg">
                    Melhor lançamento
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-cyan-200" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {getPlanBadge(plan)}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                  {plan.name}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-white">
                      {formatPriceFromCents(plan.price_cents)}
                    </span>
                    <span className="pb-1 text-sm text-slate-400">
                      / {formatBillingCycle(plan.billing_cycle)}
                    </span>
                  </div>
                </div>

                {plan.slug === "fundador_8" && (
                  <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                      <Users className="h-4 w-4" />
                      Vagas do fundador
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-cyan-300"
                        style={{
                          width: `${Math.min(
                            100,
                            (plan.active_subscriptions_count /
                              (plan.max_active_subscriptions ?? 15)) *
                              100
                          )}%`,
                        }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-slate-300">
                      {plan.active_subscriptions_count} de{" "}
                      {plan.max_active_subscriptions ?? 15} vagas ocupadas.
                    </p>
                  </div>
                )}

                <ul className="mt-6 space-y-3">
                  {(plan.features ?? []).map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-5 text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    disabled={
                      unavailable ||
                      isLoadingThisPlan ||
                      Boolean(subscription)
                    }
                    onClick={() => handleChoosePlan(plan)}
                    className={[
                      "flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition",
                      highlighted
                        ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                        : "bg-white text-slate-950 hover:bg-slate-200",
                      unavailable || subscription
                        ? "cursor-not-allowed opacity-60"
                        : "",
                    ].join(" ")}
                  >
                    {isLoadingThisPlan ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Registrando...
                      </>
                    ) : unavailable ? (
                      <>
                        <Lock className="h-4 w-4" />
                        Vagas encerradas
                      </>
                    ) : subscription ? (
                      "Assinatura em andamento"
                    ) : (
                      "Assinar plano"
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-6 text-slate-300">
          <strong className="text-white">Observação de lançamento:</strong>{" "}
          nesta primeira etapa, a solicitação de assinatura fica registrada para
          confirmação de pagamento. A integração automática com Asaas ou Mercado
          Pago será conectada depois, sem mudar a estrutura dos planos.
        </div>
      </section>
    </main>
  );
}
