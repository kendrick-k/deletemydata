import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const initPreline = async () => {
      try {
        // Import Preline dynamiquement
        await import('preline/dist/preline.js')
        
        if (typeof window !== 'undefined' && (window as any).HSStaticMethods) {
          // Initialiser tous les composants Preline
          (window as any).HSStaticMethods.autoInit()
          
          // Re-initialiser après les changements de route
          if (nuxtApp.$router && typeof nuxtApp.$router.afterEach === 'function') {
            (nuxtApp.$router as any).afterEach(() => {
              // Petit délai pour s'assurer que le DOM est mis à jour
              setTimeout(() => {
                if ((window as any).HSStaticMethods) {
                  (window as any).HSStaticMethods.autoInit()
                }
              }, 100)
            })
          }
          
          console.log('✅ Preline UI initialisé')
        }
      } catch (error) {
        console.warn('⚠️ Erreur lors du chargement de Preline:', error)
      }
    }

    // Initialiser dès que possible
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPreline)
    } else {
      initPreline()
    }
  }
})