import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
  description: 'Nous accompagnons chaque projet de la conception à la croissance. Création, optimisation et accompagnement de boutiques Shopify.',
  keywords: 'agence Shopify, e-commerce, boutique en ligne, optimisation conversion, performance e-commerce',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
    description: 'Nous accompagnons chaque projet de la conception à la croissance. Création, optimisation et accompagnement de boutiques Shopify.',
    url: 'https://skyaksa.com',
    siteName: 'Skyaksa',
    images: [
      {
        url: '/skyaksa-agence-shopify-ecommerce-hero.jpg',
        width: 1200,
        height: 1200,
        alt: 'Skyaksa - Agence Shopify spécialisée',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
    description: 'Nous accompagnons chaque projet de la conception à la croissance.',
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
      <body className={inter.className}>
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

