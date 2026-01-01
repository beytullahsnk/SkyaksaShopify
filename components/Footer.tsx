import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const navigation = {
    agence: [
      { name: 'Ce que l\'on fait', href: '/ce-que-lon-fait' },
    ],
    ressources: [
      { name: 'Journal', href: '/journal' },
      { name: 'Contact', href: '/contact' },
    ],
    villesPrincipales: [
      { name: 'Paris', href: '/agence-shopify/paris' },
      { name: 'Lyon', href: '/agence-shopify/lyon' },
      { name: 'Marseille', href: '/agence-shopify/marseille' },
      { name: 'Bordeaux', href: '/agence-shopify/bordeaux' },
    ],
    villesSecondaires: [
      { name: 'Toulouse', href: '/agence-shopify/toulouse' },
      { name: 'Nantes', href: '/agence-shopify/nantes' },
      { name: 'Lille', href: '/agence-shopify/lille' },
      { name: 'Nice', href: '/agence-shopify/nice' },
      { name: 'Orléans', href: '/agence-shopify/orleans' },
      { name: 'Tours', href: '/agence-shopify/tours' },
      { name: 'Blois', href: '/agence-shopify/blois' },
    ],
  }

  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-skyaksa.png"
                alt="Skyaksa - Agence Shopify"
                title="Skyaksa - Agence Shopify spécialisée en création de boutiques e-commerce"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                SKYAKSA
              </span>
            </Link>
            <p className="text-base text-gray-600 max-w-md leading-relaxed">
              Agence Shopify spécialisée. Création de boutiques e-commerce uniques qui reflètent votre marque.
            </p>
            
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-xs text-gray-600">Shopify</span>
              <span className="text-xs font-bold text-shopify">Expert</span>
            </div>
          </div>

          {/* Agence */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Agence</h3>
            <ul className="space-y-3">
              {navigation.agence.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-skyaksa transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-bold text-gray-900 mb-4 mt-8 uppercase tracking-wider">Ressources</h3>
            <ul className="space-y-3">
              {navigation.ressources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-skyaksa transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes - Format compact sur 2 colonnes */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Nos agences en France</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[...navigation.villesPrincipales, ...navigation.villesSecondaires].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm text-gray-600 hover:text-skyaksa transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Skyaksa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

