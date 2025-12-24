import Script from 'next/script'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'localBusiness' | 'faq'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Skyaksa',
          description: 'Agence Shopify spécialisée en création de boutiques e-commerce sur-mesure et optimisation performance',
          url: 'https://skyaksa.fr',
          logo: 'https://skyaksa.fr/logo-skyaksa.png',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Service client',
            email: 'skyaksa.agency@gmail.com',
            availableLanguage: ['French'],
          },
          sameAs: [
            'https://www.linkedin.com/company/skyaksa/',
          ],
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Skyaksa',
          url: 'https://skyaksa.fr',
          description: 'Agence Shopify spécialisée en création de boutiques e-commerce sur-mesure et optimisation performance',
          publisher: {
            '@type': 'Organization',
            name: 'Skyaksa',
          },
        }

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Création et optimisation de boutiques Shopify',
          provider: {
            '@type': 'Organization',
            name: 'Skyaksa',
            url: 'https://skyaksa.fr',
          },
          areaServed: {
            '@type': 'Country',
            name: 'France',
          },
          description: 'Création de boutiques Shopify sur-mesure, optimisation de conversion, SEO, développement et accompagnement e-commerce',
        }

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Skyaksa',
          description: 'Agence Shopify spécialisée en création de boutiques e-commerce',
          url: 'https://skyaksa.fr',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR',
          },
        }

      case 'article':
        return data || {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '',
          description: '',
          datePublished: '',
          dateModified: '',
          author: {
            '@type': 'Organization',
            name: 'Skyaksa',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Skyaksa',
            logo: {
              '@type': 'ImageObject',
              url: 'https://skyaksa.fr/logo-skyaksa.png',
            },
          },
        }

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Qu\'est-ce qu\'une agence Shopify ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Une agence Shopify est une entreprise spécialisée dans la création, le développement et l\'optimisation de boutiques en ligne sur la plateforme Shopify. Skyaksa accompagne les marques de A à Z : design, développement, SEO et stratégie e-commerce.',
              },
            },
            {
              '@type': 'Question',
              name: 'Combien coûte la création d\'une boutique Shopify ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le prix d\'une boutique Shopify varie selon la complexité du projet. Chez Skyaksa, chaque projet est analysé individuellement pour proposer un devis adapté à vos besoins : design sur-mesure, fonctionnalités spécifiques, intégrations...',
              },
            },
            {
              '@type': 'Question',
              name: 'Pourquoi choisir une agence Shopify plutôt qu\'un freelance ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Une agence Shopify offre une expertise complète (design, développement, SEO, marketing) avec un suivi de projet structuré. Skyaksa combine expertise technique et vision stratégique pour des boutiques performantes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quel est le délai de création d\'une boutique Shopify ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le délai dépend de la complexité du projet. Une boutique Shopify sur-mesure prend généralement entre 4 et 12 semaines. Skyaksa définit un planning précis dès le début du projet.',
              },
            },
            {
              '@type': 'Question',
              name: 'Skyaksa propose-t-il un accompagnement après le lancement ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, Skyaksa propose un accompagnement complet après le lancement : maintenance, évolutions, optimisation des conversions, formation et support technique continu.',
              },
            },
          ],
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

