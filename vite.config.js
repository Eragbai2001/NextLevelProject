import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // Root directory for your project
  build: {
    outDir: "dist", // Output directory for the build
  },
  server: {
    open: true, // Automatically open the app in the browser during local development
  },
});
