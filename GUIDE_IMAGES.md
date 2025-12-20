# 📸 Guide des Images - Skyaksa

## 🎯 Optimisation SEO & Performance

Toutes les images doivent être :
- **Format** : JPG ou PNG (Next.js convertira en WebP/AVIF automatiquement)
- **Taille recommandée** : 
  - Hero : 1200x1200px minimum (carré)
  - Projets : 1200x1200px (carré)
  - Newsletter : 800x1000px (portrait)
  - Contact : 800x600px (paysage)
- **Poids** : < 500KB avant compression
- **Compression** : Utilise [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app) avant upload

---

## 📁 Structure des dossiers

```
/public
  /logo-skyaksa.png          (40x40px, PNG transparent)
  /skyaksa-agence-shopify-ecommerce-hero.jpg
  /contact-image.jpg
  /newsletter-skyaksa-equipe-shopify.jpg
  /projets/
    /mxr-mousepads-boutique-shopify-ecommerce.jpg
    /michino-maroquinerie-luxe-boutique-shopify.jpg
    /babanono-accessoires-bebe-boutique-shopify.jpg
  /articles/
    /cta-banner-shopify-ecommerce-1.jpg
    /cta-banner-shopify-ecommerce-2.jpg
    /cta-banner-shopify-ecommerce-3.jpg
    /cta-banner-shopify-ecommerce-4.jpg
```

---

## 🖼️ Images requises

### 1. Logo Skyaksa
- **Fichier** : `/public/logo-skyaksa.png`
- **Taille** : 40x40px (ou plus, sera redimensionné)
- **Format** : PNG avec transparence
- **Usage** : Header + Footer

### 2. Hero - Image principale
- **Fichier** : `/public/skyaksa-agence-shopify-ecommerce-hero.jpg`
- **Taille** : 1200x1200px minimum (carré)
- **Poids** : < 400KB
- **Alt** : "Agence Shopify Skyaksa - Création de boutiques e-commerce sur-mesure"
- **Usage** : Section Hero de la page d'accueil
- **SEO** : Image principale, prioritaire (priority)

### 3. Contact
- **Fichier** : `/public/contact-skyaksa-equipe-shopify.jpg`
- **Taille** : 800x600px (paysage)
- **Poids** : < 300KB
- **Alt** : "Contact Skyaksa - Équipe d'experts Shopify spécialisés en création de boutiques e-commerce"
- **Usage** : Page Contact (côté droit du formulaire)

### 4. Newsletter
- **Fichier** : `/public/newsletter-skyaksa-equipe-shopify.jpg`
- **Taille** : 800x1000px (portrait)
- **Poids** : < 300KB
- **Alt** : "Équipe Skyaksa - Agence Shopify spécialisée"
- **Usage** : Section newsletter dans les articles de blog

### 5. Projets (3 images)

#### MXR Mousepads
- **Fichier** : `/public/projets/mxr-mousepads-boutique-shopify-ecommerce.jpg`
- **Taille** : 1200x1200px (carré)
- **Poids** : < 400KB
- **Alt** : "MXR Mousepads - E-commerce Gaming - Boutique Shopify créée par Skyaksa"
- **Usage** : Section Projets

#### Michino
- **Fichier** : `/public/projets/michino-maroquinerie-luxe-boutique-shopify.jpg`
- **Taille** : 1200x1200px (carré)
- **Poids** : < 400KB
- **Alt** : "Michino - Maroquinerie de luxe - Boutique Shopify créée par Skyaksa"
- **Usage** : Section Projets

#### Babanono
- **Fichier** : `/public/projets/babanono-accessoires-bebe-boutique-shopify.jpg`
- **Taille** : 1200x1200px (carré)
- **Poids** : < 400KB
- **Alt** : "Babanono - Accessoires Bébé - Boutique Shopify créée par Skyaksa"
- **Usage** : Section Projets

### 6. Articles - CTA Banner (4 images décoratives)

Ces images apparaissent en haut de chaque article de blog, de manière décorative.

#### Image 1 (Haut gauche)
- **Fichier** : `/public/articles/cta-banner-shopify-ecommerce-1.jpg`
- **Taille** : 512x512px (carré, sera redimensionné à 128px)
- **Poids** : < 150KB
- **Alt** : "Boutique Shopify e-commerce créée par Skyaksa"
- **Usage** : CTA Banner articles (haut gauche, rotation 6°)

#### Image 2 (Bas gauche)
- **Fichier** : `/public/articles/cta-banner-shopify-ecommerce-2.jpg`
- **Taille** : 448x448px (carré, sera redimensionné à 112px)
- **Poids** : < 120KB
- **Alt** : "Agence Shopify Skyaksa - Optimisation e-commerce"
- **Usage** : CTA Banner articles (bas gauche, rotation -3°)

#### Image 3 (Haut droite)
- **Fichier** : `/public/articles/cta-banner-shopify-ecommerce-3.jpg`
- **Taille** : 448x448px (carré, sera redimensionné à 112px)
- **Poids** : < 120KB
- **Alt** : "Création boutique Shopify sur-mesure par Skyaksa"
- **Usage** : CTA Banner articles (haut droite, rotation 3°)

#### Image 4 (Bas droite)
- **Fichier** : `/public/articles/cta-banner-shopify-ecommerce-4.jpg`
- **Taille** : 512x512px (carré, sera redimensionné à 128px)
- **Poids** : < 150KB
- **Alt** : "Performance e-commerce Shopify - Agence Skyaksa"
- **Usage** : CTA Banner articles (bas droite, rotation -6°)

**Note** : Ces images sont décoratives et petites. Elles peuvent être des screenshots de boutiques, des visuels abstraits liés à Shopify/e-commerce, ou des éléments de design.

---

## ✅ Checklist avant upload

- [ ] Images compressées (< 500KB)
- [ ] Noms de fichiers SEO-friendly (mots-clés, tirets)
- [ ] Tailles respectées
- [ ] Formats corrects (JPG/PNG)
- [ ] Dossier `/public/projets/` créé
- [ ] Dossier `/public/articles/` créé
- [ ] Test visuel sur le site

---

## 🚀 Optimisations automatiques (Next.js)

Next.js optimise automatiquement :
- ✅ Conversion WebP/AVIF selon le navigateur
- ✅ Lazy loading (sauf images avec `priority`)
- ✅ Responsive images (`sizes` attribute)
- ✅ Cache 30 jours
- ✅ Compression automatique

**Aucune action requise de ta part** - Next.js gère tout ! 🎉

---

## 📝 Notes SEO

1. **Noms de fichiers** : Utilise des mots-clés pertinents (ex: `boutique-shopify-ecommerce.jpg`)
2. **Alt text** : Toujours descriptif, inclut le contexte (Skyaksa, Shopify, e-commerce)
3. **Priority** : Seule l'image Hero a `priority={true}` (chargement immédiat)
4. **Sizes** : Définis pour optimiser le chargement responsive

---

## 🔍 Vérification

Après upload, teste :
1. Images visibles sur toutes les pages
2. Chargement rapide (< 2s)
3. Responsive (mobile/desktop)
4. Alt text dans le code source

