import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://arishasmakportfolio.netlify.app',
    base: '/',

    integrations: [sitemap()],

    image: {
        domains: ['cdn.jsdelivr.net', 'images.unsplash.com']
    },

    server: {
        port: 3000,
        host: true
    },

    vite: {
        css: {
            devSourcemap: true,
        }
    }
});