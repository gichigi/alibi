import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alibi — Your Billable Hours, Defended',
  description: 'Build an airtight case for every billable hour. A brand voice masterclass demonstrating committed metaphor execution through time tracking.',
  keywords: ['time tracking', 'brand voice', 'billable hours', 'productivity', 'freelance'],
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
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
