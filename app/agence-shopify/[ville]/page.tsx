import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getVilleBySlug, getAllVilles } from '@/data/villes'
import Breadcrumb from '@/components/Breadcrumb'

interface PageProps {
  params: {
    ville: string
  }
}

export async function generateStaticParams() {
  return getAllVilles().map((ville) => ({
    ville: ville.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const ville = getVilleBySlug(params.ville)
  
  if (!ville) {
    return {}
  }

  return {
    title: `Agence Shopify ${ville.name} | Skyaksa - Expert E-commerce`,
    description: `Agence Shopify spécialisée à ${ville.name}. Création de boutiques e-commerce sur-mesure, optimisation et accompagnement. Expert Shopify ${ville.name}.`,
    keywords: ville.keywords.join(', '),
    alternates: {
      canonical: `/agence-shopify/${ville.slug}`,
    },
    openGraph: {
      title: `Agence Shopify ${ville.name} | Skyaksa`,
      description: `Expert Shopify à ${ville.name}. Création de boutiques e-commerce performantes.`,
      url: `https://skyaksa.fr/agence-shopify/${ville.slug}`,
      siteName: 'Skyaksa',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Agence Shopify ${ville.name} | Skyaksa`,
      description: `Expert Shopify à ${ville.name}. Création de boutiques e-commerce.`,
    },
  }
}

export default function VillePage({ params }: PageProps) {
  const ville = getVilleBySlug(params.ville)

  if (!ville) {
    notFound()
  }

  // Données structurées LocalBusiness pour la ville
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Skyaksa - Agence Shopify ${ville.name}`,
    description: `Agence Shopify spécialisée à ${ville.name}`,
    url: `https://skyaksa.fr/agence-shopify/${ville.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ville.name,
      addressRegion: ville.region,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: ville.name,
    },
    serviceType: 'Création et optimisation de boutiques Shopify',
    provider: {
      '@type': 'Organization',
      name: 'Skyaksa',
      url: 'https://skyaksa.fr',
    },
  }

  // Autres villes pour le maillage interne
  const autresVilles = getAllVilles()
    .filter(v => v.slug !== ville.slug)
    .slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Accueil', href: '/' },
              { name: `Agence Shopify ${ville.name}`, href: `/agence-shopify/${ville.slug}` },
            ]}
          />
          
          <div className="text-center max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Agence Shopify <span className="text-skyaksa">{ville.name}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 animate-on-scroll delay-100">
              Expert Shopify pour les commerçants de {ville.name} et {ville.region}. Création, optimisation et accompagnement e-commerce.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap animate-on-scroll delay-200">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20 hover:shadow-skyaksa/30"
              >
                Discuter de mon projet →
              </Link>
              <Link
                href="/ce-que-lon-fait"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200"
              >
                Voir nos services
              </Link>
            </div>
            
            {ville.stats && (
              <div className="mt-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
                <svg className="w-5 h-5 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700 font-medium">{ville.stats}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Votre agence Shopify à {ville.name}
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {ville.specificContent.intro}
            </p>

            {/* Pourquoi nous choisir */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Pourquoi choisir Skyaksa à {ville.name} ?
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {ville.specificContent.why}
            </p>

            {/* Stats/Preuves sociales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
              <div className="bg-gradient-to-br from-skyaksa/5 to-skyaksa/10 rounded-2xl p-6 border border-skyaksa/20 text-center">
                <div className="text-4xl font-bold text-skyaksa mb-2">+40%</div>
                <div className="text-sm text-gray-700 font-medium">Trafic organique moyen</div>
              </div>
              <div className="bg-gradient-to-br from-shopify-fluo/10 to-shopify-fluo/20 rounded-2xl p-6 border border-shopify-fluo/20 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">+25%</div>
                <div className="text-sm text-gray-700 font-medium">Taux de conversion</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/5 to-gray-900/10 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">2-4 sem</div>
                <div className="text-sm text-gray-700 font-medium">Délai de mise en ligne</div>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Nos services Shopify à {ville.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-skyaksa transition-all group">
                <div className="w-12 h-12 bg-skyaksa/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-skyaksa/20 transition-colors">
                  <svg className="w-6 h-6 text-skyaksa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Création boutique Shopify</h3>
                <p className="text-gray-600 mb-4">
                  Design sur-mesure, développement technique, intégration produits. Une boutique Shopify performante qui reflète votre marque.
                </p>
                <Link href="/ce-que-lon-fait" className="text-skyaksa font-medium text-sm hover:underline">
                  En savoir plus →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-skyaksa transition-all group">
                <div className="w-12 h-12 bg-shopify-fluo/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-shopify-fluo/30 transition-colors">
                  <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimisation & Performance</h3>
                <p className="text-gray-600 mb-4">
                  Vitesse, SEO local {ville.name}, conversion. Améliorez vos ventes avec une boutique optimisée pour votre marché.
                </p>
                <Link href="/ce-que-lon-fait" className="text-skyaksa font-medium text-sm hover:underline">
                  En savoir plus →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-skyaksa transition-all group">
                <div className="w-12 h-12 bg-skyaksa/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-skyaksa/20 transition-colors">
                  <svg className="w-6 h-6 text-skyaksa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refonte site existant</h3>
                <p className="text-gray-600 mb-4">
                  Modernisez votre boutique Shopify avec un design actuel, une meilleure UX et des performances optimisées.
                </p>
                <Link href="/ce-que-lon-fait" className="text-skyaksa font-medium text-sm hover:underline">
                  En savoir plus →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-skyaksa transition-all group">
                <div className="w-12 h-12 bg-shopify-fluo/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-shopify-fluo/30 transition-colors">
                  <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accompagnement continu</h3>
                <p className="text-gray-600 mb-4">
                  Formation, maintenance, support. Devenez autonome sur votre boutique Shopify avec notre accompagnement expert.
                </p>
                <Link href="/contact" className="text-skyaksa font-medium text-sm hover:underline">
                  Nous contacter →
                </Link>
              </div>
            </div>

            {/* Expertise locale */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Notre expertise du marché {ville.name}
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {ville.specificContent.expertise}
            </p>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-shopify-fluo/10 to-shopify-fluo/5 rounded-3xl p-8 my-12 border border-shopify-fluo/20 not-prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Résultats clients à {ville.name}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {ville.specificContent.results}
              </p>
            </div>

            {/* Process */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Comment ça se passe ?
            </h2>

            <div className="space-y-6 not-prose">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-skyaksa text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Échange découverte</h4>
                  <p className="text-gray-600">
                    Discutons de votre projet, vos objectifs et vos besoins spécifiques. Rendez-vous visio ou sur {ville.name} si vous préférez.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-skyaksa text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Audit & Stratégie</h4>
                  <p className="text-gray-600">
                    Analyse de votre marché, de vos concurrents et de vos opportunités. Proposition d&apos;une stratégie e-commerce sur-mesure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-skyaksa text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Développement</h4>
                  <p className="text-gray-600">
                    Création de votre boutique Shopify avec des points réguliers. Vous suivez l&apos;avancement en temps réel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-skyaksa text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Lancement & Suivi</h4>
                  <p className="text-gray-600">
                    Mise en ligne, formation et accompagnement pour maximiser vos ventes dès le premier jour.
                  </p>
                </div>
              </div>
            </div>

            {/* Autres villes */}
            {autresVilles.length > 0 && (
              <div className="bg-gray-50 rounded-3xl p-8 mt-16 border border-gray-200 not-prose">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Agence Shopify dans d&apos;autres villes
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous accompagnons également les commerçants dans d&apos;autres grandes villes de France :
                </p>
                <div className="flex flex-wrap gap-3">
                  {autresVilles.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/agence-shopify/${v.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-skyaksa hover:text-skyaksa transition-colors text-sm font-medium"
                    >
                      {v.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-skyaksa/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-shopify/20 rounded-full blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !leading-[1.3]">
              Prêt à lancer votre boutique Shopify ?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Discutons de votre projet à {ville.name}. Premier échange gratuit, audit offert, réponse sous 24h.
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20 hover:shadow-skyaksa/30"
              >
                Parler de mon projet →
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                Lire nos guides Shopify
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Réponse sous 24h
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Audit gratuit
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sans engagement
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
