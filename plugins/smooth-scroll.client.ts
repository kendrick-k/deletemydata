export default defineNuxtPlugin(() => {
  if (process.client) {
    // Attendre que le DOM soit chargé
    onMounted(() => {
      // Vérifier si le smooth scroll CSS est supporté
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style
      
      if (!isSmoothScrollSupported) {
        // Fallback pour les navigateurs qui ne supportent pas le smooth scroll CSS
        console.log('🔧 Smooth scroll CSS non supporté, utilisation du fallback JavaScript')
        
        // Gérer tous les liens d'ancres
        const handleAnchorClick = (e: Event) => {
          const target = e.target as HTMLElement
          const link = target.closest('a[href^="#"]') as HTMLAnchorElement
          
          if (link) {
            const href = link.getAttribute('href')
            if (href && href !== '#') {
              e.preventDefault()
              
              // Trouver l'élément cible
              const targetElement = document.querySelector(href)
              if (targetElement) {
                // Calculer la position de l'élément
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
                const startPosition = window.pageYOffset
                const distance = targetPosition - startPosition
                const duration = 800 // Durée en millisecondes
                let start: number | null = null
                
                // Animation de scroll personnalisée
                const animation = (currentTime: number) => {
                  if (start === null) start = currentTime
                  const timeElapsed = currentTime - start
                  const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
                  window.scrollTo(0, run)
                  
                  if (timeElapsed < duration) {
                    requestAnimationFrame(animation)
                  }
                }
                
                requestAnimationFrame(animation)
              }
            }
          }
        }
        
        // Ajouter l'écouteur d'événements
        document.addEventListener('click', handleAnchorClick)
        
        // Nettoyer lors de la destruction du composant
        onUnmounted(() => {
          document.removeEventListener('click', handleAnchorClick)
        })
      } else {
        console.log('✅ Smooth scroll CSS supporté')
      }
    })
  }
})

// Fonction d'easing pour une animation fluide
function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1) return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
} 