import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct handling of paths
  build: {
    outDir: "dist", // Default output directory
  },
});
