<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <span class="text-xl font-bold">DeleteMyData</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Reprenez le contrôle de vos données personnelles. Générez, envoyez et suivez vos demandes RGPD / Delete Act en un clic.
          </p>
          
          <!-- CTA Button -->
          <div class="mb-4">
            <a 
              href="/generator?company=Google&domain=google.com&dpo=dpo@google.com&privacy=privacy@google.com&legal=legal@google.com"
              class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              Essayer le générateur RGPD
            </a>
          </div>
          
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Produit</h3>
          <ul class="space-y-2">
            <li>
              <a href="/generator" class="text-gray-300 hover:text-white transition-colors">
                Générateur RGPD
              </a>
            </li>
            <li>
              <a href="/directory" class="text-gray-300 hover:text-white transition-colors">
                Annuaire Contacts
              </a>
            </li>
            <li>
              <a href="/auto-fill-demo" class="text-gray-300 hover:text-white transition-colors">
                Démo Auto-remplissage
              </a>
            </li>
            <li>
              <a href="/#how-it-works" class="text-gray-300 hover:text-white transition-colors">
                Comment ça marche
              </a>
            </li>
            <li>
              <a href="/#pricing" class="text-gray-300 hover:text-white transition-colors">
                Tarifs
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Entreprise</h3>
          <ul class="space-y-2">
            <li>
              <a href="/about" class="text-gray-300 hover:text-white transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="/blog" class="text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" class="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/support" class="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        <!-- Account Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Compte</h3>
          <ul class="space-y-2">
            <li>
              <a 
                :href="props.disabled ? '#' : '/login'" 
                :class="[
                  'transition-colors',
                  props.disabled 
                    ? 'text-gray-500 cursor-not-allowed pointer-events-none' 
                    : 'text-gray-300 hover:text-white'
                ]"
                @click="props.disabled ? $event.preventDefault() : null"
              >
                Se connecter
              </a>
            </li>
            <li>
              <a 
                :href="props.disabled ? '#' : '/signup'" 
                :class="[
                  'transition-colors',
                  props.disabled 
                    ? 'text-gray-500 cursor-not-allowed pointer-events-none' 
                    : 'text-gray-300 hover:text-white'
                ]"
                @click="props.disabled ? $event.preventDefault() : null"
              >
                S'inscrire
              </a>
            </li>
            <li>
              <a 
                :href="props.disabled ? '#' : '/dashboard'" 
                :class="[
                  'transition-colors',
                  props.disabled 
                    ? 'text-gray-500 cursor-not-allowed pointer-events-none' 
                    : 'text-gray-300 hover:text-white'
                ]"
                @click="props.disabled ? $event.preventDefault() : null"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm">
            © 2024 DeleteMyData. Tous droits réservés.
          </div>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="/cookies" class="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Props
interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: true
})
</script> 