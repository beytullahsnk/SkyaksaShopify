import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact Agence Shopify | Devis Gratuit',
  description: 'Contactez Skyaksa, agence Shopify spécialisée. Création de boutique, optimisation, accompagnement. Réponse sous 24-48h. Audit gratuit offert.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Agence Shopify | Devis Gratuit',
    description: 'Contactez Skyaksa, agence Shopify spécialisée. Création de boutique, optimisation, accompagnement.',
    url: 'https://skyaksa.fr/contact',
    siteName: 'Skyaksa',
    images: [
      {
        url: '/contact-skyaksa-equipe-shopify.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Skyaksa - Agence Shopify',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Agence Shopify | Devis Gratuit',
    description: 'Contactez Skyaksa, agence Shopify spécialisée. Réponse sous 24-48h.',
  },
}

// FAQ Schema pour la page contact
const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment se déroule un projet avec Skyaksa ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Après notre premier échange, nous analysons votre projet et vous proposons une stratégie sur mesure. Une fois validée, nous passons au développement avec des points réguliers pour vous tenir informé de l\'avancement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous uniquement avec Shopify ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes spécialisés exclusivement sur Shopify. Cette expertise nous permet de maîtriser parfaitement la plateforme et d\'offrir des résultats optimaux à nos clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous un suivi après la mise en ligne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. Nous proposons un accompagnement continu avec des services de maintenance, d\'optimisation et de formation pour vous rendre autonome sur votre boutique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai moyen pour créer une boutique Shopify ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon la complexité du projet, comptez entre 2 et 8 semaines. Nous établissons un planning précis dès le début du projet pour respecter vos délais.',
      },
    },
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      {children}
    </>
  )
}

