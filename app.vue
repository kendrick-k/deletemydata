<template>
  <PageTransition>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </PageTransition>
</template>

<script setup lang="ts">
// Utilisation du composant PageTransition pour les transitions de page
</script>

<style>
/* Styles globaux pour les transitions */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

/* Animation de chargement de page */
.page-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
  z-index: 9999;
  animation: page-loading 2s ease-in-out infinite;
}

@keyframes page-loading {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
