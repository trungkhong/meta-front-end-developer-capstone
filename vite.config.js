import { defineConfig, transformWithEsbuild } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    svgr(),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
