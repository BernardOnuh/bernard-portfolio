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
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">How I Attended My First Web3 Event</h1>
          <p className="text-sm text-muted">February 2026 · 8 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            Before my first Web3 event, blockchain was just charts, tokens, and trading to me. I had no idea how much bigger this space really was — or how much one invitation would change the entire direction of my life.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Invitation That Changed Everything</h2>
          <p>
            It started with a message from <span className="text-foreground font-medium">Xeus the Great</span>. He invited me to come learn about blockchain — not online, not through a Twitter Space, but <em className="text-foreground/80">physically</em>. In person. Face to face. At the time, I&apos;d been deep in the crypto trading world, watching charts and chasing pumps like everyone else. But Xeus said this event was different. It was about <span className="text-foreground font-medium">building</span>.
          </p>

          <p>
            I almost didn&apos;t go. I thought, <em className="text-foreground/80">&ldquo;What do I need a physical event for? I can learn everything online.&rdquo;</em> That was one of the most wrong assumptions I&apos;ve ever made.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Walking Into a New World</h2>
          <p>
            The moment I walked into that room, I felt the energy. These weren&apos;t traders staring at candlestick charts. These were <span className="text-foreground font-medium">builders</span> — people writing smart contracts, designing protocols, creating tools, and thinking about how blockchain could solve real problems. The conversations weren&apos;t about &ldquo;what coin is pumping&rdquo; — they were about architecture, user experience, decentralization, and impact.
          </p>

          <p>
            It was like discovering a whole new dimension of crypto that I didn&apos;t even know existed. And I was hooked instantly.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Meeting My People</h2>
          <p>
            That event was where I met some of the people who would become my closest friends and collaborators in the space. For the first time, I was shaking hands with people I&apos;d only known as Twitter handles:
          </p>

          <ul className="space-y-3 pl-4">
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Richard</span>
              <span>— One of the first builders I connected with. We bounced ideas off each other and pushed each other to keep learning.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Temmy</span>
              <span>— Brought a different perspective to everything. Conversations with Temmy always left me thinking bigger.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Noah Ark</span>
              <span>— A creative mind in the space. Meeting Noah showed me how diverse the Web3 builder community really is.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 font-bold">Veetor</span>
              <span>— A real one. The kind of person who shows up, puts in the work, and inspires everyone around them.</span>
            </li>
          </ul>

          <p>
            And there were many more — developers, designers, community builders, all gathered in one place with the same vision. These weren&apos;t just networking connections. These became <span className="text-foreground font-medium">real friendships</span> that have lasted years.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Seeing Beyond Trading</h2>
          <p>
            This was the biggest shift for me. Before that event, Web3 was synonymous with <em className="text-foreground/80">trading</em> in my mind. Buy low, sell high, watch charts, follow signals. That&apos;s what most people in my circle were doing.
          </p>

          <p>
            But at this event, I saw the full picture for the first time:
          </p>

          <ul className="space-y-2 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Smart contract development</strong> — people were building financial systems from scratch</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Community building</strong> — growing ecosystems, onboarding developers, creating content</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Developer relations</strong> — a whole career path I didn&apos;t know existed</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Hackathons</strong> — competitions where builders win real money for solving problems</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Grants & funding</strong> — protocols paying builders to create tools and infrastructure</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Freelancing</strong> — companies hiring smart contract developers at premium rates</span></li>
          </ul>

          <p>
            I realized that Web3 wasn&apos;t just about making money from price movements. It was about <span className="text-foreground font-medium">building the future of the internet</span> — and there were opportunities everywhere for people willing to learn and create.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Spark That Started Everything</h2>
          <p>
            I left that event a different person. On the bus ride home, I made a decision: I was going to learn how to build. Not just trade, not just speculate — <span className="text-foreground font-medium">build</span>. I opened my laptop and started my first Solidity tutorial that same night.
          </p>

          <p>
            Within months, I was writing smart contracts. Within a year, I was winning hackathons. Within two years, I was leading communities at Polygon Africa. And now, through <span className="text-foreground font-medium">Web3Nova</span>, I&apos;m creating the same experience for hundreds of other developers — because I know firsthand how one event can change a trajectory.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I Learned</h2>
          <ul className="space-y-3 pl-4">
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Physical events hit different</strong> — online learning is great, but in-person connections create bonds that last</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Say yes to invitations</strong> — the event you almost skip could be the one that changes your life</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Web3 is bigger than trading</strong> — building, community, DevRel, design, content — the opportunities are endless</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Your network is your net worth</strong> — the friends I made at that first event are still my collaborators today</span></li>
            <li className="flex items-start"><span className="text-accent mr-2">·</span><span><strong className="text-foreground">Be the invitation for others</strong> — once you see the light, bring others into it</span></li>
          </ul>

          <div className="p-6 border border-theme rounded-xl bg-card mt-8">
            <p className="text-foreground font-medium mb-2">🙏 Shoutout to Xeus the Great</p>
            <p>
              None of this would have happened without that one invitation. Sometimes the biggest gift you can give someone is just saying, <em className="text-foreground/80">&ldquo;Hey, come check this out.&rdquo;</em> Xeus did that for me, and it changed everything. If you know someone who&apos;s curious about Web3, invite them to your next event. You might change their life too.
            </p>
          </div>

          <p className="text-foreground/70 italic text-lg">
            &ldquo;The people you meet at your first event become the people you build the future with.&rdquo;
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
