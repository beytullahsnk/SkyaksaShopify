# 📧 Configuration EmailJS - Skyaksa

EmailJS permet d'envoyer des emails directement depuis le frontend, sans serveur backend.

**Gratuit jusqu'à 200 emails/mois** - Parfait pour commencer !

---

## 🚀 Étape 1 : Créer un compte EmailJS

1. Aller sur [https://www.emailjs.com](https://www.emailjs.com)
2. Créer un compte gratuit
3. Vérifier votre email

---

## ⚙️ Étape 2 : Configurer le service email

1. Dans le dashboard EmailJS, aller dans **Email Services**
2. Cliquer sur **Add New Service**
3. **⚠️ RECOMMANDÉ : Utiliser "Custom SMTP"** (plus fiable que Gmail/Outlook)
4. **Noter le Service ID** (ex: `service_xxxxx`)

### Option A : Custom SMTP (RECOMMANDÉ) ✅

**Pourquoi ?** Plus fiable, pas de problèmes de permissions Gmail.

1. Choisir **"Custom SMTP"**
2. Remplir les informations :
   - **Service Name** : `Skyaksa SMTP`
   - **Host** : Selon ton hébergeur :
     - **OVH** : `ssl0.ovh.net` (port 465) ou `ssl0.ovh.net` (port 587)
     - **Gmail** : `smtp.gmail.com` (port 587)
     - **Autre** : Vérifier avec ton hébergeur
   - **Port** : `587` (TLS) ou `465` (SSL)
   - **Username** : Ton email complet (ex: `contact@skyaksa.com`)
   - **Password** : Ton mot de passe email (ou mot de passe d'application si Gmail)
   - **Secure** : `TLS` (port 587) ou `SSL` (port 465)
3. Cliquer sur **"Create Service"**
4. **Noter le Service ID**

### Option B : Gmail (si erreur de permissions)

**Erreur : "Request had insufficient authentication scopes"**

**Solution 1 : Ré-authentifier avec les bons scopes**
1. Aller dans **Email Services** → Supprimer l'ancien service Gmail
2. Créer un nouveau service → Choisir **Gmail**
3. Lors de la connexion, **accepter TOUTES les permissions** demandées
4. Si ça ne marche pas, passer à la Solution 2

**Solution 2 : Utiliser un "App Password" (mot de passe d'application)**
1. Aller sur [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Créer un mot de passe d'application pour "Email"
3. Utiliser ce mot de passe dans **Custom SMTP** au lieu de Gmail direct :
   - Host : `smtp.gmail.com`
   - Port : `587`
   - Username : Ton email Gmail
   - Password : Le mot de passe d'application (16 caractères)
   - Secure : `TLS`

**Solution 3 : Utiliser Custom SMTP avec Gmail (MEILLEURE OPTION)**
- Plus fiable que l'intégration Gmail directe
- Suivre les étapes de la Solution 2 ci-dessus

---

## 📝 Étape 3 : Créer les templates d'email

### Template 1 : Formulaire de contact

1. Aller dans **Email Templates**
2. Cliquer sur **Create New Template**
3. Nom : `Contact Form - Skyaksa`
4. **Template ID** : Noter (ex: `template_xxxxx`)

**Contenu du template :**

```
Sujet : Nouvelle demande de contact - {{from_name}}

Bonjour,

Vous avez reçu une nouvelle demande de contact depuis le site Skyaksa :

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Site web existant : {{has_website}}
URL du site : {{website_url}}
Type de projet : {{project_type}}

Message :
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact Skyaksa.
```

**Variables utilisées :**
- `{{from_name}}` : Prénom + Nom
- `{{from_email}}` : Email du contact
- `{{phone}}` : Téléphone
- `{{has_website}}` : Oui/Non/En cours
- `{{website_url}}` : URL du site
- `{{project_type}}` : Type de projet
- `{{message}}` : Message

5. **To Email** : Votre email (ex: `contact@skyaksa.com`)
6. **From Name** : `Skyaksa Contact Form`
7. Sauvegarder

---

### Template 2 : Newsletter

1. Créer un nouveau template
2. Nom : `Newsletter Subscription - Skyaksa`
3. **Template ID** : Noter (ex: `template_yyyyy`)

**Contenu du template :**

```
Sujet : Nouvelle inscription newsletter - {{email}}

Bonjour,

Nouvelle inscription à la newsletter :

Email : {{email}}
Date : {{subscribed_at}}

---
Ce message a été envoyé depuis le site Skyaksa.
```

**Variables utilisées :**
- `{{email}}` : Email de l'abonné
- `{{subscribed_at}}` : Date d'inscription

4. **To Email** : Votre email (ex: `contact@skyaksa.com`)
5. **From Name** : `Skyaksa Newsletter`
6. Sauvegarder

---

## 🔑 Étape 4 : Récupérer la clé publique

1. Aller dans **Account** → **General**
2. Copier la **Public Key** (ex: `xxxxxxxxxxxxx`)

---

## 🔧 Étape 5 : Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_yyyyy
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**⚠️ Important :**
- Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client
- Ne jamais commiter `.env.local` (déjà dans `.gitignore`)

---

## 📋 Checklist de configuration

- [ ] Compte EmailJS créé
- [ ] Service email configuré (Service ID noté)
- [ ] Template "Contact Form" créé (Template ID noté)
- [ ] Template "Newsletter" créé (Template ID noté)
- [ ] Public Key récupérée
- [ ] Fichier `.env.local` créé avec toutes les variables
- [ ] Redémarrer le serveur de dev (`npm run dev`)

---

## 🧪 Tester

1. **Formulaire de contact** :
   - Aller sur `/contact`
   - Remplir et envoyer
   - Vérifier que l'email arrive dans votre boîte

2. **Newsletter** :
   - Aller sur un article
   - S'inscrire à la newsletter
   - Vérifier que l'email arrive

---

## 🚨 En cas d'erreur

### "Service ID is required"
- Vérifier que `.env.local` existe
- Vérifier que les variables commencent par `NEXT_PUBLIC_`
- Redémarrer le serveur (`npm run dev`)

### "Template ID is required"
- Vérifier les IDs dans `.env.local`
- Vérifier que les templates existent dans EmailJS

### "Public Key is invalid"
- Vérifier la clé dans EmailJS → Account → General
- Copier-coller exactement

---

## 📊 Limites gratuites

- **200 emails/mois** (gratuit)
- **2 services email**
- **2 templates**

**Si vous dépassez :**
- Plan payant : $15/mois (1000 emails)
- Ou utiliser les routes API locales en complément

---

## 🔒 Sécurité

- La Public Key est publique (c'est normal)
- EmailJS limite les envois par domaine
- Les emails sont envoyés depuis votre compte email configuré
- Pas de risque de spam (limite de 200/mois)

---

## 💡 Astuce

Vous pouvez aussi stocker les données localement (dans `/data/`) en plus d'envoyer l'email. C'est déjà configuré dans le code - les deux fonctionnent en parallèle.

---

## ✅ C'est tout !

Une fois configuré, les formulaires enverront automatiquement les emails à votre adresse.

