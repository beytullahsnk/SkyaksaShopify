# 🚀 Guide de Déploiement - Skyaksa

## 📦 Stockage des données sur OVH

### ✅ Solution actuelle (Fichiers JSON)

**Fonctionne sur :**
- ✅ VPS OVH (serveur dédié)
- ✅ Serveur dédié OVH
- ❌ Hébergement partagé (risque de perte de données)

**Avantages :**
- Simple, pas de configuration
- Fonctionne immédiatement
- Pas de coût supplémentaire

**Inconvénients :**
- Pas de backup automatique
- Risque de perte si le serveur crash
- Pas de sécurité (fichiers accessibles)
- Pas de recherche/filtrage avancé

**Où sont stockées les données :**
```
/data/
  ├── newsletter-subscribers.json
  └── contact-submissions.json
```

---

## 🔒 Solutions recommandées pour la production

### Option 1 : Base de données MySQL/PostgreSQL (OVH)

Si vous avez accès à une base de données MySQL/PostgreSQL sur OVH :

```bash
npm install mysql2  # ou pg pour PostgreSQL
```

**Avantages :**
- Backup automatique (si configuré)
- Sécurité (accès contrôlé)
- Requêtes avancées
- Scalable

**Configuration :**
1. Créer une base de données dans votre panel OVH
2. Ajouter les variables d'environnement :
```env
DATABASE_URL=mysql://user:password@host:port/database
```

---

### Option 2 : Supabase (Gratuit jusqu'à 500MB)

Service cloud gratuit avec PostgreSQL :

```bash
npm install @supabase/supabase-js
```

**Avantages :**
- Gratuit (500MB)
- Backup automatique
- Interface admin
- API REST automatique

**Configuration :**
1. Créer un compte sur supabase.com
2. Créer un projet
3. Ajouter la clé API :
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

### Option 3 : PlanetScale (MySQL serverless)

MySQL serverless gratuit :

```bash
npm install @planetscale/database
```

**Avantages :**
- Gratuit (5GB)
- Serverless (pas de serveur à gérer)
- Branching (comme Git)

---

### Option 4 : MongoDB Atlas (Gratuit 512MB)

NoSQL cloud gratuit :

```bash
npm install mongodb
```

**Avantages :**
- Gratuit (512MB)
- Flexible (pas de schéma)
- Backup automatique

---

## 📋 Checklist déploiement OVH

### Avant la mise en ligne

- [ ] Vérifier le type d'hébergement (VPS ou partagé ?)
- [ ] Si VPS : les fichiers JSON fonctionneront
- [ ] Si partagé : migrer vers une base de données
- [ ] Configurer les variables d'environnement
- [ ] Tester le formulaire de contact
- [ ] Tester la newsletter
- [ ] Configurer les backups (si fichiers JSON)

### Variables d'environnement à configurer

Créez un fichier `.env.production` sur votre serveur :

```env
# Si vous utilisez une base de données
DATABASE_URL=mysql://user:password@host:port/database

# Ou pour Supabase
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

### Commandes de déploiement

```bash
# Build de production
npm run build

# Démarrer le serveur
npm start

# Ou avec PM2 (recommandé)
pm2 start npm --name "skyaksa" -- start
pm2 save
pm2 startup
```

---

## 🔐 Sécurité

### Protection des routes API

Les routes GET (`/api/contact` et `/api/newsletter`) exposent toutes les données.

**Pour la production, ajoutez une authentification :**

```typescript
// app/api/contact/route.ts
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (authHeader !== `Bearer ${process.env.API_SECRET_KEY}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // ... reste du code
}
```

Ajoutez dans `.env` :
```env
API_SECRET_KEY=votre-cle-secrete-tres-longue
```

---

## 📊 Monitoring

### Accéder aux données

**Via SSH sur votre serveur OVH :**
```bash
# Voir les abonnés newsletter
cat data/newsletter-subscribers.json

# Voir les contacts
cat data/contact-submissions.json

# Compter les entrées
jq 'length' data/newsletter-subscribers.json
```

**Via API (protégée) :**
```bash
curl -H "Authorization: Bearer votre-cle" \
  https://votre-site.com/api/newsletter
```

---

## 🆘 En cas de problème

### Les données ne se sauvegardent pas

1. Vérifier les permissions du dossier `/data` :
```bash
chmod 755 data
chmod 644 data/*.json
```

2. Vérifier que le serveur peut écrire :
```bash
touch data/test.json && rm data/test.json
```

### Perte de données

Si vous utilisez des fichiers JSON, faites des backups réguliers :
```bash
# Backup quotidien (à ajouter dans cron)
cp -r data/ backups/data-$(date +%Y%m%d)/
```

---

## 💡 Recommandation finale

**Pour commencer :** Les fichiers JSON fonctionnent sur un VPS OVH.

**Pour la production sérieuse :** Migrer vers Supabase (gratuit, simple, fiable).

Souhaitez-vous que je configure Supabase ou une autre solution ?

