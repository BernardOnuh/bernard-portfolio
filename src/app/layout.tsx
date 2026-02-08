import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Bernard Onuh - Software Engineer & Community Builder',
  description: 'Software Engineer building blockchain products and Community Builder across West Africa. 5 years of experience in crypto/web3 space.',
  keywords: ['Bernard Onuh', 'Software Engineer', 'Community Builder', 'Blockchain', 'Web3', 'Polygon Africa', 'Onchain Global'],
  authors: [{ name: 'Bernard Onuh' }],
  openGraph: {
    title: 'Bernard Onuh - Software Engineer & Community Builder',
    description: 'Software Engineer building blockchain products and Community Builder across West Africa.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernard Onuh - Software Engineer & Community Builder',
    description: 'Software Engineer building blockchain products and Community Builder across West Africa.',
    creator: '@bernard_o1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}