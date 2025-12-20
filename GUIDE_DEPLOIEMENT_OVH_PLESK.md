# 🚀 Guide de Déploiement OVH + Plesk - Skyaksa

Guide complet pour déployer ton site Next.js sur OVH via Plesk.

---

## 📋 Prérequis

- ✅ Compte OVH avec Plesk
- ✅ Compte GitHub
- ✅ Node.js installé en local (pour le build)
- ✅ Accès SSH à ton serveur OVH (optionnel mais recommandé)

---

## 🔧 Étape 1 : Préparer le projet en local

### 1.1 Vérifier que tout fonctionne

```bash
# Installer les dépendances
npm install

# Tester le build
npm run build

# Tester en local
npm start
```

### 1.2 Créer le fichier `.env.production`

Crée un fichier `.env.production` à la racine (ne sera PAS commité) :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_yyyyy
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx

# URL du site (optionnel)
NEXT_PUBLIC_SITE_URL=https://skyaksa.com
```

**⚠️ Important :** Remplace les valeurs par tes vraies clés EmailJS.

### 1.3 Pousser le code sur GitHub

```bash
# Initialiser Git si pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial commit - Skyaksa Shopify"

# Ajouter ton repo GitHub (remplace par ton URL)
git remote add origin https://github.com/ton-username/skyaksa-shopify.git

# Pousser
git push -u origin main
```

---

## 🖥️ Étape 2 : Configurer Plesk

### 2.1 Activer Node.js dans Plesk

1. **Se connecter à Plesk**
2. Aller dans **"Domaines"** → Sélectionner ton domaine
3. Aller dans **"Node.js"** (dans le menu de gauche)
4. **Activer Node.js** :
   - Version Node.js : Choisir **18.x** ou **20.x** (LTS)
   - Mode d'application : **Production**
   - Document root : `/httpdocs` (ou `/public_html` selon ton config)
   - Cliquer sur **"Activer"**

### 2.2 Configurer le point d'entrée

Dans la section **Node.js** de Plesk :

- **Fichier de démarrage** : `server.js` (on va le créer)
- **Port** : Laisser par défaut (généralement 3000 ou auto)
- **Mode** : Production

---

## 📦 Étape 3 : Déployer le code

### Option A : Via Git (RECOMMANDÉ) ✅

#### 3.1 Configurer Git dans Plesk

1. Dans Plesk → **"Git"** (menu de gauche)
2. Cliquer sur **"Activer Git"**
3. **Repository URL** : `https://github.com/ton-username/skyaksa-shopify.git`
4. **Branche** : `main` (ou `master`)
5. **Déploiement automatique** : ✅ Cocher
6. Cliquer sur **"OK"**

#### 3.2 Configurer le déploiement

Dans **Git** → **"Paramètres"** :

- **Répertoire de déploiement** : `/httpdocs` (ou `/public_html`)
- **Commande de déploiement** : 
  ```bash
  npm install --production && npm run build
  ```

#### 3.3 Déployer

1. Cliquer sur **"Extraire"** dans Git
2. Attendre que le code soit téléchargé
3. Le build se lancera automatiquement

---

### Option B : Via FTP/SFTP (Alternative)

Si Git ne fonctionne pas dans Plesk :

#### 3.1 Build en local

```bash
# Build de production
npm run build

# Créer un dossier de déploiement
mkdir deploy
cp -r .next deploy/
cp -r public deploy/
cp -r app deploy/
cp -r components deploy/
cp -r hooks deploy/
cp package.json deploy/
cp package-lock.json deploy/
cp next.config.js deploy/
cp tsconfig.json deploy/
cp tailwind.config.ts deploy/
cp postcss.config.js deploy/
cp -r styles deploy/ 2>/dev/null || true
```

#### 3.2 Uploader via FTP

1. Utiliser FileZilla ou Cyberduck
2. Se connecter à ton serveur OVH
3. Uploader le contenu de `deploy/` dans `/httpdocs` (ou `/public_html`)

---

## ⚙️ Étape 4 : Configuration serveur

### 4.1 Créer le fichier `server.js`

Dans Plesk → **File Manager** (ou via FTP), créer `server.js` à la racine :

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

### 4.2 Créer le dossier `data`

Dans Plesk → **File Manager** :

1. Créer le dossier `/data` à la racine
2. Créer les fichiers :
   - `/data/newsletter-subscribers.json` → Contenu : `[]`
   - `/data/contact-submissions.json` → Contenu : `[]`
3. **Permissions** : 
   - Dossier `data` : `755`
   - Fichiers JSON : `644`

**Via SSH (si tu as accès) :**
```bash
mkdir -p data
echo '[]' > data/newsletter-subscribers.json
echo '[]' > data/contact-submissions.json
chmod 755 data
chmod 644 data/*.json
```

### 4.3 Installer les dépendances

Dans Plesk → **Node.js** → **"npm install"** :

Ou via SSH :
```bash
cd /var/www/vhosts/ton-domaine/httpdocs
npm install --production
```

---

## 🔐 Étape 5 : Variables d'environnement

### 5.1 Dans Plesk

1. Aller dans **Node.js** → **"Variables d'environnement"**
2. Ajouter chaque variable :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_xxxxx
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID = template_xxxxx
NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID = template_yyyyy
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = xxxxxxxxxxxxx
NODE_ENV = production
```

**⚠️ Important :** Remplace par tes vraies valeurs EmailJS.

### 5.2 Vérifier

Redémarrer Node.js dans Plesk pour appliquer les variables.

---

## 🚀 Étape 6 : Démarrer l'application

### 6.1 Dans Plesk

1. Aller dans **Node.js**
2. Vérifier que :
   - **Fichier de démarrage** : `server.js`
   - **Port** : Configuré (ex: 3000)
   - **Mode** : Production
3. Cliquer sur **"Redémarrer l'application"**

### 6.2 Vérifier les logs

Dans **Node.js** → **"Logs"**, vérifier qu'il n'y a pas d'erreurs.

---

## 🌐 Étape 7 : Configurer le domaine

### 7.1 Proxy reverse (si nécessaire)

Si Plesk ne gère pas automatiquement le proxy vers Node.js :

1. Aller dans **"Apache & nginx Settings"**
2. Dans **"Additional nginx directives"**, ajouter :

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

3. Cliquer sur **"OK"**

### 7.2 SSL/HTTPS

1. Aller dans **"SSL/TLS Settings"**
2. Activer **"Let's Encrypt"** (gratuit)
3. Cocher **"Rediriger HTTP vers HTTPS"**

---

## ✅ Étape 8 : Tester

### 8.1 Vérifier le site

1. Aller sur `https://ton-domaine.com`
2. Vérifier que le site charge
3. Tester la navigation

### 8.2 Tester le formulaire de contact

1. Aller sur `/contact`
2. Remplir et envoyer
3. Vérifier que l'email arrive

### 8.3 Tester la newsletter

1. Aller sur un article
2. S'inscrire à la newsletter
3. Vérifier que l'email arrive

---

## 🔄 Mises à jour futures

### Via Git (automatique)

1. Faire tes modifications en local
2. Commit et push sur GitHub :
   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```
3. Dans Plesk → **Git** → **"Extraire"**
4. Le build se relancera automatiquement

### Via FTP (manuel)

1. Build en local : `npm run build`
2. Uploader les fichiers modifiés
3. Redémarrer Node.js dans Plesk

---

## 🐛 Résolution de problèmes

### Erreur : "Cannot find module 'next'"

**Solution :**
```bash
# Via SSH ou dans Plesk
cd /httpdocs
npm install --production
```

### Erreur : "Port already in use"

**Solution :**
1. Dans Plesk → **Node.js**
2. Changer le port (ex: 3001)
3. Redémarrer

### Erreur : "Permission denied" sur `/data`

**Solution :**
```bash
# Via SSH
chmod 755 data
chmod 644 data/*.json
```

### Le site ne charge pas

**Vérifier :**
1. Node.js est démarré dans Plesk
2. Les logs ne montrent pas d'erreurs
3. Le proxy reverse est configuré (si nécessaire)
4. Le port est correct

### Les emails ne partent pas

**Vérifier :**
1. Les variables d'environnement EmailJS sont bien configurées
2. Redémarrer Node.js après avoir ajouté les variables
3. Vérifier les logs dans EmailJS dashboard

---

## 📊 Monitoring

### Voir les logs

Dans Plesk → **Node.js** → **"Logs"**

### Voir les données sauvegardées

Via SSH :
```bash
cat /httpdocs/data/newsletter-subscribers.json
cat /httpdocs/data/contact-submissions.json
```

---

## 🔒 Sécurité

### Backup des données

Créer un script de backup (via cron dans Plesk) :

```bash
#!/bin/bash
DATE=$(date +%Y%m%d)
cp -r /httpdocs/data /backups/data-$DATE
```

### Protection des routes API

Les routes `/api/contact` et `/api/newsletter` sont publiques. Pour la production, ajouter une authentification (voir `GUIDE_DEPLOIEMENT.md`).

---

## ✅ Checklist finale

- [ ] Code poussé sur GitHub
- [ ] Node.js activé dans Plesk
- [ ] Code déployé (Git ou FTP)
- [ ] `server.js` créé
- [ ] Dossier `data` créé avec permissions
- [ ] Variables d'environnement configurées
- [ ] `npm install` exécuté
- [ ] `npm run build` exécuté
- [ ] Node.js démarré
- [ ] Proxy reverse configuré (si nécessaire)
- [ ] SSL/HTTPS activé
- [ ] Site accessible
- [ ] Formulaire de contact testé
- [ ] Newsletter testée

---

## 🎉 C'est tout !

Ton site est maintenant en ligne. Pour les mises à jour, utilise Git (Option A) pour un déploiement automatique.

