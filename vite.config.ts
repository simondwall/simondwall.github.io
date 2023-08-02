import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import plainText from 'vite-plugin-plain-text';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // "issue/01": resolve(__dirname, 'issue/01/index.html'),
                // "issue/02": resolve(__dirname, 'issue/02/index.html'),
            },
        },
    },
    plugins: [
        svelte(),
        plainText(
            [/\.glsl$/],
            { namedExport: false, dtsAutoGen: true, distAutoClean: true }
        )
    ],
});
