<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Conditions d'<span class="gradient-text">Utilisation</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dernière mise à jour : {{ lastUpdated }}<br>
          En utilisant DeleteMyData, vous acceptez ces conditions d'utilisation.
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Ces conditions d'utilisation ("Conditions") régissent votre utilisation du service DeleteMyData 
              ("Service") fourni par DeleteMyData ("nous", "notre", "nos").
            </p>
            <p class="text-gray-700 leading-relaxed">
              En accédant ou en utilisant notre Service, vous acceptez d'être lié par ces Conditions. 
              Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne pouvez pas accéder au Service.
            </p>
          </div>

          <!-- Service Description -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Description du service</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              DeleteMyData est une plateforme qui vous permet de :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Générer des demandes RGPD conformes pour la suppression de vos données personnelles</li>
              <li>Accéder à un annuaire de contacts DPO et privacy@ d'entreprises</li>
              <li>Suivre l'état de vos demandes de suppression de données</li>
              <li>Obtenir des modèles légaux pré-approuvés pour vos demandes</li>
            </ul>
            <p class="text-gray-700 leading-relaxed">
              Nous fournissons des outils et des informations pour vous aider à exercer vos droits RGPD, 
              mais nous ne garantissons pas le résultat de vos demandes auprès des entreprises.
            </p>
          </div>

          <!-- User Accounts -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Comptes utilisateur</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Pour utiliser certaines fonctionnalités de notre Service, vous devez créer un compte :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Informations exactes :</strong> Vous devez fournir des informations exactes et à jour</li>
              <li><strong>Sécurité du compte :</strong> Vous êtes responsable de la sécurité de vos identifiants</li>
              <li><strong>Utilisation personnelle :</strong> Votre compte est personnel et ne peut être partagé</li>
              <li><strong>Âge minimum :</strong> Vous devez avoir au moins 16 ans pour créer un compte</li>
            </ul>
          </div>

          <!-- Acceptable Use -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Utilisation acceptable</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Vous vous engagez à utiliser notre Service de manière légale et éthique :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Utiliser le Service uniquement pour des demandes légitimes de suppression de données</li>
              <li>Ne pas utiliser le Service pour harceler ou nuire à des entreprises</li>
              <li>Ne pas tenter d'accéder de manière non autorisée à nos systèmes</li>
              <li>Ne pas utiliser le Service pour des activités frauduleuses ou illégales</li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>
          </div>

          <!-- Intellectual Property -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Le Service et son contenu original, fonctionnalités et fonctionnalités sont et resteront 
              la propriété exclusive de DeleteMyData et de ses concédants de licence.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Vous conservez la propriété de vos demandes RGPD générées, mais nous nous réservons le droit 
              d'utiliser des données anonymisées pour améliorer nos services.
            </p>
          </div>

          <!-- Privacy -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Confidentialité</h2>
            <p class="text-gray-700 leading-relaxed">
              Votre utilisation du Service est également régie par notre 
              <a href="/privacy" class="text-blue-600 hover:underline">Politique de confidentialité</a>. 
              Veuillez consulter cette politique pour comprendre nos pratiques.
            </p>
          </div>

          <!-- Disclaimers -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Avertissements et limitations</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Le Service est fourni "en l'état" et "selon disponibilité" :</strong>
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Nous ne garantissons pas que le Service sera ininterrompu ou sans erreur</li>
              <li>Nous ne garantissons pas le résultat de vos demandes RGPD auprès des entreprises</li>
              <li>Les informations de l'annuaire sont fournies à titre indicatif</li>
              <li>Nous ne sommes pas responsables des actions des entreprises tierces</li>
            </ul>
            <p class="text-gray-700 leading-relaxed">
              <strong>Note importante :</strong> Nos services ne constituent pas un conseil juridique. 
              Pour des questions juridiques complexes, consultez un avocat spécialisé.
            </p>
          </div>

          <!-- Limitation of Liability -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Limitation de responsabilité</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Dans toute la mesure permise par la loi applicable, DeleteMyData ne sera pas responsable :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Des dommages indirects, accessoires, spéciaux ou consécutifs</li>
              <li>De la perte de profits, de données ou d'opportunités commerciales</li>
              <li>Des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le Service</li>
              <li>Des actions des entreprises tierces ou des résultats de vos demandes RGPD</li>
            </ul>
            <p class="text-gray-700 leading-relaxed">
              Notre responsabilité totale ne dépassera jamais le montant que vous avez payé pour nos services 
              au cours des 12 mois précédant l'événement à l'origine de la responsabilité.
            </p>
          </div>

          <!-- Termination -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Résiliation</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, 
              pour quelque raison que ce soit, y compris sans limitation si vous violez les Conditions.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Vous pouvez résilier votre compte à tout moment en nous contactant. 
              La résiliation de votre compte n'affecte pas la validité de vos demandes RGPD déjà générées.
            </p>
          </div>

          <!-- Governing Law -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Droit applicable</h2>
            <p class="text-gray-700 leading-relaxed">
              Ces Conditions sont régies et interprétées conformément aux lois françaises. 
              Tout litige sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </div>

          <!-- Changes to Terms -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Modifications des conditions</h2>
            <p class="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier ces Conditions à tout moment. 
              Les modifications prendront effet immédiatement après leur publication sur cette page. 
              Votre utilisation continue du Service après la publication des modifications constitue 
              votre acceptation des nouvelles Conditions.
            </p>
          </div>

          <!-- Contact -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Nous contacter</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Si vous avez des questions concernant ces Conditions d'utilisation, 
              contactez-nous :
            </p>
            <div class="bg-gray-50 rounded-lg p-6">
              <p class="text-gray-700 mb-2">
                <strong>Email :</strong> <a href="mailto:legal@deletemydata.online" class="text-blue-600 hover:underline">legal@deletemydata.online</a>
              </p>
              <p class="text-gray-700 mb-2">
                <strong>Adresse :</strong> DeleteMyData, [Adresse], France
              </p>
              <p class="text-gray-700">
                <strong>Support :</strong> <a href="/contact" class="text-blue-600 hover:underline">Formulaire de contact</a>
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center bg-blue-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h3>
            <p class="text-gray-600 mb-6">
              Créez votre première demande RGPD en quelques minutes.
            </p>
            <a href="http://localhost:3005/generator" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              Commencer gratuitement
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Conditions d\'Utilisation - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Conditions d\'utilisation de DeleteMyData. Découvrez les règles et conditions d\'utilisation de nos services RGPD.'
    }
  ]
})

// Date de dernière mise à jour
const lastUpdated = '21 août 2024'
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 