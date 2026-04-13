import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Card } from "@/components/ui/card";

type AdminGuardProps = {
  children: ReactNode;
};

export default function AdminGuard({ children }: AdminGuardProps) {
  const { user, loading } = useSupabaseAuth();
  const [, setLocation] = useLocation();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkAdmin() {
      if (loading) return;

      if (!user?.id) {
        setLocation("/login");
        return;
      }

      const { data, error } = await supabase
        .from("admin_users")
        .select("role")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Erro ao verificar admin:", error);
        setIsAdmin(false);
        return;
      }

      setIsAdmin(!!data && (data.role === "admin" || data.role === "editor"));
    }

    checkAdmin();
  }, [user?.id, loading, setLocation]);

  if (loading || isAdmin === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <Card className="p-8 w-full max-w-md text-center">
          <p className="text-slate-600">Verificando acesso administrativo...</p>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <Card className="p-8 w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Acesso negado</h2>
          <p className="text-slate-600">
            Você não tem permissão para acessar a área administrativa.
          </p>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
