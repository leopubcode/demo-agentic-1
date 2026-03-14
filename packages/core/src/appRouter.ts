import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const UserListSchema = z.object({
  name: z.string(),
});

export const appRouter = router({
  userList: publicProcedure
    .input(UserListSchema)
    .query(async ({ input, ctx }) => {
      const users = [{ id: ctx.test, name: input.name }];

      return users;
    }),
});

export type AppRouter = typeof appRouter;
