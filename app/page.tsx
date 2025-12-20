import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Approach from '@/components/sections/Approach'
import Method from '@/components/sections/Method'
import Projects from '@/components/sections/Projects'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Skyaksa — Agence Shopify orientée performance e-commerce',
  description: 'Nous accompagnons chaque projet de la conception à la croissance. Création, optimisation et accompagnement de boutiques Shopify.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Approach />
      <Method />
      <Projects />
      <FinalCTA />
    </>
  )
}

