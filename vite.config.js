import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@headlessui/react", "@heroicons/react/24/outline"],
  },
  server: {
    port: 5173,
    hot: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
