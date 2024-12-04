import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/reactTest/", // Base path for GitHub Pages
    server: {
        port: 4000,
        host: "0.0.0.0",
        logLevel: "silent",
        client: {
            logging: "none",
        },
        assetsInclude: ["**/*.ttf", "**/*.png"],
    },
});
