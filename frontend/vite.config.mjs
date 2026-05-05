import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ["VITE_", "REACT_APP_"]);

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // Allow JSX inside .js files (existing components use .js with JSX)
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { ".js": "jsx" },
      },
    },

    // Allow legacy `REACT_APP_` env-vars (in addition to default `VITE_`)
    envPrefix: ["VITE_", "REACT_APP_"],

    // Expose REACT_APP_* under `process.env` too, so existing code that
    // references `process.env.REACT_APP_BACKEND_URL` keeps working.
    define: {
      "process.env.REACT_APP_BACKEND_URL": JSON.stringify(
        env.REACT_APP_BACKEND_URL || ""
      ),
      "process.env.NODE_ENV": JSON.stringify(mode),
    },

    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      // Allow access from the public preview hostname (and any other host)
      allowedHosts: true,
      // HMR through the kubernetes ingress (https on :443)
      hmr: {
        clientPort: 443,
        protocol: "wss",
      },
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/build/**",
          "**/dist/**",
        ],
      },
    },

    preview: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      allowedHosts: true,
    },

    build: {
      outDir: "dist",
      sourcemap: false,
      // Keep chunking sensible (don't enforce inline) and avoid CRA-style hashes
      // that depend on react-scripts.
      target: "es2018",
    },
  };
});
