import { initTRPC } from "@trpc/server";

export interface AppContext {
  test: number;
}

const t = initTRPC.context<AppContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
