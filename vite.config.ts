import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/Smart-Attacker/",
  plugins: [
    react(),
    tailwindcss(),
    // Visualizer akan otomatis terbuka setelah Anda menjalankan 'npm run build'
    visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Strategi memecah library node_modules menjadi file terpisah (vendor)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Opsional: Naikkan batas jika Anda merasa file 600kb-800kb masih aman
    // chunkSizeWarningLimit: 1000, 
  },
});
