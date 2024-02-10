import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-todo-app/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
