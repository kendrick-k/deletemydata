<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-red-100 text-red-800">
            Sécurité
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Protéger vos données personnelles en ligne : Guide complet 2024
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="getTeamAvatar('Pierre Moreau')" 
              :alt="'Pierre Moreau'"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">Pierre Moreau</p>
              <p class="text-gray-600">Expert Cybersécurité</p>
              <p class="text-sm text-gray-500">30 janvier 2024</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="getBlogHeroUrl('Sécurité')" 
            :alt="'Sécurité données personnelles'"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <p class="text-lg text-red-800 font-medium">
            Découvrez les meilleures pratiques pour sécuriser vos informations personnelles sur internet. Ce guide pratique vous donne tous les outils pour protéger votre vie privée numérique.
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <h2>Pourquoi la protection des données personnelles est-elle cruciale ?</h2>
          <p>
            Dans notre monde hyperconnecté, nos données personnelles sont constamment collectées, analysées et parfois exploitées. Entreprises, cybercriminels et même gouvernements peuvent utiliser ces informations à des fins commerciales, frauduleuses ou de surveillance. Protéger vos données personnelles n'est plus une option, c'est une nécessité.
          </p>

          <h2>Quelles données personnelles sont les plus sensibles ?</h2>
          <p>Certaines informations sont particulièrement convoitées et nécessitent une protection renforcée :</p>
          <ul>
            <li><strong>Identité</strong> : Nom, prénom, date de naissance, numéro de sécurité sociale</li>
            <li><strong>Coordonnées</strong> : Adresse, téléphone, email</li>
            <li><strong>Financières</strong> : Numéros de cartes, comptes bancaires, revenus</li>
            <li><strong>Médicales</strong> : Dossier médical, prescriptions, diagnostics</li>
            <li><strong>Biométriques</strong> : Empreintes digitales, reconnaissance faciale</li>
            <li><strong>Comportementales</strong> : Historique de navigation, préférences, géolocalisation</li>
          </ul>

          <h2>Les principales menaces en ligne</h2>

          <h3>1. Phishing et hameçonnage</h3>
          <p>Les attaques par phishing visent à vous faire révéler vos informations personnelles :</p>
          <ul>
            <li><strong>Emails frauduleux</strong> imitant des entreprises légitimes</li>
            <li><strong>Sites web contrefaits</strong> reproduisant des interfaces connues</li>
            <li><strong>Appels téléphoniques</strong> usurpant l'identité de services officiels</li>
            <li><strong>Messages SMS</strong> demandant des informations sensibles</li>
          </ul>

          <h4>Comment se protéger du phishing</h4>
          <ul>
            <li>Vérifiez l'URL des sites avant de saisir des informations</li>
            <li>Ne cliquez jamais sur des liens dans des emails suspects</li>
            <li>Vérifiez l'expéditeur des emails</li>
            <li>Utilisez un antivirus avec protection anti-phishing</li>
          </ul>

          <h3>2. Malwares et virus</h3>
          <p>Les logiciels malveillants peuvent voler vos données :</p>
          <ul>
            <li><strong>Keyloggers</strong> : Enregistrent vos frappes clavier</li>
            <li><strong>Spyware</strong> : Surveillent vos activités</li>
            <li><strong>Ransomware</strong> : Cryptent vos fichiers contre rançon</li>
            <li><strong>Trojans</strong> : Donnent accès à votre ordinateur</li>
          </ul>

          <h4>Protection contre les malwares</h4>
          <ul>
            <li>Installez un antivirus de qualité et mettez-le à jour</li>
            <li>N'ouvrez jamais de pièces jointes suspectes</li>
            <li>Évitez les sites de téléchargement douteux</li>
            <li>Maintenez votre système d'exploitation à jour</li>
          </ul>

          <h3>3. Violations de données</h3>
          <p>Même les entreprises sécurisées peuvent être victimes de cyberattaques :</p>
          <ul>
            <li><strong>Piratage de bases de données</strong> d'entreprises</li>
            <li><strong>Fuites accidentelles</strong> d'informations</li>
            <li><strong>Erreurs humaines</strong> exposant des données</li>
            <li><strong>Vulnérabilités</strong> non corrigées</li>
          </ul>

          <h2>Protection des mots de passe</h2>
          <p>Vos mots de passe sont la première ligne de défense :</p>

          <h3>Règles pour des mots de passe forts</h3>
          <ul>
            <li><strong>Longueur minimale</strong> : Au moins 12 caractères</li>
            <li><strong>Complexité</strong> : Majuscules, minuscules, chiffres, symboles</li>
            <li><strong>Unicité</strong> : Un mot de passe différent par compte</li>
            <li><strong>Éviter</strong> : Informations personnelles, mots du dictionnaire</li>
          </ul>

          <h3>Gestionnaires de mots de passe</h3>
          <p>Utilisez un gestionnaire de mots de passe pour :</p>
          <ul>
            <li>Générer des mots de passe complexes et uniques</li>
            <li>Stocker vos identifiants de manière sécurisée</li>
            <li>Synchroniser vos mots de passe entre appareils</li>
            <li>Remplir automatiquement les formulaires</li>
          </ul>

          <h4>Gestionnaires recommandés</h4>
          <ul>
            <li><strong>Bitwarden</strong> : Gratuit et open source</li>
            <li><strong>1Password</strong> : Interface intuitive et sécurisée</li>
            <li><strong>LastPass</strong> : Fonctionnalités avancées</li>
            <li><strong>KeePass</strong> : Stockage local uniquement</li>
          </ul>

          <h2>Authentification à deux facteurs (2FA)</h2>
          <p>La 2FA ajoute une couche de sécurité supplémentaire :</p>

          <h3>Types de 2FA</h3>
          <ul>
            <li><strong>SMS</strong> : Code envoyé par message (moins sécurisé)</li>
            <li><strong>Applications</strong> : Google Authenticator, Authy</li>
            <li><strong>Clés physiques</strong> : YubiKey, Titan Security Key</li>
            <li><strong>Biométrie</strong> : Empreinte digitale, reconnaissance faciale</li>
          </ul>

          <h3>Services à protéger en priorité</h3>
          <ul>
            <li>Comptes bancaires et financiers</li>
            <li>Emails professionnels et personnels</li>
            <li>Réseaux sociaux</li>
            <li>Services de stockage cloud</li>
            <li>Comptes de shopping en ligne</li>
          </ul>

          <h2>Protection de votre navigateur</h2>
          <p>Votre navigateur est votre fenêtre sur internet, protégez-le :</p>

          <h3>Extensions de sécurité recommandées</h3>
          <ul>
            <li><strong>uBlock Origin</strong> : Bloque les publicités et trackers</li>
            <li><strong>Privacy Badger</strong> : Bloque le tracking automatiquement</li>
            <li><strong>HTTPS Everywhere</strong> : Force les connexions sécurisées</li>
            <li><strong>NoScript</strong> : Bloque les scripts malveillants</li>
          </ul>

          <h3>Paramètres de confidentialité</h3>
          <ul>
            <li>Désactivez les cookies tiers</li>
            <li>Bloquez le tracking entre sites</li>
            <li>Effacez l'historique régulièrement</li>
            <li>Utilisez le mode navigation privée</li>
          </ul>

          <h2>Protection des réseaux sociaux</h2>
          <p>Les réseaux sociaux collectent énormément de données sur vous :</p>

          <h3>Paramètres de confidentialité à vérifier</h3>
          <ul>
            <li><strong>Profil public/privé</strong> : Limitez l'accès à vos informations</li>
            <li><strong>Géolocalisation</strong> : Désactivez le partage de position</li>
            <li><strong>Tags automatiques</strong> : Contrôlez qui peut vous identifier</li>
            <li><strong>Publicités ciblées</strong> : Limitez le ciblage publicitaire</li>
          </ul>

          <h3>Bonnes pratiques</h3>
          <ul>
            <li>Ne partagez jamais d'informations sensibles</li>
            <li>Vérifiez vos paramètres de confidentialité régulièrement</li>
            <li>Utilisez des pseudos quand c'est possible</li>
            <li>Méfiez-vous des applications tierces</li>
          </ul>

          <h2>Protection des appareils mobiles</h2>
          <p>Vos smartphones et tablettes contiennent vos données les plus sensibles :</p>

          <h3>Sécurisation de base</h3>
          <ul>
            <li><strong>Code de verrouillage</strong> : PIN, mot de passe ou biométrie</li>
            <li><strong>Chiffrement</strong> : Activez le chiffrement des données</li>
            <li><strong>Mises à jour</strong> : Gardez votre système à jour</li>
            <li><strong>Antivirus</strong> : Installez une solution mobile</li>
          </ul>

          <h3>Applications et permissions</h3>
          <ul>
            <li>Vérifiez les permissions demandées par les applications</li>
            <li>Ne donnez accès qu'aux fonctionnalités nécessaires</li>
            <li>Supprimez les applications inutilisées</li>
            <li>Vérifiez la réputation des développeurs</li>
          </ul>

          <h2>Protection des données de santé</h2>
          <p>Les données médicales sont particulièrement sensibles :</p>

          <h3>Applications de santé</h3>
          <ul>
            <li>Privilégiez les applications certifiées</li>
            <li>Vérifiez la politique de confidentialité</li>
            <li>Limitez le partage de données</li>
            <li>Utilisez des pseudos si possible</li>
          </ul>

          <h3>Objets connectés médicaux</h3>
          <ul>
            <li>Changez les mots de passe par défaut</li>
            <li>Mettez à jour le firmware régulièrement</li>
            <li>Vérifiez la sécurité des connexions</li>
            <li>Limitez l'accès réseau si possible</li>
          </ul>

          <h2>Protection des données financières</h2>
          <p>Vos informations financières sont très convoitées :</p>

          <h3>Paiements en ligne</h3>
          <ul>
            <li>Utilisez des cartes de paiement dédiées</li>
            <li>Vérifiez que le site utilise HTTPS</li>
            <li>Privilégiez PayPal ou Apple Pay</li>
            <li>Ne sauvegardez jamais vos informations de carte</li>
          </ul>

          <h3>Banque en ligne</h3>
          <ul>
            <li>Activez les notifications de transaction</li>
            <li>Utilisez un appareil dédié si possible</li>
            <li>Ne vous connectez jamais sur des réseaux publics</li>
            <li>Vérifiez régulièrement vos relevés</li>
          </ul>

          <h2>Protection du domicile connecté</h2>
          <p>Les objets connectés peuvent exposer votre vie privée :</p>

          <h3>Caméras et assistants vocaux</h3>
          <ul>
            <li>Changez les mots de passe par défaut</li>
            <li>Utilisez des réseaux WiFi séparés</li>
            <li>Désactivez les fonctionnalités non essentielles</li>
            <li>Vérifiez les paramètres de partage</li>
          </ul>

          <h3>Réseau WiFi domestique</h3>
          <ul>
            <li>Utilisez un mot de passe fort pour votre WiFi</li>
            <li>Activez le chiffrement WPA3</li>
            <li>Changez le nom de votre réseau</li>
            <li>Désactivez le WPS</li>
          </ul>

          <h2>Outils et services de protection</h2>
          <p>Plusieurs outils peuvent vous aider à protéger vos données :</p>

          <h3>VPN (Réseau Privé Virtuel)</h3>
          <ul>
            <li><strong>NordVPN</strong> : Interface simple et sécurisée</li>
            <li><strong>ExpressVPN</strong> : Vitesse élevée et sécurité</li>
            <li><strong>ProtonVPN</strong> : Respect de la vie privée</li>
            <li><strong>Mullvad</strong> : Anonymat maximal</li>
          </ul>

          <h3>Antivirus et sécurité</h3>
          <ul>
            <li><strong>Bitdefender</strong> : Protection complète</li>
            <li><strong>Kaspersky</strong> : Détection avancée</li>
            <li><strong>Malwarebytes</strong> : Anti-malware spécialisé</li>
            <li><strong>Windows Defender</strong> : Solution intégrée Windows</li>
          </ul>

          <h2>Bonnes pratiques générales</h2>
          <p>Adoptez ces habitudes pour renforcer votre sécurité :</p>

          <h3>Au quotidien</h3>
          <ul>
            <li>Vérifiez régulièrement vos comptes en ligne</li>
            <li>Activez les alertes de sécurité</li>
            <li>Faites des sauvegardes régulières</li>
            <li>Mettez à jour vos logiciels</li>
            <li>Méfiez-vous des offres trop alléchantes</li>
          </ul>

          <h3>En cas de problème</h3>
          <ul>
            <li>Changez immédiatement vos mots de passe</li>
            <li>Contactez votre banque si nécessaire</li>
            <li>Signalez les fraudes aux autorités</li>
            <li>Documentez tout incident</li>
            <li>Consultez un expert si nécessaire</li>
          </ul>

          <h2>Surveillance et monitoring</h2>
          <p>Surveillez régulièrement l'état de vos données :</p>

          <h3>Services de surveillance</h3>
          <ul>
            <li><strong>Have I Been Pwned</strong> : Vérifiez si vos données ont fuité</li>
            <li><strong>Firefox Monitor</strong> : Surveillance des fuites de données</li>
            <li><strong>Google Security Checkup</strong> : Vérification de la sécurité Google</li>
            <li><strong>Facebook Security Checkup</strong> : Sécurité de votre compte Facebook</li>
          </ul>

          <h3>Audit de sécurité personnel</h3>
          <ul>
            <li>Listez tous vos comptes en ligne</li>
            <li>Vérifiez les paramètres de confidentialité</li>
            <li>Supprimez les comptes inutilisés</li>
            <li>Révoquez les accès d'applications tierces</li>
          </ul>

          <h2>Formation et sensibilisation</h2>
          <p>La sécurité numérique s'apprend :</p>

          <h3>Ressources d'apprentissage</h3>
          <ul>
            <li><strong>CNIL</strong> : Guides officiels sur la protection des données</li>
            <li><strong>ANSSI</strong> : Recommandations de sécurité</li>
            <li><strong>Formations en ligne</strong> : Cours de cybersécurité</li>
            <li><strong>Communautés</strong> : Forums et groupes d'entraide</li>
          </ul>

          <h3>Formation des proches</h3>
          <ul>
            <li>Éduquez vos enfants à la sécurité en ligne</li>
            <li>Aidez vos parents à sécuriser leurs comptes</li>
            <li>Partagez les bonnes pratiques en famille</li>
            <li>Créez des règles de sécurité communes</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Protéger vos données personnelles en ligne nécessite une approche globale et continue. En combinant outils techniques, bonnes pratiques et vigilance, vous pouvez considérablement réduire les risques. N'oubliez pas que la sécurité numérique est un processus d'amélioration continue qui s'adapte aux nouvelles menaces.
          </p>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Prêt à reprendre le contrôle de vos données ?
          </h3>
          <p class="text-gray-600 mb-6">
            Utilisez notre générateur gratuit pour créer vos demandes de suppression RGPD
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
  title: 'Protéger vos données personnelles en ligne : Guide complet 2024 - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les meilleures pratiques pour sécuriser vos informations personnelles sur internet. Ce guide pratique vous donne tous les outils pour protéger votre vie privée numérique.'
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