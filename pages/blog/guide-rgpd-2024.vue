<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-blue-100 text-blue-800">
            Guide
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Guide complet RGPD 2024 : Vos droits et obligations
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="getTeamAvatar('Sophie Martin')" 
              :alt="'Sophie Martin'"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">Sophie Martin</p>
              <p class="text-gray-600">Experte RGPD</p>
              <p class="text-sm text-gray-500">15 janvier 2024</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="getBlogHeroUrl('Guide')" 
            :alt="'Guide RGPD 2024'"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p class="text-lg text-blue-800 font-medium">
            Découvrez tout ce que vous devez savoir sur le RGPD en 2024. Nous vous expliquons vos droits, les obligations des entreprises et comment exercer vos droits à la suppression des données.
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <h2>Qu'est-ce que le RGPD ?</h2>
          <p>
            Le Règlement Général sur la Protection des Données (RGPD) est un texte de référence européen qui encadre le traitement des données personnelles. Entré en vigueur le 25 mai 2018, il renforce et unifie la protection des données des citoyens de l'Union européenne.
          </p>

          <h2>Vos droits fondamentaux</h2>
          <p>En tant que citoyen européen, vous disposez de plusieurs droits essentiels :</p>
          
          <h3>1. Droit d'information</h3>
          <p>Les entreprises doivent vous informer clairement de :</p>
          <ul>
            <li>L'identité du responsable du traitement</li>
            <li>Les finalités du traitement</li>
            <li>La base légale du traitement</li>
            <li>La durée de conservation des données</li>
            <li>Vos droits et comment les exercer</li>
          </ul>

          <h3>2. Droit d'accès</h3>
          <p>Vous pouvez demander à une entreprise de vous confirmer si elle traite vos données personnelles et, le cas échéant, d'accéder à ces données.</p>

          <h3>3. Droit de rectification</h3>
          <p>Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant.</p>

          <h3>4. Droit à l'effacement (droit à l'oubli)</h3>
          <p>Vous pouvez demander la suppression de vos données personnelles dans certaines situations, notamment :</p>
          <ul>
            <li>Quand les données ne sont plus nécessaires</li>
            <li>Quand vous retirez votre consentement</li>
            <li>Quand le traitement est illicite</li>
            <li>Pour respecter une obligation légale</li>
          </ul>

          <h3>5. Droit à la limitation du traitement</h3>
          <p>Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.</p>

          <h3>6. Droit à la portabilité</h3>
          <p>Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable de traitement.</p>

          <h3>7. Droit d'opposition</h3>
          <p>Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.</p>

          <h2>Obligations des entreprises</h2>
          <p>Les entreprises qui traitent vos données personnelles ont plusieurs obligations :</p>

          <h3>Principes de traitement</h3>
          <ul>
            <li><strong>Licéité</strong> : Le traitement doit avoir une base légale</li>
            <li><strong>Loyauté</strong> : Les données doivent être collectées de manière transparente</li>
            <li><strong>Minimisation</strong> : Seules les données nécessaires doivent être collectées</li>
            <li><strong>Exactitude</strong> : Les données doivent être exactes et à jour</li>
            <li><strong>Limitation de la conservation</strong> : Les données ne doivent pas être conservées plus longtemps que nécessaire</li>
            <li><strong>Sécurité</strong> : Les données doivent être protégées</li>
          </ul>

          <h3>Mesures de sécurité</h3>
          <p>Les entreprises doivent mettre en place des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
          <ul>
            <li>Chiffrement des données</li>
            <li>Authentification forte</li>
            <li>Gestion des accès</li>
            <li>Sauvegarde sécurisée</li>
            <li>Formation du personnel</li>
          </ul>

          <h2>Comment exercer vos droits ?</h2>
          <p>Pour exercer vos droits RGPD, vous devez :</p>
          <ol>
            <li><strong>Identifier l'entreprise</strong> qui traite vos données</li>
            <li><strong>Rédiger une demande écrite</strong> précisant vos droits</li>
            <li><strong>Fournir une pièce d'identité</strong> pour vérification</li>
            <li><strong>Envoyer votre demande</strong> par email ou courrier</li>
          </ol>

          <h3>Modèle de demande</h3>
          <div class="bg-gray-50 p-4 rounded-lg my-6">
            <p class="font-medium">Exemple de demande de suppression :</p>
            <p class="text-sm mt-2">
              "En vertu de l'article 17 du RGPD, je vous prie de procéder à la suppression de toutes mes données personnelles détenues par votre entreprise. Cette demande s'applique à toutes les données me concernant, y compris mon profil, mon historique d'achat et mes préférences."
            </p>
          </div>

          <h2>Délais de réponse</h2>
          <p>Les entreprises ont l'obligation de répondre à vos demandes dans un délai d'<strong>un mois maximum</strong>. Ce délai peut être prolongé de deux mois supplémentaires si nécessaire, notamment en cas de demandes complexes ou nombreuses.</p>

          <h2>Sanctions en cas de non-respect</h2>
          <p>Les entreprises qui ne respectent pas le RGPD s'exposent à des sanctions importantes :</p>
          <ul>
            <li>Amendes administratives pouvant aller jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial</li>
            <li>Pouvoirs de sanction de la CNIL (Commission Nationale de l'Informatique et des Libertés)</li>
            <li>Atteinte à la réputation de l'entreprise</li>
          </ul>

          <h2>Conseils pratiques</h2>
          <p>Pour mieux protéger vos données personnelles :</p>
          <ul>
            <li>Lisez attentivement les politiques de confidentialité</li>
            <li>Ne donnez votre consentement que si nécessaire</li>
            <li>Utilisez des mots de passe forts et uniques</li>
            <li>Activez l'authentification à deux facteurs</li>
            <li>Surveillez régulièrement vos comptes en ligne</li>
            <li>N'hésitez pas à exercer vos droits RGPD</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Le RGPD vous donne des droits puissants pour contrôler vos données personnelles. En 2024, il est plus important que jamais de connaître et d'exercer ces droits. N'hésitez pas à contacter les entreprises qui traitent vos données pour demander des informations ou exercer vos droits.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Prêt à exercer vos droits RGPD ?
          </h3>
          <p class="text-gray-600 mb-6">
            Utilisez notre générateur gratuit pour créer vos demandes de suppression de données
          </p>
          <a 
            href="/generator"
            class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
          >
            Commencer gratuitement
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Articles similaires -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Articles similaires
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="getBlogThumbnailUrl('Tutoriel')" 
            :alt="'Tutoriel RGPD'"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-green-100 text-green-800">
              Tutoriel
            </span>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Comment rédiger une demande de suppression RGPD
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Guide étape par étape pour rédiger une demande de suppression de données personnelles efficace.
            </p>
            <a href="/blog/comment-rediger-demande-suppression-rgpd" class="text-blue-600 hover:text-blue-500 font-medium">
              Lire l'article →
            </a>
          </div>
        </article>

        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="getBlogThumbnailUrl('Conformité')" 
            :alt="'Conformité RGPD'"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-purple-100 text-purple-800">
              Conformité
            </span>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Les obligations RGPD pour les entreprises
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Tout ce que les entreprises doivent savoir pour être conformes au RGPD.
            </p>
            <a href="/blog/obligations-rgpd-entreprises" class="text-blue-600 hover:text-blue-500 font-medium">
              Lire l'article →
            </a>
          </div>
        </article>

        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="getBlogThumbnailUrl('Sécurité')" 
            :alt="'Sécurité des données'"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-red-100 text-red-800">
              Sécurité
            </span>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Protéger vos données personnelles en ligne
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Conseils pratiques pour sécuriser vos informations personnelles sur internet.
            </p>
            <a href="/blog/proteger-donnees-personnelles-en-ligne" class="text-blue-600 hover:text-blue-500 font-medium">
              Lire l'article →
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTeamAvatar, getBlogHeroUrl, getBlogThumbnailUrl } from '~/utils/unsplash'

// Meta tags pour SEO
useHead({
  title: 'Guide complet RGPD 2024 : Vos droits et obligations - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez tout ce que vous devez savoir sur le RGPD en 2024. Vos droits, les obligations des entreprises et comment exercer vos droits à la suppression des données.'
    }
  ]
})

// Fonction pour formater la date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 