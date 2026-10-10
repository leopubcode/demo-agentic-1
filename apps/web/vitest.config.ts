import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["src/**/__tests__/**/*.test.{ts,tsx}"],
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
