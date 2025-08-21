<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-green-100 text-green-800">
            Tutoriel
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Comment rédiger une demande de suppression RGPD efficace
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="getTeamAvatar('Thomas Dubois')" 
              :alt="'Thomas Dubois'"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">Thomas Dubois</p>
              <p class="text-gray-600">Spécialiste Tech</p>
              <p class="text-sm text-gray-500">20 janvier 2024</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="getBlogHeroUrl('Tutoriel')" 
            :alt="'Tutoriel demande suppression RGPD'"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <p class="text-lg text-green-800 font-medium">
            Guide étape par étape pour rédiger une demande de suppression de données personnelles conforme au RGPD. Découvrez les bonnes pratiques et les modèles à utiliser.
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <h2>Pourquoi rédiger une demande de suppression RGPD ?</h2>
          <p>
            Avec l'explosion du numérique, nos données personnelles sont partout : réseaux sociaux, sites e-commerce, applications mobiles, services en ligne... Le RGPD vous donne le droit de demander la suppression de ces données, mais encore faut-il savoir comment procéder efficacement.
          </p>

          <h2>Étape 1 : Identifier l'entreprise et ses coordonnées</h2>
          <p>Avant de rédiger votre demande, vous devez identifier :</p>
          <ul>
            <li><strong>Le nom de l'entreprise</strong> qui traite vos données</li>
            <li><strong>L'adresse email</strong> du délégué à la protection des données (DPO)</li>
            <li><strong>L'adresse postale</strong> de l'entreprise</li>
            <li><strong>Le site web</strong> de l'entreprise</li>
          </ul>

          <h3>Où trouver ces informations ?</h3>
          <ul>
            <li>Dans la politique de confidentialité du site</li>
            <li>Dans les conditions générales d'utilisation</li>
            <li>Sur la page "Contact" ou "À propos"</li>
            <li>Dans les emails reçus de l'entreprise</li>
            <li>Sur le registre des traitements de la CNIL</li>
          </ul>

          <h2>Étape 2 : Préparer vos informations personnelles</h2>
          <p>Pour que votre demande soit traitée, vous devez fournir :</p>
          <ul>
            <li><strong>Votre nom complet</strong> (prénom et nom)</li>
            <li><strong>Votre adresse email</strong> (celle utilisée pour le compte)</li>
            <li><strong>Votre adresse postale</strong> (pour la vérification d'identité)</li>
            <li><strong>Le numéro de compte</strong> si applicable</li>
            <li><strong>Les services utilisés</strong> sur la plateforme</li>
          </ul>

          <h2>Étape 3 : Rédiger votre demande</h2>
          <p>Votre demande doit être claire, précise et respectueuse. Voici la structure recommandée :</p>

          <h3>Structure de la demande</h3>
          <ol>
            <li><strong>Objet</strong> : Demande d'exercice du droit à l'effacement (Article 17 du RGPD)</li>
            <li><strong>Salutation</strong> : Madame, Monsieur,</li>
            <li><strong>Introduction</strong> : Présentation et contexte</li>
            <li><strong>Demande</strong> : Formulation claire de votre demande</li>
            <li><strong>Informations personnelles</strong> : Vos coordonnées</li>
            <li><strong>Confirmation</strong> : Demande de confirmation</li>
            <li><strong>Signature</strong> : Votre nom et coordonnées</li>
          </ol>

          <h2>Modèles de demandes par situation</h2>

          <h3>1. Demande de suppression d'un compte en ligne</h3>
          <div class="bg-gray-50 p-6 rounded-lg my-6">
            <p class="font-medium mb-3">Modèle :</p>
            <div class="text-sm space-y-2">
              <p><strong>Objet :</strong> Demande d'exercice du droit à l'effacement (Article 17 du RGPD)</p>
              <p><strong>À l'attention du délégué à la protection des données (DPO)</strong></p>
              <p class="mt-4">Madame, Monsieur,</p>
              <p>En vertu du Règlement Général sur la Protection des Données (RGPD) et plus précisément de l'article 17 relatif au droit à l'effacement, je vous prie de bien vouloir procéder à la suppression de toutes mes données personnelles détenues par votre entreprise.</p>
              <p class="mt-2">Cette demande s'applique à toutes les données me concernant, y compris mais sans s'y limiter :</p>
              <ul class="list-disc ml-6 mt-2">
                <li>Mon compte utilisateur et profil</li>
                <li>Mon historique d'achat et préférences</li>
                <li>Mes données de navigation et cookies</li>
                <li>Mon adresse email et informations personnelles</li>
                <li>Tout autre contenu généré par mes soins</li>
              </ul>
              <p class="mt-4"><strong>Informations personnelles :</strong></p>
              <ul class="list-disc ml-6">
                <li>Nom : [Votre nom]</li>
                <li>Prénom : [Votre prénom]</li>
                <li>Email : [Votre email]</li>
                <li>Adresse : [Votre adresse]</li>
              </ul>
              <p class="mt-4">Conformément à l'article 17 du RGPD, vous disposez d'un délai d'un mois pour répondre à cette demande.</p>
              <p class="mt-4">Je vous remercie de me confirmer la suppression de mes données par email à l'adresse suivante : [Votre email]</p>
              <p class="mt-4">Cordialement,<br>[Votre nom complet]</p>
            </div>
          </div>

          <h3>2. Demande de suppression de données de réseaux sociaux</h3>
          <div class="bg-gray-50 p-6 rounded-lg my-6">
            <p class="font-medium mb-3">Modèle adapté :</p>
            <div class="text-sm space-y-2">
              <p>Pour les réseaux sociaux, ajoutez ces éléments spécifiques :</p>
              <ul class="list-disc ml-6">
                <li>Demande de suppression de tous vos posts et commentaires</li>
                <li>Suppression de vos photos et vidéos</li>
                <li>Effacement de votre historique de connexion</li>
                <li>Suppression de vos données de géolocalisation</li>
                <li>Effacement de vos préférences publicitaires</li>
              </ul>
            </div>
          </div>

          <h3>3. Demande de suppression de données e-commerce</h3>
          <div class="bg-gray-50 p-6 rounded-lg my-6">
            <p class="font-medium mb-3">Modèle adapté :</p>
            <div class="text-sm space-y-2">
              <p>Pour les sites e-commerce, incluez :</p>
              <ul class="list-disc ml-6">
                <li>Suppression de votre compte client</li>
                <li>Effacement de votre historique d'achat</li>
                <li>Suppression de vos adresses de livraison</li>
                <li>Effacement de vos moyens de paiement</li>
                <li>Suppression de vos préférences et recommandations</li>
              </ul>
            </div>
          </div>

          <h2>Étape 4 : Envoyer votre demande</h2>
          <p>Une fois votre demande rédigée, vous pouvez l'envoyer :</p>

          <h3>Méthodes d'envoi recommandées</h3>
          <ol>
            <li><strong>Email</strong> (recommandé) : Rapide et traçable</li>
            <li><strong>Courrier recommandé</strong> : Plus formel, avec accusé de réception</li>
            <li><strong>Formulaire en ligne</strong> : Si disponible sur le site</li>
            <li><strong>Chat ou support</strong> : Pour les demandes simples</li>
          </ol>

          <h3>Conseils pour l'envoi</h3>
          <ul>
            <li>Gardez une copie de votre demande</li>
            <li>Notez la date d'envoi</li>
            <li>Conservez les accusés de réception</li>
            <li>Utilisez un email professionnel si possible</li>
          </ul>

          <h2>Étape 5 : Suivre votre demande</h2>
          <p>Après l'envoi de votre demande :</p>

          <h3>Délais de réponse</h3>
          <ul>
            <li><strong>Réponse initiale</strong> : Dans les 24-48h (accusé de réception)</li>
            <li><strong>Traitement complet</strong> : Maximum 1 mois</li>
            <li><strong>Prolongation possible</strong> : 2 mois supplémentaires si nécessaire</li>
          </ul>

          <h3>Que faire si l'entreprise ne répond pas ?</h3>
          <ol>
            <li><strong>Relancer poliment</strong> après 2 semaines</li>
            <li><strong>Contacter le service client</strong> pour vérifier le statut</li>
            <li><strong>Signaler à la CNIL</strong> si aucune réponse après 1 mois</li>
            <li><strong>Consulter un avocat</strong> si nécessaire</li>
          </ol>

          <h2>Bonnes pratiques à respecter</h2>
          <ul>
            <li><strong>Soyez poli et professionnel</strong> dans votre demande</li>
            <li><strong>Précisez clairement</strong> ce que vous voulez supprimer</li>
            <li><strong>Fournissez toutes les informations</strong> nécessaires</li>
            <li><strong>Gardez des traces</strong> de vos échanges</li>
            <li><strong>Respectez les délais</strong> avant de relancer</li>
            <li><strong>Documentez vos démarches</strong> pour le suivi</li>
          </ul>

          <h2>Erreurs à éviter</h2>
          <ul>
            <li><strong>Être trop agressif</strong> ou menaçant</li>
            <li><strong>Oublier de fournir</strong> vos informations personnelles</li>
            <li><strong>Demander la suppression</strong> de données légitimes</li>
            <li><strong>Envoyer des demandes</strong> en masse sans personnalisation</li>
            <li><strong>Oublier de relancer</strong> si pas de réponse</li>
          </ul>

          <h2>Outils et ressources utiles</h2>
          <p>Pour vous aider dans vos démarches :</p>
          <ul>
            <li><strong>Générateur de demandes</strong> : Utilisez notre outil gratuit</li>
            <li><strong>Modèles de lettres</strong> : Téléchargez nos exemples</li>
            <li><strong>Guide CNIL</strong> : Consultez les ressources officielles</li>
            <li><strong>Communauté</strong> : Partagez vos expériences</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Rédiger une demande de suppression RGPD efficace nécessite de la préparation et de la méthode. En suivant ce guide étape par étape, vous maximisez vos chances d'obtenir satisfaction rapidement. N'oubliez pas que vous avez des droits, et que les entreprises ont l'obligation de les respecter.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Prêt à rédiger votre demande de suppression ?
          </h3>
          <p class="text-gray-600 mb-6">
            Utilisez notre générateur gratuit pour créer des demandes RGPD personnalisées
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
            :src="getBlogThumbnailUrl('Guide')" 
            :alt="'Guide RGPD'"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-blue-100 text-blue-800">
              Guide
            </span>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Guide complet RGPD 2024 : Vos droits et obligations
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              Découvrez tout ce que vous devez savoir sur le RGPD en 2024.
            </p>
            <a href="/blog/guide-rgpd-2024" class="text-blue-600 hover:text-blue-500 font-medium">
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
              Tout ce que les entreprises doivent savoir pour être conformes.
            </p>
            <a href="/blog/protection-donnees-entreprises" class="text-blue-600 hover:text-blue-500 font-medium">
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
              Conseils pratiques pour sécuriser vos informations.
            </p>
            <a href="/blog/cookies-tracking" class="text-blue-600 hover:text-blue-500 font-medium">
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
  title: 'Comment rédiger une demande de suppression RGPD efficace - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Guide étape par étape pour rédiger une demande de suppression de données personnelles conforme au RGPD. Découvrez les bonnes pratiques et les modèles à utiliser.'
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