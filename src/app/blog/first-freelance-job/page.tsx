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
            <span className="text-4xl">💼</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Career</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">How I Got My First Freelance Job</h1>
          <p className="text-sm text-muted">February 2026 · 12 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            Nobody talks about how terrifying it is to charge money for code you&apos;re not even sure is good enough. But that&apos;s exactly where every freelance career starts — at the intersection of imposter syndrome and hunger.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Hustle Phase</h2>
          <p>
            After winning my first hackathon, I had a tiny bit of confidence. But confidence doesn&apos;t pay bills. I needed real clients, and I had zero reputation. No portfolio site, no testimonials, nothing.
          </p>

          <p>
            So I did what anyone in my position would do — I started DMing people. Not random spam. I found projects on Twitter and Telegram that needed smart contract developers, and I offered to build the first milestone for a reduced rate. It felt desperate. It probably was. But it worked.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The First Client</h2>
          <p>
            My first real client found me through a Polygon Africa community I was active in. They needed a token contract with a vesting schedule. Nothing too complex, but at the time it felt like building a rocket ship.
          </p>

          <p>
            I spent 3x longer than I should have, triple-checking everything. I wrote more tests than actual code. I over-delivered on documentation. When I submitted the work, the client was impressed — not because the code was extraordinary, but because I was <span className="text-foreground font-medium">thorough and communicative</span>.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Building a Reputation</h2>
          <p>
            That first job led to a referral. The referral led to another. Within 6 months, I had a steady stream of work — building smart contracts, DeFi protocols, and frontend dApps for clients across the blockchain ecosystem.
          </p>

          <p>
            Projects like <span className="text-foreground font-medium">Aboki</span> (crypto-to-fiat platform), <span className="text-foreground font-medium">Bizflip</span> (decentralized business marketplace), and <span className="text-foreground font-medium">STX Ramp</span> (on-ramp/off-ramp) weren&apos;t just freelance gigs — they became products that processed real transactions and served real users.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Lessons for Aspiring Freelancers</h2>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Your first client will come from your community — be active in one</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Over-deliver on communication — clients fear silence more than bugs</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Charge less for the first job, but never work for free</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Build in public — your GitHub is your portfolio</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Every project is a case study — document your work</li>
          </ul>

          <p className="text-foreground/70 italic">
            The gap between &ldquo;I can code&rdquo; and &ldquo;someone will pay me to code&rdquo; is smaller than you think. You just have to cross it once.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-12 pt-8 border-t border-theme flex items-center justify-between">
          <Link href="/blog/my-first-tech-event" className="text-sm text-muted hover:text-accent transition-colors">
            ← First Tech Event
          </Link>
          <Link href="/blog/contributing-to-ecosystems" className="text-sm text-accent hover:text-accent/80 transition-colors">
            Next: Contributing to Ecosystems →
          </Link>
        </div>
      </FadeUp>
    </article>
  )
}
