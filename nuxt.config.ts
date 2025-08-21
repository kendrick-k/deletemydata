// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],
  
  supabase: {
    redirect: false,
    // Use environment variables with fallbacks
    url: process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
    key: process.env.SUPABASE_ANON_KEY || 'placeholder_key'
  },
  
  runtimeConfig: {
    // Private keys (server-side only)
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    
    // Public keys (available client-side)
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
    }
  },
  
  // Build configuration for Netlify
  nitro: {
    preset: 'netlify-static',
    prerender: {
      routes: ['/']
    }
  },
  
  // Ensure proper build output
  ssr: false,
  
  // Handle missing environment variables gracefully
  experimental: {
    inlineSSRStyles: false
  },
  
  // Vite configuration for production
  vite: {
    build: {
      target: 'esnext'
    },
    optimizeDeps: {
      exclude: ['@nuxtjs/supabase']
    }
  }
  
  // Preline configuration (temporarily disabled)
  // css: [
  //   'preline/dist/preline.css'
  // ],
  
  // Add Preline plugin (temporarily disabled)
  // plugins: [
  //   '~/plugins/preline.client.ts'
  // ]
})
