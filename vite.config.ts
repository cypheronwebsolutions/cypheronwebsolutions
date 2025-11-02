import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // Important for GitHub Pages: assets and routes will live under /<repo>/
    base: isProd ? "/cypheronwebsolutions/" : "/",

    server: {
      host: "::",
      port: 8080,
    },

    // Optional: match preview port to dev, handy for local dist preview
    preview: {
      port: 8080,
    },

    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // Optional but useful: sourcemaps for debugging the built site
    build: {
      sourcemap: true,
    },
  };
});