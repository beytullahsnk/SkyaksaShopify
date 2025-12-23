import Button from '@/components/ui/Button'

export default function Approach() {
  const features = [
    'Design 100% sur-mesure',
    'Expérience optimisée',
    'Performance Shopify',
    'Marque qui ressort',
  ]

  return (
    <section id="approche" className="section-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 !leading-[1.3] animate-on-scroll">
            NOUS CRÉONS DES{' '}
            <span className="highlight-green"><span>BOUTIQUES SHOPIFY</span></span>{' '}
            QUI REFLÈTENT VOTRE MARQUE
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 animate-on-scroll delay-100">
            Skyaksa ne livre pas de templates génériques. Chaque boutique est pensée pour votre marque, 
            votre univers, vos clients.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 stagger-children">
            {features.map((feature) => (
              <div key={feature} className="flex flex-col items-center gap-3 animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-shopify-fluo flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Button href="/ce-que-lon-fait" variant="primary">
            Découvrir l&apos;approche
          </Button>
        </div>
      </div>
    </section>
  )
}

