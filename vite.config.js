import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInlineLimit: 0, // Set this to 0 to prevent all images from being inlined
  },
  esbuild: {
    target: 'esnext',
  },
});
