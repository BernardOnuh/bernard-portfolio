'use client'

import Link from 'next/link'
import { FadeUp, BlurFade, motion } from '@/components/motion'

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
            <span className="text-4xl">🏆</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-yellow-500/10 text-yellow-400 border-yellow-500/20">Story</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">How I Won My First Hackathon</h1>
          <p className="text-sm text-muted">February 2026 · 10 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="prose-custom space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            I still remember the feeling — heart pounding, palms sweating, staring at my screen at 3 AM trying to get a smart contract to compile. That was my first hackathon experience, and it changed everything.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Beginning</h2>
          <p>
            I had been learning Solidity for about 6 months when I saw a hackathon announcement from <span className="text-foreground font-medium">Polygon</span>. I almost didn&apos;t register. Who was I? Just some guy in Akure learning from YouTube tutorials. But something told me to just go for it.
          </p>

          <p>
            The theme was DeFi, and I decided to build a simple token swap mechanism. Nothing fancy — just clean, working code that solved a real problem. I spent the first day just planning and researching existing solutions. That turned out to be the smartest decision I made.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Build</h2>
          <p>
            48 hours. That&apos;s all I had. I scoped down aggressively — no fancy UI, no bells and whistles. Just a solid smart contract with a clean React frontend. I wrote tests first (something most hackathon participants skip), and it saved me hours of debugging later.
          </p>

          <p>
            At hour 36, everything broke. A critical bug in my liquidity calculation meant the entire swap logic was wrong. I almost gave up. But I took a walk, grabbed some coffee, came back and rewrote the entire function from scratch. Sometimes you have to throw away code to move forward.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Moment</h2>
          <p>
            When they announced the winners, I genuinely thought they&apos;d made a mistake. My name. On the screen. <span className="text-foreground font-medium">Winner</span>. The judges said they were impressed by the clean code, the testing, and the fact that it actually worked end-to-end.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I Learned</h2>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Scope down ruthlessly — a working MVP beats a broken ambitious project</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Write tests — they save you when everything else is falling apart</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Show up — half the battle is just registering and submitting</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>It&apos;s okay to feel like you don&apos;t belong — do it anyway</li>
          </ul>

          <p>
            That first win gave me the confidence to keep building. Since then, I&apos;ve won <span className="text-foreground font-medium">5+ hackathons</span> across Wormhole, LayerZero, Base, Polygon, and Hyperliquid. But none of them felt quite like that first one.
          </p>

          <p className="text-foreground/70 italic">
            If you&apos;re thinking about entering your first hackathon — just do it. The worst that can happen is you learn something. The best? It changes your life.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-12 pt-8 border-t border-theme flex items-center justify-between">
          <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors">
            ← All articles
          </Link>
          <Link href="/blog/my-first-tech-event" className="text-sm text-accent hover:text-accent/80 transition-colors">
            Next: My First Tech Event →
          </Link>
        </div>
      </FadeUp>
    </article>
  )
}
