'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hasWebsite: '',
    websiteUrl: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Envoyer via EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Non renseigné',
        has_website: formData.hasWebsite === 'yes' ? 'Oui' : formData.hasWebsite === 'no' ? 'Non' : 'En cours',
        website_url: formData.websiteUrl || 'N/A',
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'Skyaksa',
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )

      // Sauvegarder aussi localement (optionnel)
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      } catch (err) {
        // Ignore si l'API locale échoue
      }

      setIsSuccess(true)
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hasWebsite: '',
        websiteUrl: '',
        projectType: '',
        message: '',
      })
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@skyaksa.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 lg:pt-36 lg:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll">
              Parlons de votre{' '}
              <span className="text-skyaksa">projet</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 animate-on-scroll delay-100">
              Décrivez-nous votre projet e-commerce et recevez une réponse personnalisée.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap animate-on-scroll delay-200">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Réponse sous 24-48h
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-shopify-fluo" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Audit gratuit offert
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 animate-on-scroll">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-shopify-fluo/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-shopify-fluo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Nous vous répondrons dans les 24 à 48 heures.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false)
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        hasWebsite: '',
                        websiteUrl: '',
                        projectType: '',
                        message: '',
                      })
                    }}
                    className="text-skyaksa font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Thomas"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Martin"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                      placeholder="thomas@exemple.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Téléphone <span className="text-gray-400 font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="hasWebsite" className="block text-sm font-medium text-gray-900 mb-2">
                      Avez-vous déjà un site web ? *
                    </label>
                    <select
                      id="hasWebsite"
                      name="hasWebsite"
                      value={formData.hasWebsite}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="yes">Oui, j'ai déjà un site</option>
                      <option value="no">Non, pas encore</option>
                      <option value="in-progress">En cours de création</option>
                    </select>
                  </div>

                  {formData.hasWebsite === 'yes' && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                      <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-900 mb-2">
                        URL de votre site actuel
                      </label>
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="https://votre-site.com"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="creation">Création de boutique Shopify</option>
                      <option value="redesign">Refonte de site existant</option>
                      <option value="optimization">Optimisation / Amélioration</option>
                      <option value="seo">Audit SEO</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-skyaksa focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-shopify-fluo text-gray-900 font-semibold rounded-xl hover:bg-shopify-fluo/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par Skyaksa concernant votre projet.
                  </p>
                </form>
              )}
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8 animate-on-scroll delay-200">
              {/* Image Contact */}
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-skyaksa/10 to-shopify-fluo/10">
                <Image
                  src="/contact-skyaksa-equipe-shopify.jpg"
                  alt="Contact Skyaksa - Équipe d'experts Shopify spécialisés en création de boutiques e-commerce"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Reassurance Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-skyaksa/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-skyaksa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Réponse rapide</h3>
                    <p className="text-sm text-gray-600">Nous répondons à toutes les demandes sous 24 à 48 heures maximum.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-shopify-fluo/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Audit gratuit</h3>
                    <p className="text-sm text-gray-600">Recevez une analyse gratuite de votre projet avec des recommandations concrètes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-skyaksa/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-skyaksa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Experts Shopify</h3>
                    <p className="text-sm text-gray-600">Une équipe spécialisée exclusivement sur l'écosystème Shopify.</p>
                  </div>
                </div>
              </div>

              {/* Contact Alternatives */}
              <div className="p-6 bg-gray-900 rounded-2xl">
                <h3 className="font-semibold mb-4 text-white">Autres moyens de contact</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:contact@skyaksa.com" 
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@skyaksa.com
                  </a>
                  <a 
                    href="https://linkedin.com/company/skyaksa" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12 animate-on-scroll">
            Questions fréquentes
          </h2>
          
          <div className="space-y-4 stagger-children">
            <details className="group bg-gray-50 rounded-2xl animate-on-scroll">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-gray-900">Comment se déroule un projet avec Skyaksa ?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Après notre premier échange, nous analysons votre projet et vous proposons une stratégie sur mesure. Une fois validée, nous passons au développement avec des points réguliers pour vous tenir informé de l'avancement.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl animate-on-scroll">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-gray-900">Travaillez-vous uniquement avec Shopify ?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Oui, nous sommes spécialisés exclusivement sur Shopify. Cette expertise nous permet de maîtriser parfaitement la plateforme et d'offrir des résultats optimaux à nos clients.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl animate-on-scroll">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-gray-900">Proposez-vous un suivi après la mise en ligne ?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Absolument. Nous proposons un accompagnement continu avec des services de maintenance, d'optimisation et de formation pour vous rendre autonome sur votre boutique.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl animate-on-scroll">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-gray-900">Quel est le délai moyen pour créer une boutique ?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Selon la complexité du projet, comptez entre 2 et 8 semaines. Nous établissons un planning précis dès le début du projet pour respecter vos délais.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

