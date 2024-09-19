import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: process.env.VITE_BACKEND_URL, 
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
