import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { supabaseAdmin } from "./supabaseAdmin";

export type AuthUser = {
  id: string;
  email: string | null;
  role: "admin" | "student";
};

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: AuthUser | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: AuthUser | null = null;

  try {
    const authHeader = opts.req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;

    if (token) {
      const { data, error } = await supabaseAdmin.auth.getUser(token);

      if (!error && data.user) {
        const email = data.user.email ?? null;

        const { data: profile } = await supabaseAdmin
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .maybeSingle();

        user = {
          id: data.user.id,
          email,
          role: profile?.role === "admin" ? "admin" : "student",
        };
      }
    }
  } catch {
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
