import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page non trouvée — Skyaksa',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
}

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-hero">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-skyaksa/20 mb-4">404</div>
        
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Page non trouvée
        </h1>
        
        {/* Description */}
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Pas de panique, on vous ramène à la maison.
        </p>
        
        {/* Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-skyaksa px-8 py-4 text-base font-semibold text-white hover:bg-skyaksa-700 transition-colors shadow-lg shadow-skyaksa/20"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-skyaksa hover:text-skyaksa transition-colors"
          >
            Nous contacter
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Vous cherchez peut-être :</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href="/ce-que-lon-fait" className="text-skyaksa hover:underline font-medium">
              Nos services
            </Link>
            <Link href="/journal" className="text-skyaksa hover:underline font-medium">
              Journal
            </Link>
            <Link href="/contact" className="text-skyaksa hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

