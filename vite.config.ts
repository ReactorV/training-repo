import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Fast Refresh (HMR for React) is enabled by default
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    // Enable HMR (Hot Module Replacement)
    hmr: {
      overlay: true, // Show error overlay in the browser
    },
    // Watch for file changes
    watch: {
      usePolling: false, // Set to true if you have issues with file watching
    },
  },
  optimizeDeps: {
    force: true, // Force dependency re-optimization on every start
    esbuildOptions: {
      // Configure esbuild target to match TypeScript config
      target: 'es2020',
    },
    // Explicitly include dependencies to optimize
    include: ['react', 'react-dom', 'react-dom/client', 'lucide-react'],
  },
  build: {
    emptyOutDir: true,
    // Increase chunk size warning limit (the Babel/esbuild deoptimization warning is harmless)
    chunkSizeWarningLimit: 1000,
  },
  // Use a custom cache directory that can be easily cleared
  cacheDir: '.vite-cache',
});

