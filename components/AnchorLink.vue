<template>
  <a
    :href="href"
    @click="handleClick"
    class="anchor-link"
    :class="customClass"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string
  customClass?: string
  offset?: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  customClass: '',
  offset: 0,
  duration: 800
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.href.startsWith('#')) {
    event.preventDefault()
    
    const targetId = props.href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Calculer la position avec l'offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - props.offset
      
      // Utiliser le smooth scroll natif si supporté
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      } else {
        // Fallback avec animation personnalisée
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        let start: number | null = null
        
        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const run = easeInOutCubic(timeElapsed, startPosition, distance, props.duration)
          window.scrollTo(0, run)
          
          if (timeElapsed < props.duration) {
            requestAnimationFrame(animation)
          }
        }
        
        requestAnimationFrame(animation)
      }
      
      // Émettre l'événement click
      emit('click', event)
      
      // Mettre à jour l'URL sans recharger la page
      if (process.client) {
        window.history.pushState(null, '', props.href)
      }
    }
  }
}

// Fonction d'easing pour une animation fluide
function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1) return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
}
</script>

<style scoped>
.anchor-link {
  @apply transition-all duration-300 ease-in-out;
}

.anchor-link:hover {
  @apply text-blue-600;
}

/* Animation au survol */
.anchor-link::after {
  content: '';
  @apply block w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out;
}

.anchor-link:hover::after {
  @apply w-full;
}
</style> 