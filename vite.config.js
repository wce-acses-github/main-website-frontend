import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
    // Load environment variables based on the mode (e.g., development, production)
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [react()],
        server: {
            proxy: {
                "/api": {
                    target: env.VITE_BACKEND_URL,  // Use env.VITE_BACKEND_URL here
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    });
};