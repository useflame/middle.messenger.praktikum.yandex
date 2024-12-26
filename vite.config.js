import path from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/partials'),
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: 'postcss.config.js',
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
});
