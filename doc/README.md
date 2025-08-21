# DeleteMyData.online 🗑️

**Effacez vos données personnelles. Vraiment.**

Plateforme automatisée pour générer, envoyer et suivre vos demandes RGPD / Delete Act vers des centaines d'entreprises en un clic.

## 🚀 Fonctionnalités

- **Annuaire Privacy Contacts** : Base de données des contacts DPO, privacy@ et légaux vérifiés
- **Générateur de demandes** : Modèles RGPD/Delete Act pré-approuvés par des avocats
- **Suivi automatique** : Envoi, relances et notifications automatiques
- **Preuves horodatées** : Horodatage blockchain et journal d'audit complet
- **Conformité UE** : RGPD et Delete Act US

## 🛠️ Stack Technique

- **Frontend** : Nuxt 3 + Vue 3 + Tailwind CSS
- **Backend** : Supabase (Auth + DB + Edge Functions)
- **Email** : Resend/Mailjet avec webhooks
- **Paiements** : Stripe
- **Analytics** : Plausible/Umami (privacy-friendly)

## 📦 Installation

1. **Cloner le projet**
```bash
git clone https://github.com/yourusername/deletemydata.git
cd deletemydata
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration Supabase**
```bash
# Créer un fichier .env.local
cp .env.example .env.local

# Remplir les variables d'environnement
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

4. **Lancer en développement**
```bash
npm run dev
```

## 🗄️ Structure de la Base de Données

### Tables principales

```sql
-- Contacts de confidentialité par domaine
CREATE TABLE privacy_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  domain VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  dpo_email VARCHAR(255),
  privacy_email VARCHAR(255),
  legal_email VARCHAR(255),
  verification_status VARCHAR(50) DEFAULT 'pending',
  last_verified TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Demandes de suppression
CREATE TABLE deletion_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  company_domain VARCHAR(255),
  company_name VARCHAR(255),
  request_type VARCHAR(50), -- 'gdpr', 'delete_act'
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'sent', 'acknowledged', 'completed', 'rejected'
  request_data JSONB,
  sent_at TIMESTAMP WITH TIME ZONE,
  response_received_at TIMESTAMP WITH TIME ZONE,
  response_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Abonnements utilisateurs
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  plan_type VARCHAR(50), -- 'free', 'pro', 'business'
  stripe_subscription_id VARCHAR(255),
  status VARCHAR(50),
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎯 Roadmap (2 semaines)

### Semaine 1
- [x] Landing page + navigation
- [x] Structure de base Nuxt + Supabase
- [ ] Waitlist + emails de domaine
- [ ] Générateur RGPD (markdown→PDF)
- [ ] Table deletion_requests

### Semaine 2
- [ ] Endpoint "meilleur email privacy"
- [ ] Envoi via provider + webhooks
- [ ] Onboarding + pricing
- [ ] FAQ + publication

## 💰 Modèle de Tarification

- **Gratuit** : 3 demandes/mois, génération email/PDF
- **Pro** : 9€/mois, envoi auto, relances, preuves
- **Business** : 49€/mois, dashboard multi-marques, 3 sièges
- **Enterprise** : 500-2000€/mois (futur)

## 🔒 Sécurité & Conformité

- **RGPD** : Conformité complète avec le droit européen
- **Delete Act** : Support du California Privacy Protection Act
- **Chiffrement** : Données chiffrées en transit et au repos
- **Audit** : Journal complet de toutes les actions
- **Preuves** : Horodatage blockchain pour traçabilité

## 📧 Configuration Email

### Domaines recommandés
- `privacy@deletemydata.online`
- `dpo@deletemydata.online`
- `support@deletemydata.online`
- `abuse@deletemydata.online`

### DNS Records
```dns
# A record vers votre hébergeur
A deletemydata.online → your_server_ip

# CNAME pour www
CNAME www → deletemydata.online

# SPF, DKIM, DMARC pour la délivrabilité
TXT @ → "v=spf1 include:_spf.google.com ~all"
```

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
vercel --prod
```

### Variables d'environnement de production
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_production_key
EMAIL_API_KEY=your_production_email_key
STRIPE_SECRET_KEY=your_production_stripe_key
APP_URL=https://deletemydata.online
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : support@deletemydata.online
- **Documentation** : [docs.deletemydata.online](https://docs.deletemydata.online)
- **Discord** : [Rejoindre la communauté](https://discord.gg/deletemydata)

---

**DeleteMyData.online** - Reprenez le contrôle de vos données personnelles 🛡️
