import type { Metadata } from 'next'

const siteUrl = 'https://www.bernardblockchain.xyz'

export const metadata: Metadata = {
  title: "I Didn't Find My Purpose. I Built It. — Part 2",
  description: "Six months after admitting I felt stuck, here's the update I promised. I stopped waiting for the breakthrough and built it instead — the purpose I was searching for was Web3Nova all along.",
  keywords: ['Bernard Onuh', 'Web3Nova', 'finding my purpose', 'Web3 community', 'blockchain builder Africa', 'personal growth developer'],
  openGraph: {
    title: "I Didn't Find My Purpose. I Built It. — Bernard Onuh",
    description: "The breakthrough I was waiting for wasn't a moment. It was Web3Nova. Part 2 of Finding My Purpose.",
    url: `${siteUrl}/blog/finding-my-purpose-2`,
    type: 'article',
    publishedTime: '2026-09-18T00:00:00.000Z',
    authors: ['Bernard Onuh'],
    tags: ['Reflections', 'Web3Nova', 'Purpose', 'Web3', 'Nigeria'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "I Didn't Find My Purpose. I Built It. — Bernard Onuh",
    description: "The breakthrough I was waiting for wasn't a moment. It was Web3Nova.",
    creator: '@bernard_o1',
  },
  alternates: { canonical: `${siteUrl}/blog/finding-my-purpose-2` },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }