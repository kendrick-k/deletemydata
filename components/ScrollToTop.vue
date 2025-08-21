<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-90 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-90 translate-y-4"
  >
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      :class="{ 'animate-bounce': showButton }"
      aria-label="Retour en haut de la page"
    >
      <!-- Icône flèche vers le haut -->
      <svg 
        class="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      
      <!-- Tooltip -->
      <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div class="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Retour en haut
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const showButton = ref(false)

// Fonction pour scroll vers le haut avec smooth scroll
const scrollToTop = () => {
  if (process.client) {
    // Vérifier si le smooth scroll est supporté
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Fallback pour les navigateurs qui ne supportent pas le smooth scroll
      const scrollToTop = () => {
        const currentPosition = window.pageYOffset
        if (currentPosition > 0) {
          window.requestAnimationFrame(scrollToTop)
          window.scrollTo(0, currentPosition - currentPosition / 8)
        }
      }
      scrollToTop()
    }
  }
}

// Observer le scroll pour afficher/masquer le bouton
onMounted(() => {
  if (process.client) {
    const handleScroll = () => {
      showButton.value = window.scrollY > 300
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Nettoyer l'écouteur lors de la destruction
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
})
</script>

<style scoped>
/* Animation personnalisée pour le bouton */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style> 