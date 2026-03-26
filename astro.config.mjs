import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://arishasmakportfolio.netlify.app',
    base: '/',

    server: {
        port: 3000,
        host: true
    },

    vite: {
        css: {
            devSourcemap: true,
        },
    },
});