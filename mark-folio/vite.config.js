import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        base: '/mark-folio/',
        outDir: 'dist'
    },
});
