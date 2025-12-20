export default function Problems() {
  const problems = [
    {
      title: 'Design générique',
      description: 'Votre boutique ressemble à toutes les autres. Thème basique, aucune personnalité, clients qui passent leur chemin.',
    },
    {
      title: 'Expérience frustrante',
      description: 'Navigation confuse, tunnel d\'achat compliqué, clients qui abandonnent leur panier.',
    },
    {
      title: 'Marque invisible',
      description: 'Votre identité ne ressort pas. Design fade, pas de différenciation, impossible de se démarquer.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Votre boutique Shopify ne{' '}
            <span className="highlight-green">ressort pas</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-100">
            Templates génériques, design fade, expérience basique. Votre marque mérite mieux.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 stagger-children">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-skyaksa transition-colors group animate-on-scroll"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-skyaksa text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

