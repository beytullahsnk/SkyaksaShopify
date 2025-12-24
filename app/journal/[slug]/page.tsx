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
    title: 'Tracking E-commerce GA4 Shopify : Guide Complet 2024',
    excerpt: 'Guide complet pour configurer GA4, Google Tag Manager, Meta Pixel et TikTok Pixel sur votre boutique Shopify. Événements e-commerce, debugging et bonnes pratiques.',
    category: 'Data & Tracking',
    date: '12 Décembre 2024',
    readTime: '18 min',
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
    date: '10 Décembre 2024',
    readTime: '22 min',
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
      <section className="pb-8 lg:pb-12 bg-gray-50 relative overflow-hidden">
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
