<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        À propos de <span class="gradient-text">DeleteMyData</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Nous aidons les individus à reprendre le contrôle de leurs données personnelles 
        en simplifiant le processus de suppression RGPD et Delete Act.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Props personnalisables
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'À propos de DeleteMyData',
  subtitle: 'Nous aidons les individus à reprendre le contrôle de leurs données personnelles en simplifiant le processus de suppression RGPD et Delete Act.'
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 