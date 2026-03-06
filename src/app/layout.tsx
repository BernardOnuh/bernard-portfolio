import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-cabinet',
  display: 'swap',
})

const siteUrl = 'https://www.bernardblockchain.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bernard Onuh — Blockchain Engineer & Web3 Community Builder',
    template: '%s | Bernard Onuh',
  },
  description:
    'Bernard Onuh is a Blockchain Software Engineer, Web3 Developer Relations expert, and Community Builder with 5+ years shipping smart contracts and dApps. 300+ transactions, $20K+ volume, 200+ developers onboarded across Africa.',
  keywords: [
    'Bernard Onuh',
    'Bernard blockchain',
    'Bernard Onuh blockchain',
    'Bernard Onuh Web3',
    'Bernard Onuh Nigeria',
    'Bernard Onuh developer',
    'Bernard Onuh software engineer',
    'bernardblockchain',
    'bernard_o1',
    'blockchain engineer Nigeria',
    'Web3 developer Africa',
    'smart contract developer Nigeria',
    'developer relations Web3',
    'Polygon Africa developer',
    'Base blockchain Africa',
    'blockchain community builder',
    'Web3 Nigeria',
    'dApp developer Africa',
    'Solidity developer Africa',
    'onchain builder Nigeria',
    'Web3Nova',
    'Based West Africa',
    'hackathon winner blockchain',
  ],
  authors: [{ name: 'Bernard Onuh', url: siteUrl }],
  creator: 'Bernard Onuh',
  publisher: 'Bernard Onuh',
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
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Bernard Onuh',
    title: 'Bernard Onuh — Blockchain Engineer & Web3 Community Builder',
    description:
      'Blockchain Software Engineer shipping smart contracts and dApps across Africa. 5+ years in Web3, 300+ transactions, $20K+ volume, 200+ devs onboarded.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Bernard Onuh — Blockchain Engineer & Web3 Community Builder',
      },
    ],
    firstName: 'Bernard',
    lastName: 'Onuh',
    username: 'bernard_o1',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bernard_o1',
    creator: '@bernard_o1',
    title: 'Bernard Onuh — Blockchain Engineer & Web3 Community Builder',
    description:
      'Blockchain Software Engineer. 5+ years in Web3, 300+ on-chain transactions, 200+ devs onboarded across Africa.',
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    // Paste your code from Google Search Console here once you verify:
    // google: 'PASTE_YOUR_CODE_HERE',
  },
}

// JSON-LD Structured Data — tells Google exactly who Bernard Onuh is
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Bernard Onuh',
      alternateName: ['bernard_o1', 'BernardOnuh', 'bernardblockchain'],
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.png`,
      },
      sameAs: [
        'https://x.com/bernard_o1',
        'https://github.com/BernardOnuh',
        'https://linkedin.com/in/bernardonuh',
        'https://www.youtube.com/@Bernard_O1',
        'https://t.me/bernardonuh',
      ],
      jobTitle: 'Blockchain Software Engineer',
      description:
        'Blockchain Software Engineer, Community Builder, and Developer Relations professional with 5+ years in the Web3 space. Shipped products processing 300+ transactions and $20K+ in volume, and onboarded 200+ developers to blockchain.',
      knowsAbout: [
        'Blockchain Development',
        'Smart Contracts',
        'Solidity',
        'Web3',
        'Decentralized Applications',
        'Developer Relations',
        'Community Building',
        'Polygon',
        'Base',
        'Ethereum',
        'DeFi',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Web3Nova',
        url: 'https://x.com/web3_nova',
      },
      email: 'bernard@web3nova.org',
      nationality: 'Nigerian',
      award: '5+ Hackathons Won',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Bernard Onuh — Blockchain Engineer',
      description:
        'Personal website of Bernard Onuh, Blockchain Software Engineer and Web3 Community Builder.',
      author: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },
  ],
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
          __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');})();`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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