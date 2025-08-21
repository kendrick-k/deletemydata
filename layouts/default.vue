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
</script> 