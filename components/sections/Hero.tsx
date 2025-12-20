import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-skyaksa/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-shopify/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <Badge variant="purple" className="mb-8 animate-on-scroll">
              <span className="w-2 h-2 bg-shopify-fluo rounded-full animate-pulse"></span>
              Agence Shopify spécialisée
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight animate-on-scroll delay-100">
              <span className="text-over-highlight">Boutiques Shopify</span>{' '}
              <span className="highlight-green"><span>qui se démarquent</span></span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 animate-on-scroll delay-200">
              Création de boutiques e-commerce uniques sur Shopify. Design moderne, 
              expérience optimisée, boutiques qui reflètent votre marque.
            </p>

            <div className="flex items-center gap-4 mb-12 flex-wrap animate-on-scroll delay-300">
              <Button href="/contact" variant="primary">
                Lancer mon projet
              </Button>
              <Button href="/ce-que-lon-fait" variant="outline">
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-skyaksa">3+</div>
                <div className="text-sm text-gray-600">Ans d'expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-skyaksa">Shopify</div>
                <div className="text-sm text-gray-600">Plateforme exclusive</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-skyaksa">100%</div>
                <div className="text-sm text-gray-600">Personnalisé</div>
              </div>
            </div>
          </div>

          {/* Right: Image colorée */}
          <div className="relative animate-on-scroll scale delay-200">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/skyaksa-agence-shopify-ecommerce-hero.jpg" 
                alt="Agence Shopify Skyaksa - Création de boutiques e-commerce sur-mesure et optimisation performance"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating elements - Style Pro & Créatif */}
            
            {/* Card 1: Shopify Expert Badge */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-shopify via-shopify-600 to-emerald-600 rounded-2xl shadow-2xl shadow-shopify/40 flex items-center justify-center z-10 rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"/>
                  </svg>
                </div>
                <div className="text-white font-bold text-sm">Shopify</div>
                <div className="text-white/90 text-xs">Expert</div>
              </div>
            </div>
            
            {/* Card 2: Performance Stats */}
            <div className="absolute -bottom-4 -left-4 w-44 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 z-10 hover:scale-105 transition-transform">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 font-medium mb-1">Performance</div>
                  <div className="text-2xl font-bold text-gray-900">+47%</div>
                </div>
                <div className="w-8 h-8 bg-shopify/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-shopify" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-2">Conversion moyenne</div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-shopify to-emerald-500 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

