'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = [
    { name: 'Tous', slug: 'tous' },
    { name: 'Shopify', slug: 'shopify' },
    { name: 'Conversion', slug: 'conversion' },
    { name: 'Data & Tracking', slug: 'data-tracking' },
    { name: 'Marketing', slug: 'marketing' },
    { name: 'SEO', slug: 'seo' },
  ]

  const articles = [
    {
      title: 'Guide SEO Shopify : optimiser votre boutique pour Google',
      excerpt: 'Structure technique, optimisation des fiches produits, Core Web Vitals : tout ce qu\'il faut savoir pour un référencement efficace sur Shopify.',
      category: 'SEO',
      date: '15 Déc 2024',
      slug: 'guide-seo-shopify',
    },
    {
      title: 'Tracking e-commerce : GA4, pixels et events',
      excerpt: 'Mettre en place un tracking solide pour mesurer les performances de votre boutique et prendre les bonnes décisions.',
      category: 'Data & Tracking',
      date: '12 Déc 2024',
      slug: 'tracking-ecommerce-ga4',
    },
    {
      title: 'Optimiser le taux de conversion de votre boutique',
      excerpt: 'Parcours utilisateur, tunnel d\'achat, fiches produits : les leviers concrets pour transformer plus de visiteurs en clients.',
      category: 'Conversion',
      date: '10 Déc 2024',
      slug: 'optimiser-conversion-shopify',
    },
    {
      title: 'Klaviyo vs Mailchimp : quel outil pour votre boutique Shopify ?',
      excerpt: 'Comparatif détaillé des deux solutions d\'email marketing les plus populaires pour l\'e-commerce.',
      category: 'Marketing',
      date: '8 Déc 2024',
      slug: 'klaviyo-vs-mailchimp',
    },
    {
      title: 'Les meilleures apps Shopify en 2024',
      excerpt: 'Sélection des applications indispensables pour booster votre boutique : conversion, marketing, logistique.',
      category: 'Shopify',
      date: '5 Déc 2024',
      slug: 'meilleures-apps-shopify-2024',
    },
    {
      title: 'Configurer Google Analytics 4 sur Shopify',
      excerpt: 'Guide pas à pas pour installer et configurer GA4 correctement sur votre boutique Shopify.',
      category: 'Data & Tracking',
      date: '3 Déc 2024',
      slug: 'configurer-ga4-shopify',
    },
    {
      title: 'Réduire l\'abandon de panier : stratégies efficaces',
      excerpt: 'Techniques éprouvées pour récupérer les paniers abandonnés et augmenter vos ventes.',
      category: 'Conversion',
      date: '1 Déc 2024',
      slug: 'reduire-abandon-panier',
    },
    {
      title: 'Optimiser les Core Web Vitals sur Shopify',
      excerpt: 'Améliorer la performance de votre boutique pour un meilleur référencement et une meilleure expérience utilisateur.',
      category: 'SEO',
      date: '28 Nov 2024',
      slug: 'core-web-vitals-shopify',
    },
    {
      title: 'Créer des séquences email qui convertissent',
      excerpt: 'Automatisations email essentielles pour accompagner vos clients et maximiser la valeur vie client.',
      category: 'Marketing',
      date: '25 Nov 2024',
      slug: 'sequences-email-ecommerce',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Journal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-on-scroll delay-100">
              Analyses, guides et retours d&apos;expérience pour faire performer votre boutique Shopify.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter(article => activeCategory === 'Tous' || article.category === activeCategory)
              .map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-skyaksa transition-colors group block"
              >
                <div className="mb-3">
                  <span className="text-xs font-semibold text-shopify-fluo bg-gray-900 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-skyaksa transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="text-xs font-medium text-skyaksa">Lire →</span>
                </div>
              </Link>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 !leading-[1.3]">
              Vous voulez qu&apos;on regarde{' '}
              <span className="highlight-green"><span>votre boutique</span></span> ?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Discutons de votre projet et identifions ensemble les opportunités d&apos;amélioration pour votre e-commerce.
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20 hover:shadow-skyaksa/30"
              >
                Parler de mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

