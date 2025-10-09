import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alibi — Your Billable Hours, Defended',
  description: 'Build an airtight case for every billable hour. Automatic time tracking that proves you worked, when you worked, and what you worked on—so you never have to guess or defend your billable hours again.',
  keywords: [
    'time tracking',
    'billable hours',
    'freelance time tracking',
    'productivity',
    'legal time tracking',
    'brand voice',
    'time defense',
    'invoice proof',
    'client billing',
    'work documentation',
    'automatic time tracking',
    'work proof',
    'time management'
  ],
  authors: [{ name: 'Alibi' }],
  creator: 'Alibi',
  publisher: 'Alibi',
  generator: 'Next.js',
  applicationName: 'Alibi',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alibi-demo.vercel.app',
    title: 'Alibi — Your Billable Hours, Defended',
    description: 'Build an airtight case for every billable hour. Automatic time tracking that proves you worked, when you worked, and what you worked on—so you never have to guess or defend your billable hours again.',
    siteName: 'Alibi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alibi — Your Billable Hours, Defended',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alibi — Your Billable Hours, Defended',
    description: 'Build an airtight case for every billable hour. Automatic time tracking that proves you worked, when you worked, and what you worked on—so you never have to guess or defend your billable hours again.',
    images: ['/twitter-card.png'],
    creator: '@tahigichigi',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
    { media: '(prefers-color-scheme: dark)', color: '#f59e0b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Alibi",
              "description": "Build an airtight case for every billable hour. Automatic time tracking that proves you worked, when you worked, and what you worked on.",
              "url": "https://alibi-demo.vercel.app",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tier available"
              },
              "creator": {
                "@type": "Organization",
                "name": "Alibi Time Defense Co."
              },
              "keywords": "time tracking, billable hours, productivity, freelance",
              "screenshot": "https://alibi-demo.vercel.app/og-image.png"
            })
          }}
        />
      </body>
    </html>
  )
}
