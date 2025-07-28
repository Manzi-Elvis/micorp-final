import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Micorp - Technology Solutions & Software Development',
    short_name: 'Micorp',
    description: 'Micorp delivers innovative technology solutions including web development, mobile apps, AI/ML, cybersecurity, and cloud services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/brand/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/brand/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/brand/logo.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/brand/logo.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false,
    related_applications: [],
    screenshots: [
      {
        src: '/brand/hero.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Micorp Homepage'
      },
      {
        src: '/brand/hero.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Micorp Homepage Mobile'
      }
    ]
  }
}

