'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import emailjs from '@emailjs/browser'
import StructuredData from '@/components/StructuredData'
import Breadcrumb from '@/components/Breadcrumb'

// Articles data
const articlesData: { [key: string]: Article } = {
  'guide-seo-shopify': {
    title: 'Guide SEO Shopify : optimiser votre boutique pour Google',
    excerpt: 'Structure technique, optimisation des fiches produits, Core Web Vitals : tout ce qu\'il faut savoir pour un référencement efficace sur Shopify.',
    category: 'SEO',
    date: '15 Février 2025',
    readTime: '8 min',
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
    title: 'Tracking E-commerce GA4 Shopify : Guide Complet',
    excerpt: 'Guide complet pour configurer GA4, Google Tag Manager, Meta Pixel et TikTok Pixel sur votre boutique Shopify. Événements e-commerce, debugging et bonnes pratiques.',
    category: 'Data & Tracking',
    date: '8 Mars 2025',
    readTime: '7 min',
    tableOfContents: [
      { id: 'importance-tracking', title: 'Pourquoi le tracking est crucial' },
      { id: 'architecture-tracking', title: '1. Architecture de tracking recommandée' },
      { id: 'configurer-ga4', title: '2. Configurer GA4 sur Shopify' },
      { id: 'google-tag-manager', title: '3. Google Tag Manager (GTM)' },
      { id: 'events-ecommerce', title: '4. Événements e-commerce GA4' },
      { id: 'meta-pixel', title: '5. Meta Pixel (Facebook/Instagram)' },
      { id: 'tiktok-pixel', title: '6. TikTok Pixel' },
      { id: 'server-side-tracking', title: '7. Server-Side Tracking' },
      { id: 'debugging', title: '8. Debugging et validation' },
      { id: 'erreurs-courantes', title: '9. Erreurs courantes à éviter' },
      { id: 'checklist', title: '10. Checklist tracking' },
    ],
    content: `
      <h2 id="importance-tracking">Pourquoi le tracking est crucial pour votre e-commerce</h2>
      <p>Sans données fiables, vous pilotez votre boutique à l'aveugle. <strong>73% des décisions marketing sont basées sur des données incorrectes</strong> à cause d'un tracking mal configuré. Un tracking solide vous permet de :</p>
      
      <ul>
        <li><strong>Comprendre le parcours client :</strong> D'où viennent vos visiteurs ? Quelles pages consultent-ils avant d'acheter ?</li>
        <li><strong>Mesurer le ROI de vos campagnes :</strong> Quel canal génère le plus de ventes ? Quel est le coût d'acquisition par client ?</li>
        <li><strong>Identifier les points de friction :</strong> Où les visiteurs abandonnent-ils leur parcours ?</li>
        <li><strong>Optimiser votre tunnel de conversion :</strong> Quelles pages convertissent le mieux ?</li>
        <li><strong>Créer des audiences de retargeting :</strong> Cibler les visiteurs qui n'ont pas finalisé leur achat.</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">📊</div>
        <div class="promo-content">
          <h4>Besoin d'aide pour votre tracking ?</h4>
          <p>Nous configurons GA4, GTM et tous vos pixels pour une mesure précise de vos performances e-commerce.</p>
          <a href="/contact" class="promo-link">Demander un audit tracking →</a>
        </div>
      </div>

      <h2 id="architecture-tracking">1. Architecture de tracking recommandée</h2>
      <p>Avant de plonger dans la configuration, voici l'architecture que nous recommandons pour une boutique Shopify :</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">GTM</div>
          <div class="metric-desc">Gestionnaire central de tous vos tags</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">GA4</div>
          <div class="metric-desc">Analytics et rapports</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Meta Pixel</div>
          <div class="metric-desc">Publicité Facebook/Instagram</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Conversions API</div>
          <div class="metric-desc">Server-side tracking</div>
        </div>
      </div>

      <p><strong>Pourquoi cette architecture ?</strong></p>
      <ul>
        <li>GTM centralise tous vos tags : plus facile à maintenir et débugger</li>
        <li>GA4 mesure le comportement utilisateur et les conversions</li>
        <li>Les pixels publicitaires (Meta, TikTok, Google Ads) optimisent vos campagnes</li>
        <li>Le server-side tracking compense les bloqueurs de pub et restrictions iOS</li>
      </ul>

      <h2 id="configurer-ga4">2. Configurer Google Analytics 4 sur Shopify</h2>
      
      <h3>2.1 Créer une propriété GA4</h3>
      <p>Si vous n'avez pas encore de propriété GA4 :</p>
      <ol>
        <li>Connectez-vous à <a href="https://analytics.google.com" target="_blank" rel="noopener">Google Analytics</a></li>
        <li>Cliquez sur "Admin" (roue dentée en bas à gauche)</li>
        <li>"Créer une propriété" → Choisissez "GA4"</li>
        <li>Renseignez le nom de votre boutique, fuseau horaire, devise (EUR)</li>
        <li>Créez un "Flux de données" de type "Web"</li>
        <li>Entrez l'URL de votre boutique Shopify</li>
        <li><strong>Récupérez votre ID de mesure</strong> (format : G-XXXXXXXXXX)</li>
      </ol>

      <h3>2.2 Méthode 1 : Installation native Shopify (simple)</h3>
      <p>Shopify propose une intégration native avec Google :</p>
      <ol>
        <li>Dans Shopify Admin → <strong>Canaux de vente</strong> → <strong>Google &amp; YouTube</strong></li>
        <li>Connectez votre compte Google</li>
        <li>Sélectionnez votre propriété GA4</li>
        <li>Activez le "Enhanced e-commerce"</li>
      </ol>

      <div class="example-box good">
        <div class="example-label">✅ Avantages de l'intégration native</div>
        <p>Configuration automatique des événements e-commerce de base. Idéal pour les débutants ou les boutiques simples.</p>
      </div>

      <h3>2.3 Méthode 2 : Installation via GTM (recommandé)</h3>
      <p>Pour un contrôle total et des fonctionnalités avancées, utilisez Google Tag Manager :</p>
      <ol>
        <li>Créez un compte GTM sur <a href="https://tagmanager.google.com" target="_blank" rel="noopener">tagmanager.google.com</a></li>
        <li>Créez un conteneur Web pour votre boutique</li>
        <li>Récupérez le code GTM (deux snippets)</li>
        <li>Dans Shopify : <strong>Boutique en ligne</strong> → <strong>Thèmes</strong> → <strong>Modifier le code</strong></li>
        <li>Collez le premier snippet dans <code>&lt;head&gt;</code> du fichier <code>theme.liquid</code></li>
        <li>Collez le second snippet juste après <code>&lt;body&gt;</code></li>
      </ol>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention aux doublons</h4>
          <p>Si vous utilisez GTM, <strong>ne configurez pas GA4 en parallèle via l'intégration native Shopify</strong>. Vous risquez de compter les événements en double, faussant toutes vos données.</p>
        </div>
      </div>

      <h2 id="google-tag-manager">3. Google Tag Manager (GTM) en détail</h2>
      
      <h3>3.1 Pourquoi utiliser GTM ?</h3>
      <p>Google Tag Manager est un outil gratuit qui centralise la gestion de tous vos tags :</p>
      <ul>
        <li><strong>Pas besoin de toucher au code :</strong> Ajoutez/modifiez des tags sans développeur</li>
        <li><strong>Mode debug intégré :</strong> Testez vos tags avant de les publier</li>
        <li><strong>Versioning :</strong> Historique de toutes vos modifications, rollback facile</li>
        <li><strong>Performance :</strong> Les tags se chargent de manière asynchrone</li>
        <li><strong>Flexibilité :</strong> Déclencheurs et variables personnalisés</li>
      </ul>

      <h3>3.2 Structure d'un conteneur GTM</h3>
      <p>Un conteneur GTM contient trois types d'éléments :</p>
      <ul>
        <li><strong>Tags :</strong> Les scripts à exécuter (GA4, Meta Pixel, etc.)</li>
        <li><strong>Déclencheurs (Triggers) :</strong> Quand exécuter le tag (page vue, clic, etc.)</li>
        <li><strong>Variables :</strong> Données dynamiques (ID produit, prix, etc.)</li>
      </ul>

      <h3>3.3 Configurer GA4 dans GTM</h3>
      <p>Pour créer votre tag GA4 dans GTM :</p>
      <ol>
        <li><strong>Créez une variable</strong> pour votre ID de mesure GA4 :<br>
        Type : "Constante" → Valeur : G-XXXXXXXXXX</li>
        <li><strong>Créez le tag GA4 Configuration :</strong><br>
        Type : "Google Analytics: GA4 Configuration"<br>
        ID de mesure : Utilisez votre variable<br>
        Déclencheur : "All Pages"</li>
        <li><strong>Publiez</strong> votre conteneur</li>
      </ol>

      <h2 id="events-ecommerce">4. Événements e-commerce GA4</h2>
      
      <p>GA4 utilise un modèle basé sur les événements. Voici les événements e-commerce essentiels à tracker :</p>

      <h3>4.1 Événements du funnel d'achat</h3>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">view_item_list</div>
          <div class="metric-desc">Vue d'une liste de produits (collection)</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">view_item</div>
          <div class="metric-desc">Vue d'une fiche produit</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">add_to_cart</div>
          <div class="metric-desc">Ajout au panier</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">remove_from_cart</div>
          <div class="metric-desc">Suppression du panier</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">view_cart</div>
          <div class="metric-desc">Vue du panier</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">begin_checkout</div>
          <div class="metric-desc">Début du checkout</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">add_payment_info</div>
          <div class="metric-desc">Ajout infos paiement</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">purchase</div>
          <div class="metric-desc">Achat finalisé</div>
        </div>
      </div>

      <h3>4.2 Paramètres à inclure dans chaque événement</h3>
      <p>Pour des rapports e-commerce complets, chaque événement doit inclure :</p>
      <ul>
        <li><code>currency</code> : Devise (EUR, USD...)</li>
        <li><code>value</code> : Valeur totale</li>
        <li><code>items</code> : Tableau des produits avec :
          <ul>
            <li><code>item_id</code> : ID produit</li>
            <li><code>item_name</code> : Nom du produit</li>
            <li><code>item_brand</code> : Marque</li>
            <li><code>item_category</code> : Catégorie</li>
            <li><code>price</code> : Prix unitaire</li>
            <li><code>quantity</code> : Quantité</li>
          </ul>
        </li>
      </ul>

      <h3>4.3 Data Layer Shopify</h3>
      <p>Le Data Layer est une structure JavaScript qui stocke les données à envoyer à GTM. Sur Shopify, vous devez le configurer pour exposer les données produits :</p>

      <div class="example-box good">
        <div class="example-label">✅ Exemple de Data Layer pour view_item</div>
        <pre><code>window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'view_item',
  ecommerce: {
    currency: 'EUR',
    value: 49.99,
    items: [{
      item_id: 'SKU12345',
      item_name: 'T-shirt Premium',
      item_brand: 'Ma Marque',
      item_category: 'Vêtements',
      price: 49.99,
      quantity: 1
    }]
  }
});</code></pre>
      </div>

      <h2 id="meta-pixel">5. Meta Pixel (Facebook/Instagram)</h2>
      
      <h3>5.1 Pourquoi le Meta Pixel est essentiel</h3>
      <p>Si vous faites de la publicité sur Facebook ou Instagram, le Meta Pixel est <strong>indispensable</strong> :</p>
      <ul>
        <li><strong>Mesurer les conversions :</strong> Savoir quelles pubs génèrent des ventes</li>
        <li><strong>Optimiser les campagnes :</strong> L'algorithme utilise vos données pour trouver des clients similaires</li>
        <li><strong>Retargeting :</strong> Cibler les visiteurs qui n'ont pas acheté</li>
        <li><strong>Audiences Lookalike :</strong> Trouver des prospects similaires à vos clients</li>
      </ul>

      <h3>5.2 Installer le Meta Pixel sur Shopify</h3>
      <p><strong>Méthode 1 : Via l'app Facebook &amp; Instagram</strong> (recommandé)</p>
      <ol>
        <li>Installez l'app "Facebook &amp; Instagram" depuis le Shopify App Store</li>
        <li>Connectez votre compte Meta Business</li>
        <li>Sélectionnez votre Pixel</li>
        <li>L'app configure automatiquement le tracking de base</li>
      </ol>

      <p><strong>Méthode 2 : Via GTM</strong> (contrôle avancé)</p>
      <ol>
        <li>Dans GTM, créez un tag "HTML personnalisé"</li>
        <li>Collez le code de base du Meta Pixel</li>
        <li>Créez des tags séparés pour chaque événement (ViewContent, AddToCart, Purchase...)</li>
      </ol>

      <h3>5.3 Événements Meta Pixel essentiels</h3>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">PageView</div>
          <div class="metric-desc">Chaque page visitée</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">ViewContent</div>
          <div class="metric-desc">Vue fiche produit</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">AddToCart</div>
          <div class="metric-desc">Ajout panier</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">InitiateCheckout</div>
          <div class="metric-desc">Début checkout</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">AddPaymentInfo</div>
          <div class="metric-desc">Infos paiement</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Purchase</div>
          <div class="metric-desc">Achat finalisé</div>
        </div>
      </div>

      <h2 id="tiktok-pixel">6. TikTok Pixel</h2>
      
      <p>TikTok est devenu un canal publicitaire majeur pour l'e-commerce. Le TikTok Pixel fonctionne de manière similaire au Meta Pixel :</p>
      
      <h3>6.1 Installation</h3>
      <ol>
        <li>Créez un compte TikTok Ads Manager</li>
        <li>Allez dans "Events" → "Web Events" → Créez un Pixel</li>
        <li>Installez via le Shopify App "TikTok" ou via GTM</li>
      </ol>

      <h3>6.2 Événements TikTok essentiels</h3>
      <ul>
        <li><code>ViewContent</code> : Vue produit</li>
        <li><code>AddToCart</code> : Ajout panier</li>
        <li><code>InitiateCheckout</code> : Début checkout</li>
        <li><code>CompletePayment</code> : Achat finalisé</li>
      </ul>

      <h2 id="server-side-tracking">7. Server-Side Tracking</h2>
      
      <h3>7.1 Pourquoi c'est devenu nécessaire</h3>
      <p>Le tracking côté client (navigateur) est de plus en plus limité :</p>
      <ul>
        <li><strong>iOS 14.5+ :</strong> App Tracking Transparency bloque le suivi par défaut</li>
        <li><strong>Bloqueurs de pub :</strong> 30-40% des utilisateurs bloquent les scripts de tracking</li>
        <li><strong>Cookies tiers :</strong> Chrome les supprime progressivement</li>
        <li><strong>ITP Safari :</strong> Cookies limités à 7 jours</li>
      </ul>

      <p>Le <strong>server-side tracking</strong> contourne ces limitations en envoyant les données directement depuis votre serveur vers les plateformes publicitaires.</p>

      <h3>7.2 Conversions API (CAPI) de Meta</h3>
      <p>Meta Conversions API envoie les événements directement depuis votre serveur :</p>
      <ul>
        <li><strong>Meilleure attribution :</strong> Les données ne sont pas bloquées</li>
        <li><strong>Déduplication :</strong> Meta déduplique automatiquement avec le Pixel</li>
        <li><strong>Meilleur score de qualité d'événement</strong></li>
      </ul>

      <p>Sur Shopify, l'app Facebook configure automatiquement CAPI. Pour une configuration manuelle avancée, vous pouvez utiliser GTM Server-Side ou des solutions comme Stape.io.</p>

      <div class="promo-box accent">
        <div class="promo-icon">🚀</div>
        <div class="promo-content">
          <h4>Configuration tracking avancée</h4>
          <p>Server-side tracking, CAPI, déduplication : nous configurons un tracking robuste pour votre boutique.</p>
          <a href="/contact" class="promo-link">Discuter de mon projet →</a>
        </div>
      </div>

      <h2 id="debugging">8. Debugging et validation</h2>
      
      <h3>8.1 Outils de debugging essentiels</h3>
      <ul>
        <li><strong>GTM Preview Mode :</strong> Testez vos tags avant publication. Dans GTM, cliquez sur "Aperçu" et naviguez sur votre site.</li>
        <li><strong>Google Tag Assistant :</strong> Extension Chrome pour vérifier vos tags Google.</li>
        <li><strong>GA4 DebugView :</strong> Dans GA4 → Admin → DebugView. Voir les événements en temps réel.</li>
        <li><strong>Meta Pixel Helper :</strong> Extension Chrome pour vérifier le Meta Pixel.</li>
        <li><strong>TikTok Pixel Helper :</strong> Extension pour valider le TikTok Pixel.</li>
      </ul>

      <h3>8.2 Checklist de validation</h3>
      <p>Avant de considérer votre tracking comme "terminé", vérifiez :</p>
      <ol>
        <li><strong>Page d'accueil :</strong> PageView déclenché</li>
        <li><strong>Page collection :</strong> view_item_list avec la liste des produits</li>
        <li><strong>Page produit :</strong> view_item avec toutes les infos produit</li>
        <li><strong>Ajout au panier :</strong> add_to_cart avec le bon produit et prix</li>
        <li><strong>Page panier :</strong> view_cart avec tous les produits</li>
        <li><strong>Checkout :</strong> begin_checkout</li>
        <li><strong>Page de confirmation :</strong> purchase avec le bon montant et transaction_id</li>
      </ol>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Testez avec une vraie commande</h4>
          <p>Faites une commande test (que vous rembourserez) pour valider que l'événement purchase remonte correctement avec le bon montant. C'est le seul moyen d'être sûr à 100%.</p>
        </div>
      </div>

      <h2 id="erreurs-courantes">9. Erreurs courantes à éviter</h2>
      
      <h3>9.1 Tracking en double</h3>
      <p>L'erreur la plus fréquente : installer GA4 via Shopify ET via GTM. Résultat : chaque événement est compté deux fois.</p>
      <p><strong>Solution :</strong> Choisissez UNE méthode et supprimez l'autre.</p>

      <h3>9.2 Pas de déduplication CAPI</h3>
      <p>Si vous utilisez Meta Pixel + Conversions API sans déduplication, chaque conversion est comptée deux fois.</p>
      <p><strong>Solution :</strong> Envoyez un <code>event_id</code> identique dans le Pixel et CAPI.</p>

      <h3>9.3 Mauvaise devise ou valeur</h3>
      <p>Envoyer des valeurs en centimes au lieu d'euros, ou oublier la devise.</p>
      <p><strong>Solution :</strong> Vérifiez que <code>value: 49.99</code> et <code>currency: 'EUR'</code> sont corrects.</p>

      <h3>9.4 Événements sans données produit</h3>
      <p>Envoyer un add_to_cart sans les infos du produit rend vos rapports inutilisables.</p>
      <p><strong>Solution :</strong> Toujours inclure <code>items</code> avec au minimum item_id, item_name, price, quantity.</p>

      <h3>9.5 Ne pas tester en production</h3>
      <p>Le tracking fonctionne en preview mais pas en production (problème de domaine, GTM non publié...).</p>
      <p><strong>Solution :</strong> Toujours valider sur le site en ligne après publication.</p>

      <h2 id="checklist">10. Checklist tracking e-commerce</h2>
      
      <div class="checklist-section">
        <h4>Configuration de base</h4>
        <ul class="checklist">
          <li>GTM installé sur toutes les pages</li>
          <li>GA4 configuré via GTM (pas en double avec Shopify)</li>
          <li>Meta Pixel installé + Conversions API activé</li>
          <li>TikTok Pixel installé (si publicité TikTok)</li>
          <li>Google Ads Conversion Tracking (si Google Ads)</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Événements e-commerce</h4>
        <ul class="checklist">
          <li>view_item_list sur les collections</li>
          <li>view_item sur les fiches produits</li>
          <li>add_to_cart avec données produit complètes</li>
          <li>view_cart sur la page panier</li>
          <li>begin_checkout au début du checkout</li>
          <li>purchase sur la page de confirmation</li>
          <li>Tous les événements incluent currency et value</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Validation</h4>
        <ul class="checklist">
          <li>GTM Preview Mode : tous les tags se déclenchent correctement</li>
          <li>GA4 DebugView : événements visibles en temps réel</li>
          <li>Meta Events Manager : événements reçus et dédupliqués</li>
          <li>Commande test effectuée et validée</li>
          <li>Rapports e-commerce GA4 affichent des données</li>
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>Un tracking bien configuré est le <strong>fondement de toute stratégie e-commerce data-driven</strong>. Sans données fiables, vos décisions marketing sont des suppositions.</p>
      
      <p>Prenez le temps de configurer votre tracking correctement dès le départ. Testez, validez, et maintenez-le à jour. Le ROI de cet investissement est considérable : chaque euro dépensé en publicité sera mieux attribué, et vous pourrez optimiser en continu.</p>

      <p>N'hésitez pas à <a href="/contact">nous contacter</a> si vous avez besoin d'aide pour mettre en place un tracking solide sur votre boutique Shopify.</p>
    `,
  },
  'optimiser-conversion-shopify': {
    title: 'CRO Shopify : Guide Complet pour Optimiser votre Taux de Conversion',
    excerpt: 'Guide complet d\'optimisation du taux de conversion (CRO) pour Shopify. Fiches produits, checkout, abandon panier, UX mobile : +47% de conversions en moyenne.',
    category: 'Conversion',
    date: '22 Avril 2025',
    readTime: '8 min',
    tableOfContents: [
      { id: 'introduction-cro', title: 'Introduction au CRO' },
      { id: 'taux-conversion', title: '1. Comprendre votre taux de conversion' },
      { id: 'fiches-produits', title: '2. Optimiser vos fiches produits' },
      { id: 'tunnel-achat', title: '3. Optimiser le tunnel d\'achat' },
      { id: 'checkout', title: '4. Checkout Shopify optimisé' },
      { id: 'abandon-panier', title: '5. Réduire l\'abandon de panier' },
      { id: 'mobile', title: '6. Optimisation mobile' },
      { id: 'reassurance', title: '7. Éléments de réassurance' },
      { id: 'ab-testing', title: '8. A/B Testing et itération' },
      { id: 'outils', title: '9. Outils CRO recommandés' },
      { id: 'checklist', title: '10. Checklist CRO complète' },
    ],
    content: `
      <h2 id="introduction-cro">Introduction au CRO (Conversion Rate Optimization)</h2>
      <p>Le CRO (Conversion Rate Optimization) est l'art d'augmenter le pourcentage de visiteurs qui effectuent une action souhaitée sur votre boutique : achat, inscription newsletter, ajout au panier...</p>
      
      <p><strong>Pourquoi le CRO est plus rentable que l'acquisition ?</strong></p>
      <ul>
        <li><strong>ROI immédiat :</strong> Améliorer de 1% votre taux de conversion peut augmenter vos revenus de 10-20%</li>
        <li><strong>Coût nul par visiteur :</strong> Contrairement à la pub, le CRO valorise le trafic existant</li>
        <li><strong>Effet cumulatif :</strong> Chaque amélioration reste acquise</li>
        <li><strong>Données concrètes :</strong> Décisions basées sur des tests, pas des suppositions</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">🎯</div>
        <div class="promo-content">
          <h4>Audit CRO gratuit de votre boutique</h4>
          <p>Identifiez les freins à la conversion avec notre analyse experte. Recommandations personnalisées et plan d'action.</p>
          <a href="/contact" class="promo-link">Demander mon audit gratuit →</a>
        </div>
      </div>

      <h2 id="taux-conversion">1. Comprendre votre taux de conversion</h2>
      
      <h3>1.1 Qu'est-ce qu'un bon taux de conversion ?</h3>
      <p>Le taux de conversion e-commerce varie selon le secteur, le prix moyen et la source de trafic. Voici les benchmarks :</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">1-2%</div>
          <div class="metric-desc">Taux moyen global e-commerce</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">2-3%</div>
          <div class="metric-desc">Bonne performance</div>
        </div>
        <div class="metric-card good">
          <div class="metric-value">3-5%</div>
          <div class="metric-desc">Très bonne performance</div>
        </div>
        <div class="metric-card accent">
          <div class="metric-value">5%+</div>
          <div class="metric-desc">Excellent (top 10%)</div>
        </div>
      </div>

      <h3>1.2 Taux par secteur</h3>
      <ul>
        <li><strong>Mode/Vêtements :</strong> 1.5-2.5%</li>
        <li><strong>Électronique :</strong> 1-2%</li>
        <li><strong>Beauté/Cosmétiques :</strong> 2-4%</li>
        <li><strong>Alimentation :</strong> 3-5%</li>
        <li><strong>Luxe :</strong> 0.5-1.5%</li>
      </ul>

      <h3>1.3 Taux par source de trafic</h3>
      <p>Le trafic n'est pas égal en qualité :</p>
      <ul>
        <li><strong>Email marketing :</strong> 4-6% (trafic le plus qualifié)</li>
        <li><strong>Trafic direct :</strong> 2-3% (clients fidèles)</li>
        <li><strong>SEO :</strong> 2-3% (intention forte)</li>
        <li><strong>Réseaux sociaux organiques :</strong> 1-2%</li>
        <li><strong>Publicité payante :</strong> 0.5-2% (variable selon ciblage)</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Ne comparez pas l'incomparable</h4>
          <p>Un taux de conversion de 1% sur du trafic publicitaire froid peut être excellent, alors que 2% sur de l'email serait médiocre. Segmentez toujours vos analyses par source.</p>
        </div>
      </div>

      <h2 id="fiches-produits">2. Optimiser vos fiches produits</h2>
      <p>La fiche produit est la page la plus importante de votre boutique. C'est là que se prend la décision d'achat.</p>
      
      <h3>2.1 Photos produits professionnelles</h3>
      <p>Les visuels représentent <strong>83% de la décision d'achat</strong> en e-commerce :</p>
      
      <ul>
        <li><strong>Minimum 5-7 photos par produit</strong></li>
        <li><strong>Photo principale :</strong> Fond blanc/neutre, produit centré, haute résolution</li>
        <li><strong>Photos d'angles :</strong> Vue de face, dos, côtés, dessus, détails</li>
        <li><strong>Photos lifestyle :</strong> Produit en situation, contexte d'utilisation</li>
        <li><strong>Photos de détails :</strong> Textures, finitions, étiquettes</li>
        <li><strong>Photos d'échelle :</strong> Avec un objet de référence ou porté par un modèle</li>
        <li><strong>Vidéo :</strong> +85% de chances d'achat avec une vidéo produit</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">✅ Bonnes pratiques photos</div>
        <ul>
          <li>Résolution minimum : 2048x2048px</li>
          <li>Format : JPEG ou WebP optimisé</li>
          <li>Zoom activé (Shopify le fait automatiquement)</li>
          <li>Cohérence visuelle entre tous les produits</li>
        </ul>
      </div>

      <h3>2.2 Titre produit optimisé</h3>
      <p>Le titre doit être clair, descriptif et inclure les mots-clés recherchés :</p>
      
      <div class="example-box good">
        <div class="example-label">✅ Bon titre</div>
        <code>T-shirt Premium Coton Bio Homme - Noir - Made in France</code>
      </div>

      <div class="example-box bad">
        <div class="example-label">❌ Mauvais titre</div>
        <code>T-shirt ref.12345</code>
      </div>

      <h3>2.3 Description qui convertit</h3>
      <p>Une description efficace suit cette structure :</p>
      
      <ol>
        <li><strong>Accroche (bénéfice principal) :</strong> "Confort absolu au quotidien"</li>
        <li><strong>Problème résolu :</strong> "Fini les t-shirts qui se déforment après 3 lavages"</li>
        <li><strong>Caractéristiques :</strong> Liste à puces des specs techniques</li>
        <li><strong>Composition/Matières :</strong> Détails sur les matériaux</li>
        <li><strong>Guide des tailles :</strong> Lien ou tableau</li>
        <li><strong>Entretien :</strong> Instructions de lavage</li>
        <li><strong>Garanties :</strong> Retours, SAV</li>
      </ol>

      <h3>2.4 Prix et promotions</h3>
      <ul>
        <li><strong>Prix barré :</strong> Si promotion, montrez l'ancien prix</li>
        <li><strong>Économie affichée :</strong> "-20%" ou "Économisez 15€"</li>
        <li><strong>Prix psychologique :</strong> 49,90€ plutôt que 50€</li>
        <li><strong>Paiement fractionné :</strong> "ou 3x16,63€ sans frais"</li>
      </ul>

      <h3>2.5 Bouton d'ajout au panier</h3>
      <ul>
        <li><strong>Visible sans scroller</strong> (above the fold)</li>
        <li><strong>Couleur contrastée</strong> qui ressort</li>
        <li><strong>Texte clair :</strong> "Ajouter au panier" ou "Acheter maintenant"</li>
        <li><strong>Sticky sur mobile :</strong> Bouton fixe en bas d'écran</li>
      </ul>

      <h2 id="tunnel-achat">3. Optimiser le tunnel d'achat</h2>
      
      <h3>3.1 Page collection optimisée</h3>
      <p>Les pages collection sont souvent négligées mais cruciales :</p>
      <ul>
        <li><strong>Filtres pertinents :</strong> Taille, couleur, prix, catégorie</li>
        <li><strong>Tri intelligent :</strong> Popularité, nouveautés, prix</li>
        <li><strong>Badges visuels :</strong> "Nouveau", "Bestseller", "-20%"</li>
        <li><strong>Quick view :</strong> Aperçu rapide sans quitter la page</li>
        <li><strong>Lazy loading :</strong> Chargement progressif des images</li>
      </ul>

      <h3>3.2 Navigation simplifiée</h3>
      <p>Chaque clic supplémentaire fait perdre des clients :</p>
      <ul>
        <li><strong>Menu clair :</strong> Maximum 7 catégories principales</li>
        <li><strong>Recherche visible :</strong> Barre de recherche accessible</li>
        <li><strong>Autocomplete :</strong> Suggestions de recherche intelligentes</li>
        <li><strong>Breadcrumb :</strong> Fil d'Ariane pour se repérer</li>
        <li><strong>Produits récemment vus :</strong> Facilite le retour</li>
      </ul>

      <h3>3.3 Page panier optimisée</h3>
      <ul>
        <li><strong>Récapitulatif clair :</strong> Photo, titre, quantité, prix</li>
        <li><strong>Modification facile :</strong> Changer quantité, supprimer</li>
        <li><strong>Frais de livraison estimés :</strong> Pas de surprise au checkout</li>
        <li><strong>Code promo visible :</strong> Champ pour entrer un code</li>
        <li><strong>Cross-sell :</strong> "Vous pourriez aussi aimer"</li>
        <li><strong>Seuil livraison gratuite :</strong> "Plus que 15€ pour la livraison offerte"</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">🚀</div>
        <div class="promo-content">
          <h4>Optimisation CRO sur-mesure</h4>
          <p>Nous auditons votre tunnel d'achat et implémentons les optimisations qui ont prouvé leur efficacité.</p>
          <a href="/contact" class="promo-link">Discuter de mon projet →</a>
        </div>
      </div>

      <h2 id="checkout">4. Checkout Shopify optimisé</h2>
      
      <h3>4.1 Réduire les frictions</h3>
      <p>Le checkout est le moment critique. Chaque friction coûte des ventes :</p>
      <ul>
        <li><strong>Guest checkout :</strong> Permettre l'achat sans compte (obligatoire)</li>
        <li><strong>Express checkout :</strong> Shop Pay, Apple Pay, Google Pay</li>
        <li><strong>Auto-complétion :</strong> Adresse Google, code postal</li>
        <li><strong>Minimum de champs :</strong> Ne demandez que l'essentiel</li>
        <li><strong>Erreurs en temps réel :</strong> Validation instantanée</li>
      </ul>

      <h3>4.2 Moyens de paiement</h3>
      <p>Plus vous offrez d'options, plus vous convertissez :</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">CB</div>
          <div class="metric-desc">Visa, Mastercard, Amex</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Shop Pay</div>
          <div class="metric-desc">+18% de conversion</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">PayPal</div>
          <div class="metric-desc">Confiance et facilité</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">BNPL</div>
          <div class="metric-desc">Klarna, Alma, Scalapay</div>
        </div>
      </div>

      <p><strong>Le paiement fractionné (BNPL) augmente :</strong></p>
      <ul>
        <li>Le taux de conversion de 20-30%</li>
        <li>Le panier moyen de 30-50%</li>
        <li>Particulièrement efficace pour les paniers >100€</li>
      </ul>

      <h3>4.3 Éléments de réassurance au checkout</h3>
      <ul>
        <li><strong>Badges sécurité :</strong> SSL, paiement sécurisé</li>
        <li><strong>Politique de retour :</strong> "Retours gratuits sous 30 jours"</li>
        <li><strong>Délai de livraison :</strong> "Livré sous 2-3 jours"</li>
        <li><strong>Contact support :</strong> Email ou chat visible</li>
      </ul>

      <h2 id="abandon-panier">5. Réduire l'abandon de panier</h2>
      
      <p><strong>70% des paniers sont abandonnés.</strong> C'est énorme, mais c'est aussi une opportunité.</p>

      <h3>5.1 Raisons principales d'abandon</h3>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">49%</div>
          <div class="metric-desc">Frais supplémentaires (livraison, taxes)</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">24%</div>
          <div class="metric-desc">Création de compte obligatoire</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">19%</div>
          <div class="metric-desc">Processus trop long/complexe</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">18%</div>
          <div class="metric-desc">Manque de confiance (sécurité)</div>
        </div>
      </div>

      <h3>5.2 Solutions immédiates</h3>
      <ul>
        <li><strong>Afficher les frais tôt :</strong> Dès la page produit ou panier</li>
        <li><strong>Livraison gratuite :</strong> À partir d'un seuil (ex: 50€)</li>
        <li><strong>Progress bar :</strong> "Plus que 12€ pour la livraison gratuite"</li>
        <li><strong>Exit-intent popup :</strong> Offre de dernière minute (-10%)</li>
        <li><strong>Sauvegarde du panier :</strong> Cookies pour retrouver son panier</li>
      </ul>

      <h3>5.3 Emails de relance panier abandonné</h3>
      <p>La séquence email parfaite :</p>
      <ol>
        <li><strong>Email 1 (1h après) :</strong> Rappel simple "Vous avez oublié quelque chose ?"</li>
        <li><strong>Email 2 (24h après) :</strong> Urgence + avis clients</li>
        <li><strong>Email 3 (72h après) :</strong> Offre incitative (-10% ou livraison gratuite)</li>
      </ol>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>N'abusez pas des promos</h4>
          <p>Si vos clients apprennent qu'ils reçoivent une promo en abandonnant leur panier, ils le feront systématiquement. Réservez les offres au 3ème email.</p>
        </div>
      </div>

      <h2 id="mobile">6. Optimisation mobile</h2>
      
      <p><strong>70% du trafic e-commerce vient du mobile</strong>, mais le taux de conversion y est 2x plus faible que sur desktop. Optimiser le mobile est prioritaire.</p>

      <h3>6.1 Design mobile-first</h3>
      <ul>
        <li><strong>Boutons larges :</strong> Minimum 44x44px pour les zones tactiles</li>
        <li><strong>Espacement :</strong> Éviter les clics accidentels</li>
        <li><strong>Police lisible :</strong> Minimum 16px</li>
        <li><strong>Navigation simplifiée :</strong> Menu hamburger efficace</li>
        <li><strong>Carrousel horizontal :</strong> Pour les produits similaires</li>
      </ul>

      <h3>6.2 Bouton sticky "Ajouter au panier"</h3>
      <p>Le bouton d'achat doit toujours être visible sur mobile :</p>
      <ul>
        <li>Barre fixe en bas de l'écran</li>
        <li>Avec le prix et le bouton CTA</li>
        <li>Couleur contrastée</li>
      </ul>

      <h3>6.3 Performance mobile</h3>
      <p>La vitesse est cruciale sur mobile (souvent en 4G) :</p>
      <ul>
        <li><strong>LCP &lt; 2.5s :</strong> Chargement du contenu principal</li>
        <li><strong>Images optimisées :</strong> WebP, lazy loading</li>
        <li><strong>Limiter les apps :</strong> Chaque app ajoute du poids</li>
        <li><strong>Tester sur de vrais appareils :</strong> Pas seulement en simulation</li>
      </ul>

      <h2 id="reassurance">7. Éléments de réassurance</h2>
      
      <p>La confiance est le facteur n°1 de conversion. Sans confiance, pas d'achat.</p>

      <h3>7.1 Avis clients</h3>
      <ul>
        <li><strong>Avis avec photos :</strong> +65% de conversion</li>
        <li><strong>Note moyenne visible :</strong> Étoiles sur la fiche produit</li>
        <li><strong>Nombre d'avis :</strong> "4.8/5 basé sur 127 avis"</li>
        <li><strong>Réponses aux avis négatifs :</strong> Montre le SAV</li>
        <li><strong>Apps recommandées :</strong> Judge.me, Loox, Stamped</li>
      </ul>

      <h3>7.2 Garanties et politiques</h3>
      <ul>
        <li><strong>Satisfait ou remboursé :</strong> 14/30 jours minimum</li>
        <li><strong>Retours gratuits :</strong> Si possible, c'est un game-changer</li>
        <li><strong>Garantie produit :</strong> Durée et conditions claires</li>
        <li><strong>Paiement sécurisé :</strong> Badges SSL, PCI DSS</li>
      </ul>

      <h3>7.3 Preuve sociale</h3>
      <ul>
        <li><strong>Nombre de clients :</strong> "Rejoint par +10 000 clients"</li>
        <li><strong>Logos presse :</strong> Si mentionné dans les médias</li>
        <li><strong>UGC (User Generated Content) :</strong> Photos clients Instagram</li>
        <li><strong>Notifications temps réel :</strong> "Julie vient d'acheter..." (avec modération)</li>
      </ul>

      <h3>7.4 Contact accessible</h3>
      <ul>
        <li><strong>Email visible :</strong> Dans le footer et page contact</li>
        <li><strong>Chat en direct :</strong> Tidio, Gorgias, Zendesk</li>
        <li><strong>FAQ complète :</strong> Anticiper les questions</li>
        <li><strong>Numéro de téléphone :</strong> Optionnel mais rassurant</li>
      </ul>

      <h2 id="ab-testing">8. A/B Testing et itération</h2>
      
      <h3>8.1 Pourquoi l'A/B testing est essentiel</h3>
      <p>Le CRO est une science, pas des suppositions. L'A/B testing vous permet de :</p>
      <ul>
        <li>Valider vos hypothèses avec des données</li>
        <li>Éviter de dégrader vos performances par erreur</li>
        <li>Apprendre ce qui fonctionne pour VOTRE audience</li>
        <li>Améliorer continuellement</li>
      </ul>

      <h3>8.2 Quoi tester en priorité</h3>
      <p>Testez les éléments à fort impact :</p>
      <ol>
        <li><strong>Boutons CTA :</strong> Couleur, texte, taille, position</li>
        <li><strong>Prix et offres :</strong> Affichage, réductions, BNPL</li>
        <li><strong>Photos produits :</strong> Ordre, style, nombre</li>
        <li><strong>Page d'accueil :</strong> Hero, mise en avant</li>
        <li><strong>Checkout :</strong> Champs, étapes, réassurance</li>
      </ol>

      <h3>8.3 Règles d'or de l'A/B testing</h3>
      <ul>
        <li><strong>Un seul changement à la fois :</strong> Sinon impossible de savoir ce qui a marché</li>
        <li><strong>Volume suffisant :</strong> Minimum 1000 visiteurs par variante</li>
        <li><strong>Durée suffisante :</strong> Minimum 2 semaines (couvrir week-end)</li>
        <li><strong>Signification statistique :</strong> Attendre 95% de confiance</li>
      </ul>

      <h2 id="outils">9. Outils CRO recommandés</h2>
      
      <h3>9.1 Analytics et heatmaps</h3>
      <ul>
        <li><strong>Google Analytics 4 :</strong> Gratuit, indispensable</li>
        <li><strong>Hotjar / Lucky Orange :</strong> Heatmaps, enregistrements de sessions</li>
        <li><strong>Microsoft Clarity :</strong> Alternative gratuite à Hotjar</li>
      </ul>

      <h3>9.2 A/B Testing</h3>
      <ul>
        <li><strong>Google Optimize :</strong> Gratuit (arrêté en 2023, alternatives: VWO, ABTasty)</li>
        <li><strong>Convert :</strong> Spécialisé Shopify</li>
        <li><strong>Optimizely :</strong> Enterprise</li>
      </ul>

      <h3>9.3 Conversion</h3>
      <ul>
        <li><strong>Klaviyo :</strong> Email marketing et abandon panier</li>
        <li><strong>Privy :</strong> Pop-ups et capture d'emails</li>
        <li><strong>Judge.me / Loox :</strong> Avis clients</li>
        <li><strong>ReConvert :</strong> Upsell post-achat</li>
      </ul>

      <h2 id="checklist">10. Checklist CRO complète</h2>
      
      <div class="checklist-section">
        <h4>Fiches produits</h4>
        <ul class="checklist">
          <li>Minimum 5 photos haute qualité par produit</li>
          <li>Vidéo produit quand pertinent</li>
          <li>Titre descriptif avec mots-clés</li>
          <li>Description structurée (bénéfices + specs)</li>
          <li>Prix clair avec économie affichée si promo</li>
          <li>Bouton CTA visible et contrasté</li>
          <li>Avis clients avec photos</li>
          <li>Guide des tailles accessible</li>
          <li>Informations livraison visibles</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Tunnel d'achat</h4>
        <ul class="checklist">
          <li>Navigation claire (max 7 catégories)</li>
          <li>Recherche avec autocomplete</li>
          <li>Filtres pertinents sur les collections</li>
          <li>Page panier avec récapitulatif clair</li>
          <li>Frais de livraison affichés tôt</li>
          <li>Progress bar livraison gratuite</li>
          <li>Cross-sell non intrusif</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Checkout</h4>
        <ul class="checklist">
          <li>Guest checkout activé</li>
          <li>Express checkout (Shop Pay, Apple Pay)</li>
          <li>Paiement fractionné (Klarna, Alma)</li>
          <li>Multiple moyens de paiement</li>
          <li>Auto-complétion adresse</li>
          <li>Badges de sécurité</li>
          <li>Politique de retour visible</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Mobile</h4>
        <ul class="checklist">
          <li>Bouton sticky "Ajouter au panier"</li>
          <li>Boutons larges (44px minimum)</li>
          <li>Police lisible (16px minimum)</li>
          <li>LCP &lt; 2.5 secondes</li>
          <li>Images optimisées (WebP)</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>Réassurance</h4>
        <ul class="checklist">
          <li>Avis clients avec photos</li>
          <li>Garantie satisfait ou remboursé</li>
          <li>Politique de retour claire</li>
          <li>Paiement sécurisé (badges)</li>
          <li>Contact accessible (email, chat)</li>
          <li>FAQ complète</li>
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>L'optimisation du taux de conversion est un <strong>investissement rentable</strong>. Chaque point de conversion gagné se traduit directement en revenus supplémentaires, sans coût d'acquisition additionnel.</p>
      
      <p>Commencez par les quick wins : photos produits, checkout optimisé, emails d'abandon panier. Puis itérez avec l'A/B testing pour améliorer continuellement.</p>

      <p>Besoin d'aide pour optimiser votre boutique ? <a href="/contact">Contactez-nous</a> pour un audit CRO gratuit et des recommandations personnalisées.</p>
    `,
  },
  'klaviyo-vs-mailchimp': {
    title: 'Klaviyo vs Mailchimp : quel outil email marketing pour Shopify ?',
    excerpt: 'Comparatif complet Klaviyo vs Mailchimp pour Shopify : fonctionnalités, tarifs, intégrations, automatisations. Guide pour choisir le meilleur outil email marketing e-commerce.',
    category: 'Marketing',
    date: '12 Mai 2025',
    readTime: '6 min',
    tableOfContents: [
      { id: 'introduction', title: 'Pourquoi l\'email marketing est crucial' },
      { id: 'presentation-klaviyo', title: 'Klaviyo : présentation complète' },
      { id: 'presentation-mailchimp', title: 'Mailchimp : présentation complète' },
      { id: 'comparatif-fonctionnalites', title: 'Comparatif des fonctionnalités' },
      { id: 'integration-shopify', title: 'Intégration Shopify' },
      { id: 'automatisations', title: 'Automatisations et flows' },
      { id: 'segmentation', title: 'Segmentation et ciblage' },
      { id: 'tarifs', title: 'Comparatif des tarifs' },
      { id: 'cas-usage', title: 'Cas d\'usage et recommandations' },
      { id: 'migration', title: 'Migration entre outils' },
      { id: 'faq', title: 'FAQ' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <h2 id="introduction">Pourquoi l&apos;email marketing est crucial pour votre boutique Shopify</h2>
      <p>L&apos;email marketing reste le <strong>canal le plus rentable en e-commerce</strong> avec un ROI moyen de 42€ pour chaque euro dépensé. Pour une boutique Shopify, choisir le bon outil d&apos;email marketing peut faire la différence entre une croissance stagnante et une explosion des ventes.</p>
      
      <p>En 2024, deux solutions dominent le marché de l&apos;email marketing pour Shopify : <strong>Klaviyo</strong>, le spécialiste e-commerce, et <strong>Mailchimp</strong>, la solution généraliste la plus connue. Mais laquelle est vraiment adaptée à votre boutique ?</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">ROI Email</div>
          <div class="metric-value">42:1</div>
          <div class="metric-desc">Retour sur investissement moyen</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Taux ouverture</div>
          <div class="metric-value">15-25%</div>
          <div class="metric-desc">E-commerce moyenne</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Conversion</div>
          <div class="metric-value">4-6%</div>
          <div class="metric-desc">Emails automatisés</div>
        </div>
      </div>

      <p>Ce guide compare en détail Klaviyo et Mailchimp sur tous les critères importants pour une boutique Shopify : <strong>fonctionnalités, intégration, automatisations, segmentation et tarifs</strong>.</p>

      <h2 id="presentation-klaviyo">Klaviyo : le spécialiste e-commerce</h2>
      
      <h3>Qu&apos;est-ce que Klaviyo ?</h3>
      <p><strong>Klaviyo</strong> est une plateforme d&apos;email et SMS marketing spécialement conçue pour l&apos;e-commerce. Fondée en 2012, elle s&apos;est imposée comme la <strong>référence pour les boutiques Shopify</strong> grâce à son intégration native et ses fonctionnalités avancées de segmentation.</p>

      <p>Plus de <strong>100 000 marques e-commerce</strong> utilisent Klaviyo, dont des références comme Chubbies, Glossier ou ColourPop. La plateforme génère en moyenne <strong>25% du chiffre d&apos;affaires</strong> de ses utilisateurs via l&apos;email marketing.</p>

      <h3>Points forts de Klaviyo pour Shopify</h3>
      <ul>
        <li><strong>Intégration native Shopify :</strong> Synchronisation en temps réel des données clients, commandes, produits et comportements de navigation</li>
        <li><strong>Segmentation e-commerce avancée :</strong> Créez des segments basés sur l&apos;historique d&apos;achat, le CLV, les produits consultés, le comportement sur site</li>
        <li><strong>Flows d&apos;automatisation pré-construits :</strong> Abandon de panier, welcome series, post-achat, reconquête, anniversaire</li>
        <li><strong>SMS marketing intégré :</strong> Combinez email et SMS dans vos automatisations</li>
        <li><strong>Predictive analytics :</strong> Prédiction de la date du prochain achat, du CLV, du risque de churn</li>
        <li><strong>A/B testing avancé :</strong> Testez sujets, contenus, heures d&apos;envoi, flows entiers</li>
        <li><strong>Reporting e-commerce :</strong> Attribution des revenus, performances par flow, ROI détaillé</li>
      </ul>

      <h3>Points faibles de Klaviyo</h3>
      <ul>
        <li><strong>Tarif plus élevé :</strong> À partir de 20$/mois pour 500 contacts actifs</li>
        <li><strong>Courbe d&apos;apprentissage :</strong> Interface puissante mais complexe au début</li>
        <li><strong>Pas de plan gratuit illimité :</strong> Plan gratuit limité à 250 contacts</li>
        <li><strong>Focalisé e-commerce :</strong> Moins adapté pour d&apos;autres types de business</li>
      </ul>

      <h2 id="presentation-mailchimp">Mailchimp : la solution généraliste</h2>
      
      <h3>Qu&apos;est-ce que Mailchimp ?</h3>
      <p><strong>Mailchimp</strong> est la plateforme d&apos;email marketing la plus connue au monde, fondée en 2001. Avec plus de <strong>13 millions d&apos;utilisateurs</strong>, c&apos;est souvent le premier outil que découvrent les entrepreneurs.</p>

      <p>Mailchimp a évolué pour devenir une plateforme marketing complète incluant CRM, landing pages, réseaux sociaux et publicités. Cependant, cette diversification a parfois été au détriment de ses fonctionnalités e-commerce.</p>

      <h3>Points forts de Mailchimp</h3>
      <ul>
        <li><strong>Interface intuitive :</strong> Prise en main rapide, idéal pour les débutants</li>
        <li><strong>Plan gratuit généreux :</strong> Jusqu&apos;à 500 contacts et 1000 envois/mois</li>
        <li><strong>Bibliothèque de templates :</strong> Plus de 100 modèles d&apos;emails prêts à l&apos;emploi</li>
        <li><strong>Fonctionnalités all-in-one :</strong> Landing pages, formulaires, social posting inclus</li>
        <li><strong>Marque reconnue :</strong> Support et communauté très développés</li>
        <li><strong>Éditeur drag-and-drop :</strong> Création d&apos;emails sans code</li>
      </ul>

      <h3>Points faibles de Mailchimp pour Shopify</h3>
      <ul>
        <li><strong>Intégration Shopify limitée :</strong> Connexion via app tierce, synchronisation moins fluide</li>
        <li><strong>Segmentation e-commerce basique :</strong> Difficile de segmenter sur l&apos;historique d&apos;achat détaillé</li>
        <li><strong>Automatisations moins avancées :</strong> Flows e-commerce moins personnalisables</li>
        <li><strong>Pas de SMS natif :</strong> Nécessite une intégration tierce</li>
        <li><strong>Attribution revenue limitée :</strong> Difficile de mesurer le ROI précis</li>
        <li><strong>Tarification par contact total :</strong> Vous payez même pour les contacts inactifs</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention à l&apos;intégration Shopify de Mailchimp</h4>
          <p>Mailchimp a rompu son partenariat officiel avec Shopify en 2019. L&apos;intégration actuelle passe par des apps tierces (ShopSync, Mailchimp for Shopify) qui peuvent avoir des limitations de synchronisation.</p>
        </div>
      </div>

      <h2 id="comparatif-fonctionnalites">Comparatif détaillé des fonctionnalités</h2>
      
      <h3>Tableau comparatif Klaviyo vs Mailchimp</h3>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Fonctionnalité</th>
              <th>Klaviyo</th>
              <th>Mailchimp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Intégration Shopify</strong></td>
              <td>✅ Native, temps réel</td>
              <td>⚠️ Via app tierce</td>
            </tr>
            <tr>
              <td><strong>Segmentation e-commerce</strong></td>
              <td>✅ Avancée (CLV, prédictif)</td>
              <td>⚠️ Basique</td>
            </tr>
            <tr>
              <td><strong>Flows automatisés</strong></td>
              <td>✅ 50+ templates e-commerce</td>
              <td>⚠️ 20+ templates généraux</td>
            </tr>
            <tr>
              <td><strong>Abandon de panier</strong></td>
              <td>✅ Multi-étapes, personnalisé</td>
              <td>⚠️ Basique</td>
            </tr>
            <tr>
              <td><strong>SMS marketing</strong></td>
              <td>✅ Intégré natif</td>
              <td>❌ Non disponible</td>
            </tr>
            <tr>
              <td><strong>Predictive analytics</strong></td>
              <td>✅ CLV, next order date</td>
              <td>❌ Non disponible</td>
            </tr>
            <tr>
              <td><strong>Attribution revenue</strong></td>
              <td>✅ Détaillée par flow</td>
              <td>⚠️ Basique</td>
            </tr>
            <tr>
              <td><strong>A/B testing</strong></td>
              <td>✅ Avancé (flows entiers)</td>
              <td>⚠️ Sujets et contenus</td>
            </tr>
            <tr>
              <td><strong>Plan gratuit</strong></td>
              <td>⚠️ 250 contacts</td>
              <td>✅ 500 contacts</td>
            </tr>
            <tr>
              <td><strong>Facilité d&apos;utilisation</strong></td>
              <td>⚠️ Courbe d&apos;apprentissage</td>
              <td>✅ Très intuitif</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="integration-shopify">Intégration Shopify : le critère décisif</h2>
      
      <h3>Intégration Klaviyo + Shopify</h3>
      <p>L&apos;intégration Klaviyo-Shopify est <strong>la plus complète du marché</strong>. En quelques clics, vous connectez votre boutique et Klaviyo synchronise automatiquement :</p>
      
      <ul>
        <li><strong>Données clients :</strong> Nom, email, adresse, téléphone, historique complet</li>
        <li><strong>Commandes :</strong> Produits achetés, montants, fréquence, statut</li>
        <li><strong>Catalogue produits :</strong> Images, prix, descriptions, variants</li>
        <li><strong>Comportement sur site :</strong> Pages vues, produits consultés, ajouts au panier</li>
        <li><strong>Événements en temps réel :</strong> Checkout initié, commande passée, livraison</li>
      </ul>

      <p>Cette synchronisation temps réel permet des <strong>automatisations ultra-précises</strong>. Par exemple, vous pouvez envoyer un email 30 minutes après qu&apos;un visiteur a consulté un produit sans l&apos;acheter.</p>

      <h3>Intégration Mailchimp + Shopify</h3>
      <p>Depuis la rupture du partenariat en 2019, l&apos;intégration Mailchimp-Shopify passe par des <strong>applications tierces</strong> comme ShopSync ou l&apos;app officielle "Mailchimp for Shopify".</p>

      <p>Limitations de cette intégration :</p>
      <ul>
        <li>Synchronisation parfois décalée (15-30 minutes)</li>
        <li>Moins de données comportementales disponibles</li>
        <li>Configuration plus complexe</li>
        <li>Possibles bugs de synchronisation</li>
        <li>Support technique limité (entre deux entreprises)</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">🔧</div>
        <div class="promo-content">
          <h4>Configuration Klaviyo pour Shopify</h4>
          <p>Nous configurons Klaviyo pour votre boutique avec tous les flows essentiels et une segmentation optimisée.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="automatisations">Automatisations et flows : le cœur de l&apos;email marketing</h2>
      
      <h3>Flows essentiels pour une boutique Shopify</h3>
      <p>Les automatisations (ou "flows") sont des séquences d&apos;emails déclenchées automatiquement par des actions ou événements. Ce sont elles qui génèrent le plus de revenus.</p>

      <h4>1. Welcome Series (Bienvenue)</h4>
      <p>Séquence envoyée aux nouveaux inscrits pour présenter votre marque et inciter au premier achat.</p>
      
      <div class="example-box good">
        <div class="example-label">📧 Exemple Welcome Series optimisée</div>
        <ul>
          <li>J+0 : Bienvenue + code promo 10%</li>
          <li>J+2 : Histoire de la marque + valeurs</li>
          <li>J+4 : Best-sellers + preuve sociale</li>
          <li>J+7 : Rappel code promo (expire bientôt)</li>
        </ul>
      </div>

      <h4>2. Abandon de panier</h4>
      <p>Le flow le plus rentable : récupérez <strong>10-15% des paniers abandonnés</strong> avec une séquence bien pensée.</p>
      
      <div class="example-box good">
        <div class="example-label">🛒 Séquence abandon de panier</div>
        <ul>
          <li>H+1 : Rappel simple du panier</li>
          <li>H+24 : Raisons de commander + avis clients</li>
          <li>H+72 : Offre spéciale (-10% ou livraison gratuite)</li>
        </ul>
      </div>

      <h4>3. Browse Abandonment</h4>
      <p>Ciblez les visiteurs qui ont consulté des produits sans les ajouter au panier.</p>

      <h4>4. Post-achat</h4>
      <p>Remerciement, suivi de livraison, demande d&apos;avis, produits complémentaires.</p>

      <h4>5. Reconquête (Win-back)</h4>
      <p>Réactivez les clients inactifs depuis 60, 90 ou 120 jours.</p>

      <h3>Klaviyo vs Mailchimp : automatisations</h3>
      
      <p><strong>Klaviyo</strong> propose :</p>
      <ul>
        <li>Plus de 50 templates de flows e-commerce</li>
        <li>Déclencheurs basés sur le comportement Shopify en temps réel</li>
        <li>Branches conditionnelles avancées (si/alors)</li>
        <li>Délais dynamiques basés sur le comportement</li>
        <li>A/B test au niveau du flow entier</li>
        <li>Intégration SMS dans les flows</li>
      </ul>

      <p><strong>Mailchimp</strong> propose :</p>
      <ul>
        <li>Environ 20 templates d&apos;automatisation</li>
        <li>Déclencheurs basiques (inscription, achat)</li>
        <li>Branches conditionnelles simples</li>
        <li>Délais fixes uniquement</li>
        <li>A/B test limité aux emails individuels</li>
      </ul>

      <h2 id="segmentation">Segmentation et ciblage : la clé de la personnalisation</h2>
      
      <p>La segmentation permet d&apos;envoyer le bon message à la bonne personne. Plus votre segmentation est fine, plus vos emails sont pertinents et performants.</p>

      <h3>Segmentation Klaviyo</h3>
      <p>Klaviyo excelle en segmentation grâce à son intégration Shopify. Vous pouvez créer des segments basés sur :</p>
      
      <ul>
        <li><strong>Historique d&apos;achat :</strong> Nombre de commandes, montant total, produits achetés, catégories</li>
        <li><strong>Comportement récent :</strong> Actifs/inactifs, produits consultés, paniers abandonnés</li>
        <li><strong>Valeur client (CLV) :</strong> Clients VIP, clients à fort potentiel</li>
        <li><strong>Engagement email :</strong> Ouvertures, clics, dernière interaction</li>
        <li><strong>Données prédictives :</strong> Date probable du prochain achat, risque de churn</li>
        <li><strong>Données personnalisées :</strong> Propriétés custom importées ou collectées</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">🎯 Exemples de segments Klaviyo puissants</div>
        <ul>
          <li>Clients VIP (top 10% par revenus) n&apos;ayant pas commandé depuis 60 jours</li>
          <li>Acheteurs de la catégorie "Robes" n&apos;ayant jamais acheté d&apos;accessoires</li>
          <li>Visiteurs ayant consulté un produit 3+ fois sans acheter</li>
          <li>Clients avec un CLV prédit &gt; 500€</li>
        </ul>
      </div>

      <h3>Segmentation Mailchimp</h3>
      <p>La segmentation Mailchimp est plus limitée pour l&apos;e-commerce :</p>
      
      <ul>
        <li>Segments basés sur les tags manuels</li>
        <li>Activité email (ouvertures, clics)</li>
        <li>Données de formulaires</li>
        <li>Quelques données Shopify basiques (si intégration configurée)</li>
      </ul>

      <p>La principale limite : Mailchimp ne récupère pas nativement toutes les données comportementales de Shopify, ce qui <strong>limite vos possibilités de segmentation e-commerce</strong>.</p>

      <h2 id="tarifs">Comparatif des tarifs 2024</h2>
      
      <h3>Grille tarifaire Klaviyo</h3>
      <p>Klaviyo facture selon le nombre de <strong>contacts actifs</strong> (profils ayant reçu au moins un email ou SMS dans le mois).</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">0-250 contacts</div>
          <div class="metric-value">Gratuit</div>
          <div class="metric-desc">500 emails/mois</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">251-500</div>
          <div class="metric-value">20$/mois</div>
          <div class="metric-desc">5000 emails/mois</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">501-1000</div>
          <div class="metric-value">30$/mois</div>
          <div class="metric-desc">10000 emails/mois</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">1001-1500</div>
          <div class="metric-value">45$/mois</div>
          <div class="metric-desc">15000 emails/mois</div>
        </div>
      </div>

      <h3>Grille tarifaire Mailchimp</h3>
      <p>Mailchimp propose plusieurs plans avec des fonctionnalités différentes :</p>
      
      <ul>
        <li><strong>Free :</strong> 0€/mois - 500 contacts, 1000 emails/mois, fonctionnalités limitées</li>
        <li><strong>Essentials :</strong> À partir de 13€/mois - 500 contacts, 5000 emails/mois</li>
        <li><strong>Standard :</strong> À partir de 20€/mois - 500 contacts, 6000 emails/mois, automatisations</li>
        <li><strong>Premium :</strong> À partir de 350€/mois - Fonctionnalités avancées, support prioritaire</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">💡</div>
        <div class="warning-content">
          <h4>Attention à la facturation Mailchimp</h4>
          <p>Mailchimp facture sur le <strong>nombre total de contacts</strong>, y compris les inactifs. Klaviyo ne facture que les contacts actifs, ce qui peut représenter une économie significative pour les listes importantes.</p>
        </div>
      </div>

      <h3>ROI : quel outil est le plus rentable ?</h3>
      <p>Malgré un coût plus élevé, <strong>Klaviyo génère généralement un meilleur ROI</strong> pour les boutiques Shopify grâce à :</p>
      
      <ul>
        <li>Des automatisations plus performantes (abandon panier, browse abandonment)</li>
        <li>Une segmentation plus fine = emails plus pertinents</li>
        <li>Une meilleure attribution des revenus pour optimiser vos campagnes</li>
        <li>Le SMS marketing intégré (taux de conversion plus élevé)</li>
      </ul>

      <p>Les utilisateurs Klaviyo rapportent en moyenne <strong>25-30% de leurs revenus</strong> provenant de l&apos;email marketing, contre 10-15% pour Mailchimp.</p>

      <h2 id="cas-usage">Cas d&apos;usage : quel outil pour votre situation ?</h2>
      
      <h3>Choisissez Klaviyo si :</h3>
      <ul>
        <li>Vous avez une boutique Shopify avec plus de 500 contacts</li>
        <li>L&apos;email marketing est un canal stratégique pour vous</li>
        <li>Vous voulez des automatisations e-commerce avancées</li>
        <li>Vous souhaitez intégrer le SMS marketing</li>
        <li>Vous avez besoin d&apos;une segmentation fine basée sur les achats</li>
        <li>Vous voulez mesurer précisément le ROI de vos emails</li>
        <li>Vous êtes prêt à investir du temps pour maîtriser l&apos;outil</li>
      </ul>

      <h3>Choisissez Mailchimp si :</h3>
      <ul>
        <li>Vous débutez avec un budget très limité</li>
        <li>Votre liste fait moins de 500 contacts</li>
        <li>Vous voulez une solution simple et rapide à mettre en place</li>
        <li>L&apos;email marketing n&apos;est pas votre priorité principale</li>
        <li>Vous avez besoin de fonctionnalités all-in-one (landing pages, social)</li>
        <li>Vous n&apos;avez pas le temps d&apos;apprendre un outil complexe</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">🚀</div>
        <div class="promo-content">
          <h4>Besoin d&apos;aide pour choisir ?</h4>
          <p>Nous analysons votre situation et vous recommandons la meilleure solution email marketing pour votre boutique Shopify.</p>
          <a href="/contact" class="promo-link">Consultation gratuite →</a>
        </div>
      </div>

      <h2 id="migration">Migration entre outils</h2>
      
      <h3>Migrer de Mailchimp vers Klaviyo</h3>
      <p>La migration de Mailchimp vers Klaviyo est relativement simple :</p>
      
      <ol>
        <li><strong>Export des contacts Mailchimp :</strong> Exportez votre liste au format CSV avec tous les champs</li>
        <li><strong>Import dans Klaviyo :</strong> Importez le CSV en mappant les champs correctement</li>
        <li><strong>Connexion Shopify :</strong> Connectez votre boutique pour enrichir les profils</li>
        <li><strong>Recréation des flows :</strong> Configurez vos automatisations (ou utilisez les templates)</li>
        <li><strong>Migration des templates :</strong> Recréez vos emails dans l&apos;éditeur Klaviyo</li>
      </ol>

      <p><strong>Durée estimée :</strong> 2-5 jours selon la complexité de votre setup.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention lors de la migration</h4>
          <p>Ne supprimez pas votre compte Mailchimp immédiatement. Gardez-le actif quelques semaines pour vous assurer que Klaviyo fonctionne correctement et que vous n&apos;avez pas oublié de données importantes.</p>
        </div>
      </div>

      <h2 id="faq">FAQ : Questions fréquentes</h2>
      
      <h3>Klaviyo est-il vraiment meilleur que Mailchimp pour Shopify ?</h3>
      <p>Pour une boutique Shopify sérieuse, <strong>oui</strong>. L&apos;intégration native, la segmentation e-commerce et les automatisations avancées de Klaviyo justifient le surcoût. Cependant, Mailchimp reste une option valable pour les débutants avec un budget limité.</p>

      <h3>Puis-je utiliser les deux en même temps ?</h3>
      <p>Techniquement oui, mais ce n&apos;est pas recommandé. Vous risquez d&apos;envoyer des emails en double et de compliquer votre gestion. Choisissez un outil et concentrez-vous dessus.</p>

      <h3>Combien de temps pour voir des résultats avec Klaviyo ?</h3>
      <p>Les flows automatisés (abandon de panier, welcome series) génèrent des résultats <strong>dès les premiers jours</strong>. Pour les campagnes et la segmentation avancée, comptez 1-2 mois pour optimiser et voir un impact significatif.</p>

      <h3>Klaviyo vaut-il le coup pour une petite boutique ?</h3>
      <p>Si vous avez moins de 250 contacts, le plan gratuit Klaviyo suffit. Au-delà, l&apos;investissement de 20-30$/mois est généralement rentabilisé si vous configurez correctement vos automatisations.</p>

      <h3>Mailchimp va-t-il améliorer son intégration Shopify ?</h3>
      <p>Depuis 2019, Mailchimp a développé une nouvelle app d&apos;intégration, mais elle reste moins performante que la connexion native de Klaviyo. Il est peu probable que la situation change radicalement.</p>

      <h2 id="conclusion">Conclusion : notre recommandation</h2>
      
      <p>Pour résumer ce comparatif Klaviyo vs Mailchimp :</p>

      <div class="checklist-section">
        <h4>🏆 Klaviyo gagne pour :</h4>
        <ul class="checklist">
          <li>Intégration Shopify native et complète</li>
          <li>Segmentation e-commerce avancée</li>
          <li>Automatisations et flows puissants</li>
          <li>SMS marketing intégré</li>
          <li>Attribution revenue et ROI tracking</li>
          <li>Predictive analytics</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>🥈 Mailchimp gagne pour :</h4>
        <ul class="checklist">
          <li>Plan gratuit plus généreux</li>
          <li>Facilité d&apos;utilisation</li>
          <li>Fonctionnalités all-in-one</li>
          <li>Idéal pour débuter</li>
        </ul>
      </div>

      <p><strong>Notre recommandation finale :</strong> si votre boutique Shopify génère plus de 1000€/mois et que vous souhaitez professionnaliser votre email marketing, <strong>investissez dans Klaviyo</strong>. Le ROI sera au rendez-vous.</p>

      <p>Pour les boutiques en démarrage avec moins de 500 contacts et un budget serré, <strong>Mailchimp reste une option acceptable</strong> pour commencer. Mais planifiez une migration vers Klaviyo dès que votre activité décolle.</p>

      <p>L&apos;email marketing peut représenter <strong>25-30% de vos revenus</strong> s&apos;il est bien exécuté. Ne négligez pas le choix de votre outil : c&apos;est un investissement stratégique pour votre croissance e-commerce.</p>
    `,
  },
  'meilleures-apps-shopify-2026': {
    title: 'Les 25 meilleures apps Shopify : guide complet par catégorie',
    excerpt: 'Sélection des meilleures applications Shopify 2026 : conversion, email marketing, SEO, analytics, logistique. Apps gratuites et payantes testées par des experts.',
    category: 'Shopify',
    date: '5 Juin 2025',
    readTime: '9 min',
    tableOfContents: [
      { id: 'introduction', title: 'Comment choisir ses apps Shopify' },
      { id: 'apps-email-marketing', title: 'Email Marketing et SMS' },
      { id: 'apps-conversion', title: 'Apps de conversion' },
      { id: 'apps-avis', title: 'Avis clients et UGC' },
      { id: 'apps-seo', title: 'Apps SEO' },
      { id: 'apps-analytics', title: 'Analytics et Attribution' },
      { id: 'apps-upsell', title: 'Upsell et Cross-sell' },
      { id: 'apps-logistique', title: 'Logistique et Expédition' },
      { id: 'apps-support', title: 'Support client' },
      { id: 'apps-gratuites', title: 'Meilleures apps gratuites' },
      { id: 'erreurs-eviter', title: 'Erreurs à éviter' },
      { id: 'conclusion', title: 'Notre stack recommandée' },
    ],
    content: `
      <h2 id="introduction">Comment bien choisir ses apps Shopify en 2026</h2>
      <p>Le Shopify App Store compte plus de <strong>8 000 applications</strong> en 2026. Face à cette offre pléthorique, comment identifier les apps vraiment utiles pour votre boutique ? Ce guide présente notre sélection des <strong>25 meilleures apps Shopify</strong>, testées et approuvées sur des dizaines de projets e-commerce.</p>
      
      <p>Avant de foncer sur l&apos;installation, gardez en tête ces principes essentiels :</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Règle d&apos;or des apps Shopify</h4>
          <p>Chaque app installée ajoute du code JavaScript qui peut ralentir votre site. <strong>N&apos;installez que les apps dont vous avez vraiment besoin</strong>. Un site rapide convertit mieux qu&apos;un site surchargé de fonctionnalités.</p>
        </div>
      </div>

      <h3>Critères de sélection de nos apps</h3>
      <ul>
        <li><strong>Performance :</strong> Impact minimal sur la vitesse du site</li>
        <li><strong>Support :</strong> Équipe réactive et documentation claire</li>
        <li><strong>Intégration :</strong> Compatibilité avec les thèmes et autres apps</li>
        <li><strong>Rapport qualité/prix :</strong> ROI démontrable</li>
        <li><strong>Mises à jour :</strong> Maintenance active et nouvelles fonctionnalités</li>
      </ul>

      <h2 id="apps-email-marketing">🚀 Apps Email Marketing &amp; SMS</h2>
      <p>L&apos;email marketing génère en moyenne <strong>25-30% du chiffre d&apos;affaires</strong> d&apos;une boutique Shopify bien optimisée. Voici les meilleures solutions.</p>

      <h3>1. Klaviyo - La référence absolue</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 250 contacts, puis à partir de 20$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.6/5 (2000+ avis)</p>
      </div>
      <p><strong>Klaviyo</strong> est l&apos;outil d&apos;email marketing n°1 pour Shopify. Son intégration native synchronise en temps réel toutes vos données clients, commandes et comportements de navigation.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Intégration Shopify native et temps réel</li>
        <li>Segmentation e-commerce ultra-avancée</li>
        <li>50+ templates de flows automatisés</li>
        <li>SMS marketing intégré</li>
        <li>Predictive analytics (CLV, next purchase date)</li>
        <li>Attribution revenue détaillée</li>
      </ul>
      
      <p><strong>Idéal pour :</strong> Boutiques sérieuses voulant maximiser leur email marketing</p>

      <h3>2. Omnisend - Alternative solide</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 250 contacts, puis à partir de 16$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.7/5 (5000+ avis)</p>
      </div>
      <p><strong>Omnisend</strong> est une excellente alternative à Klaviyo, souvent moins chère avec des fonctionnalités similaires.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Interface plus intuitive que Klaviyo</li>
        <li>Email + SMS + Push notifications</li>
        <li>Automatisations pré-configurées</li>
        <li>Plan gratuit plus généreux</li>
      </ul>
      
      <p><strong>Idéal pour :</strong> Boutiques avec budget limité cherchant une solution complète</p>

      <h3>3. Postscript - SMS Marketing spécialisé</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 25$/mois + coût par SMS</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (2000+ avis)</p>
      </div>
      <p>Si vous voulez un outil SMS dédié (plutôt qu&apos;intégré à votre email), <strong>Postscript</strong> est le leader sur Shopify.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Compliance SMS automatique (opt-in, opt-out)</li>
        <li>Segmentation basée sur Shopify</li>
        <li>Conversations bidirectionnelles</li>
        <li>ROI tracking précis</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">📧</div>
        <div class="promo-content">
          <h4>Configuration email marketing clé en main</h4>
          <p>Nous configurons Klaviyo ou Omnisend pour votre boutique avec tous les flows essentiels.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="apps-conversion">💰 Apps de conversion</h2>
      <p>Ces apps vous aident à convertir plus de visiteurs en clients grâce aux pop-ups, urgence et preuve sociale.</p>

      <h3>4. Privy - Pop-ups &amp; capture emails</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 100 contacts, puis à partir de 24$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.6/5 (25000+ avis)</p>
      </div>
      <p><strong>Privy</strong> est l&apos;app de pop-ups la plus populaire sur Shopify. Créez des pop-ups exit-intent, welcome mats, spin-to-win et barres de livraison gratuite.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Éditeur drag-and-drop facile</li>
        <li>Templates optimisés conversion</li>
        <li>Ciblage avancé (comportement, source, device)</li>
        <li>A/B testing intégré</li>
        <li>Sync avec Klaviyo, Mailchimp, etc.</li>
      </ul>

      <h3>5. OptiMonk - Pop-ups intelligents</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 15000 pages vues, puis à partir de 29$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.8/5 (900+ avis)</p>
      </div>
      <p><strong>OptiMonk</strong> propose des pop-ups avec personnalisation IA et recommandations produits dynamiques.</p>

      <h3>6. Hurrify - Urgence &amp; Scarcity</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 6.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (1500+ avis)</p>
      </div>
      <p>Ajoutez des compteurs de stock, timers de fin d&apos;offre et indicateurs "X personnes regardent ce produit" pour créer l&apos;urgence.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention à l&apos;overdose d&apos;urgence</h4>
          <p>Utilisez ces techniques avec modération. Des faux compteurs ou une urgence artificielle constante détruisent la confiance. Réservez l&apos;urgence aux vraies promotions limitées.</p>
        </div>
      </div>

      <h2 id="apps-avis">⭐ Apps Avis clients &amp; UGC</h2>
      <p>Les avis clients augmentent la conversion de <strong>15-20%</strong> en moyenne. Voici les meilleures apps pour collecter et afficher des témoignages.</p>

      <h3>7. Judge.me - Meilleur rapport qualité/prix</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit (limité) ou 15$/mois (Awesome)</p>
        <p><strong>Note App Store :</strong> ⭐ 5.0/5 (25000+ avis)</p>
      </div>
      <p><strong>Judge.me</strong> est notre recommandation n°1 pour les avis. Plan gratuit généreux, import d&apos;avis, Google Rich Snippets.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Plan gratuit très complet</li>
        <li>Avis avec photos et vidéos</li>
        <li>Google Rich Snippets automatiques</li>
        <li>Import depuis AliExpress/Amazon</li>
        <li>Widget personnalisable</li>
        <li>Emails de demande d&apos;avis automatiques</li>
      </ul>
      
      <p><strong>Idéal pour :</strong> Toutes les boutiques, du démarrage au scale</p>

      <h3>8. Loox - Avis photos premium</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (15000+ avis)</p>
      </div>
      <p><strong>Loox</strong> se spécialise dans les avis avec photos. Widgets visuels attractifs, carrousels et galeries UGC.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Focus sur les avis visuels</li>
        <li>Widgets design très soignés</li>
        <li>Programme de récompenses (remise contre photo)</li>
        <li>Intégration Google Shopping</li>
      </ul>

      <h3>9. Yotpo - Solution enterprise</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit (basique) puis plans custom</p>
        <p><strong>Note App Store :</strong> ⭐ 4.8/5 (7000+ avis)</p>
      </div>
      <p><strong>Yotpo</strong> est une plateforme complète : avis, UGC, SMS, fidélité. Plutôt pour les grosses boutiques avec budget conséquent.</p>

      <h2 id="apps-seo">🔍 Apps SEO Shopify</h2>
      <p>Le SEO natif de Shopify est correct mais limité. Ces apps comblent les lacunes.</p>

      <h3>10. SEO Manager - Tout-en-un</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> 20$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.7/5 (2000+ avis)</p>
      </div>
      <p><strong>SEO Manager</strong> est l&apos;app SEO la plus complète pour Shopify.</p>
      
      <p><strong>Fonctionnalités :</strong></p>
      <ul>
        <li>Édition des meta title/description en masse</li>
        <li>Gestion des redirections 301</li>
        <li>Sitemap XML avancé</li>
        <li>Schema markup automatique</li>
        <li>Analyse des erreurs 404</li>
        <li>Suggestions d&apos;optimisation</li>
      </ul>

      <h3>11. Smart SEO - Alternative légère</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit (basique) ou 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (1500+ avis)</p>
      </div>
      <p><strong>Smart SEO</strong> génère automatiquement les meta tags et alt text pour vos images. Moins complet mais plus léger.</p>

      <h3>12. JSON-LD for SEO - Rich Snippets</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (400+ avis)</p>
      </div>
      <p>Ajoute automatiquement les données structurées (Schema.org) pour les produits, avis, breadcrumbs. <strong>Indispensable pour les rich snippets Google.</strong></p>

      <h2 id="apps-analytics">📊 Apps Analytics &amp; Attribution</h2>
      <p>Comprendre d&apos;où viennent vos ventes et optimiser vos investissements marketing.</p>

      <h3>13. Triple Whale - Attribution marketing</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 129$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.8/5 (500+ avis)</p>
      </div>
      <p><strong>Triple Whale</strong> est le leader de l&apos;attribution marketing pour Shopify. Dashboard centralisé, tracking first-party, pixel custom.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Attribution multi-touch</li>
        <li>Tracking first-party (post iOS 14)</li>
        <li>Dashboard unifié (Facebook, Google, TikTok, etc.)</li>
        <li>Metrics ROAS, MER, CAC en temps réel</li>
        <li>Intégration Klaviyo pour CLV</li>
      </ul>
      
      <p><strong>Idéal pour :</strong> Boutiques dépensant 5k€+/mois en pub</p>

      <h3>14. Polar Analytics - Alternative européenne</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 49€/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (100+ avis)</p>
      </div>
      <p><strong>Polar Analytics</strong> est une alternative française à Triple Whale. Dashboard clair, onboarding simple, support en français.</p>

      <h3>15. Lucky Orange - Heatmaps &amp; Sessions</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 9$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.7/5 (1000+ avis)</p>
      </div>
      <p><strong>Lucky Orange</strong> enregistre les sessions utilisateurs et génère des heatmaps. Indispensable pour comprendre le comportement de vos visiteurs.</p>
      
      <p><strong>Fonctionnalités :</strong></p>
      <ul>
        <li>Enregistrements de sessions</li>
        <li>Heatmaps (clics, scroll, mouvement)</li>
        <li>Formulaires analytics</li>
        <li>Chat en direct intégré</li>
      </ul>

      <h2 id="apps-upsell">💎 Apps Upsell &amp; Cross-sell</h2>
      <p>Augmentez votre panier moyen avec des recommandations intelligentes.</p>

      <h3>16. ReConvert - Post-purchase upsell</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit puis à partir de 4.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (5000+ avis)</p>
      </div>
      <p><strong>ReConvert</strong> optimise votre page de remerciement et propose des upsells post-achat. Les clients ont déjà sorti leur CB, c&apos;est le moment idéal.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Page thank you customisable</li>
        <li>One-click upsells</li>
        <li>Collecte d&apos;anniversaires</li>
        <li>Recommandations IA</li>
        <li>Pop-up de réachat</li>
      </ul>

      <h3>17. Frequently Bought Together</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.9/5 (2000+ avis)</p>
      </div>
      <p>Reproduit le widget Amazon "Les clients ont aussi acheté". Bundles automatiques basés sur l&apos;historique d&apos;achat.</p>

      <h3>18. Bold Upsell - Upsells pre-checkout</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.6/5 (1500+ avis)</p>
      </div>
      <p><strong>Bold Upsell</strong> affiche des pop-ups d&apos;upsell quand le client ajoute au panier ou passe en checkout.</p>

      <div class="promo-box accent">
        <div class="promo-icon">📈</div>
        <div class="promo-content">
          <h4>Optimisation du panier moyen</h4>
          <p>Nous configurons vos stratégies d&apos;upsell et cross-sell pour maximiser votre AOV.</p>
          <a href="/contact" class="promo-link">Discuter de mon projet →</a>
        </div>
      </div>

      <h2 id="apps-logistique">📦 Apps Logistique &amp; Expédition</h2>

      <h3>19. Shipstation - Multi-transporteurs</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 9.99$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.3/5 (700+ avis)</p>
      </div>
      <p><strong>Shipstation</strong> centralise tous vos transporteurs (Colissimo, Mondial Relay, DHL, etc.) et automatise la création d&apos;étiquettes.</p>

      <h3>20. Sendcloud - Solution européenne</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit puis à partir de 45€/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.5/5 (500+ avis)</p>
      </div>
      <p><strong>Sendcloud</strong> est la solution logistique idéale pour les boutiques européennes. Intégration native avec Colissimo, Mondial Relay, Chronopost, DPD.</p>

      <h3>21. AfterShip - Tracking colis</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 50 colis/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.7/5 (5000+ avis)</p>
      </div>
      <p><strong>AfterShip</strong> offre une page de suivi brandée et des notifications automatiques. Réduit les demandes "où est mon colis ?" au support.</p>

      <h2 id="apps-support">💬 Apps Support client</h2>

      <h3>22. Gorgias - Le helpdesk e-commerce</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> À partir de 10$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.6/5 (700+ avis)</p>
      </div>
      <p><strong>Gorgias</strong> est le helpdesk n°1 pour Shopify. Centralisez email, chat, réseaux sociaux et accédez aux données client directement dans les tickets.</p>
      
      <p><strong>Points forts :</strong></p>
      <ul>
        <li>Vue client unifiée (commandes, historique)</li>
        <li>Macros et réponses automatiques</li>
        <li>Intégration chat, email, Facebook, Instagram</li>
        <li>Actions Shopify directes (remboursement, etc.)</li>
      </ul>

      <h3>23. Tidio - Chat + Chatbot</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit (basique) puis à partir de 29$/mois</p>
        <p><strong>Note App Store :</strong> ⭐ 4.7/5 (2000+ avis)</p>
      </div>
      <p><strong>Tidio</strong> combine chat en direct et chatbots IA. Idéal pour automatiser les réponses aux questions fréquentes.</p>

      <h2 id="apps-gratuites">🆓 Meilleures apps gratuites Shopify 2026</h2>
      <p>Budget serré ? Voici les meilleures apps 100% gratuites ou avec un plan gratuit très généreux.</p>

      <div class="checklist-section">
        <h4>Apps gratuites recommandées</h4>
        <ul class="checklist">
          <li><strong>Judge.me Free :</strong> Avis clients avec photos</li>
          <li><strong>Shopify Email :</strong> Email marketing natif (10 000 emails gratuits/mois)</li>
          <li><strong>Google &amp; YouTube :</strong> Sync catalogue et Google Shopping</li>
          <li><strong>Facebook &amp; Instagram :</strong> Sync produits et pixel</li>
          <li><strong>PageFly Free :</strong> Page builder drag-and-drop</li>
          <li><strong>Vitals (essai) :</strong> 40+ outils en une app</li>
          <li><strong>Hextom Free Shipping Bar :</strong> Barre livraison gratuite</li>
          <li><strong>Shopify Inbox :</strong> Chat natif gratuit</li>
        </ul>
      </div>

      <h3>24. Vitals - 40+ apps en une</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> 29.99$/mois (mais remplace 10+ apps)</p>
        <p><strong>Note App Store :</strong> ⭐ 5.0/5 (7000+ avis)</p>
      </div>
      <p><strong>Vitals</strong> regroupe plus de 40 outils : avis, upsells, currency converter, wishlist, countdown, stock counter... Une seule app au lieu de 10 = meilleures performances.</p>

      <h3>25. Shopify Email - Email natif</h3>
      <div class="app-card">
        <p><strong>Prix :</strong> Gratuit jusqu&apos;à 10 000 emails/mois</p>
        <p><strong>Note App Store :</strong> Intégré à Shopify</p>
      </div>
      <p>Pour débuter, <strong>Shopify Email</strong> est suffisant. Templates basiques mais gratuit et zéro config.</p>

      <h2 id="erreurs-eviter">❌ Erreurs à éviter avec les apps Shopify</h2>

      <h3>1. Installer trop d&apos;apps</h3>
      <p>Chaque app ajoute du JavaScript. <strong>10+ apps = site lent</strong>. Auditez régulièrement et désinstallez les apps inutilisées.</p>

      <h3>2. Ne pas supprimer le code des apps désinstallées</h3>
      <p>Quand vous désinstallez une app, son code reste souvent dans votre thème. Faites un audit code après chaque désinstallation.</p>

      <h3>3. Ignorer les conflits entre apps</h3>
      <p>Certaines apps ne fonctionnent pas bien ensemble (surtout les apps de pop-ups et upsells). Testez après chaque installation.</p>

      <h3>4. Choisir uniquement sur le prix</h3>
      <p>Une app à 5$/mois avec un mauvais support coûte plus cher qu&apos;une app à 20$/mois qui fonctionne parfaitement.</p>

      <h3>5. Ne pas mesurer le ROI</h3>
      <p>Chaque app payante doit générer plus de revenus qu&apos;elle ne coûte. Trackez l&apos;impact de chaque app sur vos conversions.</p>

      <h2 id="conclusion">✅ Notre stack apps recommandée 2026</h2>
      
      <p>Voici la stack apps que nous recommandons pour une boutique Shopify performante :</p>

      <div class="checklist-section">
        <h4>🥇 Stack Essential (budget serré)</h4>
        <ul class="checklist">
          <li><strong>Email :</strong> Shopify Email (gratuit) ou Omnisend</li>
          <li><strong>Avis :</strong> Judge.me Free</li>
          <li><strong>Pop-ups :</strong> Privy Free</li>
          <li><strong>SEO :</strong> Smart SEO</li>
          <li><strong>Analytics :</strong> GA4 + Lucky Orange</li>
        </ul>
        <p><strong>Coût total :</strong> ~30$/mois</p>
      </div>

      <div class="checklist-section">
        <h4>🥈 Stack Growth (scale-up)</h4>
        <ul class="checklist">
          <li><strong>Email :</strong> Klaviyo</li>
          <li><strong>Avis :</strong> Loox ou Judge.me Awesome</li>
          <li><strong>Pop-ups :</strong> Privy ou OptiMonk</li>
          <li><strong>SEO :</strong> SEO Manager</li>
          <li><strong>Upsell :</strong> ReConvert</li>
          <li><strong>Analytics :</strong> Lucky Orange + Polar Analytics</li>
          <li><strong>Support :</strong> Gorgias</li>
        </ul>
        <p><strong>Coût total :</strong> ~200$/mois</p>
      </div>

      <div class="checklist-section">
        <h4>🥇 Stack Premium (haute performance)</h4>
        <ul class="checklist">
          <li><strong>Email :</strong> Klaviyo + Postscript (SMS)</li>
          <li><strong>Avis :</strong> Yotpo</li>
          <li><strong>Attribution :</strong> Triple Whale</li>
          <li><strong>Upsell :</strong> ReConvert + Bold</li>
          <li><strong>Support :</strong> Gorgias Pro</li>
          <li><strong>Logistique :</strong> Sendcloud + AfterShip</li>
        </ul>
        <p><strong>Coût total :</strong> ~500$/mois</p>
      </div>

      <p><strong>Conclusion :</strong> Le choix des apps dépend de votre stade de développement et de vos priorités. Commencez léger, mesurez l&apos;impact, et ajoutez des apps progressivement. <strong>La qualité prime sur la quantité.</strong></p>

      <p>Besoin d&apos;aide pour choisir et configurer vos apps ? Notre équipe d&apos;experts Shopify peut auditer votre stack technique et vous recommander les meilleures solutions pour votre boutique.</p>
    `,
  },
  'configurer-ga4-shopify': {
    title: 'Configurer Google Analytics 4 sur Shopify : Guide complet',
    excerpt: 'Guide détaillé pour installer et configurer GA4 sur Shopify : méthode native, GTM, événements e-commerce, conversions, rapports. Configuration complète étape par étape.',
    category: 'Data & Tracking',
    date: '18 Juillet 2025',
    readTime: '10 min',
    tableOfContents: [
      { id: 'introduction', title: 'Pourquoi GA4 est essentiel' },
      { id: 'ga4-vs-ua', title: 'GA4 vs Universal Analytics' },
      { id: 'creer-propriete', title: 'Créer une propriété GA4' },
      { id: 'methode-native', title: 'Méthode 1 : Installation native Shopify' },
      { id: 'methode-gtm', title: 'Méthode 2 : Via Google Tag Manager (recommandé)' },
      { id: 'evenements-ecommerce', title: 'Événements e-commerce essentiels' },
      { id: 'configurer-conversions', title: 'Configurer les conversions' },
      { id: 'verifier-installation', title: 'Vérifier l\'installation' },
      { id: 'rapports-explorer', title: 'Rapports à créer' },
      { id: 'erreurs-eviter', title: 'Erreurs courantes à éviter' },
      { id: 'faq', title: 'FAQ' },
      { id: 'conclusion', title: 'Checklist finale' },
    ],
    content: `
      <h2 id="introduction">Pourquoi Google Analytics 4 est essentiel pour Shopify</h2>
      <p><strong>Google Analytics 4 (GA4)</strong> est la nouvelle génération d&apos;Analytics, obligatoire depuis juillet 2023 (Universal Analytics a été arrêté). Pour une boutique Shopify, GA4 vous permet de :</p>
      
      <ul>
        <li><strong>Mesurer vos sources de trafic :</strong> Identifier quels canaux (Google Ads, Facebook, SEO, email) génèrent le plus de ventes</li>
        <li><strong>Comprendre le comportement utilisateur :</strong> Pages vues, temps passé, parcours d&apos;achat</li>
        <li><strong>Optimiser vos campagnes :</strong> Attribution des revenus, ROI par canal</li>
        <li><strong>Prendre des décisions data-driven :</strong> Quels produits marchent, où les visiteurs abandonnent</li>
      </ul>

      <p>Ce guide vous montre <strong>comment installer et configurer GA4 sur Shopify</strong> de A à Z, avec deux méthodes : installation native (simple) et via Google Tag Manager (avancée mais plus puissante).</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">Trafic</div>
          <div class="metric-value">100%</div>
          <div class="metric-desc">Visibilité complète</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Conversions</div>
          <div class="metric-value">Tracking</div>
          <div class="metric-desc">Attribution précise</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">ROI</div>
          <div class="metric-value">Mesurable</div>
          <div class="metric-desc">Par canal marketing</div>
        </div>
      </div>

      <h2 id="ga4-vs-ua">GA4 vs Universal Analytics : quoi de neuf ?</h2>
      <p>GA4 fonctionne très différemment d&apos;Universal Analytics (l&apos;ancienne version). Voici les principales différences :</p>

      <h3>Modèle événementiel</h3>
      <p>GA4 base tout sur les <strong>événements</strong>. Chaque action (page vue, clic, achat) est un événement avec des paramètres. Plus de "sessions" et "hits" comme dans UA.</p>

      <h3>Cross-device et cross-platform</h3>
      <p>GA4 suit les utilisateurs entre appareils et plateformes (web, app) s&apos;ils sont connectés.</p>

      <h3>Intelligence artificielle</h3>
      <p>GA4 intègre des <strong>insights prédictifs</strong> : probabilité d&apos;achat, risque de churn, revenus futurs prédits.</p>

      <h3>Privacy-first</h3>
      <p>GA4 est conçu pour un monde post-cookies tiers. Moins dépendant des cookies, plus de modélisation algorithmique.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Universal Analytics est mort</h4>
          <p>Google a arrêté Universal Analytics le 1er juillet 2023. Si vous utilisez encore UA, vous ne collectez plus de données. <strong>Passez à GA4 immédiatement.</strong></p>
        </div>
      </div>

      <h2 id="creer-propriete">Étape 1 : Créer une propriété GA4</h2>
      <p>Avant d&apos;installer GA4 sur Shopify, créez votre propriété GA4 dans votre compte Google Analytics.</p>

      <h3>1.1 Accéder à Google Analytics</h3>
      <ol>
        <li>Allez sur <a href="https://analytics.google.com" target="_blank" rel="noopener">analytics.google.com</a></li>
        <li>Connectez-vous avec votre compte Google</li>
        <li>Si vous n&apos;avez pas encore de compte Analytics, cliquez sur "Commencer la mesure"</li>
      </ol>

      <h3>1.2 Créer une propriété</h3>
      <ol>
        <li>Cliquez sur <strong>Admin</strong> (roue dentée en bas à gauche)</li>
        <li>Dans la colonne "Propriété", cliquez sur <strong>Créer une propriété</strong></li>
        <li>Entrez le nom de votre propriété (ex: "Ma Boutique Shopify")</li>
        <li>Sélectionnez le fuseau horaire et la devise (EUR pour l&apos;Europe)</li>
        <li>Cliquez sur <strong>Suivant</strong></li>
      </ol>

      <h3>1.3 Détails de l&apos;entreprise</h3>
      <ol>
        <li>Catégorie du secteur : "Commerce de détail et biens de consommation"</li>
        <li>Taille de l&apos;entreprise : Sélectionnez la vôtre</li>
        <li>Objectifs d&apos;utilisation : Cochez "Examiner le comportement des utilisateurs" et "Mesurer les conversions"</li>
        <li>Cliquez sur <strong>Créer</strong></li>
      </ol>

      <h3>1.4 Configurer le flux de données</h3>
      <ol>
        <li>Sélectionnez <strong>Web</strong> comme plateforme</li>
        <li>URL du site : <code>https://votreboutique.com</code> (votre domaine Shopify ou custom)</li>
        <li>Nom du flux : "Web Stream - Boutique"</li>
        <li>Activez <strong>"Mesure améliorée"</strong> (essentiel pour l&apos;e-commerce)</li>
        <li>Cliquez sur <strong>Créer le flux</strong></li>
      </ol>

      <div class="example-box good">
        <div class="example-label">✅ Récupérez votre ID de mesure</div>
        <p>Vous verrez votre <strong>ID de mesure</strong> au format : <code>G-XXXXXXXXXX</code></p>
        <p>Notez-le, vous en aurez besoin pour l&apos;installation sur Shopify.</p>
      </div>

      <h2 id="methode-native">Méthode 1 : Installation native Shopify (simple)</h2>
      <p>La méthode la plus simple pour installer GA4 sur Shopify : directement dans les paramètres.</p>

      <h3>Avantages</h3>
      <ul>
        <li>Installation rapide (5 minutes)</li>
        <li>Pas besoin de toucher au code</li>
        <li>Tracking e-commerce automatique</li>
      </ul>

      <h3>Inconvénients</h3>
      <ul>
        <li>Moins de contrôle sur les événements</li>
        <li>Difficile de personnaliser</li>
        <li>Impossible d&apos;ajouter d&apos;autres tags facilement</li>
      </ul>

      <h3>Instructions pas à pas</h3>
      <ol>
        <li>Dans votre <strong>Shopify Admin</strong>, allez dans <strong>Boutique en ligne → Préférences</strong></li>
        <li>Scrollez jusqu&apos;à la section <strong>Google Analytics</strong></li>
        <li>Cliquez sur <strong>Connecter votre compte Google</strong></li>
        <li>Autorisez Shopify à accéder à votre compte Google Analytics</li>
        <li>Sélectionnez votre <strong>propriété GA4</strong> dans la liste</li>
        <li>Activez <strong>"Utiliser le commerce électronique amélioré"</strong></li>
        <li>Cliquez sur <strong>Enregistrer</strong></li>
      </ol>

      <p>C&apos;est tout ! Shopify installe automatiquement le code GA4 et configure les événements e-commerce de base.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Limites de la méthode native</h4>
          <p>La méthode native ne vous donne pas un contrôle total sur vos événements. Pour une configuration avancée (événements custom, paramètres supplémentaires, autres pixels), utilisez Google Tag Manager.</p>
        </div>
      </div>

      <h2 id="methode-gtm">Méthode 2 : Via Google Tag Manager (recommandé)</h2>
      <p><strong>Google Tag Manager (GTM)</strong> est un conteneur de tags qui vous permet de gérer tous vos scripts (GA4, Facebook Pixel, TikTok, etc.) sans toucher au code. C&apos;est la méthode recommandée pour les boutiques sérieuses.</p>

      <h3>Avantages</h3>
      <ul>
        <li>Contrôle total sur les événements et paramètres</li>
        <li>Gestion centralisée de tous vos tags</li>
        <li>Pas besoin de toucher au thème pour ajouter des pixels</li>
        <li>Debugging et testing faciles</li>
        <li>Événements custom et avancés</li>
      </ul>

      <h3>Étape 2.1 : Créer un compte Google Tag Manager</h3>
      <ol>
        <li>Allez sur <a href="https://tagmanager.google.com" target="_blank" rel="noopener">tagmanager.google.com</a></li>
        <li>Cliquez sur <strong>Créer un compte</strong></li>
        <li>Nom du compte : "Votre Boutique"</li>
        <li>Pays : France</li>
        <li>Nom du conteneur : "votreboutique.com"</li>
        <li>Plateforme cible : <strong>Web</strong></li>
        <li>Acceptez les CGU et cliquez sur <strong>Créer</strong></li>
      </ol>

      <p>Vous obtenez deux codes :</p>
      <ul>
        <li>Un code pour le <code>&lt;head&gt;</code></li>
        <li>Un code pour le <code>&lt;body&gt;</code></li>
      </ul>

      <h3>Étape 2.2 : Installer GTM sur Shopify</h3>
      <ol>
        <li>Dans Shopify Admin, allez dans <strong>Boutique en ligne → Thèmes</strong></li>
        <li>Cliquez sur <strong>Actions → Modifier le code</strong></li>
        <li>Ouvrez le fichier <code>theme.liquid</code></li>
        <li>Collez le premier code GTM juste après la balise <code>&lt;head&gt;</code></li>
        <li>Collez le deuxième code juste après <code>&lt;body&gt;</code></li>
        <li>Cliquez sur <strong>Enregistrer</strong></li>
      </ol>

      <div class="example-box good">
        <div class="example-label">📝 Exemple de placement GTM</div>
        <pre><code>&lt;head&gt;
  &lt;!-- Google Tag Manager --&gt;
  &lt;script&gt;(function(w,d,s,l,i){...})();&lt;/script&gt;
  &lt;!-- End Google Tag Manager --&gt;
  ...
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Google Tag Manager (noscript) --&gt;
  &lt;noscript&gt;&lt;iframe src="..."&gt;&lt;/iframe&gt;&lt;/noscript&gt;
  &lt;!-- End Google Tag Manager (noscript) --&gt;
  ...</code></pre>
      </div>

      <h3>Étape 2.3 : Créer la balise GA4 dans GTM</h3>
      <ol>
        <li>Dans GTM, cliquez sur <strong>Balises → Nouvelle</strong></li>
        <li>Nom : "GA4 Configuration"</li>
        <li>Type de balise : <strong>Google Analytics : Événement GA4</strong></li>
        <li>ID de mesure : Entrez votre <code>G-XXXXXXXXXX</code></li>
        <li>Déclencheur : <strong>All Pages</strong></li>
        <li>Cliquez sur <strong>Enregistrer</strong></li>
      </ol>

      <h3>Étape 2.4 : Configurer les événements e-commerce</h3>
      <p>Shopify envoie automatiquement des événements via le <strong>dataLayer</strong>. Vous devez créer des balises GTM pour les transformer en événements GA4.</p>

      <p><strong>Événements Shopify disponibles :</strong></p>
      <ul>
        <li><code>page_viewed</code> : Page vue</li>
        <li><code>product_viewed</code> : Produit consulté</li>
        <li><code>product_added_to_cart</code> : Ajout au panier</li>
        <li><code>checkout_started</code> : Checkout initié</li>
        <li><code>payment_info_submitted</code> : Info paiement</li>
        <li><code>purchase</code> : Achat</li>
      </ul>

      <p>Pour chaque événement, créez une balise GTM :</p>

      <div class="example-box good">
        <div class="example-label">📝 Exemple : Événement "view_item"</div>
        <ol>
          <li>Balises → Nouvelle</li>
          <li>Nom : "GA4 - View Item"</li>
          <li>Type : Google Analytics : Événement GA4</li>
          <li>ID de mesure : Votre G-XXXXXXXXXX</li>
          <li>Nom de l&apos;événement : <code>view_item</code></li>
          <li>Paramètres de l&apos;événement : Mapper les variables dataLayer</li>
          <li>Déclencheur : Événement personnalisé = <code>product_viewed</code></li>
        </ol>
      </div>

      <div class="promo-box">
        <div class="promo-icon">🎯</div>
        <div class="promo-content">
          <h4>Configuration GA4 + GTM clé en main</h4>
          <p>Nous configurons GA4 et Google Tag Manager avec tous les événements e-commerce pour votre boutique Shopify.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="evenements-ecommerce">Événements e-commerce essentiels pour GA4</h2>
      <p>GA4 recommande des <strong>événements e-commerce standardisés</strong>. Voici les plus importants pour Shopify :</p>

      <h3>1. view_item (Vue produit)</h3>
      <p><strong>Déclenché :</strong> Quand un visiteur arrive sur une page produit</p>
      <p><strong>Paramètres :</strong></p>
      <ul>
        <li><code>items</code> : Array avec détails produit (id, name, category, price, brand, variant)</li>
        <li><code>currency</code> : EUR, USD, etc.</li>
        <li><code>value</code> : Prix du produit</li>
      </ul>

      <h3>2. add_to_cart (Ajout panier)</h3>
      <p><strong>Déclenché :</strong> Quand un produit est ajouté au panier</p>
      <p><strong>Paramètres :</strong></p>
      <ul>
        <li><code>items</code> : Produit ajouté</li>
        <li><code>currency</code></li>
        <li><code>value</code> : Prix du produit ajouté</li>
      </ul>

      <h3>3. begin_checkout (Début checkout)</h3>
      <p><strong>Déclenché :</strong> Quand le visiteur arrive sur la page de checkout</p>
      <p><strong>Paramètres :</strong></p>
      <ul>
        <li><code>items</code> : Tous les produits du panier</li>
        <li><code>currency</code></li>
        <li><code>value</code> : Montant total du panier</li>
      </ul>

      <h3>4. purchase (Achat)</h3>
      <p><strong>Déclenché :</strong> Quand la commande est confirmée</p>
      <p><strong>Paramètres :</strong></p>
      <ul>
        <li><code>transaction_id</code> : Numéro de commande unique</li>
        <li><code>items</code> : Tous les produits achetés</li>
        <li><code>currency</code></li>
        <li><code>value</code> : Montant total TTC</li>
        <li><code>tax</code> : Montant TVA</li>
        <li><code>shipping</code> : Frais de livraison</li>
        <li><code>coupon</code> : Code promo utilisé (si applicable)</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention au tracking des achats</h4>
          <p>L&apos;événement <code>purchase</code> doit être envoyé <strong>une seule fois</strong> par commande. Si vous utilisez GTM, assurez-vous qu&apos;il ne se déclenche pas plusieurs fois (rechargement de page thank you).</p>
        </div>
      </div>

      <h2 id="configurer-conversions">Configurer les conversions dans GA4</h2>
      <p>Dans GA4, vous devez marquer manuellement les événements que vous considérez comme des "conversions".</p>

      <h3>Étapes pour marquer un événement comme conversion</h3>
      <ol>
        <li>Dans GA4, allez dans <strong>Configurer → Événements</strong></li>
        <li>Attendez que vos événements apparaissent (24-48h après installation)</li>
        <li>Cliquez sur le bouton <strong>Marquer comme conversion</strong> pour :</li>
      </ol>

      <div class="checklist-section">
        <h4>Conversions recommandées pour e-commerce</h4>
        <ul class="checklist">
          <li><strong>purchase</strong> : Conversion principale (achat)</li>
          <li><strong>add_to_cart</strong> : Micro-conversion (ajout panier)</li>
          <li><strong>begin_checkout</strong> : Début du tunnel d&apos;achat</li>
          <li><strong>sign_up</strong> : Inscription newsletter (si trackée)</li>
        </ul>
      </div>

      <p>Une fois marqués comme conversions, ces événements apparaîtront dans les rapports "Conversions" et pourront être utilisés pour l&apos;optimisation Google Ads.</p>

      <h2 id="verifier-installation">Vérifier que GA4 fonctionne correctement</h2>
      <p>Après installation, vérifiez que GA4 collecte bien les données.</p>

      <h3>Méthode 1 : Rapports en temps réel</h3>
      <ol>
        <li>Dans GA4, allez dans <strong>Rapports → Temps réel</strong></li>
        <li>Ouvrez votre boutique Shopify dans un nouvel onglet</li>
        <li>Naviguez sur votre site (page d&apos;accueil, produit, ajout panier)</li>
        <li>Vérifiez que vous apparaissez dans le rapport temps réel</li>
      </ol>

      <h3>Méthode 2 : Google Tag Assistant (Chrome)</h3>
      <ol>
        <li>Installez l&apos;extension <a href="https://chrome.google.com/webstore/detail/google-tag-assistant/ndlnogfndhglploljjinbdjkmjbdflkl" target="_blank" rel="noopener">Google Tag Assistant</a></li>
        <li>Ouvrez votre boutique et cliquez sur l&apos;icône de l&apos;extension</li>
        <li>Cliquez sur <strong>Connect</strong></li>
        <li>Naviguez sur votre site</li>
        <li>Vérifiez que les tags GA4 se déclenchent correctement</li>
      </ol>

      <h3>Méthode 3 : DebugView dans GA4</h3>
      <ol>
        <li>Installez l&apos;extension <a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" target="_blank" rel="noopener">Google Analytics Debugger</a></li>
        <li>Activez l&apos;extension et rechargez votre site</li>
        <li>Dans GA4, allez dans <strong>Configurer → DebugView</strong></li>
        <li>Vous verrez tous les événements en temps réel avec leurs paramètres</li>
      </ol>

      <h2 id="rapports-explorer">Rapports GA4 essentiels à créer</h2>
      <p>GA4 offre des rapports par défaut, mais vous devrez créer des rapports personnalisés pour vraiment exploiter vos données e-commerce.</p>

      <h3>Rapport 1 : Top produits par revenus</h3>
      <ol>
        <li>Allez dans <strong>Explorer → Créer</strong></li>
        <li>Template : Exploration libre</li>
        <li>Dimensions : <code>Item name</code>, <code>Item category</code></li>
        <li>Métriques : <code>Achats</code>, <code>Revenus de l&apos;article</code>, <code>Quantité d&apos;articles</code></li>
        <li>Lignes : Item name</li>
        <li>Valeurs : Revenus de l&apos;article</li>
      </ol>

      <h3>Rapport 2 : Funnel e-commerce</h3>
      <ol>
        <li>Explorer → Entonnoir de conversion</li>
        <li>Étape 1 : <code>view_item</code></li>
        <li>Étape 2 : <code>add_to_cart</code></li>
        <li>Étape 3 : <code>begin_checkout</code></li>
        <li>Étape 4 : <code>purchase</code></li>
      </ol>

      <p>Ce rapport vous montre où les visiteurs abandonnent dans le parcours d&apos;achat.</p>

      <h3>Rapport 3 : Revenus par source/canal</h3>
      <ol>
        <li>Rapports → Acquisition → Acquisition de trafic</li>
        <li>Dimension principale : Source / support ou Canal par défaut</li>
        <li>Métrique : Revenus des achats</li>
      </ol>

      <p>Ce rapport vous montre quel canal marketing génère le plus de revenus (Google, Facebook, SEO, email, etc.).</p>

      <h2 id="erreurs-eviter">Erreurs courantes à éviter</h2>

      <h3>1. Ne pas activer le commerce électronique amélioré</h3>
      <p>Si vous utilisez la méthode native Shopify, cochez bien "Utiliser le commerce électronique amélioré". Sinon, vous ne trackez pas les achats.</p>

      <h3>2. Tracker les achats plusieurs fois</h3>
      <p>Si vous avez plusieurs tags GA4 (natif Shopify + GTM par exemple), vous trackez les achats en double. <strong>Choisissez une seule méthode.</strong></p>

      <h3>3. Oublier de marquer les conversions</h3>
      <p>Les événements ne sont pas automatiquement des conversions. Vous devez les marquer manuellement dans GA4.</p>

      <h3>4. Ne pas exclure le trafic interne</h3>
      <p>Vos propres visites faussent les données. Dans GA4, configurez un filtre pour exclure votre IP (Configurer → Flux de données → Paramètres de flux → Plus de paramètres de balisage → Définir le trafic interne).</p>

      <h3>5. Ne pas tester avant de publier</h3>
      <p>Toujours tester avec DebugView ou Tag Assistant avant de publier vos modifications GTM.</p>

      <h2 id="faq">FAQ : Google Analytics 4 sur Shopify</h2>

      <h3>Dois-je utiliser la méthode native ou GTM ?</h3>
      <p><strong>Méthode native</strong> si vous débutez et voulez une config simple. <strong>GTM</strong> si vous voulez du contrôle, des événements custom et gérer plusieurs tags (Facebook, TikTok, etc.).</p>

      <h3>Puis-je avoir GA4 et Universal Analytics en même temps ?</h3>
      <p>Techniquement oui, mais Universal Analytics ne collecte plus de données depuis juillet 2023. Concentrez-vous sur GA4.</p>

      <h3>Combien de temps avant de voir des données ?</h3>
      <p>Les rapports temps réel sont instantanés. Les rapports standards prennent <strong>24-48h</strong> pour afficher les données.</p>

      <h3>GA4 affecte-t-il la vitesse de mon site ?</h3>
      <p>L&apos;impact est minimal (~5-10 Ko de JavaScript). L&apos;impact performance est négligeable sur un site moderne.</p>

      <h3>GA4 est-il RGPD-compliant ?</h3>
      <p>GA4 est plus respectueux de la vie privée qu&apos;UA, mais vous devez toujours obtenir le consentement des utilisateurs (bannière cookies) pour être 100% conforme RGPD.</p>

      <h2 id="conclusion">Checklist finale : GA4 sur Shopify</h2>

      <div class="checklist-section">
        <h4>✅ Installation et configuration</h4>
        <ul class="checklist">
          <li>Propriété GA4 créée avec flux de données Web</li>
          <li>ID de mesure récupéré (G-XXXXXXXXXX)</li>
          <li>GA4 installé via Shopify natif OU GTM</li>
          <li>Commerce électronique amélioré activé</li>
          <li>GTM installé (si méthode avancée)</li>
          <li>Balises e-commerce configurées dans GTM</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>✅ Événements et conversions</h4>
        <ul class="checklist">
          <li>Événements view_item, add_to_cart, begin_checkout, purchase trackés</li>
          <li>Événement purchase marqué comme conversion</li>
          <li>Micro-conversions configurées (add_to_cart, sign_up)</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>✅ Vérification</h4>
        <ul class="checklist">
          <li>Test en temps réel effectué</li>
          <li>DebugView vérifié</li>
          <li>Tag Assistant validé</li>
          <li>Trafic interne exclu</li>
          <li>Achat test réalisé et tracké correctement</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h4>✅ Rapports</h4>
        <ul class="checklist">
          <li>Rapport Top produits créé</li>
          <li>Entonnoir de conversion configuré</li>
          <li>Rapport Revenus par canal créé</li>
        </ul>
      </div>

      <p><strong>Félicitations !</strong> Votre tracking GA4 est opérationnel. Vous pouvez maintenant analyser vos performances, optimiser vos campagnes et prendre des décisions data-driven pour votre boutique Shopify.</p>

      <p>Besoin d&apos;aide pour une configuration avancée ou un audit de votre tracking ? Notre équipe d&apos;experts Shopify peut configurer GA4, GTM et tous vos pixels marketing de manière professionnelle.</p>
    `,
  },
  'reduire-abandon-panier': {
    title: 'Abandon de panier Shopify : 15 stratégies pour récupérer 30% des ventes perdues',
    excerpt: 'Guide complet pour réduire l\'abandon de panier sur Shopify : statistiques 2026, causes, stratégies de prévention, emails de relance, exit-intent. Récupérez jusqu\'à 30% de vos paniers abandonnés.',
    category: 'Conversion',
    date: '7 Septembre 2025',
    readTime: '8 min',
    tableOfContents: [
      { id: 'statistiques', title: 'Statistiques abandon de panier 2026' },
      { id: 'calculer-cout', title: 'Calculer le coût de l\'abandon' },
      { id: 'causes', title: 'Top 10 des causes d\'abandon' },
      { id: 'prevention-checkout', title: 'Optimiser le checkout' },
      { id: 'prevention-prix', title: 'Transparence des prix' },
      { id: 'prevention-confiance', title: 'Signaux de confiance' },
      { id: 'email-relance', title: 'Emails de récupération' },
      { id: 'sms-relance', title: 'SMS de relance' },
      { id: 'exit-intent', title: 'Pop-ups exit-intent' },
      { id: 'outils-shopify', title: 'Apps Shopify recommandées' },
      { id: 'mesurer', title: 'Mesurer les résultats' },
      { id: 'conclusion', title: 'Plan d\'action' },
    ],
    content: `
      <h2 id="statistiques">Statistiques abandon de panier e-commerce 2026</h2>
      <p>L&apos;abandon de panier est le <strong>problème n°1 de l&apos;e-commerce</strong>. En 2026, les chiffres restent alarmants mais représentent une opportunité massive pour les boutiques qui savent récupérer ces ventes perdues.</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">Taux moyen</div>
          <div class="metric-value">69.9%</div>
          <div class="metric-desc">Des paniers sont abandonnés</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Mobile</div>
          <div class="metric-value">85%</div>
          <div class="metric-desc">Taux d&apos;abandon sur mobile</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Récupération</div>
          <div class="metric-value">10-30%</div>
          <div class="metric-desc">Paniers récupérables</div>
        </div>
      </div>

      <p><strong>Ce que cela signifie :</strong> Pour 100 visiteurs qui ajoutent un produit au panier, seuls 30 achètent. Les 70 autres abandonnent. Mais avec les bonnes stratégies, vous pouvez récupérer <strong>7 à 21 ventes supplémentaires</strong> sur ces 70 paniers perdus.</p>

      <h3>Abandon de panier par secteur</h3>
      <ul>
        <li><strong>Mode & Accessoires :</strong> 72.8%</li>
        <li><strong>Beauté & Cosmétiques :</strong> 70.2%</li>
        <li><strong>High-tech & Électronique :</strong> 68.4%</li>
        <li><strong>Alimentation & Boissons :</strong> 65.7%</li>
        <li><strong>Maison & Jardin :</strong> 67.3%</li>
      </ul>

      <h2 id="calculer-cout">Calculer le coût de l&apos;abandon de panier</h2>
      <p>Avant d&apos;investir dans des solutions, calculez combien l&apos;abandon vous coûte réellement.</p>

      <h3>Formule de calcul</h3>
      <div class="example-box good">
        <div class="example-label">💰 Exemple de calcul</div>
        <ul>
          <li><strong>Visiteurs ajoutant au panier :</strong> 1000/mois</li>
          <li><strong>Taux d&apos;abandon :</strong> 70%</li>
          <li><strong>Panier moyen :</strong> 80€</li>
          <li><strong>Ventes perdues :</strong> 1000 × 70% × 80€ = <strong>56 000€/mois</strong></li>
          <li><strong>Récupération possible (15%) :</strong> 56 000€ × 15% = <strong>8 400€/mois</strong></li>
        </ul>
      </div>

      <p>Si vous récupérez seulement <strong>15% des paniers abandonnés</strong>, cela représente 8 400€/mois de revenus supplémentaires sans acquisition. Sur un an : <strong>100 800€</strong>.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>L&apos;abandon de panier vous coûte plus cher que vous ne pensez</h4>
          <p>Au-delà de la vente perdue, vous avez payé pour acquérir ce visiteur (pub, SEO). Un abandon = coût d&apos;acquisition gaspillé.</p>
        </div>
      </div>

      <h2 id="causes">Top 10 des causes d&apos;abandon de panier</h2>
      <p>Comprendre pourquoi les visiteurs abandonnent est la première étape pour résoudre le problème. Voici les <strong>10 raisons principales</strong> classées par fréquence :</p>

      <h3>1. Frais de livraison inattendus (48%)</h3>
      <p>La cause n°1. Le visiteur arrive au checkout et découvre 8€ de frais de port qu&apos;il n&apos;avait pas anticipés. Il ferme l&apos;onglet.</p>
      <p><strong>Solution :</strong> Afficher les frais de livraison dès la page produit ou le panier.</p>

      <h3>2. Obligation de créer un compte (24%)</h3>
      <p>Forcer l&apos;inscription avant l&apos;achat crée une friction massive. Les visiteurs veulent acheter vite.</p>
      <p><strong>Solution :</strong> Proposer le guest checkout (achat sans compte).</p>

      <h3>3. Processus de checkout trop long (18%)</h3>
      <p>Chaque champ de formulaire supplémentaire réduit la conversion. Plus de 3 étapes = abandon.</p>
      <p><strong>Solution :</strong> Simplifier le checkout. Shopify propose un one-page checkout sur les plans Plus.</p>

      <h3>4. Manque de confiance (17%)</h3>
      <p>Le visiteur ne connaît pas votre marque et hésite à sortir sa carte bancaire.</p>
      <p><strong>Solution :</strong> Badges de sécurité, avis clients, politique de retour claire, logo SSL.</p>

      <h3>5. Pas assez d&apos;options de paiement (9%)</h3>
      <p>Vous n&apos;acceptez que CB et PayPal, mais le visiteur veut payer en Apple Pay ou Klarna.</p>
      <p><strong>Solution :</strong> Activer Shop Pay, Apple Pay, Google Pay, Klarna.</p>

      <h3>6. Site trop lent (8%)</h3>
      <p>Chaque seconde de chargement supplémentaire réduit la conversion de 7%.</p>
      <p><strong>Solution :</strong> Optimiser les images, choisir un thème rapide, limiter les apps.</p>

      <h3>7. Erreurs techniques (7%)</h3>
      <p>Bugs au checkout, page qui ne charge pas, bouton "Payer" qui ne fonctionne pas.</p>
      <p><strong>Solution :</strong> Tester régulièrement le parcours d&apos;achat complet.</p>

      <h3>8. Juste comparer les prix (6%)</h3>
      <p>Le visiteur ajoute au panier pour voir le prix total puis va comparer ailleurs.</p>
      <p><strong>Solution :</strong> Urgence (stock limité), proposition de valeur unique.</p>

      <h3>9. Politique de retour floue (5%)</h3>
      <p>Le visiteur ne trouve pas d&apos;info sur comment retourner s&apos;il n&apos;est pas satisfait.</p>
      <p><strong>Solution :</strong> Afficher "Retour gratuit 30 jours" de manière visible.</p>

      <h3>10. Distraction (4%)</h3>
      <p>Notification, appel téléphonique, bébé qui pleure. Le visiteur part et oublie.</p>
      <p><strong>Solution :</strong> Email de relance pour lui rappeler son panier.</p>

      <h2 id="prevention-checkout">Stratégie 1 : Optimiser le checkout Shopify</h2>
      <p>Le checkout est l&apos;étape critique. <strong>Chaque friction = abandon</strong>. Voici comment l&apos;optimiser.</p>

      <h3>Activer le guest checkout</h3>
      <p>Dans <strong>Paramètres → Checkout</strong>, sélectionnez "Les clients peuvent régler leur commande avec ou sans compte". Ne forcez jamais la création de compte avant l&apos;achat.</p>

      <h3>Simplifier le formulaire</h3>
      <ul>
        <li>Utilisez l&apos;auto-complétion d&apos;adresse (Google Places)</li>
        <li>Pré-remplissez les champs si le client a déjà acheté</li>
        <li>Réduisez les champs au strict nécessaire</li>
        <li>Regroupez prénom/nom sur une ligne</li>
      </ul>

      <h3>Activer Shop Pay</h3>
      <p><strong>Shop Pay</strong> est le mode de paiement le plus rapide sur Shopify. Les clients Shop Pay peuvent checkout en <strong>moins de 10 secondes</strong>. C&apos;est gratuit et automatiquement activé sur Shopify.</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">Shop Pay</div>
          <div class="metric-value">+18%</div>
          <div class="metric-desc">Conversion vs checkout standard</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Mobile</div>
          <div class="metric-value">+40%</div>
          <div class="metric-desc">Conversion mobile avec Shop Pay</div>
        </div>
      </div>

      <h3>Ajouter Apple Pay et Google Pay</h3>
      <p>Les paiements express (Apple Pay, Google Pay) réduisent l&apos;abandon de <strong>30% sur mobile</strong>. Activez-les dans <strong>Paramètres → Paiements</strong>.</p>

      <h3>Afficher les badges de sécurité</h3>
      <p>Près du bouton "Payer", affichez :</p>
      <ul>
        <li>Logo des CB acceptées (Visa, Mastercard, Amex)</li>
        <li>Badge SSL "Paiement sécurisé"</li>
        <li>Logo des moyens de paiement (PayPal, Shop Pay)</li>
        <li>Mention "Cryptage 256-bit"</li>
      </ul>

      <h3>Indicateur de progression</h3>
      <p>Si votre checkout a plusieurs étapes, affichez une barre de progression (Étape 1/3). Les gens abandonnent moins s&apos;ils voient qu&apos;ils sont proches de la fin.</p>

      <h2 id="prevention-prix">Stratégie 2 : Transparence des prix et livraison</h2>
      <p>48% des abandons sont dus aux frais de livraison inattendus. La solution ? <strong>Transparence totale.</strong></p>

      <h3>Afficher les frais de livraison avant le checkout</h3>
      <p>Plusieurs méthodes :</p>
      <ul>
        <li><strong>Barre sticky :</strong> "Livraison gratuite dès 50€" visible en permanence</li>
        <li><strong>Calculateur de frais :</strong> Sur la page panier, permettez au client d&apos;entrer son code postal pour voir les frais</li>
        <li><strong>Indication claire :</strong> "Frais de livraison : 4,99€" sur la page produit</li>
      </ul>

      <h3>Offrir la livraison gratuite (conditionnelle)</h3>
      <p>La livraison gratuite augmente la conversion de <strong>50%</strong>. Si vous ne pouvez pas l&apos;offrir sur tout, utilisez un seuil :</p>
      <ul>
        <li>"Livraison gratuite dès 50€"</li>
        <li>"Plus que 12€ pour la livraison gratuite !"</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">💡 Astuce : Barre de progression livraison gratuite</div>
        <p>Affichez une barre de progression dans le panier : "Plus que 15€ pour bénéficier de la livraison gratuite !"</p>
        <p>Cela incite à ajouter un produit supplémentaire (augmente l&apos;AOV).</p>
      </div>

      <h3>Prix tout compris</h3>
      <p>Si vous vendez B2C en Europe, affichez les prix <strong>TTC</strong> (TVA incluse). Pas de surprise fiscale au checkout.</p>

      <h2 id="prevention-confiance">Stratégie 3 : Renforcer les signaux de confiance</h2>
      <p>17% des abandons sont dus au manque de confiance. Voici comment rassurer vos visiteurs.</p>

      <h3>Avis clients visibles</h3>
      <p>Affichez des avis clients avec <strong>photos</strong> sur vos pages produits. Les avis avec photos augmentent la conversion de <strong>20%</strong>.</p>
      <p><strong>Apps recommandées :</strong> Judge.me, Loox, Yotpo</p>

      <h3>Politique de retour claire</h3>
      <p>Affichez "Retour gratuit sous 30 jours" de manière visible :</p>
      <ul>
        <li>En haut de la page produit</li>
        <li>Dans le panier</li>
        <li>Au checkout (sidebar)</li>
      </ul>

      <h3>Garanties et certifications</h3>
      <ul>
        <li>Garantie satisfait ou remboursé</li>
        <li>Badges de paiement sécurisé</li>
        <li>Certifications (bio, made in France, etc.)</li>
        <li>Nombre de clients satisfaits</li>
      </ul>

      <h3>Support visible</h3>
      <p>Ajoutez un <strong>chat en direct</strong> ou au minimum un lien "Besoin d&apos;aide ?" vers votre email/téléphone. La simple présence d&apos;un chat augmente la conversion de <strong>12%</strong>.</p>

      <div class="promo-box">
        <div class="promo-icon">🛡️</div>
        <div class="promo-content">
          <h4>Audit conversion de votre checkout</h4>
          <p>Nous analysons votre parcours d&apos;achat et identifions les points de friction qui causent des abandons.</p>
          <a href="/contact" class="promo-link">Demander un audit →</a>
        </div>
      </div>

      <h2 id="email-relance">Stratégie 4 : Emails de récupération de panier</h2>
      <p>L&apos;email de relance de panier abandonné est <strong>la stratégie la plus rentable</strong>. Un email bien conçu récupère <strong>10-15% des paniers</strong>.</p>

      <h3>Séquence optimale en 3 emails</h3>

      <h4>Email 1 : Rappel simple (1h après abandon)</h4>
      <p><strong>Objectif :</strong> Rappeler gentiment que le panier attend</p>
      <p><strong>Objet :</strong> "Vous avez oublié quelque chose 👀"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Rappel des produits dans le panier avec images</li>
        <li>Bouton CTA "Finaliser ma commande"</li>
        <li>Pas de promotion (pas encore)</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">📧 Template Email 1</div>
        <p><strong>Objet :</strong> Vous avez oublié quelque chose dans votre panier</p>
        <p><strong>Corps :</strong></p>
        <p>Bonjour [Prénom],</p>
        <p>Nous avons remarqué que vous avez laissé des articles dans votre panier. Pas d&apos;inquiétude, nous les avons gardés pour vous !</p>
        <p>[Image produit + nom + prix]</p>
        <p>[Bouton : Finaliser ma commande]</p>
        <p>Des questions ? Répondez à cet email.</p>
      </div>

      <h4>Email 2 : Réassurance (24h après abandon)</h4>
      <p><strong>Objectif :</strong> Lever les objections et rassurer</p>
      <p><strong>Objet :</strong> "Des questions sur votre commande ?"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Rappel du panier</li>
        <li>Réassurance : livraison gratuite, retour 30 jours, paiement sécurisé</li>
        <li>Avis clients ou témoignages</li>
        <li>FAQ rapide (livraison, retours, paiement)</li>
      </ul>

      <h4>Email 3 : Offre limitée (72h après abandon)</h4>
      <p><strong>Objectif :</strong> Dernier coup de pouce avec incitation</p>
      <p><strong>Objet :</strong> "🎁 -10% sur votre panier (expire ce soir)"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Code promo -10% ou livraison gratuite</li>
        <li>Urgence : "Expire dans 24h"</li>
        <li>Stock limité (si pertinent)</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention aux promotions systématiques</h4>
          <p>Si vous offrez toujours -10% au 3ème email, les clients vont apprendre à abandonner pour obtenir la promo. Alternez : parfois promo, parfois livraison gratuite, parfois rien.</p>
        </div>
      </div>

      <h3>Outils pour automatiser les emails de relance</h3>
      <ul>
        <li><strong>Shopify natif :</strong> Un seul email basique (plans Shopify et supérieurs)</li>
        <li><strong>Klaviyo :</strong> Séquence complète personnalisée (recommandé)</li>
        <li><strong>Omnisend :</strong> Alternative à Klaviyo, moins cher</li>
        <li><strong>Privy :</strong> Pop-ups + emails de relance</li>
      </ul>

      <h2 id="sms-relance">Stratégie 5 : SMS de récupération</h2>
      <p>Le SMS a un <strong>taux d&apos;ouverture de 98%</strong> (vs 20% pour l&apos;email). Un SMS bien timé peut récupérer <strong>5-10% de paniers supplémentaires</strong>.</p>

      <h3>Timing optimal</h3>
      <p>Envoyez le SMS <strong>2-4h après l&apos;abandon</strong>. Pas trop tôt (intrusif), pas trop tard (oublié).</p>

      <h3>Exemple de SMS efficace</h3>
      <div class="example-box good">
        <div class="example-label">📱 Template SMS</div>
        <p>Salut [Prénom] ! Vous avez oublié [Produit] dans votre panier 🛒</p>
        <p>Finalisez votre commande ici : [Lien court]</p>
        <p>Livraison gratuite dès 50€ 🚚</p>
        <p>STOP pour se désabonner</p>
      </div>

      <h3>Apps SMS pour Shopify</h3>
      <ul>
        <li><strong>Klaviyo :</strong> SMS intégré à la plateforme email</li>
        <li><strong>Postscript :</strong> Spécialisé SMS pour e-commerce</li>
        <li><strong>Omnisend :</strong> Email + SMS combinés</li>
      </ul>

      <p><strong>Coût :</strong> ~0,01-0,05€ par SMS. Rentabilité excellente si bien utilisé.</p>

      <h2 id="exit-intent">Stratégie 6 : Pop-ups exit-intent</h2>
      <p>La pop-up exit-intent se déclenche quand le visiteur s&apos;apprête à quitter le site (mouvement de souris vers le haut). C&apos;est votre <strong>dernière chance de le retenir</strong>.</p>

      <h3>Que proposer dans la pop-up ?</h3>
      <ul>
        <li><strong>Code promo -10% :</strong> "Attendez ! Voici -10% pour votre première commande"</li>
        <li><strong>Livraison gratuite :</strong> "Ne partez pas ! Livraison offerte sur votre panier"</li>
        <li><strong>Chat :</strong> "Une question avant de partir ?" (ouvre le chat)</li>
        <li><strong>Newsletter :</strong> "Restez informé de nos nouveautés" (capture email)</li>
      </ul>

      <h3>Best practices</h3>
      <ul>
        <li>Déclenchement uniquement sur page panier/checkout</li>
        <li>Une seule fois par session</li>
        <li>Design clair avec gros CTA</li>
        <li>Facile à fermer (pas agaçant)</li>
      </ul>

      <h3>Apps exit-intent pour Shopify</h3>
      <ul>
        <li><strong>Privy :</strong> Exit-intent + capture email</li>
        <li><strong>OptiMonk :</strong> Pop-ups intelligents</li>
        <li><strong>Justuno :</strong> Pop-ups avancés avec targeting</li>
      </ul>

      <div class="promo-box accent">
        <div class="promo-icon">💰</div>
        <div class="promo-content">
          <h4>Configuration complète anti-abandon</h4>
          <p>Nous configurons vos emails de relance Klaviyo, SMS et pop-ups exit-intent pour maximiser la récupération.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="outils-shopify">Apps Shopify pour réduire l&apos;abandon</h2>

      <h3>1. Klaviyo - Email & SMS automation</h3>
      <p><strong>Prix :</strong> Gratuit jusqu&apos;à 250 contacts</p>
      <p>La référence pour les emails et SMS de relance de panier. Intégration native Shopify, segmentation avancée.</p>

      <h3>2. Privy - Pop-ups & capture email</h3>
      <p><strong>Prix :</strong> Gratuit jusqu&apos;à 100 contacts</p>
      <p>Pop-ups exit-intent, spin-to-win, barres de livraison gratuite. Intégré à Klaviyo.</p>

      <h3>3. ReConvert - Post-purchase upsell</h3>
      <p><strong>Prix :</strong> À partir de 4.99$/mois</p>
      <p>Optimise la page thank you avec upsells one-click. Récupère aussi les paniers via la page thank you.</p>

      <h3>4. Carthook - Checkout customization</h3>
      <p><strong>Prix :</strong> Sur devis</p>
      <p>Personnalise le checkout avec upsells, countdown, badges de confiance.</p>

      <h3>5. Lucky Orange - Session recording</h3>
      <p><strong>Prix :</strong> À partir de 9$/mois</p>
      <p>Enregistre les sessions pour voir où les visiteurs bloquent au checkout.</p>

      <h2 id="mesurer">Mesurer et optimiser les résultats</h2>

      <h3>KPIs à suivre</h3>
      <div class="checklist-section">
        <h4>Métriques clés</h4>
        <ul class="checklist">
          <li><strong>Taux d&apos;abandon :</strong> (Paniers créés - Achats) / Paniers créés × 100</li>
          <li><strong>Taux de récupération email :</strong> Conversions email / Emails envoyés × 100</li>
          <li><strong>Revenus récupérés :</strong> CA généré par emails de relance</li>
          <li><strong>Taux de clics email :</strong> Clics / Emails ouverts × 100</li>
          <li><strong>Conversion exit-intent :</strong> Conversions pop-up / Affichages × 100</li>
        </ul>
      </div>

      <h3>Benchmarks par canal</h3>
      <ul>
        <li><strong>Email 1 (1h) :</strong> 40-50% taux d&apos;ouverture, 10-15% conversion</li>
        <li><strong>Email 2 (24h) :</strong> 30-40% ouverture, 5-10% conversion</li>
        <li><strong>Email 3 (72h) :</strong> 20-30% ouverture, 5-8% conversion</li>
        <li><strong>SMS :</strong> 98% ouverture, 8-12% conversion</li>
        <li><strong>Exit-intent :</strong> 2-5% conversion</li>
      </ul>

      <h3>Outils de mesure</h3>
      <ul>
        <li><strong>Shopify Analytics :</strong> Rapport "Paniers abandonnés"</li>
        <li><strong>Klaviyo :</strong> Dashboard revenus par flow</li>
        <li><strong>Google Analytics 4 :</strong> Funnel e-commerce</li>
        <li><strong>Lucky Orange :</strong> Heatmaps et sessions checkout</li>
      </ul>

      <h2 id="conclusion">Plan d&apos;action : Réduire l&apos;abandon de panier en 30 jours</h2>

      <h3>Semaine 1 : Quick wins (prévention)</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Activer le guest checkout</li>
          <li>Ajouter badges de sécurité au checkout</li>
          <li>Afficher "Livraison gratuite dès X€" en barre sticky</li>
          <li>Activer Shop Pay, Apple Pay, Google Pay</li>
          <li>Ajouter politique de retour visible</li>
        </ul>
      </div>

      <h3>Semaine 2 : Emails de relance</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Installer Klaviyo (ou Omnisend)</li>
          <li>Configurer flow abandon de panier en 3 emails</li>
          <li>Design des emails avec produits + CTA</li>
          <li>Tester la séquence complète</li>
          <li>Activer le flow</li>
        </ul>
      </div>

      <h3>Semaine 3 : SMS & Exit-intent</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Installer Postscript ou activer SMS Klaviyo</li>
          <li>Créer template SMS de relance</li>
          <li>Installer Privy</li>
          <li>Créer pop-up exit-intent sur page panier</li>
          <li>Tester et activer</li>
        </ul>
      </div>

      <h3>Semaine 4 : Optimisation & Mesure</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Analyser Lucky Orange (où les gens bloquent)</li>
          <li>Mesurer taux d&apos;abandon avant/après</li>
          <li>Calculer revenus récupérés</li>
          <li>A/B tester objets d&apos;emails</li>
          <li>Optimiser basé sur les données</li>
        </ul>
      </div>

      <h3>Objectif réaliste</h3>
      <p>En appliquant ces stratégies, vous pouvez raisonnablement viser :</p>
      <ul>
        <li><strong>Réduction du taux d&apos;abandon :</strong> -10 à -15 points</li>
        <li><strong>Récupération des paniers :</strong> 15-30% via email/SMS</li>
        <li><strong>Revenus supplémentaires :</strong> +10-20% du CA</li>
      </ul>

      <p><strong>Conclusion :</strong> L&apos;abandon de panier n&apos;est pas une fatalité. Avec les bonnes stratégies et outils, vous pouvez récupérer jusqu&apos;à <strong>30% des ventes perdues</strong>. Commencez par les quick wins (checkout optimisé), puis implémentez les emails de relance. Les résultats sont mesurables dès le premier mois.</p>

      <p>Besoin d&apos;aide pour configurer vos stratégies anti-abandon ? Notre équipe d&apos;experts Shopify peut auditer votre checkout et configurer tous vos flows de récupération pour maximiser vos ventes.</p>
    `,
  },
  'core-web-vitals-shopify': {
    title: 'Core Web Vitals Shopify : Guide complet pour un score 90+',
    excerpt: 'Guide détaillé pour optimiser les Core Web Vitals sur Shopify : LCP, INP, CLS. Techniques avancées, thèmes performants, apps légères. Passez au vert en 2026.',
    category: 'SEO',
    date: '25 Octobre 2025',
    readTime: '9 min',
    tableOfContents: [
      { id: 'introduction', title: 'Pourquoi les Core Web Vitals sont cruciaux' },
      { id: 'definition', title: 'Qu\'est-ce que les Core Web Vitals 2026 ?' },
      { id: 'mesurer', title: 'Mesurer vos Core Web Vitals' },
      { id: 'optimiser-lcp', title: 'Optimiser le LCP (chargement)' },
      { id: 'optimiser-inp', title: 'Optimiser l\'INP (interactivité)' },
      { id: 'optimiser-cls', title: 'Optimiser le CLS (stabilité)' },
      { id: 'shopify-specifique', title: 'Optimisations spécifiques Shopify' },
      { id: 'themes-performants', title: 'Thèmes Shopify performants' },
      { id: 'apps-impact', title: 'Impact des apps sur la performance' },
      { id: 'cas-pratique', title: 'Cas pratique : passer de 45 à 90+' },
      { id: 'erreurs-eviter', title: 'Erreurs courantes à éviter' },
      { id: 'conclusion', title: 'Plan d\'action' },
    ],
    content: `
      <h2 id="introduction">Pourquoi les Core Web Vitals sont cruciaux pour Shopify</h2>
      <p>Les <strong>Core Web Vitals</strong> sont des métriques officielles de Google qui mesurent l&apos;expérience utilisateur réelle de votre site. Depuis 2021, elles sont un <strong>facteur de classement SEO</strong>. Pour une boutique Shopify, c&apos;est critique :</p>

      <ul>
        <li><strong>SEO :</strong> Un bon score Core Web Vitals améliore votre positionnement Google</li>
        <li><strong>Conversion :</strong> 1 seconde de chargement en moins = +7% de conversion</li>
        <li><strong>UX :</strong> Un site rapide = clients satisfaits = meilleur taux de rebond</li>
        <li><strong>Mobile :</strong> 85% du trafic e-commerce est mobile, où la performance est encore plus critique</li>
      </ul>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">Conversion</div>
          <div class="metric-value">+7%</div>
          <div class="metric-desc">Par seconde gagnée</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Rebond</div>
          <div class="metric-value">+32%</div>
          <div class="metric-desc">Si chargement &gt; 3s</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">SEO</div>
          <div class="metric-value">Top 3</div>
          <div class="metric-desc">Facteur de ranking</div>
        </div>
      </div>

      <p>Ce guide vous montre <strong>comment optimiser vos Core Web Vitals sur Shopify</strong> pour atteindre un score de 90+ et maximiser vos conversions.</p>

      <h2 id="definition">Qu&apos;est-ce que les Core Web Vitals en 2026 ?</h2>
      <p>En 2024, Google a remplacé le FID par l&apos;<strong>INP (Interaction to Next Paint)</strong>. Voici les 3 métriques Core Web Vitals en 2026 :</p>

      <h3>1. LCP - Largest Contentful Paint (Chargement)</h3>
      <p>Mesure le temps de chargement du <strong>plus gros élément visible</strong> à l&apos;écran (image, texte, vidéo).</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name" style="color: #0CCE6B;">Bon</div>
          <div class="metric-value">&lt; 2,5s</div>
          <div class="metric-desc">LCP rapide</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FFA400;">Moyen</div>
          <div class="metric-value">2,5-4s</div>
          <div class="metric-desc">À améliorer</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FF4E42;">Mauvais</div>
          <div class="metric-value">&gt; 4s</div>
          <div class="metric-desc">Très lent</div>
        </div>
      </div>

      <p><strong>Sur Shopify :</strong> Le LCP est souvent l&apos;image hero de la page d&apos;accueil ou la photo produit principale.</p>

      <h3>2. INP - Interaction to Next Paint (Interactivité)</h3>
      <p>Mesure le temps entre une interaction utilisateur (clic, scroll) et la réponse visuelle. Remplace le FID depuis mars 2024.</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name" style="color: #0CCE6B;">Bon</div>
          <div class="metric-value">&lt; 200ms</div>
          <div class="metric-desc">Réactivité excellente</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FFA400;">Moyen</div>
          <div class="metric-value">200-500ms</div>
          <div class="metric-desc">À améliorer</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FF4E42;">Mauvais</div>
          <div class="metric-value">&gt; 500ms</div>
          <div class="metric-desc">Trop lent</div>
        </div>
      </div>

      <p><strong>Sur Shopify :</strong> L&apos;INP mesure la réactivité du bouton "Ajouter au panier", menus déroulants, etc.</p>

      <h3>3. CLS - Cumulative Layout Shift (Stabilité)</h3>
      <p>Mesure les <strong>décalages visuels inattendus</strong> pendant le chargement. Ex: un bouton qui se déplace alors que vous allez cliquer.</p>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name" style="color: #0CCE6B;">Bon</div>
          <div class="metric-value">&lt; 0,1</div>
          <div class="metric-desc">Stable</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FFA400;">Moyen</div>
          <div class="metric-value">0,1-0,25</div>
          <div class="metric-desc">Décalages légers</div>
        </div>
        <div class="metric-card">
          <div class="metric-name" style="color: #FF4E42;">Mauvais</div>
          <div class="metric-value">&gt; 0,25</div>
          <div class="metric-desc">Très instable</div>
        </div>
      </div>

      <p><strong>Sur Shopify :</strong> Le CLS est souvent causé par les images sans dimensions, les fonts qui chargent tard, ou les banners qui s&apos;affichent après coup.</p>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Google mesure les données réelles (RUM)</h4>
          <p>Les Core Web Vitals sont mesurés sur vos <strong>vrais visiteurs</strong> (via Chrome User Experience Report). Un bon score en test n&apos;est pas suffisant si vos utilisateurs réels ont une mauvaise expérience.</p>
        </div>
      </div>

      <h2 id="mesurer">Mesurer vos Core Web Vitals actuels</h2>
      <p>Avant d&apos;optimiser, mesurez vos scores actuels pour savoir où vous en êtes.</p>

      <h3>Outil 1 : PageSpeed Insights (Google)</h3>
      <p><strong>URL :</strong> <a href="https://pagespeed.web.dev" target="_blank" rel="noopener">pagespeed.web.dev</a></p>
      <p>L&apos;outil officiel de Google. Il vous donne :</p>
      <ul>
        <li><strong>Score mobile</strong> (le plus important pour e-commerce)</li>
        <li><strong>Données terrain</strong> (utilisateurs réels via CrUX)</li>
        <li><strong>Données labo</strong> (simulation)</li>
        <li><strong>Recommandations</strong> spécifiques pour améliorer</li>
      </ul>

      <h3>Outil 2 : Search Console (Rapport Core Web Vitals)</h3>
      <p>Dans Google Search Console, allez dans <strong>Expérience → Core Web Vitals</strong>. Vous verrez quelles pages sont "Bonnes", "À améliorer" ou "Mauvaises".</p>

      <h3>Outil 3 : Shopify Theme Inspector (Chrome)</h3>
      <p>Extension officielle Shopify qui analyse l&apos;impact de chaque app et section de thème sur la performance.</p>
      <p><strong>Installation :</strong> <a href="https://chrome.google.com/webstore/detail/shopify-theme-inspector/fndnankcflemoafdeboboehphmiijkgp" target="_blank" rel="noopener">Chrome Web Store</a></p>

      <h3>Outil 4 : GTmetrix</h3>
      <p><strong>URL :</strong> <a href="https://gtmetrix.com" target="_blank" rel="noopener">gtmetrix.com</a></p>
      <p>Analyse détaillée avec waterfall, vidéo du chargement, recommandations.</p>

      <h2 id="optimiser-lcp">Optimiser le LCP (Largest Contentful Paint)</h2>
      <p>Le LCP est souvent le problème n°1 sur Shopify. Voici comment le réduire sous 2,5s.</p>

      <h3>1. Optimiser les images</h3>
      <p>L&apos;image hero (page d&apos;accueil) ou la photo produit principale est généralement le LCP.</p>

      <h4>Compression avant upload</h4>
      <ul>
        <li>Utilisez <strong>TinyPNG</strong> ou <strong>Squoosh</strong> pour compresser avant d&apos;uploader</li>
        <li>Ciblez 80-85% de qualité (souvent invisible à l&apos;œil)</li>
        <li>Taille max recommandée : 200-300 Ko par image</li>
      </ul>

      <h4>Format WebP/AVIF</h4>
      <p>Shopify convertit automatiquement en WebP si le navigateur le supporte. Mais uploadez déjà en WebP pour de meilleures performances :</p>
      <ul>
        <li>WebP : 25-35% plus léger que JPEG</li>
        <li>AVIF : 50% plus léger mais support navigateur encore limité (2026)</li>
      </ul>

      <h4>Dimensions exactes</h4>
      <p>Définissez toujours <code>width</code> et <code>height</code> sur vos images pour éviter le CLS.</p>

      <div class="example-box good">
        <div class="example-label">✅ Bonne pratique</div>
        <pre><code>&lt;img src="hero.webp" width="1920" height="1080" alt="..." loading="eager"&gt;</code></pre>
      </div>

      <h4>Lazy loading... sauf pour le LCP</h4>
      <p><strong>Important :</strong> L&apos;image LCP (hero) ne doit <strong>pas</strong> être en lazy loading. Utilisez <code>loading="eager"</code> ou pas d&apos;attribut loading.</p>

      <h4>Preload de l&apos;image LCP</h4>
      <p>Ajoutez un <code>&lt;link rel="preload"&gt;</code> dans le <code>&lt;head&gt;</code> pour l&apos;image hero :</p>

      <div class="example-box good">
        <div class="example-label">📝 Code à ajouter dans theme.liquid</div>
        <pre><code>&lt;link rel="preload" as="image" href="hero-image.webp" fetchpriority="high"&gt;</code></pre>
      </div>

      <h3>2. Utiliser un CDN performant</h3>
      <p>Shopify utilise automatiquement un CDN (Fastly) pour servir vos images. Assurez-vous que :</p>
      <ul>
        <li>Vos images passent bien par le CDN Shopify (<code>cdn.shopify.com</code>)</li>
        <li>Vous n&apos;uploadez pas d&apos;images via des apps tierces qui n&apos;utilisent pas le CDN</li>
      </ul>

      <h3>3. Choisir un thème léger</h3>
      <p>Le thème est le facteur n°1 de performance sur Shopify. Les thèmes lourds avec trop de fonctionnalités ralentissent le LCP.</p>

      <p><strong>Thèmes Shopify rapides (2026) :</strong></p>
      <ul>
        <li><strong>Dawn</strong> (gratuit) : Le thème par défaut Shopify, ultra-optimisé</li>
        <li><strong>Sense</strong> (gratuit) : Léger et moderne</li>
        <li><strong>Impulse</strong> (payant) : Performant avec bonnes fonctionnalités</li>
        <li><strong>Streamline</strong> (payant) : Focus performance</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Évitez les thèmes surchargés</h4>
          <p>Les thèmes avec 50+ sections et animations partout sont impressionnants en démo, mais terribles pour la performance. Privilégiez la simplicité.</p>
        </div>
      </div>

      <h3>4. Minimiser le CSS et JavaScript</h3>
      <p>Le CSS et JS bloquent le rendu de la page. Pour optimiser :</p>
      <ul>
        <li>Utilisez un thème moderne (Shopify 2.0) qui charge le CSS de manière asynchrone</li>
        <li>Évitez les thèmes avec jQuery (obsolète et lourd)</li>
        <li>Inline le CSS critique (above-the-fold)</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">⚡</div>
        <div class="promo-content">
          <h4>Audit performance Shopify complet</h4>
          <p>Nous analysons votre boutique et optimisons vos Core Web Vitals pour un score 90+.</p>
          <a href="/contact" class="promo-link">Demander un audit →</a>
        </div>
      </div>

      <h2 id="optimiser-inp">Optimiser l&apos;INP (Interaction to Next Paint)</h2>
      <p>L&apos;INP mesure la réactivité du site. Un mauvais INP = boutons qui ne répondent pas, scrolling saccadé.</p>

      <h3>1. Limiter les apps installées</h3>
      <p>Chaque app Shopify ajoute du JavaScript qui bloque l&apos;interactivité. La règle d&apos;or : <strong>maximum 10 apps</strong>.</p>

      <div class="example-box good">
        <div class="example-label">📊 Impact des apps sur l&apos;INP</div>
        <ul>
          <li>5 apps : INP ~150ms (bon)</li>
          <li>10 apps : INP ~250ms (moyen)</li>
          <li>15+ apps : INP &gt;400ms (mauvais)</li>
        </ul>
      </div>

      <h3>2. Auditer les apps avec Shopify Theme Inspector</h3>
      <ol>
        <li>Installez <strong>Shopify Theme Inspector</strong> (Chrome)</li>
        <li>Ouvrez votre boutique</li>
        <li>Lancez l&apos;inspector</li>
        <li>Regardez l&apos;onglet "Apps" : il vous montre l&apos;impact de chaque app sur la performance</li>
        <li>Désinstallez les apps avec un gros impact et peu d&apos;utilité</li>
      </ol>

      <h3>3. Nettoyer le code des apps désinstallées</h3>
      <p><strong>Problème courant :</strong> Quand vous désinstallez une app, son code reste souvent dans le thème.</p>

      <p><strong>Solution :</strong></p>
      <ol>
        <li>Allez dans <strong>Boutique en ligne → Thèmes → Actions → Modifier le code</strong></li>
        <li>Ouvrez <code>theme.liquid</code></li>
        <li>Cherchez des références aux apps désinstallées (ex: <code>privy</code>, <code>klaviyo</code>)</li>
        <li>Supprimez les scripts orphelins</li>
      </ol>

      <h3>4. Différer le chargement des scripts non critiques</h3>
      <p>Les scripts tiers (Facebook Pixel, Google Analytics) bloquent l&apos;interactivité. Utilisez <code>defer</code> ou <code>async</code> :</p>

      <div class="example-box good">
        <div class="example-label">✅ Script différé</div>
        <pre><code>&lt;script src="analytics.js" defer&gt;&lt;/script&gt;</code></pre>
      </div>

      <h3>5. Éviter les mega menus trop complexes</h3>
      <p>Les menus déroulants avec 100+ liens et images ralentissent l&apos;INP. Simplifiez votre navigation.</p>

      <h2 id="optimiser-cls">Optimiser le CLS (Cumulative Layout Shift)</h2>
      <p>Le CLS mesure les décalages visuels. Un mauvais CLS frustre les utilisateurs (clic sur le mauvais bouton).</p>

      <h3>1. Définir les dimensions des images</h3>
      <p>La cause n°1 du CLS : des images sans <code>width</code> et <code>height</code>. Le navigateur ne sait pas quelle place réserver.</p>

      <div class="example-box bad">
        <div class="example-label">❌ Mauvais</div>
        <pre><code>&lt;img src="produit.jpg" alt="..."&gt;</code></pre>
      </div>

      <div class="example-box good">
        <div class="example-label">✅ Bon</div>
        <pre><code>&lt;img src="produit.jpg" width="800" height="1000" alt="..."&gt;</code></pre>
      </div>

      <h3>2. Utiliser des fonts system ou précharger les custom fonts</h3>
      <p>Les custom fonts (Google Fonts, fonts personnalisées) causent du CLS si mal implémentées.</p>

      <p><strong>Option 1 : Fonts system (0 CLS)</strong></p>
      <pre><code>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;</code></pre>

      <p><strong>Option 2 : Précharger les fonts custom</strong></p>
      <pre><code>&lt;link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin&gt;</code></pre>

      <p><strong>Option 3 : font-display: swap</strong></p>
      <pre><code>@font-face {
  font-family: "CustomFont";
  src: url("font.woff2");
  font-display: swap; /* Affiche la font système en attendant */
}</code></pre>

      <h3>3. Réserver l&apos;espace pour les éléments dynamiques</h3>
      <p>Si vous affichez une bannière de livraison gratuite ou un bandeau cookies, réservez l&apos;espace pour éviter que le contenu ne se décale.</p>

      <div class="example-box good">
        <div class="example-label">✅ Espace réservé</div>
        <pre><code>&lt;div class="banner-placeholder" style="min-height: 50px;"&gt;
  &lt;!-- Contenu de la bannière chargé ici --&gt;
&lt;/div&gt;</code></pre>
      </div>

      <h3>4. Éviter les pop-ups qui poussent le contenu</h3>
      <p>Les pop-ups doivent être en <code>position: fixed</code> ou <code>absolute</code> pour ne pas décaler le reste de la page.</p>

      <h3>5. Lazy loading des images hors écran</h3>
      <p>Activez le lazy loading pour toutes les images <strong>sauf</strong> celles visibles au chargement (hero, logo).</p>

      <pre><code>&lt;img src="image.jpg" loading="lazy" width="800" height="600" alt="..."&gt;</code></pre>

      <h2 id="shopify-specifique">Optimisations spécifiques Shopify</h2>

      <h3>1. Utiliser Shopify 2.0 (Online Store 2.0)</h3>
      <p>Shopify 2.0 apporte des améliorations performance majeures :</p>
      <ul>
        <li>Sections partout (pas seulement homepage)</li>
        <li>Chargement asynchrone des sections</li>
        <li>Meilleure gestion du CSS</li>
      </ul>
      <p>Si vous êtes encore sur un ancien thème, migrez vers Shopify 2.0.</p>

      <h3>2. Activer le cache du navigateur</h3>
      <p>Shopify gère automatiquement le cache, mais vérifiez que vos assets (CSS, JS) sont bien cachés.</p>

      <h3>3. Optimiser les collections</h3>
      <p>Les pages collections avec 50+ produits peuvent être lentes. Solutions :</p>
      <ul>
        <li>Paginer à 24 produits par page</li>
        <li>Utiliser le lazy loading sur les images produits</li>
        <li>Implémenter l&apos;infinite scroll avec pagination virtuelle</li>
      </ul>

      <h3>4. Désactiver les fonctionnalités non utilisées</h3>
      <p>Si votre thème a des sections que vous n&apos;utilisez pas, supprimez-les du code pour alléger.</p>

      <h2 id="themes-performants">Thèmes Shopify les plus performants en 2026</h2>

      <h3>Thèmes gratuits</h3>
      <div class="checklist-section">
        <h4>🏆 Top 3 thèmes gratuits rapides</h4>
        <ul class="checklist">
          <li><strong>Dawn</strong> : Score moyen 85-95 mobile. Thème de référence Shopify.</li>
          <li><strong>Sense</strong> : Score moyen 80-90 mobile. Léger et élégant.</li>
          <li><strong>Colorblock</strong> : Score moyen 75-85 mobile. Bon pour produits visuels.</li>
        </ul>
      </div>

      <h3>Thèmes payants</h3>
      <div class="checklist-section">
        <h4>💎 Top 3 thèmes payants rapides</h4>
        <ul class="checklist">
          <li><strong>Streamline</strong> (350$) : Optimisé pour la vitesse, score 90+ possible.</li>
          <li><strong>Impulse</strong> (350$) : Performance + fonctionnalités, score 80-90.</li>
          <li><strong>Focal</strong> (350$) : Moderne et rapide, score 75-85.</li>
        </ul>
      </div>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Le thème n&apos;est qu&apos;une base</h4>
          <p>Même Dawn peut devenir lent si vous installez 20 apps. Le thème compte pour ~40% de la performance, les apps et le contenu pour ~60%.</p>
        </div>
      </div>

      <h2 id="apps-impact">Impact des apps sur les Core Web Vitals</h2>

      <h3>Apps légères (impact minimal)</h3>
      <ul>
        <li><strong>Judge.me</strong> : Avis clients, bien optimisé</li>
        <li><strong>Klaviyo</strong> : Email marketing, script async</li>
        <li><strong>ReConvert</strong> : Post-purchase, ne charge que sur thank you page</li>
      </ul>

      <h3>Apps moyennes (impact modéré)</h3>
      <ul>
        <li><strong>Privy</strong> : Pop-ups, ~100ms INP</li>
        <li><strong>Loox</strong> : Avis avec photos, lazy load correct</li>
        <li><strong>Gorgias</strong> : Chat, bien optimisé</li>
      </ul>

      <h3>Apps lourdes (à éviter ou optimiser)</h3>
      <ul>
        <li><strong>Apps de page builder</strong> : PageFly, Shogun → Très lourdes, évitez si possible</li>
        <li><strong>Apps de countdown</strong> : Beaucoup ajoutent du JS inutile</li>
        <li><strong>Apps de quiz</strong> : Souvent mal optimisées</li>
      </ul>

      <h2 id="cas-pratique">Cas pratique : passer de 45 à 90+ en Core Web Vitals</h2>

      <h3>État initial</h3>
      <p><strong>Boutique mode :</strong> Score PageSpeed mobile 45, Desktop 72</p>
      <ul>
        <li>LCP : 4,2s (mauvais)</li>
        <li>INP : 580ms (mauvais)</li>
        <li>CLS : 0,18 (moyen)</li>
      </ul>

      <h3>Actions réalisées</h3>
      <ol>
        <li><strong>Images :</strong> Compressé toutes les images (TinyPNG), converti en WebP, ajouté width/height</li>
        <li><strong>Thème :</strong> Migration de thème lourd vers Dawn customisé</li>
        <li><strong>Apps :</strong> Passé de 18 apps à 8 apps essentielles</li>
        <li><strong>Fonts :</strong> Préchargé les fonts custom, ajouté font-display: swap</li>
        <li><strong>Scripts :</strong> Différé le chargement de Facebook Pixel et Google Analytics</li>
        <li><strong>Hero image :</strong> Ajouté preload pour l&apos;image hero</li>
      </ol>

      <h3>Résultats après optimisation</h3>
      <p><strong>Score PageSpeed mobile 91</strong>, Desktop 98</p>
      <ul>
        <li>LCP : 1,8s (bon) ✅</li>
        <li>INP : 140ms (bon) ✅</li>
        <li>CLS : 0,05 (bon) ✅</li>
      </ul>

      <p><strong>Impact business :</strong></p>
      <ul>
        <li>Taux de conversion : +12%</li>
        <li>Taux de rebond : -18%</li>
        <li>Temps sur site : +25%</li>
        <li>Positions SEO : +3 positions moyenne sur mots-clés principaux</li>
      </ul>

      <h2 id="erreurs-eviter">Erreurs courantes à éviter</h2>

      <h3>1. Installer trop d&apos;apps</h3>
      <p>Chaque app = performance dégradée. Gardez uniquement les essentielles.</p>

      <h3>2. Utiliser des thèmes surchargés</h3>
      <p>Les thèmes avec 80+ sections sont lents. Privilégiez Dawn ou des thèmes légers.</p>

      <h3>3. Négliger le mobile</h3>
      <p>85% du trafic e-commerce est mobile. Optimisez d&apos;abord pour mobile.</p>

      <h3>4. Oublier les dimensions des images</h3>
      <p>Images sans width/height = CLS élevé. Toujours définir les dimensions.</p>

      <h3>5. Ne pas nettoyer le code des apps désinstallées</h3>
      <p>Le code reste après désinstallation. Nettoyez manuellement.</p>

      <h3>6. Lazy loading sur l&apos;image LCP</h3>
      <p>L&apos;image hero ne doit JAMAIS être en lazy loading.</p>

      <h2 id="conclusion">Plan d&apos;action : Optimiser vos Core Web Vitals en 2 semaines</h2>

      <h3>Semaine 1 : Quick wins</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Mesurer les scores actuels (PageSpeed Insights)</li>
          <li>Compresser toutes les images (TinyPNG)</li>
          <li>Ajouter width/height sur toutes les images</li>
          <li>Désinstaller 5+ apps non essentielles</li>
          <li>Précharger l&apos;image hero</li>
          <li>Activer lazy loading (sauf hero)</li>
        </ul>
      </div>

      <h3>Semaine 2 : Optimisations avancées</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Nettoyer le code des apps désinstallées</li>
          <li>Optimiser les fonts (preload ou system fonts)</li>
          <li>Différer les scripts tiers (Analytics, Pixel)</li>
          <li>Auditer avec Shopify Theme Inspector</li>
          <li>Tester et mesurer les améliorations</li>
          <li>Monitorer en continu avec Search Console</li>
        </ul>
      </div>

      <h3>Objectif réaliste</h3>
      <ul>
        <li><strong>Score mobile :</strong> 70-90+ (selon état initial)</li>
        <li><strong>LCP :</strong> &lt; 2,5s</li>
        <li><strong>INP :</strong> &lt; 200ms</li>
        <li><strong>CLS :</strong> &lt; 0,1</li>
      </ul>

      <p><strong>Conclusion :</strong> Optimiser vos Core Web Vitals sur Shopify n&apos;est pas sorcier. En suivant ces recommandations, vous pouvez atteindre un score de 90+ mobile et <strong>booster vos conversions de 10-15%</strong>. Commencez par les images et les apps, puis affinez avec les optimisations avancées.</p>

      <p>Besoin d&apos;aide pour atteindre un score 90+ ? Notre équipe d&apos;experts Shopify peut auditer et optimiser votre boutique pour des Core Web Vitals au top.</p>
    `,
  },
  'sequences-email-ecommerce': {
    title: 'Séquences email e-commerce : 7 flows qui génèrent 30% du CA',
    excerpt: 'Guide complet des automatisations email pour Shopify : Welcome Series, Abandon de panier, Post-achat, Win-back, Browse Abandonment. Templates + KPIs + exemples Klaviyo.',
    category: 'Marketing',
    date: '10 Décembre 2025',
    readTime: '11 min',
    tableOfContents: [
      { id: 'introduction', title: 'Pourquoi les flows email sont essentiels' },
      { id: 'flows-essentiels', title: 'Les 7 flows incontournables' },
      { id: 'welcome-series', title: '1. Welcome Series (bienvenue)' },
      { id: 'abandoned-cart', title: '2. Abandon de panier' },
      { id: 'post-purchase', title: '3. Post-Purchase (post-achat)' },
      { id: 'win-back', title: '4. Win-Back (réactivation)' },
      { id: 'browse-abandonment', title: '5. Browse Abandonment' },
      { id: 'anniversaire', title: '6. Anniversaire et occasions' },
      { id: 'vip', title: '7. VIP et fidélité' },
      { id: 'bonnes-pratiques', title: 'Bonnes pratiques email' },
      { id: 'kpis', title: 'KPIs à suivre' },
      { id: 'erreurs', title: 'Erreurs à éviter' },
      { id: 'conclusion', title: 'Plan de mise en place' },
    ],
    content: `
      <h2 id="introduction">Pourquoi les flows email sont essentiels pour votre boutique Shopify</h2>
      <p>Les <strong>automatisations email (flows)</strong> sont le canal marketing le plus rentable en e-commerce. Contrairement aux campagnes ponctuelles, les flows tournent 24/7 et génèrent des revenus sans effort supplémentaire.</p>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-name">CA généré</div>
          <div class="metric-value">25-35%</div>
          <div class="metric-desc">Du chiffre d&apos;affaires total</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">ROI</div>
          <div class="metric-value">42:1</div>
          <div class="metric-desc">Pour chaque euro investi</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Conversion</div>
          <div class="metric-value">4-6%</div>
          <div class="metric-desc">Taux de conversion moyen</div>
        </div>
      </div>

      <p>En moyenne, les boutiques Shopify bien configurées génèrent <strong>25-35% de leur CA via les flows email</strong>. C&apos;est énorme comparé aux 10-15% des campagnes email classiques.</p>

      <p>Ce guide vous présente les <strong>7 flows essentiels</strong> à mettre en place sur votre boutique, avec des templates concrets, des KPIs et des bonnes pratiques.</p>

      <h2 id="flows-essentiels">Les 7 flows email incontournables (par ordre de priorité)</h2>
      <p>Voici les 7 séquences email automatisées à implémenter absolument sur votre boutique Shopify, classées par <strong>impact sur le CA</strong> :</p>

      <div class="checklist-section">
        <h4>🏆 Flows par ordre de priorité</h4>
        <ol>
          <li><strong>Abandon de panier</strong> : 15-20% du CA email</li>
          <li><strong>Welcome Series</strong> : 10-15% du CA email</li>
          <li><strong>Post-Purchase</strong> : 8-12% du CA email</li>
          <li><strong>Win-Back</strong> : 5-10% du CA email</li>
          <li><strong>Browse Abandonment</strong> : 3-7% du CA email</li>
          <li><strong>Anniversaire</strong> : 2-5% du CA email</li>
          <li><strong>VIP/Fidélité</strong> : 2-4% du CA email</li>
        </ol>
      </div>

      <h2 id="welcome-series">1. Welcome Series (Bienvenue)</h2>
      <p>La <strong>Welcome Series</strong> est envoyée aux nouveaux inscrits à votre newsletter. C&apos;est votre première impression : elle peut convertir jusqu&apos;à <strong>30% des inscrits</strong> en clients.</p>

      <h3>Objectif</h3>
      <p>Présenter votre marque, créer la confiance et inciter au premier achat.</p>

      <h3>Déclencheur</h3>
      <p>Inscription à la newsletter (pop-up, footer, checkout)</p>

      <h3>Séquence optimale en 4-5 emails</h3>

      <h4>Email 1 : Bienvenue immédiate (0-10 minutes)</h4>
      <p><strong>Objet :</strong> "Bienvenue chez [Marque] ! Voici votre cadeau 🎁"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Remerciement chaleureux</li>
        <li>Code promo de bienvenue (-10% ou -15€)</li>
        <li>Présentation rapide de la marque (1-2 lignes)</li>
        <li>CTA : "Découvrir la boutique"</li>
      </ul>

      <div class="example-box good">
        <div class="example-label">📧 Template Email 1</div>
        <p><strong>Objet :</strong> Bienvenue ! Voici -15% pour commencer</p>
        <p><strong>Corps :</strong></p>
        <p>Bonjour [Prénom],</p>
        <p>Bienvenue dans la communauté [Marque] ! 👋</p>
        <p>Pour vous remercier de votre inscription, voici un code exclusif :</p>
        <p><strong>BIENVENUE15</strong> (-15% sur votre première commande)</p>
        <p>[Bouton : Découvrir la boutique]</p>
        <p>Des questions ? Répondez à cet email, nous sommes là pour vous aider.</p>
        <p>À très vite !</p>
      </div>

      <h4>Email 2 : Histoire de la marque (J+2)</h4>
      <p><strong>Objet :</strong> "Pourquoi nous avons créé [Marque]"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Story de la marque (pourquoi, mission, valeurs)</li>
        <li>Photo des fondateurs (humaniser)</li>
        <li>Ce qui vous différencie</li>
        <li>CTA vers page "À propos"</li>
      </ul>

      <h4>Email 3 : Best-sellers (J+4)</h4>
      <p><strong>Objet :</strong> "Nos produits les plus aimés ⭐"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>3-4 produits best-sellers avec images</li>
        <li>Avis clients 5 étoiles</li>
        <li>Rappel code promo (expire bientôt)</li>
        <li>CTA produit direct</li>
      </ul>

      <h4>Email 4 : Preuve sociale (J+6)</h4>
      <p><strong>Objet :</strong> "Ce que disent nos 10 000+ clients"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Témoignages clients avec photos</li>
        <li>UGC (contenus générés par utilisateurs)</li>
        <li>Mentions presse / collaborations</li>
        <li>Réassurance (livraison, retours, garantie)</li>
      </ul>

      <h4>Email 5 : Dernière chance (J+8 - optionnel)</h4>
      <p><strong>Objet :</strong> "⏰ Votre code expire ce soir"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Urgence : le code promo expire dans 24h</li>
        <li>Rappel des best-sellers</li>
        <li>Dernier CTA avant expiration</li>
      </ul>

      <h3>KPIs Welcome Series</h3>
      <ul>
        <li><strong>Taux d&apos;ouverture :</strong> 50-70% (Email 1), 30-45% (Email 2-4)</li>
        <li><strong>Taux de clic :</strong> 15-25%</li>
        <li><strong>Taux de conversion :</strong> 8-15% (sur toute la séquence)</li>
        <li><strong>Revenus par destinataire :</strong> 2-5€</li>
      </ul>

      <div class="promo-box">
        <div class="promo-icon">📧</div>
        <div class="promo-content">
          <h4>Configuration Klaviyo complète</h4>
          <p>Nous configurons tous vos flows email avec templates design et optimisés pour maximiser vos ventes.</p>
          <a href="/contact" class="promo-link">Demander un devis →</a>
        </div>
      </div>

      <h2 id="abandoned-cart">2. Abandon de panier</h2>
      <p>Le flow le plus rentable. Récupère <strong>10-15% des paniers abandonnés</strong> = des milliers d&apos;euros de revenus mensuels.</p>

      <h3>Séquence optimale en 3 emails</h3>

      <h4>Email 1 : Rappel simple (1h après abandon)</h4>
      <p><strong>Objet :</strong> "Vous avez oublié quelque chose 👀"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Images des produits dans le panier</li>
        <li>Prix et quantités</li>
        <li>Bouton "Finaliser ma commande"</li>
        <li>Pas de promo (pas encore)</li>
      </ul>

      <h4>Email 2 : Réassurance (24h après)</h4>
      <p><strong>Objet :</strong> "Des questions sur votre commande ?"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Rappel du panier</li>
        <li>Réassurance : livraison gratuite, retour 30j, paiement sécurisé</li>
        <li>Avis clients sur les produits du panier</li>
        <li>FAQ rapide (livraison, tailles, retours)</li>
      </ul>

      <h4>Email 3 : Offre limitée (72h après)</h4>
      <p><strong>Objet :</strong> "🎁 -10% sur votre panier (expire ce soir)"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Code promo -10% ou livraison gratuite</li>
        <li>Urgence : expire dans 24h</li>
        <li>Stock limité (si pertinent)</li>
      </ul>

      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>Attention aux promos systématiques</h4>
          <p>Si vous offrez toujours -10% au 3ème email, les clients apprendront à abandonner pour obtenir la promo. Alternez : parfois promo, parfois livraison gratuite, parfois rien.</p>
        </div>
      </div>

      <h3>KPIs Abandon de panier</h3>
      <ul>
        <li><strong>Email 1 :</strong> 45-55% ouverture, 10-15% conversion</li>
        <li><strong>Email 2 :</strong> 35-45% ouverture, 5-10% conversion</li>
        <li><strong>Email 3 :</strong> 25-35% ouverture, 5-8% conversion</li>
        <li><strong>Taux de récupération total :</strong> 10-15%</li>
      </ul>

      <h2 id="post-purchase">3. Post-Purchase (Post-achat)</h2>
      <p>Le flow post-achat <strong>fidélise et augmente le CLV</strong> (Customer Lifetime Value). Objectif : transformer un acheteur en client régulier.</p>

      <h3>Séquence optimale en 4-5 emails</h3>

      <h4>Email 1 : Confirmation immédiate</h4>
      <p>Envoyé automatiquement par Shopify. Personnalisez-le pour ajouter :</p>
      <ul>
        <li>Remerciement chaleureux</li>
        <li>Récapitulatif commande</li>
        <li>Lien suivi colis</li>
        <li>Contact support visible</li>
      </ul>

      <h4>Email 2 : Expédition + conseils (J+1-2)</h4>
      <p><strong>Objet :</strong> "📦 Votre commande est en route !"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Tracking colis</li>
        <li>Date de livraison estimée</li>
        <li>Conseils d&apos;utilisation du produit</li>
        <li>Guides / tutoriels si pertinent</li>
      </ul>

      <h4>Email 3 : Demande d&apos;avis (J+7-10)</h4>
      <p><strong>Objet :</strong> "Que pensez-vous de votre [Produit] ?"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Demande d&apos;avis (Judge.me, Loox)</li>
        <li>Incentive : -10% sur prochain achat contre avis avec photo</li>
        <li>Lien direct vers formulaire avis</li>
      </ul>

      <h4>Email 4 : Cross-sell (J+21-30)</h4>
      <p><strong>Objet :</strong> "Parfait avec votre [Produit]"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Produits complémentaires basés sur l&apos;achat</li>
        <li>Bundles / packs</li>
        <li>Code promo fidélité</li>
      </ul>

      <h4>Email 5 : Réapprovisionnement (J+60-90 - si applicable)</h4>
      <p>Pour produits consommables (cosmétiques, alimentaire, suppléments) :</p>
      <p><strong>Objet :</strong> "Il est temps de renouveler votre [Produit]"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Rappel que le produit doit être bientôt épuisé</li>
        <li>Lien direct réachat en 1 clic</li>
        <li>Option abonnement (si disponible)</li>
      </ul>

      <h3>KPIs Post-Purchase</h3>
      <ul>
        <li><strong>Taux d&apos;avis collectés :</strong> 15-25%</li>
        <li><strong>Taux de réachat (90j) :</strong> 20-30%</li>
        <li><strong>Revenus cross-sell :</strong> 8-12% du CA email</li>
      </ul>

      <h2 id="win-back">4. Win-Back (Réactivation)</h2>
      <p>Réactiver les clients inactifs coûte <strong>5x moins cher</strong> que d&apos;acquérir un nouveau client. Le flow Win-Back cible les clients qui n&apos;ont pas acheté depuis 60-90 jours.</p>

      <h3>Séquence en 3 emails</h3>

      <h4>Email 1 : Vous nous manquez (J+60)</h4>
      <p><strong>Objet :</strong> "Vous nous manquez [Prénom] 💔"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Message personnel et émotionnel</li>
        <li>Nouveautés depuis leur dernier achat</li>
        <li>Best-sellers actuels</li>
        <li>Pas de promo (pas encore)</li>
      </ul>

      <h4>Email 2 : Offre exclusive (J+75)</h4>
      <p><strong>Objet :</strong> "🎁 Offre spéciale rien que pour vous"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Code promo exclusif -15% ou -20%</li>
        <li>Valable 7 jours</li>
        <li>Personnalisé selon historique d&apos;achat</li>
      </ul>

      <h4>Email 3 : Dernière chance (J+90)</h4>
      <p><strong>Objet :</strong> "On reste en contact ?"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Dernière tentative avant nettoyage de liste</li>
        <li>Option "Rester abonné" vs "Se désabonner"</li>
        <li>Feedback : pourquoi n&apos;achetez-vous plus ?</li>
      </ul>

      <h3>KPIs Win-Back</h3>
      <ul>
        <li><strong>Taux d&apos;ouverture :</strong> 20-30%</li>
        <li><strong>Taux de réactivation :</strong> 5-10%</li>
        <li><strong>Revenus par destinataire :</strong> 1-3€</li>
      </ul>

      <h2 id="browse-abandonment">5. Browse Abandonment (Consultation sans ajout panier)</h2>
      <p>Cible les visiteurs qui ont consulté des produits mais n&apos;ont pas ajouté au panier. Moins performant que l&apos;abandon de panier, mais génère quand même <strong>3-7% du CA email</strong>.</p>

      <h3>Séquence en 2 emails</h3>

      <h4>Email 1 : Rappel produits consultés (4h après)</h4>
      <p><strong>Objet :</strong> "Vous avez vu quelque chose qui vous plaît ?"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Images des 2-3 produits consultés</li>
        <li>Avis clients sur ces produits</li>
        <li>CTA "Voir le produit"</li>
      </ul>

      <h4>Email 2 : Produits similaires (24h après)</h4>
      <p><strong>Objet :</strong> "D&apos;autres clients ont aussi aimé..."</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Produits similaires ou complémentaires</li>
        <li>Preuve sociale (X personnes l&apos;ont acheté)</li>
        <li>Option chat en direct si questions</li>
      </ul>

      <h3>KPIs Browse Abandonment</h3>
      <ul>
        <li><strong>Taux d&apos;ouverture :</strong> 30-40%</li>
        <li><strong>Taux de conversion :</strong> 2-4%</li>
      </ul>

      <h2 id="anniversaire">6. Anniversaire &amp; Occasions spéciales</h2>
      <p>Les emails d&apos;anniversaire ont un <strong>taux d&apos;ouverture de 60-70%</strong> et un taux de conversion exceptionnel.</p>

      <h3>Comment collecter les anniversaires ?</h3>
      <ul>
        <li>Formulaire d&apos;inscription newsletter</li>
        <li>Page thank you post-achat</li>
        <li>Email de bienvenue (Email 2 ou 3)</li>
      </ul>

      <h3>Email anniversaire</h3>
      <p><strong>Objet :</strong> "🎉 Joyeux anniversaire [Prénom] ! Voici votre cadeau"</p>
      <p><strong>Contenu :</strong></p>
      <ul>
        <li>Message d&apos;anniversaire personnel</li>
        <li>Code promo spécial -20% ou -25€</li>
        <li>Valable 7 jours</li>
        <li>Recommandations produits personnalisées</li>
      </ul>

      <h2 id="vip">7. VIP &amp; Fidélité</h2>
      <p>Récompensez vos meilleurs clients (top 10-20% par CA) avec un traitement VIP.</p>

      <h3>Qui sont vos VIP ?</h3>
      <p>Segmentez dans Klaviyo :</p>
      <ul>
        <li>Clients avec 3+ commandes</li>
        <li>CLV &gt; 200€</li>
        <li>Achat dans les 90 derniers jours</li>
      </ul>

      <h3>Flow VIP</h3>
      <p><strong>Email 1 : Bienvenue VIP</strong></p>
      <p>"Félicitations, vous faites partie de nos clients VIP !"</p>
      <ul>
        <li>Avantages exclusifs (livraison gratuite, accès avant-première)</li>
        <li>Code promo permanent -15%</li>
        <li>Contact direct (email, WhatsApp)</li>
      </ul>

      <p><strong>Email récurrent : Accès anticipé nouveautés</strong></p>
      <p>Avant chaque lancement, prévenez vos VIP 24-48h avant le public.</p>

      <h2 id="bonnes-pratiques">Bonnes pratiques email marketing 2026</h2>

      <h3>1. Personnalisation au maximum</h3>
      <ul>
        <li>Utilisez le prénom (mais pas dans chaque phrase)</li>
        <li>Recommandations basées sur l&apos;historique d&apos;achat</li>
        <li>Segmentation par comportement</li>
      </ul>

      <h3>2. Mobile-first</h3>
      <p>70% des emails sont ouverts sur mobile. Votre design doit être responsive :</p>
      <ul>
        <li>Texte lisible sans zoom (min 14px)</li>
        <li>Boutons CTA larges (44px min)</li>
        <li>Une seule colonne</li>
      </ul>

      <h3>3. Objet d&apos;email</h3>
      <ul>
        <li>40-50 caractères max</li>
        <li>Emoji au début (mais pas trop)</li>
        <li>Créer la curiosité ou l&apos;urgence</li>
        <li>A/B tester systématiquement</li>
      </ul>

      <h3>4. Design épuré</h3>
      <ul>
        <li>Hiérarchie claire</li>
        <li>Un CTA principal par email</li>
        <li>Images optimisées (max 200 Ko)</li>
        <li>Texte alt sur toutes les images</li>
      </ul>

      <h3>5. Fréquence</h3>
      <p>Respectez les délais entre emails pour ne pas spammer :</p>
      <ul>
        <li>Welcome Series : 1 email tous les 2-3 jours</li>
        <li>Abandon panier : 1h → 24h → 72h</li>
        <li>Pas plus de 2 emails marketing/semaine par client</li>
      </ul>

      <h2 id="kpis">KPIs à suivre pour vos flows email</h2>

      <div class="checklist-section">
        <h4>Métriques clés par flow</h4>
        <ul class="checklist">
          <li><strong>Taux d&apos;ouverture :</strong> % d&apos;emails ouverts / envoyés</li>
          <li><strong>Taux de clic :</strong> % de clics / emails ouverts</li>
          <li><strong>Taux de conversion :</strong> % d&apos;achats / emails envoyés</li>
          <li><strong>Revenus par destinataire :</strong> CA généré / nombre de destinataires</li>
          <li><strong>Revenus total du flow :</strong> CA attribué au flow</li>
          <li><strong>Taux de désabonnement :</strong> % de désabos / emails envoyés</li>
        </ul>
      </div>

      <h3>Benchmarks par flow</h3>
      <table>
        <thead>
          <tr>
            <th>Flow</th>
            <th>Taux ouverture</th>
            <th>Taux clic</th>
            <th>Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Welcome Series</td>
            <td>50-70%</td>
            <td>15-25%</td>
            <td>8-15%</td>
          </tr>
          <tr>
            <td>Abandon panier</td>
            <td>40-50%</td>
            <td>20-30%</td>
            <td>10-15%</td>
          </tr>
          <tr>
            <td>Post-Purchase</td>
            <td>35-45%</td>
            <td>10-15%</td>
            <td>5-10%</td>
          </tr>
          <tr>
            <td>Win-Back</td>
            <td>20-30%</td>
            <td>10-15%</td>
            <td>5-10%</td>
          </tr>
          <tr>
            <td>Browse Abandonment</td>
            <td>30-40%</td>
            <td>12-18%</td>
            <td>2-4%</td>
          </tr>
        </tbody>
      </table>

      <h2 id="erreurs">Erreurs courantes à éviter</h2>

      <h3>1. Spammer avec trop d&apos;emails</h3>
      <p>Plus de 3 emails/semaine = taux de désabonnement élevé. Respectez vos clients.</p>

      <h3>2. Ne pas segmenter</h3>
      <p>Envoyer le même email à tout le monde = mauvais résultats. Segmentez par comportement, historique d&apos;achat, engagement.</p>

      <h3>3. Oublier de tester</h3>
      <p>Testez vos emails avant envoi (Litmus, Email on Acid) sur tous les clients email (Gmail, Outlook, Apple Mail).</p>

      <h3>4. Négliger le mobile</h3>
      <p>70% d&apos;ouvertures sur mobile. Si votre email n&apos;est pas responsive, vous perdez des ventes.</p>

      <h3>5. Ne pas analyser les performances</h3>
      <p>Consultez vos KPIs chaque semaine et optimisez les flows sous-performants.</p>

      <h2 id="conclusion">Plan de mise en place : Flows email en 4 semaines</h2>

      <h3>Semaine 1 : Fondations</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Installer Klaviyo (ou Omnisend)</li>
          <li>Connecter à Shopify</li>
          <li>Importer contacts existants</li>
          <li>Configurer les paramètres (expéditeur, domaine)</li>
        </ul>
      </div>

      <h3>Semaine 2 : Flows prioritaires</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Configurer Abandon de panier (3 emails)</li>
          <li>Configurer Welcome Series (4 emails)</li>
          <li>Designer les emails (templates)</li>
          <li>Tester et activer</li>
        </ul>
      </div>

      <h3>Semaine 3 : Flows secondaires</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Configurer Post-Purchase (4 emails)</li>
          <li>Configurer Browse Abandonment (2 emails)</li>
          <li>Tester et activer</li>
        </ul>
      </div>

      <h3>Semaine 4 : Optimisation</h3>
      <div class="checklist-section">
        <ul class="checklist">
          <li>Configurer Win-Back (3 emails)</li>
          <li>Configurer Anniversaire (1 email)</li>
          <li>Analyser les performances des flows actifs</li>
          <li>A/B tester les objets d&apos;emails</li>
          <li>Optimiser basé sur les données</li>
        </ul>
      </div>

      <h3>Objectif réaliste</h3>
      <ul>
        <li><strong>Mois 1 :</strong> 15-20% du CA via flows email</li>
        <li><strong>Mois 3 :</strong> 25-30% du CA via flows email</li>
        <li><strong>Mois 6 :</strong> 30-35% du CA via flows email</li>
      </ul>

      <p><strong>Conclusion :</strong> Les flows email sont le canal le plus rentable en e-commerce. En configurant correctement les 7 flows essentiels, vous pouvez générer <strong>25-35% de votre CA</strong> en pilote automatique. Commencez par l&apos;abandon de panier et la Welcome Series, puis ajoutez les autres progressivement.</p>

      <p>Besoin d&apos;aide pour configurer vos flows email ? Notre équipe d&apos;experts Klaviyo peut créer et optimiser toutes vos automatisations pour maximiser vos revenus email.</p>
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

  // Données structurées pour l'article
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Skyaksa',
      url: 'https://skyaksa.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Skyaksa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://skyaksa.fr/logo-skyaksa.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://skyaksa.fr/journal/${params.slug}`,
    },
    articleSection: article.category,
  }

  return (
    <>
      <StructuredData type="article" data={articleStructuredData} />
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
              title="Boutique Shopify e-commerce créée par Skyaksa"
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
              title="Agence Shopify Skyaksa - Optimisation e-commerce"
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
              title="Création boutique Shopify sur-mesure par Skyaksa"
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
              title="Performance e-commerce Shopify - Agence Skyaksa"
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
            Confiez-nous votre projet e-commerce et bénéficiez d&apos;un accompagnement expert pour créer une boutique performante.
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
                      Besoin d&apos;aide ?
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
              title="Équipe Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce"
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
            Discutons de votre projet et identifions ensemble les opportunités d&apos;amélioration.
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
