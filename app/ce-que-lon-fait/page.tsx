import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Services Agence Shopify | Design, Développement & SEO',
  description: 'Agence Shopify experte : création boutique sur-mesure, design UX/UI, développement Shopify, optimisation SEO et accompagnement e-commerce complet.',
  alternates: {
    canonical: '/ce-que-lon-fait',
  },
  openGraph: {
    title: 'Services Agence Shopify | Design, Développement & SEO',
    description: 'Agence Shopify experte : création boutique sur-mesure, design UX/UI, développement Shopify, optimisation SEO.',
    url: 'https://skyaksa.fr/ce-que-lon-fait',
    siteName: 'Skyaksa',
    images: [
      {
        url: '/skyaksa-agence-shopify-ecommerce-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Services Skyaksa - Agence Shopify',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Agence Shopify | Design, Développement & SEO',
    description: 'Agence Shopify experte : création boutique sur-mesure, design UX/UI, développement Shopify.',
  },
}

export default function CeQueLonFait() {
  const expertises = [
    {
      title: 'Design UX / UI',
      items: [
        'Direction Artistique',
        'Research & UX Analytics',
        'Animations et interactions',
        'Parcours utilisateur',
        'Conception d\'interface',
      ],
    },
    {
      title: 'Développement web',
      items: [
        'Création de boutiques Shopify',
        'Migration vers Shopify',
        'Accessibilité et web performance',
        'Connecteur Shopify (ERP, WMS...)',
        'App Shopify personnalisées',
      ],
    },
    {
      title: 'Optimisation & Marketing',
      items: [
        'Optimisation (CRO)',
        'AB Testing et personnalisation',
        'Email Marketing Klaviyo & SMS',
        'Tracking & Data Analytics',
      ],
    },
    {
      title: 'Conseil & Stratégie',
      items: [
        'Audit site e-commerce',
        'Conception d\'interface',
        'Commerce unifié',
        'Internationalisation',
      ],
    },
    {
      title: 'Accompagnement',
      items: [
        'Suivi post-lancement',
        'Évolutions et mises à jour',
        'Conseil stratégique',
        'Support continu',
      ],
    },
  ]

  const seoDetails = [
    {
      title: 'Optimisation technique',
      description: 'Structure SEO optimale, balisage schema.org, optimisation des URLs et sitemap, performance Core Web Vitals.',
    },
    {
      title: 'Contenu optimisé',
      description: 'Optimisation des fiches produits, rédaction de contenus SEO-friendly, structure de contenu optimisée, stratégie de mots-clés.',
    },
    {
      title: 'Internationalisation',
      description: 'Configuration multi-langues, optimisation SEO par marché, gestion des devises, expansion internationale.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { name: 'Accueil', href: '/' },
                { name: 'Ce que l\'on fait', href: '/ce-que-lon-fait' },
              ]}
            />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Services Agence Shopify
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-on-scroll delay-100">
              Expertise Shopify complète : création, développement et optimisation e-commerce
            </p>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {expertises.map((expertise) => (
              <div
                key={expertise.title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-skyaksa transition-colors animate-on-scroll"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {expertise.title}
                </h2>
                <ul className="space-y-3">
                  {expertise.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-shopify-fluo flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Shopify - Détaillé */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
              <span className="highlight-green"><span>SEO Shopify</span></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-100">
              Optimisation complète de votre boutique pour les moteurs de recherche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {seoDetails.map((detail, index) => (
              <div
                key={detail.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-skyaksa transition-all hover:shadow-xl animate-on-scroll"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-skyaksa text-white flex items-center justify-center text-xl font-bold mb-6 shadow-glow-purple">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {detail.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-skyaksa/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-shopify/20 rounded-full blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 !leading-[1.3] animate-on-scroll">
              Parlons de votre{' '}
              <span className="highlight-green"><span>projet</span></span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10 animate-on-scroll delay-100">
              Chaque projet est unique. Discutons de vos besoins et construisons ensemble une boutique Shopify qui vous ressemble.
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap animate-on-scroll delay-200">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20 hover:shadow-skyaksa/30"
              >
                Démarrer mon projet
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

