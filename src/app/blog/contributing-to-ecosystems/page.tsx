'use client'

import Link from 'next/link'
import { FadeUp, BlurFade } from '@/components/motion'

export default function Post() {
  return (
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
            <span className="text-4xl">🌐</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Web3</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">How I Contributed to Base, Polygon & Beyond</h1>
          <p className="text-sm text-muted">February 2026 · 15 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            When people ask how I ended up being recognized by protocols like Wormhole, LayerZero, Base, Polygon, and Hyperliquid, they expect some strategic master plan. The truth? I just kept building and showing up.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Polygon: Where It All Started</h2>
          <p>
            My first ecosystem contribution was with <span className="text-foreground font-medium">Polygon Africa</span> in 2021. I wasn&apos;t a core developer — I was a community member who happened to know how to code. I started by answering questions in the Telegram group, helping newcomers set up MetaMask, explaining gas fees.
          </p>

          <p>
            The team noticed. They asked if I wanted to help organize workshops. I said yes. Then they asked if I wanted to lead the community for West Africa. I said yes again. Within a year, I was managing one of the largest Polygon developer communities on the continent, organizing large-scale events, and earning <span className="text-foreground font-medium">Certified Smart Contract Developer</span> recognition.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Base: Going Onchain in Africa</h2>
          <p>
            When Base launched, I saw the opportunity immediately. Coinbase&apos;s L2 had the potential to bring millions of users onchain, and Africa was a massive untapped market. I co-founded <span className="text-foreground font-medium">Based West Africa</span> to build the ecosystem from the ground up.
          </p>

          <p>
            We organized hacker houses, brought developers together for the Base Batches hackathon, and built real dApps on Base. The <Link href="https://x.com/Bernard_O1/status/1988845679691608069" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">recognition from Base</Link> came because we weren&apos;t just talking — we were shipping.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Winning Across Ecosystems</h2>
          <p>
            Each hackathon I entered taught me something new about a different ecosystem:
          </p>

          <ul className="space-y-3 pl-4">
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Wormhole</span>
              <span>— Taught me cross-chain messaging and how to think about multi-chain architecture</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">LayerZero</span>
              <span>— Deepened my understanding of omnichain protocols and interoperability</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Base</span>
              <span>— Showed me how to build consumer-facing dApps that regular people can use</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Polygon</span>
              <span>— Where I cut my teeth on gas optimization and Layer 2 scaling</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Hyperliquid</span>
              <span>— Pushed me into high-performance DeFi and trading infrastructure</span>
            </li>
          </ul>

          <h2 className="text-xl font-heading text-foreground pt-4">Web3Nova: Paying It Forward</h2>
          <p>
            Everything I learned from these ecosystems, I pour back into <span className="text-foreground font-medium">Web3Nova</span>. In 2025 alone, we partnered with Base, Avalanche, SUI, Farcaster, and Lisk to bring workshops and hacker houses to Akure. Over <span className="text-foreground font-medium">500+ attendees</span> across 8+ events.
          </p>

          <p>
            The goal is simple: make blockchain accessible to African developers. Not through hype, but through hands-on building. Show them how to write their first smart contract. Help them submit their first hackathon project. Connect them with ecosystems that value their contributions.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">How to Start Contributing</h2>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Pick ONE ecosystem and go deep — don&apos;t try to be everywhere</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Start in the community channels — answer questions, help people</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Build something on the chain — even a simple dApp counts</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Enter every hackathon they run — this is how protocols discover builders</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Document and share your journey — your thread could inspire someone else</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Be consistent — ecosystems remember the builders who stick around</li>
          </ul>

          <p className="text-foreground/70 italic">
            You don&apos;t need permission to contribute to an ecosystem. Just start building. The recognition follows the work.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-12 pt-8 border-t border-theme flex items-center justify-between">
          <Link href="/blog/first-freelance-job" className="text-sm text-muted hover:text-accent transition-colors">
            ← First Freelance Job
          </Link>
          <Link href="/blog" className="text-sm text-accent hover:text-accent/80 transition-colors">
            All articles →
          </Link>
        </div>
      </FadeUp>
    </article>
  )
}
