'use client'

import { useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function NewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-64 lg:h-auto lg:min-h-[450px] bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-skyaksa/10 to-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Ajoutez votre image ici</p>
                <p className="text-gray-400 text-xs mt-1">newsletter-skyaksa.jpg</p>
              </div>
            </div>
          </div>
          <Image
            src="/newsletter-skyaksa-equipe-shopify.jpg"
            alt="Équipe Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce"
            title="Équipe Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Side */}
        <div className="bg-white px-8 py-16 lg:px-16 lg:py-20 flex items-center border-l border-gray-100">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Tenez-vous au courant des dernières{' '}
              <span className="text-skyaksa">nouveautés e-commerce</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Abonnez-vous à notre newsletter et bénéficiez de conseils Shopify,
              de guides SEO et de ressources exclusives, directement dans votre boîte de réception.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setNewsletterSubmitting(true)

                try {
                  const templateParams = {
                    email: newsletterEmail,
                    to_name: 'Skyaksa',
                    subscribed_at: new Date().toLocaleDateString('fr-FR'),
                  }

                  await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                    process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID || '',
                    templateParams,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
                  )

                  try {
                    await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: newsletterEmail }),
                    })
                  } catch (err) {
                    // Ignore si l'API locale échoue
                  }

                  setNewsletterSuccess(true)
                  setNewsletterEmail('')

                  setTimeout(() => setNewsletterSuccess(false), 5000)
                } catch (error) {
                  console.error('Erreur:', error)
                  alert('Une erreur est survenue. Veuillez réessayer.')
                } finally {
                  setNewsletterSubmitting(false)
                }
              }}
              className="mb-4"
            >
              <div className="flex flex-col sm:flex-row bg-gray-100 rounded-full overflow-hidden p-1.5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="E-mail ici"
                  className="flex-1 px-5 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-base"
                  required
                  disabled={newsletterSubmitting || newsletterSuccess}
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting || newsletterSuccess}
                  className="px-8 py-3 bg-shopify-fluo text-gray-900 font-semibold rounded-full hover:bg-shopify-fluo/90 transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {newsletterSubmitting ? 'Inscription...' : newsletterSuccess ? '✓ Inscrit !' : 'S\'abonner'}
                </button>
              </div>
            </form>

            <p className="text-gray-400 text-sm">
              Désabonnez-vous à tout moment. En saisissant votre e-mail, vous acceptez de recevoir des e-mails de marketing de la part de Skyaksa.
            </p>
          </div>
        </div>
      </div>

      {/* Green accent bar */}
      <div className="h-2 bg-shopify-fluo"></div>
    </section>
  )
}
