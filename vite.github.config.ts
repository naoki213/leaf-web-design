import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: 'github',
  base: '/leaf-web-design/',
  publicDir: '../public',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: '../gh-dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./github/index.html', import.meta.url)),
        contact: fileURLToPath(new URL('./github/contact/index.html', import.meta.url)),
      },
    },
  },
});
