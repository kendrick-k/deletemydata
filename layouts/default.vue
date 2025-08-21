<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Import components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Meta tags et favicon pour toutes les pages
useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/favicon.svg' },
    { rel: 'manifest', href: '/manifest.json' }
  ],
  meta: [
    { name: 'theme-color', content: '#2563eb' },
    { name: 'msapplication-TileColor', content: '#2563eb' }
  ]
})
</script> 