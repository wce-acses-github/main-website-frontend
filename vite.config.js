import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy:
            process.env.NODE_ENV === "development"
                ? {
                      "/api": {
                          target: "https://your-backend-url-on-render.com",
                          changeOrigin: true,
                          secure: false,
                      },
                  }
                : {},
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
