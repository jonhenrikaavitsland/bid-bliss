import { defineConfig } from 'vite';
import svgLoader from 'vite-plugin-svg-loader';

export default defineConfig({
  plugins: [svgLoader()],
  esbuild: {
    target: 'esnext', // Specifies the target environment for ESBuild
  },
});
