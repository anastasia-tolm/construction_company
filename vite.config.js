import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  publicDir: 'public',
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages', 'about', 'index.html'),
      },
    },
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});