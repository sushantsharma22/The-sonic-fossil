import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensure cross-origin isolation for SharedArrayBuffer
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    target: 'es2020'
  }
});
