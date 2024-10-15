import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@constants': path.resolve(__dirname, './src/constants.ts'),
    },
  },
  plugins: [react(), svgr()],
  base: '/portfolio/',
});
