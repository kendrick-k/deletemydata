<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <!-- Catégorie -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            Guide
          </div>
          
          <!-- Titre -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Droit à l'oubli Facebook : Comment faire disparaître vos données
          </h1>
          
          <!-- Extrait -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Facebook stocke des années de votre vie privée. Découvrez comment exercer 
            votre droit à l'oubli et faire supprimer définitivement vos données personnelles.
          </p>
          
          <!-- Métadonnées -->
          <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div class="flex items-center">
              <img 
                :src="article.author.avatar" 
                :alt="article.author.name"
                class="w-8 h-8 rounded-full mr-3"
              />
              <span>{{ article.author.name }}</span>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"/>
              </svg>
              {{ formatDate(article.date) }}
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              10 min de lecture
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Facebook (Meta) collecte et stocke une quantité massive de données personnelles : 
          photos, messages, likes, localisation, contacts, et même votre comportement en ligne. 
          Heureusement, le RGPD vous donne le droit de faire disparaître ces informations.
        </p>

        <h2>Quelles données Facebook collecte sur vous</h2>
        <p>
          Avant de demander la suppression, il est important de comprendre l'étendue 
          des données que Facebook détient :
        </p>
        <ul>
          <li><strong>Profil :</strong> Nom, photo, date de naissance, ville, études, travail</li>
          <li><strong>Contenu :</strong> Posts, photos, vidéos, stories, reels</li>
          <li><strong>Interactions :</strong> Likes, commentaires, partages, réactions</li>
          <li><strong>Messages :</strong> Conversations privées via Messenger</li>
          <li><strong>Localisation :</strong> Lieux visités, déplacements</li>
          <li><strong>Comportement :</strong> Temps passé, pages visitées, publicités cliquées</li>
          <li><strong>Connexions :</strong> Amis, groupes, pages suivies</li>
        </ul>

        <h2>1. Suppression partielle : Nettoyer votre profil</h2>
        <p>
          Commencez par nettoyer manuellement votre profil Facebook :
        </p>
        <ol>
          <li><strong>Photos et vidéos :</strong> Supprimez les contenus embarrassants ou obsolètes</li>
          <li><strong>Posts anciens :</strong> Archivez ou supprimez les publications non désirées</li>
          <li><strong>Informations personnelles :</strong> Modifiez ou supprimez les détails sensibles</li>
          <li><strong>Historique des recherches :</strong> Videz votre historique de recherche</li>
          <li><strong>Likes et réactions :</strong> Supprimez les interactions non désirées</li>
        </ol>

        <h2>2. Désactiver la collecte automatique</h2>
        <p>
          Empêchez Facebook de continuer à collecter vos données :
        </p>
        <ol>
          <li>Allez dans <strong>Paramètres et confidentialité</strong></li>
          <li>Désactivez <strong>Suivi de localisation</strong></li>
          <li>Désactivez <strong>Suivi des applications et sites web</strong></li>
          <li>Désactivez <strong>Personnalisation des annonces</strong></li>
          <li>Limitez <strong>Qui peut voir vos informations</strong></li>
        </ol>

        <h2>3. Télécharger vos données avant suppression</h2>
        <p>
          Avant de demander la suppression complète, téléchargez une copie de vos données :
        </p>
        <ol>
          <li>Allez dans <strong>Paramètres et confidentialité</strong></li>
          <li>Cliquez sur <strong>Vos informations Facebook</strong></li>
          <li>Sélectionnez <strong>Télécharger vos informations</strong></li>
          <li>Choisissez les catégories de données à télécharger</li>
          <li>Cliquez sur <strong>Demander le téléchargement</strong></li>
          <li>Attendez l'email de notification (peut prendre plusieurs heures)</li>
        </ol>

        <h2>4. Demande de suppression RGPD</h2>
        <p>
          Pour une suppression complète et définitive, utilisez vos droits RGPD :
        </p>
        
        <h3>Via le formulaire Facebook</h3>
        <ol>
          <li>Allez sur <a href="https://www.facebook.com/help/contact/2837656031816837" target="_blank" class="text-blue-600 hover:text-blue-700 underline">le formulaire de suppression de compte</a></li>
          <li>Choisissez <strong>Supprimer définitivement mon compte</strong></li>
          <li>Suivez les instructions de confirmation</li>
          <li>Attendez la suppression (peut prendre jusqu'à 90 jours)</li>
        </ol>

        <h3>Via notre générateur RGPD</h3>
        <p>
          Pour une approche plus professionnelle et efficace :
        </p>
        <ol>
          <li>Utilisez notre <a href="/generator" class="text-blue-600 hover:text-blue-700 underline">générateur de demandes RGPD</a></li>
          <li>Sélectionnez "Facebook" dans la liste des entreprises</li>
          <li>Choisissez "Droit à l'oubli" comme type de demande</li>
          <li>Personnalisez votre demande avec vos spécificités</li>
          <li>Générez et envoyez votre demande officielle</li>
        </ol>

        <h2>5. Suppression des données Messenger</h2>
        <p>
          Facebook Messenger stocke séparément vos conversations :
        </p>
        <ol>
          <li>Ouvrez l'application Messenger</li>
          <li>Allez dans <strong>Paramètres</strong></li>
          <li>Sélectionnez <strong>Confidentialité et sécurité</strong></li>
          <li>Cliquez sur <strong>Supprimer les données</strong></li>
          <li>Choisissez les types de données à supprimer</li>
        </ol>

        <h2>6. Suppression des données Instagram</h2>
        <p>
          Instagram étant propriété de Meta, vos données y sont également stockées :
        </p>
        <ol>
          <li>Allez dans <strong>Paramètres Instagram</strong></li>
          <li>Sélectionnez <strong>Sécurité</strong></li>
          <li>Cliquez sur <strong>Demander le téléchargement de vos données</strong></li>
          <li>Demandez également la suppression de votre compte si nécessaire</li>
        </ol>

        <h2>Délais et processus de suppression</h2>
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 class="text-blue-800 font-semibold mb-3">⏱️ Délais légaux</h3>
          <ul class="text-blue-700 space-y-2">
            <li><strong>RGPD :</strong> Facebook doit répondre dans les 30 jours</li>
            <li><strong>Suppression :</strong> Maximum 90 jours pour la suppression complète</li>
            <li><strong>Confirmation :</strong> Vous recevrez un email de confirmation</li>
          </ul>
        </div>

        <h2>Que se passe-t-il après la suppression ?</h2>
        <ul>
          <li><strong>Profil :</strong> Votre compte devient inaccessible</li>
          <li><strong>Contenu :</strong> Posts, photos et vidéos sont supprimés</li>
          <li><strong>Messages :</strong> Conversations privées disparaissent</li>
          <li><strong>Données :</strong> Informations personnelles sont effacées</li>
          <li><strong>Récupération :</strong> Impossible après 30 jours</li>
        </ul>

        <h2>Précautions importantes</h2>
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-yellow-800 font-semibold mb-3">⚠️ Attention</h3>
          <ul class="text-yellow-700 space-y-2">
            <li>La suppression est irréversible après 30 jours</li>
            <li>Sauvegardez vos données importantes avant suppression</li>
            <li>Informez vos contacts de votre départ</li>
            <li>Certaines données peuvent être conservées pour des raisons légales</li>
            <li>Les contenus partagés par d'autres peuvent persister</li>
          </ul>
        </div>

        <h2>Alternatives respectueuses de la vie privée</h2>
        <p>
          Après avoir supprimé Facebook, voici des alternatives plus respectueuses :
        </p>
        <ul>
          <li><strong>Réseaux sociaux :</strong> Mastodon, Diaspora, Minds</li>
          <li><strong>Messagerie :</strong> Signal, Telegram, Element</li>
          <li><strong>Partage de photos :</strong> Pixelfed, PeerTube</li>
          <li><strong>Groupes :</strong> Discord, Slack, forums spécialisés</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Supprimer vos données Facebook est un acte de réappropriation de votre vie privée. 
          En combinant nettoyage manuel, désactivation des collectes et exercice de vos droits RGPD, 
          vous pouvez considérablement réduire l'empreinte numérique que vous laissez sur cette plateforme.
        </p>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 class="text-blue-800 font-semibold mb-3">🚀 Prêt à reprendre le contrôle ?</h3>
          <p class="text-blue-700 mb-4">
            Utilisez notre générateur de demandes RGPD pour exercer votre droit à l'oubli 
            de manière professionnelle et efficace.
          </p>
          <a href="/generator" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Commencer maintenant
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </article>

    <!-- Articles connexes -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Articles connexes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              :src="relatedArticles[0].image" 
              :alt="relatedArticles[0].title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                <NuxtLink :to="`/blog/${relatedArticles[0].slug}`" class="hover:text-blue-600 transition-colors">
                  {{ relatedArticles[0].title }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">{{ relatedArticles[0].excerpt }}</p>
            </div>
          </article>
          
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              :src="relatedArticles[1].image" 
              :alt="relatedArticles[1].title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                <NuxtLink :to="`/blog/${relatedArticles[1].slug}`" class="hover:text-blue-600 transition-colors">
                  {{ relatedArticles[1].title }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">{{ relatedArticles[1].excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Droit à l\'oubli Facebook : Comment faire disparaître vos données - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Guide complet pour exercer votre droit à l\'oubli sur Facebook. Apprenez à supprimer définitivement vos données personnelles et reprenez le contrôle de votre vie privée.'
    },
    {
      name: 'keywords',
      content: 'droit oubli Facebook, supprimer compte Facebook, RGPD, protection données, vie privée, suppression données personnelles'
    }
  ]
})

// Données de l'article
const article = {
  title: 'Droit à l\'oubli Facebook : Comment faire disparaître vos données',
  slug: 'droit-oubli-facebook',
  excerpt: 'Facebook stocke des années de votre vie privée. Découvrez comment exercer votre droit à l\'oubli et faire supprimer définitivement vos données personnelles.',
  content: '',
  category: 'Guide',
  author: {
    name: 'Marie Leroy',
    role: 'Experte en protection des données',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80'
  },
  date: '2024-01-20',
  image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop&q=80'
}

// Articles connexes
const relatedArticles = [
  {
    slug: 'supprimer-donnees-google',
    title: 'Comment supprimer vos données Google en 2024',
    excerpt: 'Guide complet pour reprendre le contrôle de vos données personnelles stockées par Google.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop&q=80'
  },
  {
    slug: 'comment-rediger-demande-suppression-rgpd',
    title: 'Comment rédiger une demande de suppression RGPD efficace',
    excerpt: 'Apprenez à rédiger des demandes de suppression de données personnelles qui obtiennent des résultats.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&q=80'
  }
]

// Fonction de formatage de date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>