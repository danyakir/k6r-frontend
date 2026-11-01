import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteEnvs } from "vite-envs";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteEnvs({
      declarationFile: ".env",
    }),
    react(),
    tsconfigPaths(),
  ],
});
