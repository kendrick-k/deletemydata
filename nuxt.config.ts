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
    preset: 'netlify-static'
  },
  
  // Ensure proper build output
  ssr: true,
  
  // Handle missing environment variables gracefully
  experimental: {
    // inlineSSRStyles: false // Propriété invalide supprimée
  },
  
  // Node.js 18 compatibility
  vite: {
    optimizeDeps: {
      exclude: ['@nuxtjs/supabase']
    }
  },

  // Google Analytics configuration (production only)
  app: {
    head: {
      script: [
        // Google Analytics - only in production
        ...(process.env.NODE_ENV === 'production' ? [
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-9FHSG87X4G',
            async: true
          }
        ] : [])
      ]
    }
  },

  // Plugins
  plugins: [
    '~/plugins/gtag.client.ts'
  ],

  // Preline configuration (temporarily disabled)
  // css: [
  //   'preline/dist/preline.css'
  // ],

  // Add Preline plugin (temporarily disabled)
  // plugins: [
  //   '~/plugins/preline.client.ts'
  // ]
})
