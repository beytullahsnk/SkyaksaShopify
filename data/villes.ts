export interface VilleData {
  slug: string
  name: string
  region: string
  description: string
  keywords: string[]
  stats?: string
  specificContent: {
    intro: string
    why: string
    expertise: string
    results: string
  }
}

export const villes: VilleData[] = [
  {
    slug: 'paris',
    name: 'Paris',
    region: 'Île-de-France',
    description: 'Capitale économique de la France, Paris concentre une forte activité e-commerce avec de nombreuses marques et boutiques en ligne.',
    keywords: ['agence Shopify Paris', 'expert Shopify Paris', 'création boutique Shopify Paris', 'développeur Shopify Paris'],
    stats: 'Plus de 2 millions d\'habitants et un marché e-commerce représentant 30% du CA national',
    specificContent: {
      intro: 'Paris est le cœur du e-commerce français. Avec plus de 12 millions d\'habitants dans l\'agglomération, la capitale offre un marché e-commerce exceptionnel. En tant qu\'agence Shopify spécialisée à Paris, nous accompagnons les commerçants parisiens dans leur transformation digitale.',
      why: 'Le marché parisien est ultra-compétitif. Pour vous démarquer, vous avez besoin d\'une boutique Shopify performante, optimisée pour le référencement local et la conversion. Notre équipe d\'experts Shopify à Paris maîtrise les spécificités du marché parisien : consommateurs exigeants, forte concurrence, tendances mode et lifestyle.',
      expertise: 'Nous intervenons auprès de startups parisiennes, de marques de luxe et de commerces de quartier. Notre expertise couvre la création complète de boutiques Shopify, l\'optimisation SEO locale (référencement "boutique Paris", "livraison Paris"), l\'intégration de solutions de livraison rapide (Chronopost, Colissimo), et le développement de fonctionnalités sur-mesure.',
      results: 'Nos clients parisiens constatent en moyenne une augmentation de 40% de leur trafic organique local et 25% d\'amélioration du taux de conversion après optimisation de leur boutique Shopify.',
    },
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    description: 'Deuxième ville de France, Lyon est un hub e-commerce dynamique avec de nombreuses entreprises innovantes dans le commerce en ligne.',
    keywords: ['agence Shopify Lyon', 'expert Shopify Lyon', 'création boutique Shopify Lyon', 'développeur Shopify Lyon'],
    stats: 'Plus de 500 000 habitants, capitale de la gastronomie et hub tech en forte croissance',
    specificContent: {
      intro: 'Lyon s\'impose comme le deuxième pôle e-commerce de France. Avec son écosystème de startups dynamique et son positionnement de "French Tech", la ville attire de nombreux entrepreneurs qui se lancent dans la vente en ligne. Notre agence Shopify à Lyon accompagne cette transformation digitale.',
      why: 'Le marché lyonnais combine tradition et innovation. Les consommateurs lyonnais sont exigeants, notamment dans les secteurs de la gastronomie, de la mode et du lifestyle. Une boutique Shopify performante est essentielle pour capter cette clientèle. Notre expertise locale nous permet d\'optimiser votre site pour les recherches "Lyon", "Rhône-Alpes" et les requêtes géolocalisées.',
      expertise: 'Nous travaillons avec des commerçants lyonnais dans divers secteurs : gastronomie (épicerie fine, vins), mode, décoration, cosmétiques. Notre force : comprendre le marché local, optimiser le SEO géolocalisé, intégrer des solutions de livraison adaptées (click & collect, livraison express Lyon), et créer des expériences d\'achat qui convertissent.',
      results: 'Les boutiques Shopify que nous créons à Lyon génèrent en moyenne 35% de trafic organique supplémentaire grâce à notre optimisation SEO locale et voient leur panier moyen augmenter de 20%.',
    },
  },
  {
    slug: 'marseille',
    name: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    description: 'Porte d\'entrée de la Méditerranée, Marseille développe un écosystème e-commerce en pleine croissance.',
    keywords: ['agence Shopify Marseille', 'expert Shopify Marseille', 'création boutique Shopify Marseille', 'développeur Shopify Marseille'],
    stats: 'Troisième ville de France, 870 000 habitants, marché méditerranéen en expansion',
    specificContent: {
      intro: 'Marseille connaît une croissance e-commerce exceptionnelle. La cité phocéenne attire de plus en plus d\'entrepreneurs qui lancent leur boutique en ligne. En tant qu\'agence Shopify spécialisée à Marseille, nous vous aidons à transformer votre activité commerciale en succès digital.',
      why: 'Le marché marseillais a ses spécificités : produits méditerranéens, mode estivale, tourisme, artisanat local. Pour réussir en e-commerce à Marseille, vous devez combiner authenticité locale et professionnalisme digital. Notre agence maîtrise ces codes et optimise votre boutique Shopify pour capter le trafic local "Marseille", "Bouches-du-Rhône", "PACA".',
      expertise: 'Nous accompagnons des commerçants marseillais dans les secteurs de l\'alimentaire (savons, huile d\'olive, produits du terroir), de la mode (maillots de bain, vêtements d\'été), et du lifestyle méditerranéen. Nos services incluent la création sur-mesure, l\'optimisation SEO locale, l\'intégration de paiements adaptés (3x sans frais populaire dans le Sud), et le tracking de performance.',
      results: 'Nos clients marseillais constatent une hausse moyenne de 45% du trafic depuis les recherches locales et une amélioration de 30% du taux de conversion grâce à une UX adaptée aux habitudes d\'achat méditerranéennes.',
    },
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    description: 'Ville dynamique et attractive, Bordeaux compte de nombreuses entreprises qui se lancent dans le e-commerce.',
    keywords: ['agence Shopify Bordeaux', 'expert Shopify Bordeaux', 'création boutique Shopify Bordeaux', 'développeur Shopify Bordeaux'],
    stats: '250 000 habitants, capitale mondiale du vin, ville la plus attractive de France',
    specificContent: {
      intro: 'Bordeaux s\'affirme comme un hub e-commerce incontournable du Sud-Ouest. Entre tradition viticole et modernité digitale, la ville attire entrepreneurs et marques qui souhaitent développer leur activité en ligne. Notre agence Shopify à Bordeaux combine expertise technique et connaissance du marché local.',
      why: 'Le e-commerce bordelais est marqué par le vin, la gastronomie et l\'art de vivre. Mais au-delà de ces secteurs phares, Bordeaux voit émerger de nombreuses boutiques en ligne dans la mode, la décoration et le bien-être. Notre force : créer des boutiques Shopify qui reflètent l\'élégance bordelaise tout en assurant des performances techniques optimales.',
      expertise: 'Nous travaillons avec des vignerons, cavistes, épiceries fines, marques de mode et concept stores bordelais. Notre expertise couvre la vente en ligne de produits réglementés (alcool), l\'optimisation pour le référencement "Bordeaux" et "Gironde", l\'intégration de solutions de livraison spécialisées, et la création d\'expériences premium qui convertissent.',
      results: 'Les boutiques Shopify que nous développons à Bordeaux génèrent en moyenne 40% de ventes en ligne supplémentaires la première année et voient leur visibilité Google locale multiplié par 3.',
    },
  },
  {
    slug: 'toulouse',
    name: 'Toulouse',
    region: 'Occitanie',
    description: 'Ville étudiante et technologique, Toulouse offre un marché e-commerce en forte croissance.',
    keywords: ['agence Shopify Toulouse', 'expert Shopify Toulouse', 'création boutique Shopify Toulouse', 'développeur Shopify Toulouse'],
    stats: '480 000 habitants, 4ème ville de France, capitale aéronautique et tech',
    specificContent: {
      intro: 'Toulouse combine innovation technologique et dynamisme entrepreneurial. La Ville Rose attire de nombreuses startups e-commerce et commerçants qui veulent digitaliser leur activité. En tant qu\'agence Shopify spécialisée à Toulouse, nous accompagnons cette transformation avec des solutions techniques de pointe.',
      why: 'Le marché toulousain est jeune, connecté et exigeant. Avec une forte population étudiante et de jeunes actifs, Toulouse offre un terrain idéal pour le e-commerce. Mais la concurrence est rude. Votre boutique Shopify doit être rapide, mobile-first, et optimisée pour la conversion. Notre expertise locale nous permet de créer des sites qui résonnent avec l\'audience toulousaine.',
      expertise: 'Nous travaillons avec des entrepreneurs toulousains dans la mode, la tech, le lifestyle et l\'alimentation. Nos services incluent la création de boutiques Shopify modernes, l\'optimisation Core Web Vitals (vitesse cruciale), le SEO local "Toulouse" et "Haute-Garonne", l\'intégration d\'apps de conversion (avis, urgence), et le tracking GA4 complet.',
      results: 'Nos clients toulousains constatent une amélioration moyenne de 50% de leur score PageSpeed, 35% de trafic organique supplémentaire, et un taux de conversion mobile en hausse de 28%.',
    },
  },
  {
    slug: 'nantes',
    name: 'Nantes',
    region: 'Pays de la Loire',
    description: 'Hub tech et e-commerce de l\'Ouest, Nantes concentre de nombreuses startups e-commerce.',
    keywords: ['agence Shopify Nantes', 'expert Shopify Nantes', 'création boutique Shopify Nantes', 'développeur Shopify Nantes'],
    stats: '320 000 habitants, ville la plus agréable de France, écosystème startup dynamique',
    specificContent: {
      intro: 'Nantes s\'impose comme LA ville tech de l\'Ouest. Avec son label "French Tech", Nantes attire de nombreuses startups e-commerce et des marques qui veulent se digitaliser. Notre agence Shopify à Nantes vous accompagne avec une expertise locale et une maîtrise technique pointue.',
      why: 'Le marché nantais est jeune, innovant et en forte croissance. Les consommateurs nantais sont sensibles à l\'innovation, au local et au made in France. Pour réussir en e-commerce à Nantes, votre boutique Shopify doit être à la fois performante techniquement et alignée avec les valeurs locales. Notre agence intègre ces dimensions dans chaque projet.',
      expertise: 'Nous accompagnons des startups nantaises, des marques locales et des commerçants de quartier. Notre expertise couvre la création rapide de MVP e-commerce (pour startups), l\'optimisation SEO "Nantes" et "Loire-Atlantique", l\'intégration de solutions de paiement modernes (Apple Pay, Google Pay), et la mise en place de stratégies omnicanales (online + boutique physique).',
      results: 'Les boutiques Shopify que nous lançons à Nantes atteignent la rentabilité en moyenne 3 mois plus tôt grâce à notre approche lean, et génèrent 45% de trafic local supplémentaire grâce au SEO géolocalisé.',
    },
  },
  {
    slug: 'lille',
    name: 'Lille',
    region: 'Hauts-de-France',
    description: 'Métropole du Nord, Lille développe un écosystème e-commerce dynamique.',
    keywords: ['agence Shopify Lille', 'expert Shopify Lille', 'création boutique Shopify Lille', 'développeur Shopify Lille'],
    stats: '230 000 habitants, métropole européenne, proximité Belgique et UK',
    specificContent: {
      intro: 'Lille bénéficie d\'une position stratégique au cœur de l\'Europe. La métropole lilloise attire de nombreux e-commerçants qui veulent vendre en France, Belgique et au-delà. En tant qu\'agence Shopify spécialisée à Lille, nous vous aidons à développer votre boutique en ligne avec une vision transfrontalière.',
      why: 'Le marché lillois a des spécificités uniques : proximité avec la Belgique, forte culture du commerce, consommateurs habitués aux achats en ligne. Pour réussir, votre boutique Shopify doit gérer le multi-devises (€ belge), proposer des livraisons vers la Belgique, et être optimisée pour les recherches "Lille", "Nord", "Hauts-de-France". Notre expertise locale intègre tous ces éléments.',
      expertise: 'Nous travaillons avec des commerçants lillois dans la mode, la brasserie artisanale, la déco et l\'alimentaire. Nos services incluent la création de boutiques Shopify multilingues (FR/NL/EN), l\'optimisation SEO transfrontalier, l\'intégration de solutions logistiques adaptées (Mondial Relay très populaire dans le Nord), et la mise en place de tracking e-commerce avancé.',
      results: 'Nos clients lillois constatent une augmentation moyenne de 60% de leur portée géographique (ventes en Belgique), 38% de trafic organique supplémentaire, et une amélioration de 25% du taux de fidélisation client.',
    },
  },
  {
    slug: 'nice',
    name: 'Nice',
    region: "Provence-Alpes-Côte d'Azur",
    description: 'Côte d\'Azur, Nice offre un marché e-commerce avec un fort pouvoir d\'achat.',
    keywords: ['agence Shopify Nice', 'expert Shopify Nice', 'création boutique Shopify Nice', 'développeur Shopify Nice'],
    stats: '340 000 habitants, 5ème ville de France, destination touristique premium',
    specificContent: {
      intro: 'Nice combine luxe, tourisme et innovation. La Côte d\'Azur attire une clientèle aisée et internationale. En tant qu\'agence Shopify spécialisée à Nice, nous créons des boutiques en ligne premium qui reflètent l\'élégance et le standing de la French Riviera.',
      why: 'Le marché niçois est caractérisé par un fort pouvoir d\'achat, une clientèle internationale (touristes, expatriés), et des produits haut de gamme. Votre boutique Shopify doit véhiculer prestige et qualité tout en offrant une expérience d\'achat fluide multilingue. Notre agence maîtrise ces codes du luxe et de l\'hospitalité azuréenne.',
      expertise: 'Nous accompagnons des marques de luxe, des créateurs locaux, des parfumeurs et des boutiques lifestyle. Notre expertise couvre la création de boutiques premium, le SEO multilingue (FR/EN/IT), l\'intégration de paiements internationaux, la mise en place de programmes VIP, et l\'optimisation pour une clientèle internationale exigeante.',
      results: 'Les boutiques Shopify que nous créons à Nice affichent un panier moyen supérieur de 45% à la moyenne nationale, génèrent 55% de leur trafic depuis l\'international, et maintiennent un taux de satisfaction client de 95%+.',
    },
  },
  {
    slug: 'orleans',
    name: 'Orléans',
    region: 'Centre-Val de Loire',
    description: 'Capitale de la région Centre-Val de Loire, Orléans développe un écosystème e-commerce en croissance.',
    keywords: ['agence Shopify Orléans', 'expert Shopify Orléans', 'création boutique Shopify Orléans', 'développeur Shopify Orléans'],
    stats: '116 000 habitants, proximité Paris, marché Centre-Val de Loire en expansion',
    specificContent: {
      intro: 'Orléans bénéficie d\'une position stratégique à 1h de Paris. La ville attire de nombreux commerçants qui souhaitent développer leur activité en ligne tout en restant proches de la capitale. En tant qu\'agence Shopify spécialisée à Orléans, nous accompagnons cette transformation digitale avec une expertise locale.',
      why: 'Le marché orléanais combine proximité parisienne et authenticité ligérienne. Les consommateurs recherchent qualité et produits locaux. Pour réussir en e-commerce à Orléans, votre boutique Shopify doit être optimisée pour le référencement local "Orléans", "Loiret", "Centre-Val de Loire" et capter le trafic de toute la région.',
      expertise: 'Nous travaillons avec des artisans, producteurs locaux, boutiques de mode et concept stores orléanais. Notre expertise couvre la création de boutiques Shopify, l\'optimisation SEO régional, l\'intégration de solutions de livraison locale (click & collect, livraison express Orléans), et le développement de fonctionnalités e-commerce adaptées aux PME.',
      results: 'Nos clients orléanais constatent une augmentation moyenne de 50% de visibilité sur les recherches locales, 30% de croissance du CA en ligne la première année, et un taux de fidélisation en hausse de 35%.',
    },
  },
  {
    slug: 'tours',
    name: 'Tours',
    region: 'Centre-Val de Loire',
    description: 'Ville historique et dynamique, Tours attire de nombreux entrepreneurs qui se lancent dans le e-commerce.',
    keywords: ['agence Shopify Tours', 'expert Shopify Tours', 'création boutique Shopify Tours', 'développeur Shopify Tours'],
    stats: '136 000 habitants, capitale de Touraine, patrimoine UNESCO',
    specificContent: {
      intro: 'Tours combine patrimoine historique et dynamisme économique. La capitale de Touraine attire une clientèle de qualité et des entrepreneurs innovants. En tant qu\'agence Shopify spécialisée à Tours, nous créons des boutiques en ligne qui allient tradition et modernité digitale.',
      why: 'Le marché tourangeau est marqué par les vins de Loire, la gastronomie et l\'art de vivre. Les consommateurs sont sensibles à l\'authenticité et aux produits locaux. Votre boutique Shopify doit refléter ces valeurs tout en offrant une expérience d\'achat moderne. Notre expertise locale nous permet d\'optimiser votre site pour les recherches "Tours", "Indre-et-Loire", "Val de Loire".',
      expertise: 'Nous accompagnons des vignerons, restaurateurs, artisans d\'art et boutiques lifestyle tourangelles. Nos services incluent la création de boutiques Shopify élégantes, l\'optimisation SEO pour le tourisme (forte affluence de visiteurs), l\'intégration de vente en ligne de vins (réglementation), et la mise en place de stratégies omnicanales.',
      results: 'Les boutiques Shopify que nous développons à Tours génèrent en moyenne 40% de ventes supplémentaires grâce au e-commerce, 45% de leur trafic depuis les recherches touristiques, et voient leur notoriété locale multipliée par 3.',
    },
  },
  {
    slug: 'blois',
    name: 'Blois',
    region: 'Centre-Val de Loire',
    description: 'Ville royale au cœur des châteaux de la Loire, Blois développe son activité e-commerce.',
    keywords: ['agence Shopify Blois', 'expert Shopify Blois', 'création boutique Shopify Blois', 'développeur Shopify Blois'],
    stats: '46 000 habitants, cœur des châteaux de la Loire, destination touristique',
    specificContent: {
      intro: 'Blois, ville royale au patrimoine exceptionnel, attire de nombreux touristes et amateurs de produits locaux. Les commerçants blésois ont compris l\'importance du e-commerce pour développer leur activité. En tant qu\'agence Shopify spécialisée à Blois, nous aidons les commerces locaux à rayonner au-delà de leur territoire.',
      why: 'Le marché blésois est fortement lié au tourisme des châteaux de la Loire. Les produits artisanaux, vins, produits du terroir et souvenirs ont un fort potentiel en ligne. Votre boutique Shopify doit capter à la fois les visiteurs de passage et les amateurs de produits ligériens partout en France. Notre expertise SEO "Blois", "Loir-et-Cher", "Châteaux de la Loire" maximise votre visibilité.',
      expertise: 'Nous travaillons avec des artisans d\'art, producteurs locaux, cavistes et boutiques de souvenirs. Notre expertise couvre la création de boutiques Shopify optimisées pour le tourisme, le SEO géolocalisé et saisonnier, l\'intégration de systèmes de réservation (visites, dégustations), et la mise en place de stratégies multilingues (anglais, allemand).',
      results: 'Nos clients blésois constatent une extension de leur saison commerciale (ventes toute l\'année vs. saison touristique), 60% de CA supplémentaire grâce au e-commerce, et une clientèle nationale voire internationale.',
    },
  },
]

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villes.find(v => v.slug === slug)
}

export function getAllVilles(): VilleData[] {
  return villes
}

