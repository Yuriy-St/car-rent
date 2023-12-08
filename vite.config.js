import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  plugins: [
    react({
      babel: {
        plugins: [
          '@emotion',
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
      },
    }),
  ],
  base: '/car-rent/',
});
