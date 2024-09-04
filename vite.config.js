import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Next Level React/",
  plugins: [react()],
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
