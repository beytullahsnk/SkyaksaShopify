'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useScrollAnimation() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure DOM is ready after navigation
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      // Observe all elements with animate-on-scroll class
      const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)')
      animatedElements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timeout)
  }, [pathname]) // Re-run on route change
}

