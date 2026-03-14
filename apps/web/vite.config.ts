import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // @ts-expect-error TODO some issue with latest vite8, wait a week and try again
  plugins: [react(), tailwindcss()],
});
