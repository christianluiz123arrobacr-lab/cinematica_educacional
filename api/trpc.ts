import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
