import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal Shopify | Guides & Conseils E-commerce',
  description: 'Guides, analyses et conseils d\'experts pour optimiser votre boutique Shopify. SEO, conversion, tracking, email marketing et performance e-commerce.',
  alternates: {
    canonical: '/journal',
  },
  openGraph: {
    title: 'Journal Shopify | Guides & Conseils E-commerce',
    description: 'Guides, analyses et conseils d\'experts pour optimiser votre boutique Shopify.',
    url: 'https://skyaksa.fr/journal',
    siteName: 'Skyaksa',
    images: [
      {
        url: '/skyaksa-agence-shopify-ecommerce-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Journal Skyaksa - Guides Shopify',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journal Shopify | Guides & Conseils E-commerce',
    description: 'Guides, analyses et conseils d\'experts pour optimiser votre boutique Shopify.',
  },
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

