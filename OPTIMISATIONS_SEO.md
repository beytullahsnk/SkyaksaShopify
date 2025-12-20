# 🚀 Optimisations SEO & Performance - Skyaksa

## ✅ Ce qui est déjà en place

### Images
- ✅ Next.js `<Image>` component (optimisation automatique)
- ✅ Formats WebP/AVIF automatiques
- ✅ Lazy loading (sauf Hero)
- ✅ Responsive images (`sizes` attribute)
- ✅ Cache 30 jours
- ✅ Alt text SEO-friendly

### Métadonnées
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Robots.txt optimisé
- ✅ Metadata par page

### Performance
- ✅ Server Components (SSR)
- ✅ Animations CSS (pas de JS bloquant)
- ✅ Font optimization (Inter)
- ✅ Code splitting automatique

---

## 📋 Checklist SEO à compléter

### 1. Fichier robots.txt
Crée `/public/robots.txt` :
```
User-agent: *
Allow: /
Sitemap: https://skyaksa.com/sitemap.xml
```

### 2. Sitemap.xml
Next.js peut générer automatiquement avec `next-sitemap` :
```bash
npm install next-sitemap
```

### 3. Schema.org (Structured Data)
Ajoute dans `app/layout.tsx` :
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Skyaksa",
      "url": "https://skyaksa.com",
      "logo": "https://skyaksa.com/logo-skyaksa.png",
      "description": "Agence Shopify spécialisée en création de boutiques e-commerce",
      "sameAs": [
        "https://linkedin.com/company/skyaksa"
      ]
    })
  }}
/>
```

### 4. Analytics
- Google Analytics 4
- Google Search Console
- (Optionnel) Plausible / Fathom

### 5. Performance Monitoring
- Lighthouse CI
- Core Web Vitals tracking
- PageSpeed Insights

---

## 🎯 Prochaines étapes recommandées

1. **Images** : Upload toutes les images selon `GUIDE_IMAGES.md`
2. **Sitemap** : Installer `next-sitemap` et configurer
3. **Analytics** : Ajouter GA4
4. **Schema.org** : Ajouter structured data
5. **Test** : Lighthouse audit (cible : 90+)

---

## 📊 Métriques cibles

- **Lighthouse Performance** : 90+
- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0.1
- **SEO Score** : 100

---

## 🔍 Outils de vérification

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema Markup Validator](https://validator.schema.org/)

