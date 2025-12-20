export default function Method() {
  const steps = [
    {
      title: 'Cadrage',
      description: 'Analyse de votre marque, positionnement, objectifs. On définit l\'identité unique de votre boutique.',
    },
    {
      title: 'Design',
      description: 'Création de l\'interface sur-mesure. Maquettes, prototypes, validation du parcours client.',
    },
    {
      title: 'Développement',
      description: 'Intégration Shopify custom. Développement des fonctionnalités, optimisation performance.',
    },
    {
      title: 'Lancement',
      description: 'Mise en ligne, formation, tests finaux. Votre boutique est prête à performer.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Méthode <span className="highlight-green">Skyaksa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-100">
            4 étapes pour créer votre boutique Shopify unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {steps.map((step, index) => (
            <div key={step.title} className="relative h-full animate-on-scroll">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-skyaksa to-transparent -z-10"></div>
              )}
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-skyaksa transition-all hover:shadow-xl h-full flex flex-col">
                {/* Step number */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-skyaksa text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-glow-purple">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

