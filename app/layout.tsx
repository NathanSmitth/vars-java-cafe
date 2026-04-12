import type { Metadata } from 'next'
import { Gloock, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Display font — editorial serif, not in common AI reflex list
const gloock = Gloock({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Body font — elegant geometric sans
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Vars & Java Café — Fredericton, NB',
  description:
    'A cozy, family-friendly neighbourhood café at 440 Kimble Dr, Fredericton. Specialty coffee, fresh pastries, and a welcoming atmosphere for the whole family.',
  keywords: [
    'café',
    'coffee',
    'Fredericton',
    'NB',
    'New Brunswick',
    'pastries',
    'Vars & Java',
    'family-friendly',
    'Kimble Drive',
  ],
  openGraph: {
    title: 'Vars & Java Café',
    description: 'A cozy neighbourhood spot in Fredericton, NB. Open daily.',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${gloock.variable} ${raleway.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
