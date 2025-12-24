import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'MXR Mousepads',
      category: 'E-commerce Gaming',
      description: 'Boutique de tapis de souris édition limitée. Design moderne, système de précommandes.',
      image: '/projets/mxr-mousepads-boutique-shopify-ecommerce.jpg',
    },
    {
      title: 'Michino',
      category: 'Maroquinerie de luxe',
      description: 'Boutique de sacs haut de gamme. Expérience premium, visuels travaillés, design élégant.',
      image: '/projets/michino-maroquinerie-luxe-boutique-shopify.jpg',
    },
    {
      title: 'Babanono',
      category: 'Accessoires Bébé',
      description: 'Attache tétine personnalisable. Configurateur sur-mesure, personnalisation en temps réel.',
      image: '/projets/babanono-accessoires-bebe-boutique-shopify.jpg',
    },
  ]

  return (
    <section className="section-dark py-24 lg:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 id="projects-heading" className="text-5xl lg:text-6xl font-bold mb-6 !leading-[1.2] animate-on-scroll">
            <span className="highlight-green text-black"><span>BOUTIQUES</span></span> E-COMMERCE
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl animate-on-scroll delay-100">
            Projets Shopify réalisés. Design unique, expérience optimisée, boutiques qui performent.
          </p>
        </div>

        {/* Grid 3 projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch stagger-children">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black aspect-square hover:scale-[1.02] transition-transform duration-300 animate-on-scroll scale"
            >
              {/* Image de fond */}
              <Image 
                src={project.image} 
                alt={`${project.title} - ${project.category} - Boutique Shopify créée par Skyaksa, agence spécialisée e-commerce`}
                title={`${project.title} - ${project.category} - Boutique Shopify créée par Skyaksa, agence spécialisée e-commerce`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-block mb-3">
                  <span className="text-xs font-semibold text-shopify-fluo">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm lg:text-base">
                  {project.description}
                </p>
                
                {/* Arrow icon */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-shopify-fluo transition-colors">
                  <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-skyaksa/20 rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

