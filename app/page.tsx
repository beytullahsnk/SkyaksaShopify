import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Approach from '@/components/sections/Approach'
import Method from '@/components/sections/Method'
import Projects from '@/components/sections/Projects'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Skyaksa — Agence Shopify Paris | Création Boutique E-commerce',
  description: 'Agence Shopify spécialisée en création de boutiques e-commerce sur-mesure. Design, développement et optimisation pour des sites Shopify performants. Expert Shopify Paris.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData type="faq" />
      <Hero />
      <Problems />
      <Approach />
      <Method />
      <Projects />
      <FinalCTA />
    </>
  )
}

