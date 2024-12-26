import handlebars from 'vite-plugin-handlebars';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
