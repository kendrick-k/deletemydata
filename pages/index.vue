<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- How It Works -->
    <HowItWorksSection />

    <!-- Features -->
    <FeaturesSection />

    <!-- Generator Section -->
    <GeneratorSection />

    <!-- Directory Section -->
    <DirectorySection />

    <!-- Pricing -->
    <PricingSection />

    <!-- Pricing Modal -->
    <PricingModal />

    <!-- CTA Section -->
    <CtaSection />
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />

  </div>
</template>

<script setup>
// Meta tags pour SEO
useHead({
  title: 'DeleteMyData.online - Effacez vos données. Vraiment.',
  meta: [
    {
      name: 'description',
      content: 'Générez, envoyez et suivez vos demandes RGPD / Delete Act vers des centaines d\'entreprises en un clic. Conforme UE, suivi horodaté, relances automatiques.'
    }
  ],
  // Preline CSS et JavaScript
  link: [
    {
      rel: 'stylesheet',
      href: 'https://preline.co/assets/preline.css'
    }
  ],
  script: [
    {
      src: 'https://preline.co/assets/preline.js',
      onload: 'if(typeof HSStaticMethods !== "undefined") HSStaticMethods.autoInit()'
    }
  ]
})


</script> 