'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import emailjs from '@emailjs/browser'

// Articles data
const articlesData: { [key: string]: Article } = {
  'guide-seo-shopify': {
    title: 'Guide SEO Shopify : optimiser votre boutique pour Google',
    excerpt: 'Structure technique, optimisation des fiches produits, Core Web Vitals : tout ce qu\'il faut savoir pour un référencement efficace sur Shopify.',
    category: 'SEO',
    date: '15 Décembre 2024',
    readTime: '25 min',
    tableOfContents: [
      { id: 'pourquoi-seo', title: 'Pourquoi le SEO est crucial' },
      { id: 'optimisation-technique', title: '1. Optimisation technique' },
      { id: 'fiches-produits', title: '2. Optimisation des fiches produits' },
      { id: 'structure-maillage', title: '3. Structure et maillage interne' },
      { id: 'contenu-blog', title: '4. Contenu et blog' },
      { id: 'mots-cles', title: '5. Recherche de mots-clés' },
      { id: 'seo-local', title: '6. SEO local' },
      { id: 'backlinks', title: '7. Backlinks et autorité' },
      { id: 'suivi-performances', title: '8. Suivi des performances' },
      { id: 'seo-mobile', title: '9. SEO mobile et UX' },
      { id: 'erreurs-eviter', title: '10. Erreurs à éviter' },
      { id: 'checklist', title: '11. Checklist SEO' },
    ],
    content: `
      <h2 id="pourquoi-seo">Pourquoi le SEO est crucial pour votre boutique Shopify</h2>
      <p>Le référencement naturel représente une source de trafic qualifié et durable pour votre e-commerce. Contrairement aux campagnes publicitaires, le SEO génère des visites sans coût par clic, ce qui améliore significativement votre rentabilité à long terme.</p>
      
      <p>Selon les études, <strong>53% du trafic web provient du référencement naturel</strong>. Pour une boutique Shopify, cela signifie que plus de la moitié de vos visiteurs potentiels arrivent via Google, sans que vous ayez à payer pour chaque clic. C'est un investissement initial qui continue de générer des résultats pendant des mois, voire des années.</p>

      <p>De plus, le trafic organique a tendance à être plus qualifié que le trafic payant. Les utilisateurs qui arrivent via une recherche Google sont généralement plus proches de l'achat, car ils ont déjà exprimé une intention claire en tapant leur requête.</p>

      <div class="promo-box">
        <div class="promo-icon">💡</div>
        <div class="promo-content">
          <h4>Skyaksa peut vous accompagner</h4>
          <p>Audit SEO complet de votre boutique Shopify avec recommandations personnalisées et plan d'action.</p>
          <a href="/contact" class="promo-link">Demander un audit gratuit →</a>
        </div>
      </div>

      <h2 id="optimisation-technique">1. Optimisation technique de votre boutique Shopify</h2>
      
      <h3>1.1 Structure des URLs</h3>
      <p>Shopify génère automatiquement des URLs, mais vous pouvez les personnaliser. Privilégiez des URLs courtes, descriptives et incluant vos mots-clés principaux.</p>
      
      <p><strong>Bonnes pratiques pour les URLs Shopify :</strong></p>
      <ul>
        <li>Évitez les URLs avec des paramètres inutiles (comme <code>?variant=123</code> dans l'URL principale)</li>
        <li>Utilisez des tirets pour séparer les mots (ex: <code>/tapis-souris-gaming</code> plutôt que <code>/tapissourisgaming</code>)</li>
        <li>Intégrez le mot-clé principal de la page en début d'URL</li>
        <li>Limitez la longueur à 60-70 caractères maximum</li>
        <li>Évitez les caractères spéciaux et les accents</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">✅ Bonne pratique</div>
        <code>monsite.com/products/tapis-souris-gaming-xl</code>
      </div>

      <div class="example-box bad">
        <div class="example-label">❌ À éviter</div>
        <code>monsite.com/products/123456</code>
      </div>

      <h3>1.2 Vitesse de chargement et Core Web Vitals</h3>
      <p>Les Core Web Vitals sont devenus un facteur de classement Google depuis 2021. Ces métriques mesurent l'expérience utilisateur réelle sur votre site :</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">LCP</div>
          <div class="metric-value">&lt; 2,5s</div>
          <div class="metric-desc">Largest Contentful Paint</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">FID</div>
          <div class="metric-value">&lt; 100ms</div>
          <div class="metric-desc">First Input Delay</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">CLS</div>
          <div class="metric-value">&lt; 0,1</div>
          <div class="metric-desc">Cumulative Layout Shift</div>
        </div>
      </div>

      <p><strong>Optimisations spécifiques Shopify :</strong></p>
      <ul>
        <li><strong>Images :</strong> Compressez vos images avant upload (utilisez TinyPNG ou Squoosh). Shopify convertit automatiquement en WebP, mais une compression préalable reste importante. Ciblez 80-85% de qualité pour les photos produits.</li>
        <li><strong>Apps :</strong> Limitez le nombre d'apps installées. Chaque app ajoute du JavaScript qui peut ralentir votre site. Auditez régulièrement et désinstallez celles que vous n'utilisez plus.</li>
        <li><strong>Thème :</strong> Utilisez un thème optimisé pour la performance. Les thèmes officiels Shopify (Dawn, Impulse) sont généralement plus rapides que les thèmes tiers surchargés.</li>
        <li><strong>Lazy loading :</strong> Activez le lazy loading pour les images hors écran. Shopify le fait automatiquement, mais vérifiez dans les paramètres de votre thème.</li>
        <li><strong>Fonts :</strong> Limitez le nombre de polices et utilisez des fonts système ou préchargées.</li>
      </ul>

      <h3>1.3 Structure HTML et balises sémantiques</h3>
      <p>Une structure HTML claire aide Google à comprendre votre contenu. Utilisez les balises sémantiques correctement :</p>
      
      <ul>
        <li><strong>H1 :</strong> Un seul H1 par page, contenant le mot-clé principal</li>
        <li><strong>H2-H6 :</strong> Hiérarchie logique des titres</li>
        <li><strong>Schema.org :</strong> Ajoutez le markup structuré pour les produits (Product schema) et les avis (Review schema)</li>
        <li><strong>Alt text :</strong> Toutes les images doivent avoir un texte alternatif descriptif</li>
      </ul>

      <h3>1.4 Sitemap et robots.txt</h3>
      <p>Shopify génère automatiquement un sitemap XML à l'adresse <code>votreboutique.com/sitemap.xml</code>. Vérifiez qu'il est bien soumis dans Google Search Console.</p>

      <h2 id="fiches-produits">2. Optimisation des fiches produits</h2>
      
      <h3>2.1 Balises Title et Meta Description</h3>
      <p>Chaque fiche produit doit avoir un title unique et une meta description optimisée. Ces éléments apparaissent dans les résultats de recherche Google.</p>
      
      <p><strong>Règles pour le Title :</strong></p>
      <ul>
        <li>50-60 caractères maximum (au-delà, Google tronque)</li>
        <li>Placez le mot-clé principal en début de title</li>
        <li>Incluez la marque si elle est connue</li>
        <li>Ajoutez un élément différenciant (ex: "Premium", "Édition limitée")</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">✅ Title optimisé</div>
        <code>Tapis Souris Gaming XL - MXR Mousepads | Édition Limitée</code>
      </div>

      <p><strong>Règles pour la Meta Description :</strong></p>
      <ul>
        <li>150-160 caractères maximum</li>
        <li>Incluez le mot-clé principal naturellement</li>
        <li>Ajoutez un appel à l'action (CTA)</li>
        <li>Créez une incitation au clic</li>
      </ul>

      <h3>2.2 Descriptions produits optimisées SEO</h3>
      <p>Évitez absolument les descriptions fournisseur copiées-collées. Google pénalise le contenu dupliqué. Rédigez du contenu unique qui :</p>
      
      <ul>
        <li><strong>Répond aux questions des acheteurs :</strong> Quels sont les matériaux ? Quelle est la taille exacte ? Comment l'entretenir ?</li>
        <li><strong>Intègre naturellement vos mots-clés :</strong> Évitez le keyword stuffing, mais utilisez vos mots-clés de manière naturelle</li>
        <li><strong>Met en avant les bénéfices :</strong> Ne listez pas seulement les caractéristiques, expliquez pourquoi c'est important pour l'utilisateur</li>
        <li><strong>Utilise un format structuré :</strong> Titres, listes à puces, paragraphes courts (3-4 lignes max)</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">🚀</div>
        <div class="promo-content">
          <h4>Besoin d'optimiser vos fiches produits ?</h4>
          <p>Nos experts Shopify peuvent rédiger ou optimiser vos descriptions produits pour maximiser votre visibilité SEO.</p>
          <a href="/contact" class="promo-link">Discuter de mon projet →</a>
        </div>
      </div>

      <h3>2.3 Images produits et SEO</h3>
      <p>Les images sont cruciales pour le SEO visuel et le référencement classique :</p>
      
      <ul>
        <li><strong>Nom de fichier :</strong> Utilisez des noms descriptifs (ex: <code>tapis-souris-gaming-xl-noir.jpg</code>)</li>
        <li><strong>Alt text :</strong> Décrivez l'image de manière précise. Ex: "Tapis de souris gaming XL noir avec logo MXR"</li>
        <li><strong>Format :</strong> Utilisez WebP quand possible</li>
        <li><strong>Taille :</strong> Optimisez avant upload (2048px max pour les photos produits)</li>
        <li><strong>Nombre :</strong> Minimum 4-5 images par produit</li>
      </ul>

      <h2 id="structure-maillage">3. Structure du site et maillage interne</h2>
      
      <h3>3.1 Architecture de navigation</h3>
      <p>Une architecture claire aide Google à comprendre et indexer votre site. Organisez vos collections de manière logique :</p>
      
      <ul>
        <li><strong>Hiérarchie logique :</strong> Catégories principales → Sous-catégories → Produits</li>
        <li><strong>Profondeur :</strong> Un produit ne devrait pas être à plus de 3 clics de la page d'accueil</li>
        <li><strong>Breadcrumbs :</strong> Activez les fil d'Ariane pour améliorer la navigation et le SEO</li>
      </ul>

      <h3>3.2 Maillage interne</h3>
      <p>Le maillage interne distribue le "jus SEO" (PageRank) entre vos pages et aide Google à découvrir tout votre contenu :</p>
      
      <ul>
        <li><strong>Liens contextuels :</strong> Dans vos descriptions produits, liez vers des produits complémentaires ou des collections</li>
        <li><strong>Liens de navigation :</strong> Menu principal, footer, sidebar</li>
        <li><strong>Liens dans le contenu :</strong> Articles de blog qui pointent vers vos produits</li>
        <li><strong>Produits similaires :</strong> Section "Vous pourriez aussi aimer" avec liens</li>
      </ul>

      <h2 id="contenu-blog">4. Contenu et blog Shopify</h2>
      
      <h3>4.1 Pourquoi le blog est crucial pour le SEO</h3>
      <p>Le blog Shopify est un levier SEO puissant pour plusieurs raisons :</p>
      
      <ul>
        <li><strong>Mots-clés de longue traîne :</strong> Ciblez des requêtes spécifiques que vos concurrents ignorent</li>
        <li><strong>Contenu frais :</strong> Google favorise les sites régulièrement mis à jour</li>
        <li><strong>Backlinks naturels :</strong> Un contenu de qualité attire des liens externes</li>
        <li><strong>Trafic qualifié :</strong> Les visiteurs qui arrivent via votre blog sont souvent plus engagés</li>
      </ul>

      <h3>4.2 Stratégie de contenu pour le blog</h3>
      <p>Publiez régulièrement du contenu qui :</p>
      
      <ul>
        <li><strong>Répond aux questions de votre audience :</strong> Utilisez "People Also Ask" de Google pour trouver des idées</li>
        <li><strong>Cible des mots-clés de longue traîne :</strong> Ex: "comment choisir un tapis de souris gaming"</li>
        <li><strong>Établit votre expertise :</strong> Guides complets, tutoriels, analyses de tendances</li>
        <li><strong>Crée des opportunités de linking :</strong> Liez naturellement vers vos produits dans vos articles</li>
      </ul>

      <h2 id="mots-cles">5. Recherche de mots-clés et optimisation</h2>
      
      <h3>5.1 Trouver les bons mots-clés</h3>
      <p>La recherche de mots-clés est la base du SEO. Utilisez ces outils :</p>
      
      <ul>
        <li><strong>Google Keyword Planner :</strong> Gratuit, nécessite un compte Google Ads</li>
        <li><strong>Ubersuggest :</strong> Version gratuite limitée</li>
        <li><strong>Answer The Public :</strong> Trouve les questions que les gens posent</li>
        <li><strong>Google Trends :</strong> Identifie les tendances de recherche</li>
        <li><strong>Google Autocomplete :</strong> Suggestions de recherche dans Google</li>
      </ul>

      <h3>5.2 Types de mots-clés à cibler</h3>
      <ul>
        <li><strong>Mots-clés transactionnels :</strong> "acheter tapis souris gaming" - forte intention d'achat</li>
        <li><strong>Mots-clés informationnels :</strong> "comment choisir tapis souris" - pour le blog</li>
        <li><strong>Mots-clés de longue traîne :</strong> "meilleur tapis souris gaming pour FPS" - moins de concurrence</li>
      </ul>

      <h2 id="seo-local">6. Optimisation locale (si applicable)</h2>
      
      <p>Si vous avez une boutique physique ou livrez localement :</p>
      
      <ul>
        <li>Créez et optimisez votre profil Google Business</li>
        <li>Ajoutez vos heures d'ouverture, photos, avis</li>
        <li>Utilisez le schema LocalBusiness sur votre site</li>
        <li>Créez des citations sur Pages Jaunes, Yelp, annuaires locaux</li>
      </ul>

      <h2 id="backlinks">7. Backlinks et autorité de domaine</h2>
      
      <h3>7.1 Pourquoi les backlinks sont importants</h3>
      <p>Les backlinks (liens externes vers votre site) sont un facteur de classement majeur. Ils indiquent à Google que d'autres sites font confiance à votre contenu.</p>

      <h3>7.2 Stratégies pour obtenir des backlinks</h3>
      <ul>
        <li><strong>Contenu de qualité :</strong> Le meilleur moyen d'obtenir des backlinks naturellement</li>
        <li><strong>Guest posting :</strong> Écrivez pour d'autres blogs dans votre niche</li>
        <li><strong>Partenariats :</strong> Collaborez avec des influenceurs ou autres marques</li>
        <li><strong>Outreach :</strong> Contactez les sites qui mentionnent vos concurrents</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention aux backlinks toxiques</h4>
          <p>Google pénalise les liens de mauvaise qualité. Évitez les liens achetés en masse, les PBN (Private Blog Networks) et les liens avec ancres sur-optimisées.</p>
        </div>
      </div>

      <h2 id="suivi-performances">8. Suivi et mesure des performances SEO</h2>
      
      <h3>8.1 Google Search Console</h3>
      <p>Outil gratuit essentiel pour le SEO :</p>
      
      <ul>
        <li><strong>Performance :</strong> Voir quels mots-clés génèrent du trafic</li>
        <li><strong>Couverture :</strong> Identifier les erreurs d'indexation</li>
        <li><strong>Améliorations :</strong> Core Web Vitals, mobile-friendly</li>
        <li><strong>Liens :</strong> Voir qui vous link</li>
      </ul>

      <h3>8.2 Outils SEO tiers</h3>
      <p>Outils payants mais puissants :</p>
      <ul>
        <li><strong>Ahrefs :</strong> Analyse de backlinks, recherche de mots-clés</li>
        <li><strong>SEMrush :</strong> Analyse concurrentielle, tracking de positions</li>
        <li><strong>Moz :</strong> Domain Authority, on-page optimization</li>
      </ul>

      <h2 id="seo-mobile">9. SEO mobile et expérience utilisateur</h2>
      
      <h3>9.1 Mobile-First Indexing</h3>
      <p>Google indexe d'abord la version mobile de votre site depuis 2019. Assurez-vous que :</p>
      
      <ul>
        <li>Votre site est responsive (Shopify le fait automatiquement)</li>
        <li>Les textes sont lisibles sans zoom</li>
        <li>Les boutons sont assez grands pour être cliqués facilement</li>
        <li>Le temps de chargement est rapide sur mobile</li>
      </ul>

      <h3>9.2 Expérience utilisateur (UX)</h3>
      <p>Google prend en compte l'expérience utilisateur dans son algorithme. Un taux de rebond élevé peut indiquer que votre contenu n'est pas pertinent.</p>

      <h2 id="erreurs-eviter">10. Erreurs SEO courantes à éviter</h2>
      
      <ul>
        <li><strong>Keyword stuffing :</strong> Répéter un mot-clé de manière excessive</li>
        <li><strong>Contenu dupliqué :</strong> Copier des descriptions produits</li>
        <li><strong>Ignorer le mobile :</strong> Optimiser uniquement pour desktop</li>
        <li><strong>Négliger la vitesse :</strong> Installer trop d'apps, images non optimisées</li>
        <li><strong>Pas de suivi :</strong> Ne pas utiliser Google Search Console</li>
        <li><strong>Backlinks toxiques :</strong> Acheter des liens de mauvaise qualité</li>
      </ul>

      <h2 id="checklist">11. Checklist SEO Shopify</h2>
      
      <div class="checklist-section">
        <h4>Technique</h4>
        <ul class="checklist">
          <li>Sitemap XML soumis dans Google Search Console</li>
          <li>Robots.txt configuré correctement</li>
          <li>HTTPS activé</li>
          <li>Core Web Vitals dans le vert</li>
          <li>Site mobile-friendly</li>
          <li>Schema.org markup pour les produits</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Contenu</h4>
        <ul class="checklist">
          <li>Title unique et optimisé pour chaque page</li>
          <li>Meta description unique pour chaque page</li>
          <li>Descriptions produits uniques</li>
          <li>Alt text sur toutes les images</li>
          <li>Contenu de blog régulier</li>
          <li>H1 unique par page avec mot-clé principal</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Structure</h4>
        <ul class="checklist">
          <li>Navigation claire et logique</li>
          <li>Maillage interne entre pages</li>
          <li>Breadcrumbs activés</li>
          <li>Collections optimisées avec contenu</li>
          <li>URLs propres et descriptives</li>
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>Le SEO Shopify demande un travail régulier et méthodique, mais les résultats sont durables et rentables. Commencez par l'optimisation technique, puis travaillez vos fiches produits et développez votre contenu blog progressivement.</p>

      <p>N'oubliez pas : <strong>le SEO est un marathon, pas un sprint</strong>. Les résultats peuvent prendre 3-6 mois à apparaître, mais une fois que vous êtes bien positionné, le trafic continue de croître sans coût supplémentaire.</p>
    `,
  },
  'tracking-ecommerce-ga4': {
    title: 'Tracking e-commerce : GA4, pixels et events',
    excerpt: 'Mettre en place un tracking solide pour mesurer les performances de votre boutique et prendre les bonnes décisions.',
    category: 'Data & Tracking',
    date: '12 Décembre 2024',
    readTime: '10 min',
    tableOfContents: [
      { id: 'importance-tracking', title: 'L\'importance du tracking' },
      { id: 'configurer-ga4', title: '1. Configurer GA4' },
      { id: 'meta-pixel', title: '2. Meta Pixel' },
      { id: 'google-tag-manager', title: '3. Google Tag Manager' },
      { id: 'events-personnalises', title: '4. Événements personnalisés' },
    ],
    content: `
      <h2 id="importance-tracking">L'importance du tracking pour votre e-commerce</h2>
      <p>Sans données fiables, vous pilotez votre boutique à l'aveugle. Un tracking bien configuré vous permet de comprendre le comportement de vos visiteurs, d'identifier les points de friction et d'optimiser votre tunnel de conversion.</p>

      <div class="promo-box">
        <div class="promo-icon">📊</div>
        <div class="promo-content">
          <h4>Besoin d'aide pour votre tracking ?</h4>
          <p>Nous configurons GA4, GTM et tous vos pixels pour une mesure précise de vos performances.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="configurer-ga4">1. Configurer Google Analytics 4</h2>
      <h3>Installation de base</h3>
      <p>GA4 remplace Universal Analytics et apporte une nouvelle approche basée sur les événements. Pour l'installer sur Shopify :</p>
      <ul>
        <li>Créez une propriété GA4 dans votre compte Google Analytics</li>
        <li>Récupérez votre ID de mesure (G-XXXXXXXXXX)</li>
        <li>Ajoutez-le dans les paramètres Shopify ou via Google Tag Manager</li>
      </ul>

      <h3>Events e-commerce</h3>
      <p>GA4 propose des événements e-commerce standard :</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">view_item</div>
          <div class="metric-desc">Consultation produit</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">add_to_cart</div>
          <div class="metric-desc">Ajout au panier</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">begin_checkout</div>
          <div class="metric-desc">Début checkout</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">purchase</div>
          <div class="metric-desc">Achat finalisé</div>
        </div>
      </div>

      <h2 id="meta-pixel">2. Meta Pixel (Facebook/Instagram)</h2>
      <p>Le Meta Pixel est essentiel si vous faites de la publicité sur Facebook et Instagram. Il permet de :</p>
      <ul>
        <li>Tracker les conversions de vos campagnes</li>
        <li>Créer des audiences de retargeting</li>
        <li>Optimiser vos campagnes avec les données d'achat</li>
      </ul>

      <h2 id="google-tag-manager">3. Google Tag Manager</h2>
      <p>GTM centralise tous vos tags et facilite leur gestion. Avantages :</p>
      <ul>
        <li>Pas besoin de modifier le code du site</li>
        <li>Déploiement et modification des tags en quelques clics</li>
        <li>Mode debug pour tester avant publication</li>
      </ul>

      <h2 id="events-personnalises">4. Événements personnalisés</h2>
      <p>Au-delà des events standard, trackez les actions spécifiques à votre business :</p>
      <ul>
        <li>Clics sur les CTA importants</li>
        <li>Utilisation des filtres produits</li>
        <li>Scroll depth sur les pages clés</li>
        <li>Inscription newsletter</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Un tracking bien configuré est la base de toute optimisation. Prenez le temps de le mettre en place correctement dès le départ, et vous pourrez prendre des décisions basées sur des données fiables.</p>
    `,
  },
  'optimiser-conversion-shopify': {
    title: 'Optimiser le taux de conversion de votre boutique',
    excerpt: 'Parcours utilisateur, tunnel d\'achat, fiches produits : les leviers concrets pour transformer plus de visiteurs en clients.',
    category: 'Conversion',
    date: '10 Décembre 2024',
    readTime: '15 min',
    tableOfContents: [
      { id: 'taux-conversion', title: 'Qu\'est-ce qu\'un bon taux de conversion ?' },
      { id: 'fiches-produits', title: '1. Optimiser vos fiches produits' },
      { id: 'tunnel-achat', title: '2. Simplifier le tunnel d\'achat' },
      { id: 'abandon-panier', title: '3. Réduire l\'abandon de panier' },
      { id: 'reassurance', title: '4. Éléments de réassurance' },
    ],
    content: `
      <h2 id="taux-conversion">Qu'est-ce qu'un bon taux de conversion ?</h2>
      <p>Le taux de conversion e-commerce moyen se situe entre 1% et 3%. Au-dessus de 3%, vous êtes dans la bonne moyenne. Au-dessus de 5%, vous performez très bien. Mais chaque secteur est différent.</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">1-3%</div>
          <div class="metric-desc">Taux moyen e-commerce</div>
        </div>
        <div class="metric-card good">
          <div class="metric-value">3-5%</div>
          <div class="metric-desc">Bonne performance</div>
        </div>
        <div class="metric-card accent">
          <div class="metric-value">5%+</div>
          <div class="metric-desc">Excellent</div>
        </div>
      </div>

      <h2 id="fiches-produits">1. Optimiser vos fiches produits</h2>
      <h3>Photos produits</h3>
      <p>Les visuels sont le premier facteur de décision en e-commerce :</p>
      <ul>
        <li>Photos haute qualité sur fond neutre</li>
        <li>Plusieurs angles de vue</li>
        <li>Photos en situation (lifestyle)</li>
        <li>Zoom disponible</li>
      </ul>

      <h3>Descriptions qui vendent</h3>
      <p>Une bonne description répond aux objections et met en avant les bénéfices :</p>
      <ul>
        <li>Commencez par le bénéfice principal</li>
        <li>Listez les caractéristiques techniques</li>
        <li>Incluez les informations de livraison</li>
        <li>Ajoutez des éléments de réassurance</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">🎯</div>
        <div class="promo-content">
          <h4>Audit conversion gratuit</h4>
          <p>Identifiez les freins à la conversion sur votre boutique avec notre analyse experte.</p>
          <a href="/contact" class="promo-link">Demander mon audit →</a>
        </div>
      </div>

      <h2 id="tunnel-achat">2. Simplifier le tunnel d'achat</h2>
      <h3>Checkout optimisé</h3>
      <p>Chaque étape supplémentaire fait perdre des clients :</p>
      <ul>
        <li>Proposez l'achat sans création de compte</li>
        <li>Affichez les frais de livraison le plus tôt possible</li>
        <li>Offrez plusieurs moyens de paiement</li>
        <li>Ajoutez des badges de sécurité</li>
      </ul>

      <h2 id="abandon-panier">3. Réduire l'abandon de panier</h2>
      <p>70% des paniers sont abandonnés. Pour réduire ce taux :</p>
      <ul>
        <li>Emails de relance automatisés (Klaviyo)</li>
        <li>Pas de frais cachés</li>
        <li>Livraison gratuite à partir d'un seuil</li>
        <li>Garantie satisfait ou remboursé visible</li>
      </ul>

      <h2 id="reassurance">4. Éléments de réassurance</h2>
      <p>Les acheteurs ont besoin d'être rassurés avant d'acheter :</p>
      <ul>
        <li>Avis clients authentiques</li>
        <li>Politique de retour claire</li>
        <li>Contact facilement accessible</li>
        <li>Badges de paiement sécurisé</li>
      </ul>

      <h2>Conclusion</h2>
      <p>L'optimisation du taux de conversion est un travail continu. Testez, mesurez, itérez. Chaque amélioration, même petite, a un impact direct sur votre chiffre d'affaires.</p>
    `,
  },
  'klaviyo-vs-mailchimp': {
    title: 'Klaviyo vs Mailchimp : quel outil pour votre boutique Shopify ?',
    excerpt: 'Comparatif détaillé des deux solutions d\'email marketing les plus populaires pour l\'e-commerce.',
    category: 'Marketing',
    date: '8 Décembre 2024',
    readTime: '8 min',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'klaviyo', title: 'Klaviyo : le spécialiste e-commerce' },
      { id: 'mailchimp', title: 'Mailchimp : la solution généraliste' },
      { id: 'recommandation', title: 'Notre recommandation' },
    ],
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>L'email marketing reste le canal le plus rentable en e-commerce. Klaviyo et Mailchimp sont deux solutions populaires, mais laquelle choisir pour votre boutique Shopify ?</p>

      <h2 id="klaviyo">Klaviyo : le spécialiste e-commerce</h2>
      <h3>Points forts</h3>
      <ul>
        <li>Intégration native avec Shopify</li>
        <li>Segmentation avancée basée sur les données d'achat</li>
        <li>Flows d'automatisation puissants</li>
        <li>SMS marketing intégré</li>
        <li>Analyses e-commerce détaillées</li>
      </ul>
      <h3>Points faibles</h3>
      <ul>
        <li>Tarif plus élevé que Mailchimp</li>
        <li>Courbe d'apprentissage plus importante</li>
      </ul>

      <h2 id="mailchimp">Mailchimp : la solution généraliste</h2>
      <h3>Points forts</h3>
      <ul>
        <li>Interface simple et intuitive</li>
        <li>Plan gratuit généreux</li>
        <li>Large bibliothèque de templates</li>
        <li>Bon pour débuter</li>
      </ul>
      <h3>Points faibles</h3>
      <ul>
        <li>Intégration Shopify moins poussée</li>
        <li>Segmentation e-commerce limitée</li>
        <li>Automatisations moins avancées</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">📧</div>
        <div class="promo-content">
          <h4>Configuration Klaviyo clé en main</h4>
          <p>Nous configurons Klaviyo pour votre boutique avec tous les flows essentiels.</p>
          <a href="/contact" class="promo-link">En savoir plus →</a>
        </div>
      </div>

      <h2 id="recommandation">Notre recommandation</h2>
      <p>Pour une boutique Shopify sérieuse, <strong>Klaviyo</strong> est le meilleur choix. L'investissement supplémentaire est rapidement rentabilisé grâce aux automatisations et à la segmentation avancée.</p>
      <p>Mailchimp reste une option valable si vous débutez avec un budget limité, mais vous atteindrez vite ses limites.</p>
    `,
  },
  'meilleures-apps-shopify-2024': {
    title: 'Les meilleures apps Shopify en 2024',
    excerpt: 'Sélection des applications indispensables pour booster votre boutique : conversion, marketing, logistique.',
    category: 'Shopify',
    date: '5 Décembre 2024',
    readTime: '10 min',
    tableOfContents: [
      { id: 'apps-conversion', title: 'Apps de conversion' },
      { id: 'apps-seo', title: 'Apps SEO' },
      { id: 'apps-analytics', title: 'Apps Analytics' },
      { id: 'apps-logistique', title: 'Apps Logistique' },
    ],
    content: `
      <h2 id="apps-conversion">Apps de conversion</h2>
      <h3>Klaviyo</h3>
      <p>La référence pour l'email et SMS marketing e-commerce. Automatisations puissantes, segmentation avancée.</p>
      
      <h3>Privy</h3>
      <p>Pop-ups intelligents pour capturer des emails et réduire l'abandon de panier.</p>

      <h3>Loox / Judge.me</h3>
      <p>Collecte et affichage d'avis clients avec photos. Social proof essentiel pour la conversion.</p>

      <h2 id="apps-seo">Apps SEO</h2>
      <h3>SEO Manager</h3>
      <p>Optimisation des meta tags, redirections, sitemap. Interface simple pour gérer votre SEO.</p>

      <div class="promo-box">
        <div class="promo-icon">🔧</div>
        <div class="promo-content">
          <h4>Besoin d'aide pour choisir vos apps ?</h4>
          <p>Nous auditons votre stack technique et recommandons les apps adaptées à vos besoins.</p>
          <a href="/contact" class="promo-link">Demander conseil →</a>
        </div>
      </div>

      <h2 id="apps-analytics">Apps Analytics</h2>
      <h3>Lucky Orange</h3>
      <p>Heatmaps, enregistrements de sessions, analyse du comportement utilisateur.</p>

      <h3>Triple Whale</h3>
      <p>Attribution marketing avancée, dashboard centralisé pour toutes vos données.</p>

      <h2 id="apps-logistique">Apps Logistique</h2>
      <h3>Shipstation</h3>
      <p>Gestion des expéditions multi-transporteurs, automatisation des envois.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Conseil important</h4>
          <p>N'installez que les apps dont vous avez vraiment besoin. Chaque app ajoutée peut impacter la performance de votre site. Privilégiez la qualité à la quantité.</p>
        </div>
      </div>
    `,
  },
  'configurer-ga4-shopify': {
    title: 'Configurer Google Analytics 4 sur Shopify',
    excerpt: 'Guide pas à pas pour installer et configurer GA4 correctement sur votre boutique Shopify.',
    category: 'Data & Tracking',
    date: '3 Décembre 2024',
    readTime: '7 min',
    tableOfContents: [
      { id: 'creer-propriete', title: 'Étape 1 : Créer une propriété GA4' },
      { id: 'installer-shopify', title: 'Étape 2 : Installer sur Shopify' },
      { id: 'verifier-installation', title: 'Étape 3 : Vérifier l\'installation' },
      { id: 'configurer-conversions', title: 'Étape 4 : Configurer les conversions' },
    ],
    content: `
      <h2 id="creer-propriete">Étape 1 : Créer une propriété GA4</h2>
      <ol>
        <li>Connectez-vous à Google Analytics</li>
        <li>Cliquez sur "Admin" puis "Créer une propriété"</li>
        <li>Sélectionnez "Web" comme plateforme</li>
        <li>Entrez l'URL de votre boutique Shopify</li>
        <li>Récupérez votre ID de mesure (G-XXXXXXXXXX)</li>
      </ol>

      <h2 id="installer-shopify">Étape 2 : Installer sur Shopify</h2>
      <h3>Méthode native Shopify</h3>
      <ol>
        <li>Dans Shopify Admin, allez dans Boutique en ligne > Préférences</li>
        <li>Dans la section Google Analytics, entrez votre ID GA4</li>
        <li>Activez "Utiliser le commerce électronique amélioré"</li>
      </ol>

      <h3>Via Google Tag Manager (recommandé)</h3>
      <ol>
        <li>Créez un compte GTM si ce n'est pas fait</li>
        <li>Ajoutez le code GTM dans votre thème Shopify</li>
        <li>Créez une balise GA4 Configuration dans GTM</li>
        <li>Configurez les événements e-commerce</li>
      </ol>

      <div class="promo-box">
        <div class="promo-icon">🎯</div>
        <div class="promo-content">
          <h4>Configuration GA4 complète</h4>
          <p>Nous configurons GA4 et GTM avec tous les événements e-commerce pour vous.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="verifier-installation">Étape 3 : Vérifier l'installation</h2>
      <ul>
        <li>Utilisez l'extension Chrome "Google Tag Assistant"</li>
        <li>Vérifiez les rapports en temps réel dans GA4</li>
        <li>Testez chaque événement (view_item, add_to_cart, purchase)</li>
      </ul>

      <h2 id="configurer-conversions">Étape 4 : Configurer les conversions</h2>
      <p>Dans GA4, marquez les événements importants comme conversions :</p>
      <ul>
        <li>purchase (achat)</li>
        <li>add_to_cart (ajout panier)</li>
        <li>sign_up (inscription newsletter)</li>
      </ul>
    `,
  },
  'reduire-abandon-panier': {
    title: 'Réduire l\'abandon de panier : stratégies efficaces',
    excerpt: 'Techniques éprouvées pour récupérer les paniers abandonnés et augmenter vos ventes.',
    category: 'Conversion',
    date: '1 Décembre 2024',
    readTime: '9 min',
    tableOfContents: [
      { id: 'statistiques', title: '70% des paniers sont abandonnés' },
      { id: 'raisons', title: 'Pourquoi les visiteurs abandonnent' },
      { id: 'prevention', title: 'Stratégies de prévention' },
      { id: 'recuperation', title: 'Récupération des paniers' },
    ],
    content: `
      <h2 id="statistiques">70% des paniers sont abandonnés</h2>
      <p>C'est énorme. Mais c'est aussi une opportunité : chaque panier récupéré est une vente de plus sans acquisition supplémentaire.</p>

      <h2 id="raisons">Pourquoi les visiteurs abandonnent</h2>
      <ul>
        <li>Frais de livraison inattendus (48%)</li>
        <li>Obligation de créer un compte (24%)</li>
        <li>Processus de checkout trop long (18%)</li>
        <li>Manque de confiance (17%)</li>
        <li>Pas assez d'options de paiement (6%)</li>
      </ul>

      <h2 id="prevention">Stratégies de prévention</h2>
      <h3>Afficher les frais de livraison tôt</h3>
      <p>Pas de surprise au checkout. Affichez les frais dès la page produit ou le panier.</p>

      <h3>Checkout simplifié</h3>
      <ul>
        <li>Guest checkout obligatoire</li>
        <li>Formulaire en une page si possible</li>
        <li>Auto-complétion des adresses</li>
      </ul>

      <h3>Réassurance visible</h3>
      <ul>
        <li>Badges de sécurité près du bouton paiement</li>
        <li>Politique de retour clairement affichée</li>
        <li>Chat en direct disponible</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">💰</div>
        <div class="promo-content">
          <h4>Récupérez vos paniers abandonnés</h4>
          <p>Nous configurons vos séquences email de relance panier avec Klaviyo.</p>
          <a href="/contact" class="promo-link">En savoir plus →</a>
        </div>
      </div>

      <h2 id="recuperation">Récupération des paniers</h2>
      <h3>Séquence email (Klaviyo)</h3>
      <ul>
        <li>Email 1 : 1h après → Rappel simple</li>
        <li>Email 2 : 24h après → Réassurance + FAQ</li>
        <li>Email 3 : 72h après → Offre limitée (optionnel)</li>
      </ul>

      <h3>SMS</h3>
      <p>Taux d'ouverture de 98%. Un SMS bien placé peut récupérer beaucoup de paniers.</p>

      <h2>Mesurer et optimiser</h2>
      <p>Suivez votre taux d'abandon et le taux de récupération. Testez différentes approches et améliorez continuellement.</p>
    `,
  },
  'core-web-vitals-shopify': {
    title: 'Optimiser les Core Web Vitals sur Shopify',
    excerpt: 'Améliorer la performance de votre boutique pour un meilleur référencement et une meilleure expérience utilisateur.',
    category: 'SEO',
    date: '28 Novembre 2024',
    readTime: '11 min',
    tableOfContents: [
      { id: 'definition', title: 'Qu\'est-ce que les Core Web Vitals ?' },
      { id: 'optimiser-lcp', title: 'Optimiser le LCP' },
      { id: 'optimiser-fid', title: 'Optimiser le FID' },
      { id: 'optimiser-cls', title: 'Optimiser le CLS' },
      { id: 'outils', title: 'Outils de mesure' },
    ],
    content: `
      <h2 id="definition">Qu'est-ce que les Core Web Vitals ?</h2>
      <p>Les Core Web Vitals sont des métriques Google qui mesurent l'expérience utilisateur :</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">LCP</div>
          <div class="metric-value">&lt; 2,5s</div>
          <div class="metric-desc">Largest Contentful Paint</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">FID</div>
          <div class="metric-value">&lt; 100ms</div>
          <div class="metric-desc">First Input Delay</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">CLS</div>
          <div class="metric-value">&lt; 0,1</div>
          <div class="metric-desc">Cumulative Layout Shift</div>
        </div>
      </div>

      <h2 id="optimiser-lcp">Optimiser le LCP</h2>
      <h3>Images</h3>
      <ul>
        <li>Compressez vos images (TinyPNG, Squoosh)</li>
        <li>Utilisez le format WebP</li>
        <li>Définissez width et height explicites</li>
        <li>Lazy loading pour les images hors écran</li>
      </ul>

      <h3>Thème</h3>
      <ul>
        <li>Choisissez un thème optimisé (Dawn, Impulse)</li>
        <li>Évitez les thèmes avec trop de fonctionnalités inutiles</li>
        <li>Minimisez le CSS et JavaScript</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">⚡</div>
        <div class="promo-content">
          <h4>Audit performance Shopify</h4>
          <p>Nous analysons et optimisons la vitesse de votre boutique pour de meilleurs Core Web Vitals.</p>
          <a href="/contact" class="promo-link">Demander un audit →</a>
        </div>
      </div>

      <h2 id="optimiser-fid">Optimiser le FID</h2>
      <ul>
        <li>Limitez le nombre d'apps installées</li>
        <li>Désactivez les apps non utilisées</li>
        <li>Évitez les scripts tiers lourds</li>
        <li>Différez le chargement des scripts non critiques</li>
      </ul>

      <h2 id="optimiser-cls">Optimiser le CLS</h2>
      <ul>
        <li>Définissez les dimensions des images</li>
        <li>Réservez l'espace pour les éléments dynamiques</li>
        <li>Évitez les pop-ups intrusifs</li>
        <li>Utilisez des fonts system ou préchargées</li>
      </ul>

      <h2 id="outils">Outils de mesure</h2>
      <ul>
        <li>PageSpeed Insights (Google)</li>
        <li>GTmetrix</li>
        <li>Shopify Theme Inspector (Chrome extension)</li>
      </ul>
    `,
  },
  'sequences-email-ecommerce': {
    title: 'Créer des séquences email qui convertissent',
    excerpt: 'Automatisations email essentielles pour accompagner vos clients et maximiser la valeur vie client.',
    category: 'Marketing',
    date: '25 Novembre 2024',
    readTime: '12 min',
    tableOfContents: [
      { id: 'flows-essentiels', title: 'Les flows essentiels' },
      { id: 'welcome-series', title: '1. Welcome Series' },
      { id: 'abandoned-cart', title: '2. Abandoned Cart' },
      { id: 'post-purchase', title: '3. Post-Purchase' },
      { id: 'win-back', title: '4. Win-Back' },
      { id: 'browse-abandonment', title: '5. Browse Abandonment' },
    ],
    content: `
      <h2 id="flows-essentiels">Les flows essentiels pour votre e-commerce</h2>
      <p>L'email marketing automatisé est le canal le plus rentable. Voici les séquences indispensables.</p>

      <h2 id="welcome-series">1. Welcome Series (Bienvenue)</h2>
      <p>Déclenché à l'inscription newsletter :</p>
      <ul>
        <li>Email 1 (immédiat) : Bienvenue + code promo si promis</li>
        <li>Email 2 (J+2) : Présentation de la marque, valeurs</li>
        <li>Email 3 (J+4) : Best-sellers, produits populaires</li>
        <li>Email 4 (J+7) : Témoignages clients, réassurance</li>
      </ul>

      <h2 id="abandoned-cart">2. Abandoned Cart (Panier abandonné)</h2>
      <ul>
        <li>Email 1 (1h) : Rappel simple avec visuel du panier</li>
        <li>Email 2 (24h) : Réponses aux objections fréquentes</li>
        <li>Email 3 (72h) : Dernière chance, urgence légère</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">📧</div>
        <div class="promo-content">
          <h4>Configuration Klaviyo complète</h4>
          <p>Tous vos flows email configurés et optimisés pour maximiser vos ventes.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="post-purchase">3. Post-Purchase (Post-achat)</h2>
      <ul>
        <li>Email 1 (immédiat) : Confirmation + remerciement</li>
        <li>Email 2 (expédition) : Tracking + conseils d'utilisation</li>
        <li>Email 3 (J+7) : Demande d'avis</li>
        <li>Email 4 (J+30) : Cross-sell, produits complémentaires</li>
      </ul>

      <h2 id="win-back">4. Win-Back (Réactivation)</h2>
      <p>Pour les clients inactifs depuis 60-90 jours :</p>
      <ul>
        <li>Email 1 : "Vous nous manquez" + nouveautés</li>
        <li>Email 2 : Offre exclusive réactivation</li>
        <li>Email 3 : Dernière chance avant désabonnement</li>
      </ul>

      <h2 id="browse-abandonment">5. Browse Abandonment</h2>
      <p>Pour les visiteurs qui ont consulté des produits sans ajouter au panier :</p>
      <ul>
        <li>Email 1 (4h) : Rappel des produits consultés</li>
        <li>Email 2 (24h) : Produits similaires + avis</li>
      </ul>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Personnalisez avec le prénom et les produits consultés</li>
        <li>Testez vos objets d'email (A/B testing)</li>
        <li>Respectez les délais entre chaque email</li>
        <li>Analysez les performances et optimisez</li>
      </ul>
    `,
  },
}

interface TableOfContentsItem {
  id: string
  title: string
}

interface Article {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tableOfContents?: TableOfContentsItem[]
  content: string
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug]
  const [activeSection, setActiveSection] = useState('')
  const [progress, setProgress] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)

      // Active section detection
      if (article?.tableOfContents) {
        const sections = article.tableOfContents.map(item => document.getElementById(item.id))
        const scrollPosition = window.scrollY + 150

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(article.tableOfContents[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [article])

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-skyaksa to-shopify-fluo transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* CTA Banner - Shopify Style */}
      <section className="pt-24 lg:pt-28 pb-8 lg:pb-12 bg-gray-50 relative overflow-hidden">
        {/* Decorative Images - Left Side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 ml-4">
          {/* Image 1 - Haut gauche */}
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden rotate-6 shadow-lg animate-float-slow hover:scale-105 transition-transform duration-300">
            <Image 
              src="/articles/cta-banner-shopify-ecommerce-1.jpg" 
              alt="Boutique Shopify e-commerce créée par Skyaksa"
              fill 
              className="object-cover" 
              sizes="128px"
            />
          </div>
          {/* Image 2 - Bas gauche */}
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden -rotate-3 shadow-lg ml-12 animate-float-medium hover:scale-105 transition-transform duration-300">
            <Image 
              src="/articles/cta-banner-shopify-ecommerce-2.jpg" 
              alt="Agence Shopify Skyaksa - Optimisation e-commerce"
              fill 
              className="object-cover" 
              sizes="112px"
            />
          </div>
        </div>

        {/* Decorative Images - Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 mr-4">
          {/* Image 3 - Haut droite */}
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden rotate-3 shadow-lg mr-12 animate-float-fast hover:scale-105 transition-transform duration-300">
            <Image 
              src="/articles/cta-banner-shopify-ecommerce-3.jpg" 
              alt="Création boutique Shopify sur-mesure par Skyaksa"
              fill 
              className="object-cover" 
              sizes="112px"
            />
          </div>
          {/* Image 4 - Bas droite */}
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden -rotate-6 shadow-lg animate-float-slow hover:scale-105 transition-transform duration-300">
            <Image 
              src="/articles/cta-banner-shopify-ecommerce-4.jpg" 
              alt="Performance e-commerce Shopify - Agence Skyaksa"
              fill 
              className="object-cover" 
              sizes="128px"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Lancez votre boutique Shopify avec Skyaksa
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Confiez-nous votre projet e-commerce et bénéficiez d'un accompagnement expert pour créer une boutique performante.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Parler de mon projet
            </Link>
            <Link
              href="/ce-que-lon-fait"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full border border-gray-300 hover:border-gray-400 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb + Hero */}
      <section className="pt-8 pb-12 lg:pt-12 lg:pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Fil d'Ariane */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-skyaksa transition-colors">
                Accueil
              </Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/journal" className="hover:text-skyaksa transition-colors">
                Journal
              </Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium truncate max-w-xs">
                {article.title}
              </span>
            </nav>

            <div className="mb-6">
              <span className="text-sm font-semibold text-shopify-fluo bg-gray-900 px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            
            {/* Sticky Sidebar - Table of Contents */}
            {article.tableOfContents && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-28">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                    Sommaire
                  </h4>
                  <nav className="space-y-2">
                    {article.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm py-1 border-l-2 pl-4 transition-colors ${
                          activeSection === item.id
                            ? 'border-skyaksa text-skyaksa font-medium'
                            : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400'
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  {/* Sticky CTA */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Besoin d'aide ?
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      Discutons de votre projet Shopify
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full text-center text-xs font-semibold bg-skyaksa text-white py-2 px-4 rounded-lg hover:bg-skyaksa-700 transition-colors"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <article className={`${article.tableOfContents ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
              <div
                className="article-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(articlesData)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedArticle]) => (
                <Link
                  key={slug}
                  href={`/journal/${slug}`}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-skyaksa transition-colors group"
                >
                  <span className="text-xs font-medium text-gray-500">{relatedArticle.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-skyaksa transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{relatedArticle.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Fond blanc */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto lg:min-h-[450px] bg-gray-100">
            {/* Placeholder for image - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-skyaksa/10 to-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Ajoutez votre image ici</p>
                  <p className="text-gray-400 text-xs mt-1">newsletter-skyaksa.jpg</p>
                </div>
              </div>
            </div>
            <Image
              src="/newsletter-skyaksa-equipe-shopify.jpg"
              alt="Équipe Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Side */}
          <div className="bg-white px-8 py-16 lg:px-16 lg:py-20 flex items-center border-l border-gray-100">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Tenez-vous au courant des dernières{' '}
                <span className="text-skyaksa">nouveautés e-commerce</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Abonnez-vous à notre newsletter et bénéficiez de conseils Shopify, 
                de guides SEO et de ressources exclusives, directement dans votre boîte de réception.
              </p>

              <form 
                onSubmit={async (e) => {
                  e.preventDefault()
                  setNewsletterSubmitting(true)
                  
                  try {
                    // Envoyer via EmailJS
                    const templateParams = {
                      email: newsletterEmail,
                      to_name: 'Skyaksa',
                      subscribed_at: new Date().toLocaleDateString('fr-FR'),
                    }

                    await emailjs.send(
                      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                      process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID || '',
                      templateParams,
                      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
                    )

                    // Sauvegarder aussi localement (optionnel)
                    try {
                      await fetch('/api/newsletter', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: newsletterEmail }),
                      })
                    } catch (err) {
                      // Ignore si l'API locale échoue
                    }

                    setNewsletterSuccess(true)
                    setNewsletterEmail('')
                    
                    // Reset success message after 5 seconds
                    setTimeout(() => setNewsletterSuccess(false), 5000)
                  } catch (error) {
                    console.error('Erreur:', error)
                    alert('Une erreur est survenue. Veuillez réessayer.')
                  } finally {
                    setNewsletterSubmitting(false)
                  }
                }}
                className="mb-4"
              >
                <div className="flex flex-col sm:flex-row bg-gray-100 rounded-full overflow-hidden p-1.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="E-mail ici"
                    className="flex-1 px-5 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-base"
                    required
                    disabled={newsletterSubmitting || newsletterSuccess}
                  />
                  <button
                    type="submit"
                    disabled={newsletterSubmitting || newsletterSuccess}
                    className="px-8 py-3 bg-shopify-fluo text-gray-900 font-semibold rounded-full hover:bg-shopify-fluo/90 transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {newsletterSubmitting ? 'Inscription...' : newsletterSuccess ? '✓ Inscrit !' : 'S\'abonner'}
                  </button>
                </div>
              </form>

              <p className="text-gray-400 text-sm">
                Désabonnez-vous à tout moment. En saisissant votre e-mail, vous acceptez de recevoir des e-mails de marketing de la part de Skyaksa.
              </p>
            </div>
          </div>
        </div>

        {/* Green accent bar */}
        <div className="h-2 bg-shopify-fluo"></div>
      </section>

      {/* CTA Final - Pub Skyaksa */}
      <section className="py-16 lg:py-24 section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-skyaksa/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-shopify/20 rounded-full blur-3xl"></div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à booster votre boutique Shopify ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Discutons de votre projet et identifions ensemble les opportunités d'amélioration.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20"
            >
              Parler de mon projet
            </Link>
            <Link
              href="/ce-que-lon-fait"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 border border-white text-white hover:bg-white hover:text-gray-900"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
