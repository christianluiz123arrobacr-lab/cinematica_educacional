import { ReactNode, useEffect, useState } from "react";
import { Link } from "wouter";
import { Lock, Loader2, ShieldCheck, Sparkles } from "lucide-react";

import { supabase } from "@/lib/supabase";

type SubscriptionGuardProps = {
  children: ReactNode;
  allowAdmin?: boolean;
};

type AccessStatus = "loading" | "allowed" | "blocked" | "error";

export default function SubscriptionGuard({
  children,
  allowAdmin = true,
}: SubscriptionGuardProps) {
  const [status, setStatus] = useState<AccessStatus>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkAccess() {
      try {
        setStatus("loading");
        setMessage("");

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          console.error("Erro ao buscar usuário:", userError);
          setStatus("error");
          setMessage("Não foi possível verificar seu login.");
          return;
        }

        if (!user) {
          setStatus("blocked");
          setMessage("Você precisa estar logado para acessar esta área.");
          return;
        }

        if (allowAdmin) {
          const { data: isAdmin, error: adminError } = await supabase.rpc(
            "is_current_user_admin",
            {
              allowed_roles: ["admin", "editor"],
            }
          );

          if (adminError) {
            console.warn("Não foi possível verificar admin:", adminError);
          }

          if (isAdmin === true) {
            setStatus("allowed");
            return;
          }
        }

        const { data: hasSubscription, error: subscriptionError } =
          await supabase.rpc("user_has_active_subscription", {
            target_user_id: user.id,
          });

        if (subscriptionError) {
          console.error(
            "Erro ao verificar assinatura ativa:",
            subscriptionError
          );
          setStatus("error");
          setMessage("Não foi possível verificar sua assinatura.");
          return;
        }

        if (hasSubscription === true) {
          setStatus("allowed");
          return;
        }

        setStatus("blocked");
        setMessage("Você precisa de uma assinatura ativa para acessar esta área.");
      } catch (error) {
        console.error("Erro inesperado ao verificar acesso:", error);
        setStatus("error");
        setMessage("Ocorreu um erro inesperado ao verificar seu acesso.");
      }
    }

    checkAccess();
  }, [allowAdmin]);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-xl">
            <Loader2 className="h-5 w-5 animate-spin text-cyan-200" />
            <span className="text-sm text-slate-200">
              Verificando acesso...
            </span>
          </div>
        </section>
      </main>
    );
  }

  if (status === "allowed") {
    return <>{children}</>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
            {status === "error" ? (
              <ShieldCheck className="h-8 w-8" />
            ) : (
              <Lock className="h-8 w-8" />
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Área exclusiva
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
            Acesso restrito
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            {message ||
              "Esta área faz parte da plataforma paga. Escolha um plano para liberar o acesso."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/planos">
              <a className="rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                Ver planos
              </a>
            </Link>

            <Link href="/login">
              <a className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Fazer login
              </a>
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Se você já pagou, aguarde a confirmação ou fale com o suporte.
          </p>
        </div>
      </section>
    </main>
  );
}
