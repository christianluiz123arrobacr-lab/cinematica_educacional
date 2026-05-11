import { createClient } from "@supabase/supabase-js";
import type {
  BillingPlanInvite,
  BillingPlanWithStats,
  BillingSubscription,
} from "@/types/billing";

export async function getBillingPlans(): Promise<BillingPlanWithStats[]> {
  const { data, error } = await supabase
    .from("billing_plans_with_stats")
    .select("*")
    .eq("is_active", true)
    .order("price_cents", { ascending: true });

  if (error) {
    console.error("Erro ao buscar planos:", error);
    throw new Error("Não foi possível carregar os planos.");
  }

  return (data ?? []) as BillingPlanWithStats[];
}

export async function getMyBillingSubscription(): Promise<BillingSubscription | null> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Erro ao buscar usuário:", userError);
    throw new Error("Não foi possível verificar o usuário logado.");
  }

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("billing_subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .in("status", ["pending", "active", "overdue", "manual_review"])
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Erro ao buscar assinatura:", error);
    throw new Error("Não foi possível carregar sua assinatura.");
  }

  return data as BillingSubscription | null;
}

export async function getMyBillingInvites(): Promise<BillingPlanInvite[]> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Erro ao buscar usuário:", userError);
    throw new Error("Não foi possível verificar o usuário logado.");
  }

  if (!user) {
    return [];
  }

  const email = user.email?.toLowerCase();

  let query = supabase.from("billing_plan_invites").select("*");

  if (email) {
    query = query.or(`user_id.eq.${user.id},email.eq.${email}`);
  } else {
    query = query.eq("user_id", user.id);
  }

  const { data, error } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error("Erro ao buscar convites:", error);
    throw new Error("Não foi possível carregar seus convites.");
  }

  return (data ?? []) as BillingPlanInvite[];
}

export async function canUserChoosePlan(plan: BillingPlanWithStats): Promise<{
  allowed: boolean;
  reason?: string;
}> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      allowed: false,
      reason: "Você precisa estar logado para assinar.",
    };
  }

  if (!plan.has_available_slots) {
    return {
      allowed: false,
      reason: "As vagas desse plano já acabaram.",
    };
  }

  if (!plan.invite_only) {
    return {
      allowed: true,
    };
  }

  const invites = await getMyBillingInvites();

  const hasInvite = invites.some((invite) => {
    if (invite.used_at) return false;

    if (invite.expires_at && new Date(invite.expires_at) < new Date()) {
      return false;
    }

    return invite.plan_id === plan.id;
  });

  if (!hasInvite) {
    return {
      allowed: false,
      reason: "Esse plano está disponível apenas para pessoas selecionadas.",
    };
  }

  return {
    allowed: true,
  };
}
