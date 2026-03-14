import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import { AppContext, appRouter } from "@repo/core";

const createContext = ({
  req: _req,
  res: _res,
}: trpcExpress.CreateExpressContextOptions): AppContext => ({
  test: 1,
});

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(4000, () => console.log("listening on :4000"));
