import { ReactNode } from "react";
import { Redirect } from "wouter";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loading, isAuthenticated } = useSupabaseAuth();

  if (loading) {
    return <div className="p-8">Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
}
