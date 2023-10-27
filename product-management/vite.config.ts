import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all'), viteCompression()],
  esbuild: {
    drop: config.mode === 'production' ? ['console', 'debugger'] : []
  },
  build: {
    sourcemap: true // <-- Enable sourcemaps in Vite to fix Missing source maps for large first-party JavaScript
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis' //<-- AWS SDK
      }
    }
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser' // <-- Fix from above
    }
  }
  // server: { https: true }
}));
