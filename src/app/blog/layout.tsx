import type { Metadata } from 'next'

const siteUrl = 'https://www.bernardblockchain.xyz'

export const metadata: Metadata = {
  title: 'Blog — Bernard Onuh',
  description: 'Thoughts on blockchain development, Web3 community building, hackathons, and the journey of building products across Africa. By Bernard Onuh.',
  keywords: ['Bernard Onuh blog', 'Web3 blog', 'blockchain developer blog', 'Web3 Africa blog', 'hackathon stories', 'tech blog Nigeria'],
  openGraph: {
    title: 'Blog — Bernard Onuh',
    description: 'Stories and reflections on blockchain development, hackathons, and building Web3 communities across Africa.',
    url: `${siteUrl}/blog`,
    type: 'website',
  },
  alternates: { canonical: `${siteUrl}/blog` },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
