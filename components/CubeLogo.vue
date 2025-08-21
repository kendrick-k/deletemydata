<template>
  <div class="inline-flex items-center justify-center">
    <!-- Logo Cube SVG -->
    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
    </svg>
    <!-- Texte du logo (optionnel) -->
    <span v-if="showText" class="ml-2 text-xl font-bold text-gray-900">
      DeleteMyData
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 32,
  showText: false
})
</script> 