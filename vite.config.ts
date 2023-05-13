import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://marcin10lw.github.io/tic-tac-toe/",
  plugins: [react()],
});
