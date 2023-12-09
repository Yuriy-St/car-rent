import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log('Routes path', path.resolve(__dirname, './', 'src', 'routes'));

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['vite-sample'],
    esbuildOptions: {
      target: 'es2020',
      jsx: 'automatic',
    },
  },
  plugins: [react()],
  base: '/car-rent/',
  server: {
    open: '/index.html',
    port: 5000,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './', 'src'),
    },
  },
});
