import { createHTTPHandler } from "@trpc/server/adapters/node-http";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";

const handler = createHTTPHandler({
  router: appRouter,
  createContext,
});

export default function vercelTrpcHandler(req: any, res: any) {
  return handler(req, res);
}
