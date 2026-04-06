import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { supabaseAdmin } from "./_core/supabaseAdmin";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,

  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });

      return {
        success: true,
      } as const;
    }),
  }),

  admin: router({
    createStudent: publicProcedure
      .input(
        z.object({
          nome: z.string().min(2, "Nome muito curto"),
          email: z.string().email("E-mail inválido"),
          senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado.",
          });
        }

        if (ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Apenas administradores podem criar alunos.",
          });
        }

        const { data, error } = await supabaseAdmin.auth.admin.createUser({
          email: input.email,
          password: input.senha,
          email_confirm: true,
          user_metadata: {
            nome: input.nome,
          },
        });

        if (error || !data.user) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: error?.message ?? "Erro ao criar usuário no Supabase Auth.",
          });
        }

        const { error: profileError } = await supabaseAdmin
          .from("profiles")
          .insert({
            id: data.user.id,
            nome: input.nome,
            email: input.email,
            role: "student",
            ativo: true,
          });

        if (profileError) {
          // tenta limpar o usuário criado no auth se falhar ao criar profile
          await supabaseAdmin.auth.admin.deleteUser(data.user.id);

          throw new TRPCError({
            code: "BAD_REQUEST",
            message:
              profileError.message ?? "Erro ao criar perfil do aluno.",
          });
        }

        return {
          success: true,
          userId: data.user.id,
        } as const;
      }),
  }),

  // AI Solver Router
  ai: router({
    solvePhysics: publicProcedure
      .input(
        z.object({
          text: z.string().optional(),
          imageBase64: z.string().optional(),
          imageMimeType: z.string().optional(),
          systemPrompt: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { text, imageBase64, imageMimeType, systemPrompt } = input;

        if (!text && !imageBase64) {
          throw new Error("Forneça um texto ou uma imagem da questão.");
        }

        const defaultSystemPrompt =
          "Você é um professor de elite e especialista em competições científicas (ITA, IME, IMO, IPhO). Sua missão é resolver problemas complexos de forma EXTREMAMENTE EXPLICATIVA e DIDÁTICA. Para cada passo da resolução, explique o 'porquê' físico ou matemático, os conceitos fundamentais envolvidos e a estratégia adotada. Não apenas mostre o cálculo, mas ensine o raciocínio. OBRIGATORIAMENTE, use '$$' para equações em bloco e '$' para matemática inline. Toda variável, unidade ou fórmula deve estar em LaTeX. A resolução deve ser profunda, clara e chegar ao resultado final com uma conclusão pedagógica.";

        const messages: any[] = [
          {
            role: "system",
            content: systemPrompt || defaultSystemPrompt,
          },
        ];

        const userContent: any[] = [];

        if (text) {
          userContent.push({ type: "text", text: text });
        }

        if (imageBase64 && imageMimeType) {
          userContent.push({
            type: "image_url",
            image_url: {
              url: `data:${imageMimeType};base64,${imageBase64}`,
            },
          });
        }

        messages.push({ role: "user", content: userContent });

        const response = await invokeLLM({
          messages,
        });

        const content = response.choices[0]?.message?.content;
        const resultText =
          typeof content === "string" ? content : "Erro ao processar.";

        return { result: resultText };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
