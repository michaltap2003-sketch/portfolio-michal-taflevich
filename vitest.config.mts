import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Support the "@/*" path alias from tsconfig.json.
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
  },
});
