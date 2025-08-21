import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          supabase: ['@nuxtjs/supabase']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['@nuxtjs/supabase']
  }
}) 