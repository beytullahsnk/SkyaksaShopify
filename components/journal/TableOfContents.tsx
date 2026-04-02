'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface TableOfContentsItem {
  id: string
  title: string
}

export default function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-28">
        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
          Sommaire
        </h4>
        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm py-1 border-l-2 pl-4 transition-colors ${
                activeSection === item.id
                  ? 'border-skyaksa text-skyaksa font-medium'
                  : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Sticky CTA */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Besoin d&apos;aide ?
          </p>
          <p className="text-xs text-gray-600 mb-3">
            Discutons de votre projet Shopify
          </p>
          <Link
            href="/contact"
            className="block w-full text-center text-xs font-semibold bg-skyaksa text-white py-2 px-4 rounded-lg hover:bg-skyaksa-700 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </aside>
  )
}
