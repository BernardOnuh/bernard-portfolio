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
            My first hackathon was with <span className="text-foreground font-medium">Polygon</span>, and I went in with one mindset: <em className="text-foreground/80">&ldquo;I&apos;m going to win this.&rdquo;</em> Not because I was the most experienced person in the room — far from it. But because I was the most determined.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">A Complete Beginner, But Hungry</h2>
          <p>
            Let me be honest — I had very little experience with smart contracts at the time. The whole blockchain development world was still new to me. I didn&apos;t know Solidity inside-out. I couldn&apos;t write a DeFi protocol from scratch. But what I had was something that no tutorial can teach: <span className="text-foreground font-medium">raw dedication and an obsession with learning</span>.
          </p>

          <p>
            While others showed up casually, I showed up like my life depended on it. I studied the hackathon theme weeks before it started. I read every piece of documentation I could find about Polygon. I watched every workshop recording from previous editions. By the time the hackathon kicked off, I wasn&apos;t an expert — but I was <span className="text-foreground font-medium">prepared</span>.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Volunteering for the Hard Work</h2>
          <p>
            When teams were forming, I didn&apos;t sit back and wait to be picked. I actively volunteered — not for the easy tasks, but for the ones nobody else wanted. I took on the frontend work, the documentation, the testing, the demo preparation. Whatever the team needed, I raised my hand.
          </p>

          <p>
            Some of my teammates had more experience with smart contracts, and I learned from them in real-time. But I also contributed where I could — grinding on the UI, making sure every user flow worked smoothly, writing clear documentation that would impress the judges. In a hackathon, the person who does the unglamorous work is often the one who makes the difference.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Learning Under Pressure</h2>
          <p>
            The hackathon was an intense crash course. I was learning Solidity concepts at 2 AM, implementing them at 3 AM, and debugging at 4 AM. Every hour was a mini-lesson. I asked questions constantly — to my teammates, to mentors, to anyone who would listen.
          </p>

          <p>
            There were moments where I felt completely lost. Smart contract interactions that didn&apos;t make sense. Gas optimization techniques I&apos;d never heard of. But instead of pretending I understood, I admitted when I didn&apos;t know something and asked for help. That honesty made me a better team player and a faster learner.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Taking Every Task Seriously</h2>
          <p>
            One thing that set our team apart: we took <span className="text-foreground font-medium">every single task seriously</span>. While other teams focused only on the smart contract logic, we made sure the entire product was polished. The frontend was clean. The documentation was thorough. The demo was rehearsed multiple times. The pitch told a story.
          </p>

          <p>
            I personally handled the presentation slides and helped structure our pitch narrative. I made sure we didn&apos;t just show <em>what</em> we built, but <em>why</em> it mattered and <em>how</em> it worked. Judges don&apos;t just evaluate code — they evaluate the complete package.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Building a Working Product Together</h2>
          <p>
            The biggest advantage we had was <span className="text-foreground font-medium">teamwork</span>. We weren&apos;t a group of individuals working in silos — we were a unit. We communicated constantly, divided tasks based on strengths, helped each other debug, and made decisions together.
          </p>

          <p>
            When someone got stuck on a smart contract function, we pair-coded through it. When the frontend wasn&apos;t connecting properly to the blockchain, we troubleshot as a group. That collaborative energy is what turns a good idea into a <span className="text-foreground font-medium">working product</span> — and working products win hackathons.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Win</h2>
          <p>
            When they announced our team as the winners, I couldn&apos;t believe it. Not because I doubted our work — I knew we had given everything we had. But because just weeks before, I was a complete beginner who barely understood how smart contracts worked. And now I was standing on stage as a <span className="text-foreground font-medium">hackathon winner</span>.
          </p>

          <p>
            That moment taught me something I carry to this day: <span className="text-foreground font-medium">you don&apos;t need to be the smartest person in the room. You just need to be the most dedicated.</span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I Learned</h2>
          <ul className="space-y-3 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Dedication beats experience</strong> — I was a beginner who outworked people with more skills</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Volunteer for the hard tasks</strong> — doing what nobody else wants to do makes you invaluable</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Learn in real-time</strong> — hackathons are the best classroom; embrace the pressure</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Ask for help</strong> — admitting you don&apos;t know something is a strength, not a weakness</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Polish the whole product</strong> — judges evaluate the complete experience, not just code</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Teamwork is everything</strong> — a great team with okay skills beats a solo genius every time</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Show up determined</strong> — mindset is half the battle</span></li>
          </ul>

          <div className="p-6 border border-theme rounded-xl bg-card mt-8">
            <p className="text-foreground font-medium mb-2">💡 To anyone thinking about their first hackathon:</p>
            <p>
              You don&apos;t need years of experience. You don&apos;t need to know everything. You just need to show up with hunger, be willing to learn fast, do the work nobody else wants to do, and build as a team. That combination is more powerful than any technical skill.
            </p>
          </div>

          <p>
            Since that first Polygon hackathon, I&apos;ve gone on to win <span className="text-foreground font-medium">5+ more hackathons</span> — at{' '}
            <Link href="https://x.com/Bernard_O1/status/1828832827594682687" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Wormhole</Link>,{' '}
            <Link href="https://x.com/PrimordialAA/status/1993005650465767463" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">LayerZero</Link>,{' '}
            <Link href="https://x.com/Bernard_O1/status/1988845679691608069" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Base</Link>,{' '}
            <Link href="https://x.com/Bernard_O1/status/1990215252332384666" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Hyperliquid</Link>, and more. Each one taught me something new. But none of them hit quite like that first win. Because that was the moment I proved to myself that <span className="text-foreground font-medium">I belong here</span>.
          </p>

          <p className="text-foreground/70 italic text-lg">
            &ldquo;You don&apos;t have to be great to start. But you have to start to be great.&rdquo;
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
