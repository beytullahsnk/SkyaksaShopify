import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skyaksa.fr'

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ce-que-lon-fait`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Articles du journal
  const articleSlugs = [
    'guide-seo-shopify',
    'tracking-ecommerce-ga4',
    'optimiser-conversion-shopify',
    'klaviyo-vs-mailchimp',
    'meilleures-apps-shopify-2024',
    'configurer-ga4-shopify',
    'reduire-abandon-panier',
    'core-web-vitals-shopify',
    'sequences-email-ecommerce',
  ]

  const articlePages = articleSlugs.map((slug) => ({
    url: `${baseUrl}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}

