<template>
  <Transition
    :name="transitionName"
    :mode="transitionMode"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  name?: 'fade' | 'slide' | 'scale' | 'slide-up' | 'slide-down'
  mode?: 'in-out' | 'out-in'
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  name: 'fade',
  mode: 'out-in',
  duration: 300
})

const route = useRoute()

// Nom de la transition basé sur la route et le nom spécifié
const transitionName = computed(() => {
  const routeName = route.name as string
  
  // Transitions spéciales pour certaines pages
  if (routeName === 'index') return 'page-fade'
  if (routeName === 'generator') return 'page-slide'
  if (routeName === 'directory') return 'page-scale'
  if (routeName === 'blog') return 'page-slide-up'
  if (routeName === 'auto-fill-demo') return 'page-slide-down'
  
  // Transition par défaut
  return `page-${props.name}`
})

const transitionMode = computed(() => props.mode)

// Hooks de transition
const onBeforeEnter = (el: Element) => {
  // Préparation avant l'entrée
  if (el instanceof HTMLElement) {
    el.style.willChange = 'opacity, transform'
  }
}

const onEnter = (el: Element, done: () => void) => {
  // Animation d'entrée
  if (el instanceof HTMLElement) {
    // Déclencher l'animation
    requestAnimationFrame(() => {
      el.style.transition = `all ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      el.style.opacity = '1'
      el.style.transform = 'translateY(0) scale(1)'
    })
    
    // Nettoyer après l'animation
    setTimeout(done, props.duration)
  } else {
    done()
  }
}

const onAfterEnter = (el: Element) => {
  // Nettoyage après l'entrée
  if (el instanceof HTMLElement) {
    el.style.willChange = 'auto'
    el.style.transition = ''
  }
}

const onBeforeLeave = (el: Element) => {
  // Préparation avant la sortie
  if (el instanceof HTMLElement) {
    el.style.willChange = 'opacity, transform'
  }
}

const onLeave = (el: Element, done: () => void) => {
  // Animation de sortie
  if (el instanceof HTMLElement) {
    el.style.transition = `all ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
    el.style.opacity = '0'
    el.style.transform = 'translateY(-20px) scale(0.98)'
    
    setTimeout(done, props.duration)
  } else {
    done()
  }
}

const onAfterLeave = (el: Element) => {
  // Nettoyage après la sortie
  if (el instanceof HTMLElement) {
    el.style.willChange = 'auto'
    el.style.transition = ''
  }
}
</script>

<style scoped>
/* Transitions de base */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

/* Transition slide */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Transition scale */
.page-scale-enter-active,
.page-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.page-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Transition slide-up */
.page-slide-up-enter-active,
.page-slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.page-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

/* Transition slide-down */
.page-slide-down-enter-active,
.page-slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-down-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}

.page-slide-down-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style> 