import type { Metadata } from 'next'

const siteUrl = 'https://www.bernardblockchain.xyz'

export const metadata: Metadata = {
  title: 'Finding My Purpose — From Trading to Building Blockchain Products',
  description: 'In 2021 I was lost between Forex and Crypto trading. Then I found purpose in building blockchain products and founded Web3Nova. Now I feel stuck — but the breakthrough is coming.',
  keywords: ['Bernard Onuh', 'Web3Nova', 'blockchain purpose', 'Web3 builder Africa', 'finding purpose tech', 'crypto trading to building', 'blockchain developer journey'],
  openGraph: {
    title: 'Finding My Purpose — Bernard Onuh',
    description: 'From dabbling in Forex and Crypto trading to founding Web3Nova and building blockchain products. The honest truth about feeling stuck and believing in the breakthrough.',
    url: `${siteUrl}/blog/finding-my-purpose`,
    type: 'article',
    publishedTime: '2026-03-06T00:00:00.000Z',
    authors: ['Bernard Onuh'],
    tags: ['Web3', 'Purpose', 'Blockchain', 'Africa', 'Community Building'],
    images: [{
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Finding My Purpose — Bernard Onuh',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finding My Purpose — Bernard Onuh',
    description: 'From trading to building blockchain products. The honest truth about where I am now.',
    creator: '@bernard_o1',
  },
  alternates: {
    canonical: `${siteUrl}/blog/finding-my-purpose`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
