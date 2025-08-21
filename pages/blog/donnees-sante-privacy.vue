<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-indigo-100 text-indigo-800">
            Santé
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            RGPD et santé : Protéger vos données médicales en 2024
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="getTeamAvatar('Claire Bernard')" 
              :alt="'Claire Bernard'"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">Claire Bernard</p>
              <p class="text-gray-600">Experte Santé Numérique</p>
              <p class="text-sm text-gray-500">5 février 2024</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="getBlogHeroUrl('Santé')" 
            :alt="'RGPD et santé données médicales'"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
          <p class="text-lg text-indigo-800 font-medium">
            Découvrez comment le RGPD protège vos données de santé et quels sont vos droits en tant que patient. Ce guide spécialisé vous accompagne dans la protection de vos informations médicales.
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <h2>Pourquoi les données de santé sont-elles si sensibles ?</h2>
          <p>
            Les données de santé sont considérées comme des données personnelles sensibles par le RGPD. Elles révèlent des informations intimes sur votre état de santé, vos traitements, vos antécédents médicaux et peuvent avoir un impact significatif sur votre vie personnelle et professionnelle. Leur protection est donc essentielle.
          </p>

          <h2>Qu'est-ce qu'une donnée de santé selon le RGPD ?</h2>
          <p>Le RGPD définit les données de santé comme :</p>
          <ul>
            <li><strong>Données relatives à la santé physique ou mentale</strong> d'une personne</li>
            <li><strong>Informations sur les soins de santé</strong> dispensés à une personne</li>
            <li><strong>Données révélant l'état de santé</strong> d'une personne</li>
            <li><strong>Informations sur les facteurs de risque</strong> pour la santé</li>
          </ul>

          <h3>Exemples de données de santé</h3>
          <ul>
            <li>Diagnostics médicaux et résultats d'examens</li>
            <li>Prescriptions et traitements</li>
            <li>Antécédents médicaux et familiaux</li>
            <li>Données génétiques et biométriques</li>
            <li>Informations sur le mode de vie (tabac, alcool, sport)</li>
            <li>Données de suivi de grossesse</li>
            <li>Informations sur la santé mentale</li>
          </ul>

          <h2>Protection renforcée des données de santé</h2>
          <p>Le RGPD accorde une protection spéciale aux données de santé :</p>

          <h3>1. Base légale restrictive</h3>
          <p>Le traitement des données de santé n'est autorisé que dans des cas limités :</p>
          <ul>
            <li><strong>Consentement explicite</strong> de la personne</li>
            <li><strong>Obligation légale</strong> (déclaration de maladies, pharmacovigilance)</li>
            <li><strong>Intérêt vital</strong> de la personne</li>
            <li><strong>Intérêt public</strong> (recherche médicale, santé publique)</li>
            <li><strong>Exercice de la médecine</strong> et soins de santé</li>
          </ul>

          <h3>2. Mesures de sécurité renforcées</h3>
          <p>Les professionnels de santé doivent mettre en place :</p>
          <ul>
            <li><strong>Chiffrement</strong> des données en transit et au repos</li>
            <li><strong>Authentification forte</strong> pour accéder aux données</li>
            <li><strong>Traçabilité</strong> de tous les accès et modifications</li>
            <li><strong>Sauvegarde sécurisée</strong> et chiffrée</li>
            <li><strong>Formation</strong> du personnel sur la protection des données</li>
          </ul>

          <h3>3. Délégation à la protection des données (DPO) obligatoire</h3>
          <p>Les établissements de santé doivent désigner un DPO pour :</p>
          <ul>
            <li>Conseiller sur la conformité RGPD</li>
            <li>Contrôler la mise en œuvre des mesures de protection</li>
            <li>Former le personnel</li>
            <li>Coopérer avec la CNIL</li>
          </ul>

          <h2>Vos droits en tant que patient</h2>
          <p>Le RGPD vous donne des droits spécifiques sur vos données de santé :</p>

          <h3>1. Droit d'information renforcé</h3>
          <p>Vous devez être informé de :</p>
          <ul>
            <li>L'identité du responsable du traitement</li>
            <li>Les finalités du traitement de vos données</li>
            <li>La base légale du traitement</li>
            <li>La durée de conservation</li>
            <li>Vos droits et comment les exercer</li>
            <li>Les destinataires de vos données</li>
            <li>Les transferts hors UE</li>
          </ul>

          <h3>2. Droit d'accès étendu</h3>
          <p>Vous pouvez demander :</p>
          <ul>
            <li>L'accès à toutes vos données de santé</li>
            <li>Une copie de votre dossier médical</li>
            <li>Les informations sur l'origine des données</li>
            <li>Les détails sur le traitement automatisé</li>
          </ul>

          <h3>3. Droit de rectification</h3>
          <p>Vous pouvez demander la correction de :</p>
          <ul>
            <li>Données inexactes ou incomplètes</li>
            <li>Informations obsolètes</li>
            <li>Erreurs de transcription</li>
          </ul>

          <h3>4. Droit à l'effacement limité</h3>
          <p>Le droit à l'effacement des données de santé est limité car :</p>
          <ul>
            <li>Les données médicales sont souvent nécessaires aux soins</li>
            <li>La conservation peut être imposée par la loi</li>
            <li>L'effacement peut compromettre la qualité des soins</li>
          </ul>

          <h3>5. Droit à la limitation du traitement</h3>
          <p>Vous pouvez demander la limitation quand :</p>
          <ul>
            <li>Vous contestez l'exactitude des données</li>
            <li>Le traitement est illicite</li>
            <li>Vous vous opposez au traitement</li>
            <li>Les données ne sont plus nécessaires</li>
          </ul>

          <h3>6. Droit à la portabilité</h3>
          <p>Vous pouvez recevoir vos données dans un format structuré pour :</p>
          <ul>
            <li>Changer de médecin ou d'établissement</li>
            <li>Partager vos données avec un autre professionnel</li>
            <li>Conserver un historique personnel</li>
          </ul>

          <h2>Obligations spécifiques des professionnels de santé</h2>

          <h3>1. Registre des traitements</h3>
          <p>Les professionnels de santé doivent tenir un registre détaillé incluant :</p>
          <ul>
            <li>Description des traitements de données</li>
            <li>Finalités et base légale</li>
            <li>Catégories de données traitées</li>
            <li>Destinataires des données</li>
            <li>Transferts hors UE</li>
            <li>Délais de suppression</li>
            <li>Mesures de sécurité</li>
          </ul>

          <h3>2. Analyse d'impact (AIPD)</h3>
          <p>L'AIPD est obligatoire pour les traitements à risque élevé :</p>
          <ul>
            <li>Données génétiques</li>
            <li>Données biométriques</li>
            <li>Surveillance à grande échelle</li>
            <li>Nouvelles technologies</li>
          </ul>

          <h3>3. Notification des violations</h3>
          <p>En cas de violation de données de santé :</p>
          <ul>
            <li>Notification à la CNIL dans les 72h</li>
            <li>Information des patients si risque élevé</li>
            <li>Documentation de la violation</li>
            <li>Mesures correctives immédiates</li>
          </ul>

          <h2>Cas particuliers et exceptions</h2>

          <h3>1. Recherche médicale</h3>
          <p>La recherche médicale bénéficie de dérogations :</p>
          <ul>
            <li>Consentement élargi pour la recherche</li>
            <li>Possibilité de traitement sans consentement dans certains cas</li>
            <li>Conservation prolongée des données</li>
            <li>Partage avec d'autres chercheurs</li>
          </ul>

          <h3>2. Urgences médicales</h3>
          <p>En cas d'urgence vitale :</p>
          <ul>
            <li>Traitement possible sans consentement</li>
            <li>Accès aux données nécessaires aux soins</li>
            <li>Information du patient dès que possible</li>
            <li>Documentation de la situation d'urgence</li>
          </ul>

          <h3>3. Santé publique</h3>
          <p>Les autorités de santé peuvent traiter des données pour :</p>
          <ul>
            <li>Surveillance épidémiologique</li>
            <li>Prévention des risques sanitaires</li>
            <li>Évaluation des politiques de santé</li>
            <li>Gestion des crises sanitaires</li>
          </ul>

          <h2>Applications et objets connectés de santé</h2>
          <p>Les nouvelles technologies posent de nouveaux défis :</p>

          <h3>1. Applications mobiles de santé</h3>
          <p>Vérifiez que l'application respecte le RGPD :</p>
          <ul>
            <li>Politique de confidentialité claire</li>
            <li>Consentement explicite pour chaque finalité</li>
            <li>Chiffrement des données</li>
            <li>Possibilité d'exporter vos données</li>
            <li>Droit de suppression</li>
          </ul>

          <h3>2. Objets connectés médicaux</h3>
          <p>Pour les dispositifs médicaux connectés :</p>
          <ul>
            <li>Vérifiez la certification CE</li>
            <li>Lisez la notice d'information</li>
            <li>Contrôlez les paramètres de confidentialité</li>
            <li>Limitez le partage de données</li>
          </ul>

          <h3>3. Télémédecine</h3>
          <p>La télémédecine doit respecter :</p>
          <ul>
            <li>Chiffrement des communications</li>
            <li>Authentification des patients</li>
            <li>Traçabilité des consultations</li>
            <li>Consentement éclairé</li>
          </ul>

          <h2>Comment exercer vos droits sur vos données de santé</h2>

          <h3>1. Identifier le responsable du traitement</h3>
          <p>Le responsable peut être :</p>
          <ul>
            <li>Votre médecin traitant</li>
            <li>L'établissement de santé</li>
            <li>Le laboratoire d'analyses</li>
            <li>L'application de santé</li>
          </ul>

          <h3>2. Rédiger votre demande</h3>
          <p>Votre demande doit préciser :</p>
          <ul>
            <li>Le droit que vous souhaitez exercer</li>
            <li>Vos informations d'identité</li>
            <li>Les données concernées</li>
            <li>La période concernée</li>
          </ul>

          <h3>3. Envoyer votre demande</h3>
          <p>Vous pouvez envoyer votre demande :</p>
          <ul>
            <li>Par email au DPO de l'établissement</li>
            <li>Par courrier recommandé</li>
            <li>Via un formulaire en ligne</li>
            <li>En personne au service concerné</li>
          </ul>

          <h3>4. Suivre votre demande</h3>
          <p>Après envoi de votre demande :</p>
          <ul>
            <li>Vous devez recevoir un accusé de réception</li>
            <li>La réponse doit intervenir dans le mois</li>
            <li>En cas de complexité, le délai peut être prolongé</li>
            <li>Vous pouvez relancer si pas de réponse</li>
          </ul>

          <h2>Sanctions en cas de non-respect</h2>
          <p>Les violations du RGPD en matière de santé sont sévèrement sanctionnées :</p>

          <h3>Sanctions administratives</h3>
          <ul>
            <li>Amendes jusqu'à 20 millions d'euros ou 4% du CA mondial</li>
            <li>Limitation ou suspension du traitement</li>
            <li>Ordre de mise en conformité</li>
            <li>Interdiction de traitement</li>
          </ul>

          <h3>Sanctions pénales</h3>
          <ul>
            <li>Emprisonnement jusqu'à 5 ans</li>
            <li>Amendes jusqu'à 300 000 euros</li>
            <li>Interdiction d'exercer</li>
            <li>Fermeture d'établissement</li>
          </ul>

          <h2>Bonnes pratiques pour protéger vos données de santé</h2>

          <h3>1. Au quotidien</h3>
          <ul>
            <li>Lisez les notices d'information</li>
            <li>Posez des questions sur l'utilisation de vos données</li>
            <li>Gardez une trace de vos demandes</li>
            <li>Vérifiez régulièrement vos comptes en ligne</li>
          </ul>

          <h3>2. Applications et objets connectés</h3>
          <ul>
            <li>Privilégiez les applications certifiées</li>
            <li>Limitez les permissions demandées</li>
            <li>Utilisez des mots de passe forts</li>
            <li>Mettez à jour régulièrement</li>
          </ul>

          <h3>3. Communication en ligne</h3>
          <ul>
            <li>Évitez de partager des informations médicales sur les réseaux sociaux</li>
            <li>Utilisez des canaux sécurisés pour les échanges médicaux</li>
            <li>Méfiez-vous des demandes d'informations médicales</li>
            <li>Vérifiez l'identité de vos interlocuteurs</li>
          </ul>

          <h2>Ressources et contacts utiles</h2>
          <p>Pour vous aider dans vos démarches :</p>

          <h3>Autorités de contrôle</h3>
          <ul>
            <li><strong>CNIL</strong> : Commission Nationale de l'Informatique et des Libertés</li>
            <li><strong>HAS</strong> : Haute Autorité de Santé</li>
            <li><strong>ANSM</strong> : Agence Nationale de Sécurité du Médicament</li>
          </ul>

          <h3>Associations de patients</h3>
          <ul>
            <li>Associations de défense des droits des patients</li>
            <li>Organisations de lutte contre les maladies</li>
            <li>Collectifs de patients experts</li>
          </ul>

          <h3>Outils et guides</h3>
          <ul>
            <li>Guides CNIL sur la santé</li>
            <li>Modèles de lettres de demande</li>
            <li>Formulaires en ligne</li>
            <li>Applications de gestion des données de santé</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            La protection de vos données de santé est un droit fondamental garanti par le RGPD. En tant que patient, vous disposez de droits étendus et les professionnels de santé ont des obligations strictes. N'hésitez pas à exercer vos droits et à vous informer sur la protection de vos données médicales.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Besoin d'aide pour protéger vos données de santé ?
          </h3>
          <p class="text-gray-600 mb-6">
            Utilisez notre générateur pour créer des demandes RGPD personnalisées
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
            <a href="/blog/proteger-donnees-personnelles-en-ligne" class="text-blue-600 hover:text-blue-500 font-medium">
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
            <a href="/blog/obligations-rgpd-entreprises" class="text-blue-600 hover:text-blue-500 font-medium">
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
  title: 'RGPD et santé : Protéger vos données médicales en 2024 - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez comment le RGPD protège vos données de santé et quels sont vos droits en tant que patient. Ce guide spécialisé vous accompagne dans la protection de vos informations médicales.'
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