import { describe, it, expect, vi } from "vitest";
import { appRouter } from "./routers";
import { describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

vi.mock("./_core/supabaseAdmin", () => ({
  supabaseAdmin: {},
}));

vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [
      {
        message: {
          content:
            "A velocidade média é calculada como: $v = \\frac{\\Delta s}{\\Delta t}$",
        },
      },
    ],
  }),
}));

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: "sample-user-id",
      email: "sample@example.com",
      role: "student",
    },
    req: {
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("ai.solvePhysics", () => {
  it("should reject when both text and image are missing", async () => {
    const caller = appRouter.createCaller({} as any);
  it("rejects unauthenticated users", async () => {
    const { appRouter } = await import("./routers");
    const caller = appRouter.createCaller({
      ...createAuthContext(),
      user: null,
    });

    try {
      await caller.ai.solvePhysics({
    await expect(
      caller.ai.solvePhysics({
        text: "Um carro percorre 100km em 2h, qual sua velocidade média?",
      })
    ).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("rejects when both text and image are missing", async () => {
    const { appRouter } = await import("./routers");
    const caller = appRouter.createCaller(createAuthContext());

    await expect(
      caller.ai.solvePhysics({
        text: undefined,
        imageBase64: undefined,
        imageMimeType: undefined,
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Forneça um texto ou uma imagem");
    }
      })
    ).rejects.toThrow("Forneça um texto ou uma imagem");
  });

  it("should accept text input", async () => {
    const caller = appRouter.createCaller({} as any);

    // Mock the invokeLLM to avoid actual API calls
    vi.mock("./_core/llm", () => ({
      invokeLLM: vi.fn().mockResolvedValue({
        choices: [
          {
            message: {
              content:
                "A velocidade média é calculada como: $v = \\frac{\\Delta s}{\\Delta t} = \\frac{100 \\text{ km}}{2 \\text{ h}} = 50 \\text{ km/h}$",
            },
          },
        ],
      }),
    }));
  it("accepts authenticated text input", async () => {
    const { appRouter } = await import("./routers");
    const caller = appRouter.createCaller(createAuthContext());

    const result = await caller.ai.solvePhysics({
      text: "Um carro percorre 100km em 2h, qual sua velocidade média?",
      imageBase64: undefined,
      imageMimeType: undefined,
      mode: "detailed",
    });

    expect(result).toHaveProperty("result");
    expect(typeof result.result).toBe("string");
  });

  it("should handle image input with base64 encoding", async () => {
    const caller = appRouter.createCaller({} as any);

    const mockBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  it("accepts supported image input with base64 encoding", async () => {
    const { appRouter } = await import("./routers");
    const caller = appRouter.createCaller(createAuthContext());
    const mockBase64 =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkM9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    try {
      const result = await caller.ai.solvePhysics({
        text: "Resolva este problema",
        imageBase64: mockBase64,
        imageMimeType: "image/png",
      });
    const result = await caller.ai.solvePhysics({
      text: "Resolva este problema",
      imageBase64: mockBase64,
      imageMimeType: "image/png",
      mode: "calculations",
    });

      expect(result).toHaveProperty("result");
      expect(typeof result.result).toBe("string");
    } catch (error: any) {
      // Expected to fail due to mock LLM not being set up
      // In production, this would call the actual LLM
      expect(error).toBeDefined();
    }
    expect(result).toHaveProperty("result");
    expect(typeof result.result).toBe("string");
  });

  it("should return a string result", async () => {
    const caller = appRouter.createCaller({} as any);
  it("rejects unsupported image MIME types", async () => {
    const { appRouter } = await import("./routers");
    const caller = appRouter.createCaller(createAuthContext());

    try {
      const result = await caller.ai.solvePhysics({
        text: "Calcule a aceleração de um objeto com força de 10N e massa de 2kg.",
        imageBase64: undefined,
        imageMimeType: undefined,
      });

      expect(result).toHaveProperty("result");
      expect(typeof result.result).toBe("string");
      expect(result.result.length).toBeGreaterThan(0);
    } catch (error: any) {
      // Expected in test environment without real LLM
      expect(error).toBeDefined();
    }
    await expect(
      caller.ai.solvePhysics({
        text: "Resolva este problema",
        imageBase64: "abcd",
        imageMimeType: "image/gif" as never,
      })
    ).rejects.toThrow();
  });
});
