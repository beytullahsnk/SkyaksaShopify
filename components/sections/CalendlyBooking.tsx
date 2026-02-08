'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Cal, { getCalApi } from '@calcom/embed-react'

export default function CalendlyBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min', embedJsUrl: 'https://cal.eu/embed.js' })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  const benefits = [
    {
      icon: '🎯',
      title: 'Analyse de votre projet',
      description: 'On étudie vos objectifs, votre marché et vos besoins spécifiques',
    },
    {
      icon: '💡',
      title: 'Recommandations personnalisées',
      description: 'Des conseils concrets adaptés à votre situation',
    },
    {
      icon: '💰',
      title: 'Estimation budget transparente',
      description: 'Un devis clair, sans surprise ni frais cachés',
    },
    {
      icon: '🚀',
      title: 'Plan d\'action concret',
      description: 'Les prochaines étapes pour lancer votre projet',
    },
  ]

  const guarantees = [
    { icon: '🔒', text: 'Sans engagement' },
    { icon: '⏱️', text: '30 minutes' },
    { icon: '💬', text: '100% gratuit' },
  ]

  return (
    <section id="reservation" className="section-dark py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-skyaksa/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-shopify/20 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 !leading-tight">
            RÉSERVEZ VOTRE{' '}
            <span className="highlight-green"><span>AUDIT GRATUIT</span></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            30 minutes pour comprendre votre projet et vous donner des recommandations concrètes.
          </p>
          
          {/* Guarantees badges */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                <span className="text-xl">{guarantee.icon}</span>
                <span className="text-sm font-medium text-white">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content - 2 columns */}
        <div className="grid lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-start">
          {/* Left column - Benefits */}
          <div className="animate-on-scroll delay-100">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                  <h4 className="font-semibold text-white">{benefit.title}</h4>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-5 bg-gradient-to-r from-skyaksa/20 to-transparent rounded-xl border border-skyaksa/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <p className="text-gray-300 italic mb-2">
                    &quot;Un échange très pro et des conseils vraiment pertinents. J&apos;ai eu toutes les réponses à mes questions.&quot;
                  </p>
                  <p className="text-sm text-gray-500">— Client après son audit gratuit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Cal.com */}
          <div className="animate-on-scroll delay-200">
            <div className="rounded-2xl overflow-hidden" style={{ height: '580px' }}>
              <Cal
                namespace="30min"
                calLink="skyaksa-agency/30min"
                calOrigin="https://cal.eu"
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
              />
            </div>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="text-center mt-12 animate-on-scroll delay-300">
          <p className="text-gray-400">
            Préférez nous écrire ?{' '}
            <Link 
              href="/contact" 
              className="text-skyaksa hover:text-skyaksa/80 underline underline-offset-4 transition-colors"
            >
              Contactez-nous par formulaire
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
