<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-purple-100 text-purple-800">
            Conformité
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Les obligations RGPD pour les entreprises : Guide de conformité
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="getTeamAvatar('Marie Leroy')" 
              :alt="'Marie Leroy'"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">Marie Leroy</p>
              <p class="text-gray-600">Consultante Conformité</p>
              <p class="text-sm text-gray-500">25 janvier 2024</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="getBlogHeroUrl('Conformité')" 
            :alt="'Obligations RGPD entreprises'"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
          <p class="text-lg text-purple-800 font-medium">
            Découvrez les obligations RGPD qui s'imposent à votre entreprise. Ce guide complet vous accompagne dans votre mise en conformité et vous aide à éviter les sanctions.
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <h2>Pourquoi la conformité RGPD est-elle essentielle ?</h2>
          <p>
            Le RGPD n'est pas seulement une contrainte réglementaire, c'est aussi une opportunité pour votre entreprise de renforcer la confiance de vos clients et d'améliorer vos processus de gestion des données. Les entreprises qui respectent le RGPD bénéficient d'un avantage concurrentiel et évitent des sanctions financières importantes.
          </p>

          <h2>Quelles entreprises sont concernées par le RGPD ?</h2>
          <p>Le RGPD s'applique à toutes les entreprises qui :</p>
          <ul>
            <li><strong>Traient des données personnelles</strong> de résidents européens</li>
            <li><strong>Ont un établissement</strong> dans l'Union européenne</li>
            <li><strong>Offrent des biens ou services</strong> aux résidents européens</li>
            <li><strong>Surveillent le comportement</strong> des résidents européens</li>
          </ul>

          <h3>Exemples d'entreprises concernées</h3>
          <ul>
            <li>Sites e-commerce avec clients européens</li>
            <li>Applications mobiles collectant des données</li>
            <li>Services en ligne (SaaS, plateformes)</li>
            <li>Entreprises de marketing digital</li>
            <li>Institutions financières et assurances</li>
            <li>Hôpitaux et établissements de santé</li>
          </ul>

          <h2>Les 7 principes fondamentaux du RGPD</h2>
          <p>Votre entreprise doit respecter ces principes dans tous ses traitements de données :</p>

          <h3>1. Licéité, loyauté et transparence</h3>
          <p>Le traitement des données doit avoir une base légale et être transparent vis-à-vis des personnes concernées.</p>
          <ul>
            <li><strong>Consentement explicite</strong> de la personne</li>
            <li><strong>Exécution d'un contrat</strong> ou de mesures précontractuelles</li>
            <li><strong>Obligation légale</strong> à laquelle l'entreprise est soumise</li>
            <li><strong>Intérêt légitime</strong> de l'entreprise (avec évaluation des risques)</li>
            <li><strong>Protection des intérêts vitaux</strong> de la personne</li>
            <li><strong>Intérêt public</strong> ou exercice de l'autorité publique</li>
          </ul>

          <h3>2. Finalité déterminée</h3>
          <p>Les données ne peuvent être collectées que pour des finalités déterminées, explicites et légitimes.</p>
          <ul>
            <li>Définir clairement l'objectif de la collecte</li>
            <li>Ne pas utiliser les données à d'autres fins</li>
            <li>Documenter les finalités dans le registre des traitements</li>
          </ul>

          <h3>3. Minimisation des données</h3>
          <p>Seules les données strictement nécessaires à la finalité peuvent être collectées.</p>
          <ul>
            <li>Éviter la collecte excessive de données</li>
            <li>Justifier chaque donnée collectée</li>
            <li>Mettre en place des processus de limitation</li>
          </ul>

          <h3>4. Exactitude des données</h3>
          <p>Les données doivent être exactes et, si nécessaire, mises à jour.</p>
          <ul>
            <li>Mettre en place des processus de vérification</li>
            <li>Permettre aux utilisateurs de corriger leurs données</li>
            <li>Nettoyer régulièrement les bases de données</li>
          </ul>

          <h3>5. Limitation de la conservation</h3>
          <p>Les données ne peuvent être conservées que le temps nécessaire à la finalité.</p>
          <ul>
            <li>Définir des durées de conservation par type de données</li>
            <li>Mettre en place des processus de suppression automatique</li>
            <li>Documenter les durées dans le registre des traitements</li>
          </ul>

          <h3>6. Intégrité et confidentialité</h3>
          <p>Les données doivent être protégées contre tout traitement non autorisé.</p>
          <ul>
            <li>Chiffrement des données sensibles</li>
            <li>Contrôle d'accès strict</li>
            <li>Audit de sécurité régulier</li>
            <li>Formation du personnel</li>
          </ul>

          <h3>7. Responsabilité</h3>
          <p>L'entreprise doit être en mesure de démontrer sa conformité.</p>
          <ul>
            <li>Documenter tous les traitements</li>
            <li>Mettre en place des processus de gouvernance</li>
            <li>Former et sensibiliser les équipes</li>
          </ul>

          <h2>Obligations spécifiques pour votre entreprise</h2>

          <h3>1. Désigner un Délégué à la Protection des Données (DPO)</h3>
          <p>Le DPO est obligatoire si votre entreprise :</p>
          <ul>
            <li>Est une autorité publique ou un organisme public</li>
            <li>Effectue des traitements à grande échelle</li>
            <li>Traitent des données sensibles (santé, origine raciale, etc.)</li>
            <li>Effectue une surveillance systématique à grande échelle</li>
          </ul>

          <h4>Rôle du DPO</h4>
          <ul>
            <li>Informer et conseiller l'entreprise sur ses obligations</li>
            <li>Contrôler la conformité au RGPD</li>
            <li>Former le personnel</li>
            <li>Coopérer avec l'autorité de contrôle (CNIL)</li>
          </ul>

          <h3>2. Tenir un registre des traitements</h3>
          <p>Ce registre doit contenir pour chaque traitement :</p>
          <ul>
            <li>L'identité du responsable du traitement</li>
            <li>Les finalités du traitement</li>
            <li>Les catégories de personnes concernées</li>
            <li>Les catégories de données personnelles</li>
            <li>Les destinataires des données</li>
            <li>Les transferts de données hors UE</li>
            <li>Les délais de suppression</li>
            <li>Les mesures de sécurité</li>
          </ul>

          <h3>3. Effectuer une analyse d'impact (AIPD)</h3>
          <p>L'AIPD est obligatoire pour les traitements à risque élevé :</p>
          <ul>
            <li>Surveillance systématique à grande échelle</li>
            <li>Traitement de données sensibles à grande échelle</li>
            <li>Surveillance d'espaces publics à grande échelle</li>
            <li>Nouvelles technologies</li>
          </ul>

          <h4>Contenu de l'AIPD</h4>
          <ul>
            <li>Description du traitement et de ses finalités</li>
            <li>Évaluation de la nécessité et de la proportionnalité</li>
            <li>Évaluation des risques pour les droits et libertés</li>
            <li>Mesures de protection prévues</li>
          </ul>

          <h3>4. Mettre en place des mesures de sécurité</h3>
          <p>Votre entreprise doit implémenter des mesures techniques et organisationnelles appropriées :</p>

          <h4>Mesures techniques</h4>
          <ul>
            <li><strong>Chiffrement</strong> des données en transit et au repos</li>
            <li><strong>Authentification forte</strong> (2FA, biométrie)</li>
            <li><strong>Gestion des accès</strong> (IAM, PAM)</li>
            <li><strong>Surveillance</strong> et détection d'intrusion</li>
            <li><strong>Sauvegarde sécurisée</strong> et chiffrée</li>
            <li><strong>Tests de pénétration</strong> réguliers</li>
          </ul>

          <h4>Mesures organisationnelles</h4>
          <ul>
            <li><strong>Politique de sécurité</strong> documentée</li>
            <li><strong>Formation</strong> du personnel sur la sécurité</li>
            <li><strong>Procédures</strong> de gestion des incidents</li>
            <li><strong>Contrôles d'accès</strong> physiques et logiques</li>
            <li><strong>Audit</strong> de sécurité régulier</li>
          </ul>

          <h3>5. Respecter les droits des personnes</h3>
          <p>Votre entreprise doit permettre l'exercice de tous les droits RGPD :</p>

          <h4>Droits à respecter</h4>
          <ul>
            <li><strong>Droit d'information</strong> : Politique de confidentialité claire</li>
            <li><strong>Droit d'accès</strong> : Accès aux données dans un délai d'1 mois</li>
            <li><strong>Droit de rectification</strong> : Correction des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : Suppression des données sur demande</li>
            <li><strong>Droit à la limitation</strong> : Limitation du traitement</li>
            <li><strong>Droit à la portabilité</strong> : Export des données</li>
            <li><strong>Droit d'opposition</strong> : Opposition au traitement</li>
          </ul>

          <h4>Processus à mettre en place</h4>
          <ul>
            <li>Formulaire de demande en ligne</li>
            <li>Processus de vérification d'identité</li>
            <li>Délais de réponse respectés</li>
            <li>Traçabilité des demandes</li>
          </ul>

          <h3>6. Gérer les violations de données</h3>
          <p>En cas de violation de données personnelles, votre entreprise doit :</p>
          <ul>
            <li><strong>Détecter</strong> la violation dans les 72h</li>
            <li><strong>Notifier</strong> la CNIL dans les 72h</li>
            <li><strong>Informer</strong> les personnes concernées si risque élevé</li>
            <li><strong>Documenter</strong> la violation et les mesures prises</li>
            <li><strong>Mettre en place</strong> des mesures correctives</li>
          </ul>

          <h3>7. Former et sensibiliser vos équipes</h3>
          <p>La conformité RGPD est l'affaire de tous dans votre entreprise :</p>
          <ul>
            <li><strong>Formation initiale</strong> pour tous les nouveaux employés</li>
            <li><strong>Formation continue</strong> sur les bonnes pratiques</li>
            <li><strong>Sensibilisation</strong> aux risques de sécurité</li>
            <li><strong>Procédures</strong> claires et accessibles</li>
            <li><strong>Contact</strong> dédié pour les questions RGPD</li>
          </ul>

          <h2>Plan de mise en conformité en 6 étapes</h2>

          <h3>Étape 1 : Audit de l'existant (1-2 mois)</h3>
          <ul>
            <li>Inventorier tous les traitements de données</li>
            <li>Identifier les risques et non-conformités</li>
            <li>Évaluer l'impact sur l'organisation</li>
            <li>Prioriser les actions à mener</li>
          </ul>

          <h3>Étape 2 : Désigner un pilote (2 semaines)</h3>
          <ul>
            <li>Nommer un responsable RGPD</li>
            <li>Désigner un DPO si nécessaire</li>
            <li>Constituer une équipe projet</li>
            <li>Définir les responsabilités</li>
          </ul>

          <h3>Étape 3 : Établir la gouvernance (1 mois)</h3>
          <ul>
            <li>Définir la politique RGPD</li>
            <li>Mettre en place les procédures</li>
            <li>Former les équipes</li>
            <li>Établir le registre des traitements</li>
          </ul>

          <h3>Étape 4 : Mettre en œuvre les mesures (3-6 mois)</h3>
          <ul>
            <li>Implémenter les mesures de sécurité</li>
            <li>Mettre en place les processus de gestion des droits</li>
            <li>Réaliser les AIPD nécessaires</li>
            <li>Adapter les contrats avec les sous-traitants</li>
          </ul>

          <h3>Étape 5 : Tester et valider (1 mois)</h3>
          <ul>
            <li>Tester les processus mis en place</li>
            <li>Vérifier la conformité</li>
            <li>Former les utilisateurs finaux</li>
            <li>Préparer la documentation</li>
          </ul>

          <h3>Étape 6 : Maintenir et améliorer (continu)</h3>
          <ul>
            <li>Surveiller la conformité</li>
            <li>Mettre à jour les processus</li>
            <li>Former régulièrement les équipes</li>
            <li>Auditer et améliorer</li>
          </ul>

          <h2>Sanctions en cas de non-conformité</h2>
          <p>Les entreprises qui ne respectent pas le RGPD s'exposent à :</p>

          <h3>Sanctions administratives</h3>
          <ul>
            <li><strong>Amendes</strong> jusqu'à 20 millions d'euros ou 4% du CA mondial</li>
            <li><strong>Limitation temporaire</strong> ou définitive du traitement</li>
            <li><strong>Suspension</strong> des flux de données</li>
            <li><strong>Ordre</strong> de mise en conformité</li>
          </ul>

          <h3>Risques réputationnels</h3>
          <ul>
            <li>Perte de confiance des clients</li>
            <li>Atteinte à l'image de marque</li>
            <li>Difficultés de recrutement</li>
            <li>Perte d'opportunités commerciales</li>
          </ul>

          <h2>Outils et ressources pour la conformité</h2>
          <p>Pour vous aider dans votre mise en conformité :</p>
          <ul>
            <li><strong>Guides CNIL</strong> : Ressources officielles</li>
            <li><strong>Outils d'audit</strong> : Questionnaires et checklists</li>
            <li><strong>Formations</strong> : Sessions en ligne et présentielles</li>
            <li><strong>Consultants</strong> : Experts RGPD certifiés</li>
            <li><strong>Logiciels</strong> : Solutions de gestion de la conformité</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            La conformité RGPD n'est pas un sprint mais un marathon. Elle nécessite un engagement continu de votre entreprise et une adaptation constante aux évolutions technologiques et réglementaires. En investissant dans la conformité RGPD, vous protégez votre entreprise, renforcez la confiance de vos clients et vous donnez un avantage concurrentiel durable.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Besoin d'aide pour votre conformité RGPD ?
          </h3>
          <p class="text-gray-600 mb-6">
            Découvrez nos outils et ressources pour vous accompagner
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
              Guide étape par étape pour rédiger une demande efficace.
            </p>
            <a href="/blog/comment-rediger-demande-suppression-rgpd" class="text-blue-600 hover:text-blue-500 font-medium">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTeamAvatar, getBlogHeroUrl, getBlogThumbnailUrl } from '~/utils/unsplash'

// Meta tags pour SEO
useHead({
  title: 'Les obligations RGPD pour les entreprises : Guide de conformité - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les obligations RGPD qui s\'imposent à votre entreprise. Ce guide complet vous accompagne dans votre mise en conformité et vous aide à éviter les sanctions.'
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