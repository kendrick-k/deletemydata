# DeleteMyData — Stratégie de distribution

> Document vivant — à réévaluer régulièrement. Dernière réévaluation : 2026-06-12
> Statut : en développement (MVP avancé, vitrine déployable Netlify) · URL : deletemydata.online (à confirmer en prod)

## À quoi sert le produit
DeleteMyData aide les particuliers à exercer leurs droits RGPD : générer des demandes de suppression/accès de données prêtes à envoyer, trouver les contacts privacy/DPO des entreprises, et (à terme) suivre les demandes envoyées. Il supprime la friction juridique et administrative de l'exercice du droit à l'effacement.

## Features clés
(réellement présentes dans le code — cf. README du 2026-05-14)
- Générateur de demandes RGPD : formulaire, génération de texte, export PDF (jspdf), ouverture mailto:, tracking d'usage
- Annuaire privacy/DPO : recherche d'entreprises (données statiques de démo pour l'instant)
- Liste d'attente RGPD (waiting_list_rgpd) et formulaire de contact (Supabase)
- Blog SEO en français (ex. « supprimer ses données Google », protection des données entreprises)
- Pages login/signup/dashboard présentes mais largement simulées (auth non branchée)
- Pas d'intégration Stripe runtime (paiement = intention produit documentée)

## Cibles & avatars
1. **Particulier soucieux de sa vie privée (FR/EU)** — douleur : ne sait pas comment formuler une demande RGPD ni à qui l'envoyer ; déclencheur : fuite de données, spam, démarchage, article de presse ; où le trouver : recherche Google (« supprimer mes données [entreprise] »), Reddit r/privacy, r/vosfinances.
2. **Victime de fuite de données** — douleur : ses données circulent, veut agir vite ; déclencheur : notification de breach (CNIL, HaveIBeenPwned) ; où le trouver : SEO réactif sur les breaches, communautés sécurité.
3. (à valider) **DPO/juriste de PME** — pourrait utiliser l'annuaire et les modèles ; déclencheur : gestion de demandes entrantes ; où le trouver : LinkedIn, AFCDP.

## Pricing — combien
Source : `components/PricingSection.vue` (affiché sur la landing, paiement non implémenté)
- **Gratuit** : 0€/mois
- **Pro** : 9€/mois
- **Business** : 49€/mois
Note : aucun checkout Stripe dans le code — pricing affiché mais non transactionnel à ce jour.

## Canaux de distribution
1. **SEO programmatique** — canal n°1 : une page par entreprise « Comment supprimer vos données chez [X] » alimentée par l'annuaire (le blog amorce déjà ce modèle avec Google). Intent fort, longue traîne énorme.
2. **SEO réactif sur les fuites de données** — pages/articles publiés rapidement après chaque breach médiatisé.
3. **Communautés privacy** — Reddit (r/privacy, r/gdpr, r/france), forums, newsletters privacy (FR et EU).
4. **Product Hunt / annuaires d'outils gratuits** — le générateur gratuit est un bon candidat à un lancement.
5. **Partenariats** — associations de consommateurs (UFC-Que Choisir-like), créateurs de contenu privacy/YouTube.

## Positionnement & différenciation
Alternative gratuite et francophone aux services type Incogni/DeleteMe : au lieu d'un abonnement opaque qui « fait à votre place », DeleteMyData outille l'utilisateur (modèles juridiques corrects + bons contacts DPO) gratuitement, avec un upsell sur le suivi automatisé. L'angle FR/RGPD natif est un différenciateur face aux acteurs US (CCPA-first).

## Métriques à suivre
- Demandes générées / semaine (table generator_usage)
- Trafic SEO organique et nb de pages annuaire indexées
- Inscriptions waiting list / leads
- Taux de complétion du générateur (démarré → PDF/mailto)
- Conversion Free → Pro (une fois le paiement branché)

## Prochaines actions
1. Brancher l'annuaire sur des données réelles (table/API) — prérequis au SEO programmatique.
2. Lancer le SEO programmatique : générer les pages « supprimer ses données chez [X] » pour le top 100 des entreprises FR.
3. Finaliser l'auth Supabase + table deletion_requests pour le suivi des demandes (cœur de l'offre Pro).
4. Intégrer Stripe pour rendre les plans Pro/Business transactionnels.
5. Préparer un lancement Product Hunt / Reddit une fois l'annuaire réel en ligne.

## Journal de réévaluation

| Date | Constat | Décision |
|------|---------|----------|
| 2026-06-12 | Création du document. MVP avancé : générateur fonctionnel, annuaire en données de démo, auth simulée, pas de Stripe. | Prioriser annuaire réel + SEO programmatique avant monétisation |
