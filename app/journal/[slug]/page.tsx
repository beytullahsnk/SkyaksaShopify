import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { articlesData } from '@/data/articles'
import StructuredData from '@/components/StructuredData'
import ProgressBar from '@/components/journal/ProgressBar'
import TableOfContents from '@/components/journal/TableOfContents'
import NewsletterForm from '@/components/journal/NewsletterForm'

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articlesData[params.slug]

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['Skyaksa'],
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug]

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
      <ProgressBar />

      {/* CTA Banner - Shopify Style */}
      <section className="pt-24 lg:pt-28 pb-8 lg:pb-12 bg-gray-50 relative overflow-hidden">
        {/* Decorative Images - Left Side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 ml-4">
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
              <TableOfContents items={article.tableOfContents} />
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

      {/* Newsletter */}
      <NewsletterForm />

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
