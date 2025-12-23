import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-skyaksa/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-shopify/20 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 !leading-[1.3] animate-on-scroll">
            LANÇONS VOTRE{' '}
            <span className="highlight-green"><span>BOUTIQUE SHOPIFY</span></span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-10 animate-on-scroll delay-100">
            Discutons de votre projet. Que vous ayez une idée précise ou que vous cherchiez 
            de l&apos;inspiration, on construit ensemble une boutique qui vous ressemble.
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap animate-on-scroll delay-200">
            <Button href="/contact" variant="primary">
              Lancer mon projet
            </Button>
            <Button href="/ce-que-lon-fait" variant="outline-dark">
              En savoir plus
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            Pas de devis générique. On analyse votre projet en détail.
          </p>
        </div>
      </div>
    </section>
  )
}

