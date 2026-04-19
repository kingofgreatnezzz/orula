import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import BackToTop from '@/components/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ORULA Football Academy | Professional Training & Development',
  description: 'Where passion meets professionalism. ORULA Football Academy offers world-class training programs designed to develop the next generation of football stars.',
  keywords: ['football academy', 'youth training', 'soccer training', 'football coaching', 'ORULA training', 'green football academy'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orulafootballacademy.com',
    title: 'ORULA Football Academy',
    description: 'Professional football training for youth players',
    siteName: 'ORULA Football Academy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans text-primary bg-orula-cream">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  )
}