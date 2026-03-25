import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://ArishaMak.github.io/',
    base: '/portfolio',

    server: {
        port: 3000,
        host: true
    }
});