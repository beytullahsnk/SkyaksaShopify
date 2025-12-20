# Skyaksa — Agence Shopify

Site vitrine pour Skyaksa, agence Shopify spécialisée. Design moderne inspiré de Libertems avec l'identité visuelle Skyaksa.

## 🎨 Design

- **Palette** : Violet Skyaksa (#7C3AED) + Vert Shopify (#95BF47)
- **Alternance** : Sections blanc/noir pour un contraste fort
- **Style** : Moderne, aéré, typographie bold avec highlights vert fluo
- **Bento grid** : Layout moderne pour les projets
- **Logo nuage** : SVG violet intégré dans le design

## Stack Technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Server Components**

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du Projet

```
/app
  /page.tsx          # Page d'accueil
  /layout.tsx        # Layout global
  /globals.css       # Styles globaux Tailwind

/components
  /Header.tsx        # Header avec logo nuage
  /Footer.tsx        # Footer
  /ui
    /Button.tsx      # Composant bouton
    /CloudLogo.tsx   # Logo nuage SVG
    /Badge.tsx       # Badge coloré
    /CircleBadge.tsx # Badge circulaire avec glow
  /sections
    /Hero.tsx        # Hero style SaaS
    /Problems.tsx    # Section problèmes (fond blanc)
    /Approach.tsx    # Section approche (fond noir)
    /Method.tsx      # Section méthode (fond blanc)
    /Projects.tsx    # Bento grid projets (fond noir)
    /FinalCTA.tsx    # CTA final (fond noir)
```

## 🛍️ Projets Présentés

**Vrais projets :**
1. **MXR Mousepads** - E-commerce gaming, tapis édition limitée
2. **Michino** - Maroquinerie de luxe, sacs haut de gamme
3. **Babanono** - Puériculture personnalisée, attache tétine sur-mesure

**Projets portfolio :**
4. Boutique Mode - E-commerce textile
5. Marketplace Artisanat - Multi-vendeurs

## 📄 Pages

- ✅ `/` - Page d'accueil
- ⬜ `/ce-que-lon-fait` - Services
- ⬜ `/methode` - Méthode détaillée
- ⬜ `/projets` - Portfolio complet
- ⬜ `/journal` - Blog
- ⬜ `/contact` - Formulaire

## 🎯 Positionnement

Skyaksa est une **agence Shopify** (jamais "freelance") qui :
- Crée des boutiques e-commerce uniques
- Personnalise chaque projet
- Reflète l'identité de marque des clients
- Se spécialise exclusivement sur Shopify

## Build Production

```bash
npm run build
npm start
```

## Prochaines Étapes

1. Ajouter vraies screenshots des boutiques (MXR, Michino, Babanono)
2. Créer page Contact avec formulaire
3. Créer page Services détaillée
4. Ajouter animations scroll (Framer Motion)
5. Optimiser SEO (sitemap, metadata, Open Graph)


