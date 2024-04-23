import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components'),
      "@api": path.resolve(__dirname, 'src/api'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@context": path.resolve(__dirname, 'src/context'),
      "@modals": path.resolve(__dirname, 'src/modals'),
      "@screens": path.resolve(__dirname, 'src/screens'),
    },
  },
})
