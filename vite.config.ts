import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portifolio-web/', // Caminho para o repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
