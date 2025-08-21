<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ title }}</h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            {{ missionText }}
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ missionText2 }}
          </p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ visionTitle }}</h3>
            <p class="text-gray-600">
              {{ visionText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Props personnalisables
interface Props {
  title?: string
  missionText?: string
  missionText2?: string
  visionTitle?: string
  visionText?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Notre Mission',
  missionText: 'Dans un monde où nos données personnelles sont collectées, analysées et monétisées sans notre consentement éclairé, nous croyons que chaque individu a le droit de reprendre le contrôle de sa vie numérique.',
  missionText2: 'DeleteMyData démocratise l\'exercice des droits RGPD en rendant accessible à tous la suppression de ses données personnelles des entreprises qui les détiennent.',
  visionTitle: 'Notre Vision',
  visionText: 'Un internet où la vie privée est respectée par défaut, où chaque utilisateur peut facilement exercer ses droits numériques, et où les entreprises sont tenues responsables de la gestion des données personnelles.'
})
</script> 