import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bernard Onuh — Software Engineer & Community Builder',
  description: 'Software Engineer building blockchain products and Developer Relations. 5 years shipping code and building communities across the African blockchain ecosystem.',
  keywords: ['Bernard Onuh', 'Software Engineer', 'Community Builder', 'Blockchain', 'Web3', 'Developer Relations'],
  authors: [{ name: 'Bernard Onuh' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Bernard Onuh — Software Engineer & Community Builder',
    description: 'Software Engineer building blockchain products. 5 years shipping code across the African blockchain ecosystem.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernard Onuh — Software Engineer & Community Builder',
    description: 'Software Engineer building blockchain products across the African blockchain ecosystem.',
    creator: '@bernard_o1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            })();
          `
        }} />
      </head>
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
