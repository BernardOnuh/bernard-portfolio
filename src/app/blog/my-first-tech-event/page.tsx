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
            <span className="text-4xl">🎤</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-purple-500/10 text-purple-400 border-purple-500/20">Story</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">How I Attended My First Tech Event</h1>
          <p className="text-sm text-muted">February 2026 · 8 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            There&apos;s a version of me that almost stayed home that day. The one who thought &ldquo;I don&apos;t know enough yet&rdquo; and &ldquo;I won&apos;t know anyone there.&rdquo; I&apos;m glad I didn&apos;t listen to that version.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Invitation</h2>
          <p>
            It was a blockchain meetup organized by Polygon Africa. I saw the flyer on Twitter and almost scrolled past. But the topic caught my eye — &ldquo;Introduction to Smart Contracts&rdquo; — and I thought, <em className="text-foreground/80">&ldquo;Maybe I&apos;ll finally understand this stuff if someone explains it in person.&rdquo;</em>
          </p>

          <p>
            I showed up 20 minutes early, sat in the back row, and didn&apos;t talk to anyone for the first 30 minutes. Classic introvert move. But then the speaker asked a question about gas fees, and I actually knew the answer. I raised my hand. That one moment broke the ice.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The People</h2>
          <p>
            After the talk, people started introducing themselves. I met developers who had been building for years, students who were just starting out (like me), and community builders who were trying to grow the ecosystem. Everyone was friendly. Nobody made me feel like I didn&apos;t belong.
          </p>

          <p>
            I exchanged contacts with about 10 people that day. Three of them became close friends. One of them later invited me to contribute to Polygon Africa. That one connection changed the trajectory of my entire career.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Shift</h2>
          <p>
            Before that event, Web3 was something I studied alone in my room. After it, Web3 became a <span className="text-foreground font-medium">community</span>. I had people to ask questions, people to build with, and people who believed in the same vision.
          </p>

          <p>
            That event also planted a seed — I wanted to create the same experience for others. Fast forward to today, and through <span className="text-foreground font-medium">Web3Nova</span>, I&apos;ve organized 8+ events with over 500 attendees. From Base hacker houses to Avalanche workshops at FUTA.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">My Advice</h2>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span>You don&apos;t need to &ldquo;know enough&rdquo; to attend — that&apos;s literally why you go</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Talk to at least 3 new people — the connections compound over time</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>Follow up after — a DM saying &ldquo;great meeting you&rdquo; goes a long way</li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span>If you can&apos;t find events in your area, create one</li>
          </ul>

          <p className="text-foreground/70 italic">
            Showing up is the most underrated skill in tech. Talent is common. But the people who consistently show up? They&apos;re the ones who win.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-12 pt-8 border-t border-theme flex items-center justify-between">
          <Link href="/blog/how-i-won-my-first-hackathon" className="text-sm text-muted hover:text-accent transition-colors">
            ← First Hackathon
          </Link>
          <Link href="/blog/first-freelance-job" className="text-sm text-accent hover:text-accent/80 transition-colors">
            Next: First Freelance Job →
          </Link>
        </div>
      </FadeUp>
    </article>
  )
}
