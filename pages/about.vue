<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <AboutHeroSection />
    
    <!-- Mission et Vision -->
    <AboutMissionVisionSection />
    
    <!-- Histoire -->
    <AboutHistorySection />
    
    <!-- Valeurs -->
    <AboutValuesSection />
    
    <!-- Équipe -->
    <!-- <AboutTeamSection /> -->
    
    <!-- CTA Section -->
    <AboutCtaSection />
  </div>
</template>

<script setup lang="ts">
// Import des composants slices
import AboutHeroSection from '~/components/slices/AboutHeroSection.vue'
import AboutMissionVisionSection from '~/components/slices/AboutMissionVisionSection.vue'
import AboutHistorySection from '~/components/slices/AboutHistorySection.vue'
import AboutValuesSection from '~/components/slices/AboutValuesSection.vue'
import AboutTeamSection from '~/components/slices/AboutTeamSection.vue'
import AboutCtaSection from '~/components/slices/AboutCtaSection.vue'

// Meta tags pour SEO
useHead({
  title: 'À propos - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l\'histoire, la mission et l\'équipe de DeleteMyData. Nous aidons les individus à reprendre le contrôle de leurs données personnelles.'
    }
  ]
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