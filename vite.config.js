import { defineConfig } from "vite";

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        port: 3001, // Указывает порт, на котором будет работать сервер Vite
        host: "localhost", // Указывает хост, на котором будет работать сервер Vite
        open: true, // Открывает веб-браузер автоматически при запуске сервера
    },

    // отмена минификации при сборке
    build: {
        minify: true,
        rollupOptions: {
            input: {},
        },
    },
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        react(),
    ],
});
