import type { Metadata } from 'next'

const siteUrl = 'https://www.bernardblockchain.xyz'

export const metadata: Metadata = {
  title: 'How I Won My First Hackathon — Polygon Hackathon Story',
  description: 'From complete beginner to hackathon winner at Polygon. The sleepless nights, raw dedication, and teamwork that led to my first blockchain hackathon victory.',
  keywords: ['hackathon winner', 'Polygon hackathon', 'blockchain hackathon Africa', 'Bernard Onuh hackathon', 'Web3 hackathon tips', 'winning first hackathon'],
  openGraph: {
    title: 'How I Won My First Hackathon — Bernard Onuh',
    description: 'From nervously submitting my first project to standing on stage as a winner at the Polygon hackathon.',
    url: `${siteUrl}/blog/how-i-won-my-first-hackathon`,
    type: 'article',
    publishedTime: '2026-02-10T00:00:00.000Z',
    authors: ['Bernard Onuh'],
    tags: ['Hackathon', 'Polygon', 'Web3', 'Blockchain', 'Nigeria'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Won My First Hackathon — Bernard Onuh',
    description: 'From complete beginner to hackathon winner. My Polygon hackathon story.',
    creator: '@bernard_o1',
  },
  alternates: { canonical: `${siteUrl}/blog/how-i-won-my-first-hackathon` },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
