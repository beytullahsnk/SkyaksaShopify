import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://skyaksa.fr'),
  title: {
    default: 'Skyaksa — Agence Shopify orientée performance e-commerce',
    template: '%s — Skyaksa',
  },
  description: 'Agence Shopify spécialisée en création de boutiques e-commerce sur-mesure. Design, développement et optimisation pour des sites Shopify performants. Expert Shopify Paris.',
  keywords: 'agence Shopify, agence Shopify Paris, création boutique Shopify, expert Shopify, développeur Shopify, création site Shopify, agence e-commerce, boutique en ligne, optimisation Shopify, performance e-commerce',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
    description: 'Agence Shopify spécialisée en création de boutiques e-commerce sur-mesure. Design, développement et optimisation pour des sites Shopify performants.',
    url: 'https://skyaksa.fr',
    siteName: 'Skyaksa',
    images: [
      {
        url: '/skyaksa-agence-shopify-ecommerce-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
    description: 'Agence Shopify : création de boutiques e-commerce sur-mesure et performantes.',
    images: ['/skyaksa-agence-shopify-ecommerce-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preload ressources critiques */}
        <link
          rel="preload"
          href="/logo-skyaksa.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className={inter.className}>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="service" />
        <StructuredData type="localBusiness" />
        <ScrollAnimationProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ScrollAnimationProvider>
      </body>
    </html>
  )
}

