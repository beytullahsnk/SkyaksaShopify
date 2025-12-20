# 🔧 Fix : Erreur Gmail "insufficient authentication scopes"

## ❌ Le problème

```
Gmail_API: Request had insufficient authentication scopes.
```

Cela signifie que Gmail n'a pas les permissions nécessaires pour envoyer des emails.

---

## ✅ Solution rapide : Utiliser Custom SMTP

**C'est la solution la plus fiable !**

### Étape 1 : Supprimer l'ancien service Gmail

1. Dans EmailJS → **Email Services**
2. Supprimer le service Gmail qui pose problème

### Étape 2 : Créer un service Custom SMTP

1. Cliquer sur **"Add New Service"**
2. Choisir **"Custom SMTP"**
3. Remplir :

#### Si tu utilises Gmail :

```
Service Name: Skyaksa Gmail SMTP
Host: smtp.gmail.com
Port: 587
Username: ton-email@gmail.com
Password: [Voir étape 3]
Secure: TLS
```

#### Si tu utilises OVH (ou autre hébergeur) :

```
Service Name: Skyaksa SMTP
Host: ssl0.ovh.net
Port: 587
Username: contact@skyaksa.com (ton email complet)
Password: [Ton mot de passe email]
Secure: TLS
```

### Étape 3 : Créer un mot de passe d'application Gmail (si Gmail)

**Si tu utilises Gmail**, tu dois créer un "App Password" :

1. Aller sur [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Se connecter avec ton compte Gmail
3. Sélectionner **"Email"** et **"Autre (nom personnalisé)"**
4. Entrer : `EmailJS`
5. Cliquer sur **"Générer"**
6. **Copier le mot de passe** (16 caractères, ex: `abcd efgh ijkl mnop`)
7. **Coller ce mot de passe** dans EmailJS (sans les espaces)

### Étape 4 : Tester

1. Cliquer sur **"Create Service"**
2. Noter le **Service ID** (ex: `service_xxxxx`)
3. Tester en envoyant un email depuis ton site

---

## 🎯 Pourquoi Custom SMTP est mieux ?

- ✅ Pas de problèmes de permissions Google
- ✅ Fonctionne avec n'importe quel email (Gmail, OVH, etc.)
- ✅ Plus fiable et stable
- ✅ Même fonctionnalité que l'intégration Gmail directe

---

## 🔄 Alternative : Ré-authentifier Gmail

Si tu veux absolument utiliser l'intégration Gmail directe :

1. **Supprimer** l'ancien service Gmail dans EmailJS
2. **Créer un nouveau service** → Choisir **Gmail**
3. Lors de la connexion Google, **accepter TOUTES les permissions** :
   - ✅ Envoyer des emails en ton nom
   - ✅ Lire et modifier tes emails
   - ✅ Gérer tes paramètres Gmail
4. Si l'erreur persiste, utilise Custom SMTP (solution ci-dessus)

---

## 📧 Configuration SMTP par hébergeur

### Gmail
```
Host: smtp.gmail.com
Port: 587
Secure: TLS
Username: ton-email@gmail.com
Password: [App Password - voir étape 3]
```

### OVH
```
Host: ssl0.ovh.net
Port: 587 (ou 465 pour SSL)
Secure: TLS (ou SSL si port 465)
Username: contact@skyaksa.com
Password: [Ton mot de passe email OVH]
```

### Outlook
```
Host: smtp-mail.outlook.com
Port: 587
Secure: TLS
Username: ton-email@outlook.com
Password: [Ton mot de passe]
```

### Autre hébergeur
- Vérifier la documentation de ton hébergeur
- Chercher "SMTP settings" ou "Paramètres SMTP"
- Généralement : port 587 (TLS) ou 465 (SSL)

---

## ✅ C'est tout !

Une fois Custom SMTP configuré, l'erreur disparaîtra et tes emails fonctionneront parfaitement.

