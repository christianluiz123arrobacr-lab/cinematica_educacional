import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import { supabaseAdmin } from "./supabaseAdmin";

export type AuthUser = {
  id: string;
  email: string | null;
  role: "admin" | "student";
};

export type TrpcContext = {
  req: NodeHTTPCreateContextFnOptions["req"];
  res: NodeHTTPCreateContextFnOptions["res"];
  user: AuthUser | null;
};

export async function createContext(
  opts: NodeHTTPCreateContextFnOptions
): Promise<TrpcContext> {
  let user: AuthUser | null = null;

  try {
    const authHeader = opts.req.headers.authorization;
    const token =
      typeof authHeader === "string" && authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;

    if (token) {
      const { data, error } = await supabaseAdmin.auth.getUser(token);

      if (!error && data.user) {
        const email = data.user.email ?? null;

        const { data: profile, error: profileError } = await supabaseAdmin
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .maybeSingle();

        if (profileError) {
          console.error("[createContext] erro ao buscar profile:", profileError);
        }

        user = {
          id: data.user.id,
          email,
          role: profile?.role === "admin" ? "admin" : "student",
        };
      }
    }
  } catch (error) {
    console.error("[createContext] erro ao autenticar usuário:", error);
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
