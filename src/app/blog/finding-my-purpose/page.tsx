'use client'

import Link from 'next/link'
import { FadeUp, BlurFade, motion } from '@/components/motion'

export default function Post() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Finding My Purpose',
    description: 'From dabbling in Forex and Crypto trading to founding Web3Nova and building blockchain products.',
    author: { '@type': 'Person', name: 'Bernard Onuh', url: 'https://www.bernardblockchain.xyz' },
    datePublished: '2026-03-06',
    dateModified: '2026-03-06',
    url: 'https://www.bernardblockchain.xyz/blog/finding-my-purpose',
    publisher: { '@type': 'Person', name: 'Bernard Onuh' },
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <article className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <BlurFade>
        <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </BlurFade>

      <FadeUp delay={0.1}>
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧭</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-purple-500/10 text-purple-400 border-purple-500/20">Reflections</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">Finding My Purpose</h1>
          <p className="text-sm text-muted">March 2026 · 8 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="prose-custom space-y-6 text-muted leading-relaxed text-base md:text-[17px]">

          <p className="text-lg text-foreground/90 italic border-l-2 border-accent pl-4">
            This is not a success story. Not yet. This is the raw, honest truth about where I am right now — somewhere between knowing my purpose and waiting for the breakthrough.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">2021: The Year I Was Lost</h2>
          <p>
            In 2021, I was dabbling. Forex trading one week. Crypto trading the next. I was chasing money the way everyone around me was — looking for the quick flip, the 10x, the &ldquo;financial freedom&rdquo; that Twitter promised. I made some. I lost some. But the worst part wasn&apos;t the losses — it was the emptiness. I was making moves but going nowhere.
          </p>
          <p>
            Every morning felt the same. Watch charts. Read signals. Execute trades. Hope. It wasn&apos;t building anything. It wasn&apos;t creating anything. I was just... gambling with extra steps.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Shift: From Trading to Building</h2>
          <p>
            Then something clicked. I can&apos;t point to the exact moment, but I remember the feeling — I was tired of consuming and wanted to <span className="text-foreground font-medium">create</span>. I started looking at blockchain differently. Not as a thing to trade, but as a thing to <em className="text-foreground/80">build on</em>.
          </p>
          <p>
            I re-invested in myself. Not into another altcoin — into my skills. I started learning Solidity. Started understanding smart contracts. Started seeing the technology behind the tokens. And slowly, the fog lifted.
          </p>
          <p>
            That&apos;s when I founded <a href="https://web3nova.org" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium">Web3Nova</a>. Not because I had it all figured out, but because I believed that if I was struggling to find direction in Web3, others were too. I wanted to build a community where we could learn together, build together, and win together.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What We Built</h2>
          <p>
            Web3Nova became more than I ever imagined. 8+ events. 500+ attendees. Partnerships with Base, Avalanche, SUI, Farcaster, Lisk. I onboarded over 200 developers into blockchain. We won hackathons — Polygon, Wormhole, LayerZero, Base, Hyperliquid. We weren&apos;t just talking about Web3. We were living it.
          </p>
          <p>
            And for a while, it felt like I had found my purpose. <span className="text-foreground font-medium">Building products. Growing builders. Proving that Africans can compete on the global stage.</span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Now: The Honest Part</h2>
          <p>
            But right now? I feel stuck.
          </p>
          <p>
            I don&apos;t say that lightly. I&apos;ve built things. I&apos;ve shipped products. I&apos;ve helped people. But there&apos;s this feeling — like I&apos;m running in circles. The same loops. The same hustle. The hackathons, the community events, the late nights building... and yet the <span className="text-foreground font-medium">breakthrough</span> hasn&apos;t come.
          </p>
          <p>
            I haven&apos;t landed that full-time role outside the country. I haven&apos;t gotten the promotion that validates the grind. I haven&apos;t reached the level where I can look back and say &ldquo;we made it.&rdquo;
          </p>
          <p>
            And the pressure? It&apos;s different when people look up to you. My community — the builders, the developers, the people who showed up to Web3Nova events — they&apos;re watching. They believe in the vision because I believed in it first. <span className="text-foreground font-medium">I can&apos;t fail them.</span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I Know For Sure</h2>
          <p>
            I know this:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>I must make sure we have <span className="text-foreground font-medium">direction</span>. Not just hype, not just vibes — real, clear direction.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>I must make sure we <span className="text-foreground font-medium">win</span>. Every single time we step into a room, onto a stage, into a hackathon — we compete to win.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>I want to help builders build <span className="text-foreground font-medium">world-class products</span>. Not just African products. World-class ones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>I want that full-time opportunity — somewhere outside Nigeria — where I can grow, contribute, and bring everything I&apos;ve learned to a bigger stage.</span>
            </li>
          </ul>

          <h2 className="text-xl font-heading text-foreground pt-4">The Path Forward</h2>
          <p>
            I believe this is still my purpose. The building. The community. The products. The relentless pursuit of something meaningful. I&apos;m not lost anymore — I was lost in 2021. Now I know exactly what I want. I just haven&apos;t gotten there yet.
          </p>
          <p>
            And maybe that&apos;s okay. Maybe the gap between knowing your purpose and living in it fully is where the real growth happens. Maybe this feeling of being stuck is just the resistance before the breakthrough.
          </p>
          <p className="text-lg text-foreground/90 italic border-l-2 border-accent pl-4">
            I am on the path to conquer. I believe that with everything in me.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-8">
            <h3 className="text-foreground font-heading text-lg mb-2">📌 A Promise to Myself</h3>
            <p className="text-sm">
              I&apos;m writing this in March 2026. I will come back — months from now — to update this post. Either with the story of the breakthrough, or with the lessons from the struggle. Either way, I&apos;ll be honest. That&apos;s the only way this means anything.
            </p>
            <p className="text-sm mt-3 text-muted">
              <em>Update (September 2026): I kept that promise. Read <Link href="/blog/finding-my-purpose-2" className="text-accent hover:underline font-medium">Part 2 — I Didn&apos;t Find My Purpose. I Built It.</Link></em>
            </p>
          </div>

          <p className="text-center text-muted text-sm pt-8">
            — Bernard Onuh
          </p>

        </div>
      </FadeUp>

      {/* Navigation */}
      <FadeUp delay={0.3}>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/blog/how-i-won-my-first-hackathon" className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            How I Won My First Hackathon
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1">
            All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </FadeUp>
    </article>
    </>
  )
}
