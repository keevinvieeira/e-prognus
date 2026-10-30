import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        branding: resolve(import.meta.dirname, 'branding.html'),
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: [
        '**/*.crdownload',
        '**/Marketing Kit/**',
        '**/stitch_pomelli_dynamic_redesign/**',
        '**/.git/**',
        '**/.wrangler/**',
        '**/dist/**',
        '**/node_modules/**'
      ]
    }
  }
};
