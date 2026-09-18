'use client'

import Link from 'next/link'
import { FadeUp, BlurFade, motion } from '@/components/motion'

export default function Post() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "I Didn't Find My Purpose. I Built It.",
    description: 'The breakthrough I was waiting for wasn\'t a moment  it was Web3Nova. Part 2 of Finding My Purpose.',
    author: { '@type': 'Person', name: 'Bernard Onuh', url: 'https://www.bernardblockchain.xyz' },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    url: 'https://www.bernardblockchain.xyz/blog/finding-my-purpose-2',
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
            <span className="text-4xl">🔥</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-orange-500/10 text-orange-400 border-orange-500/20">Reflections</span>
          </div>
          <p className="text-xs text-accent font-medium tracking-wider uppercase mb-2">Finding My Purpose · Part 2</p>
          <h1 className="text-3xl md:text-4xl font-heading mb-3 leading-tight">I Didn&apos;t Find My Purpose. I Built It.</h1>
          <p className="text-sm text-muted">September 2026 · 9 min read</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="prose-custom space-y-6 text-muted leading-relaxed text-base md:text-[17px]">

          <p className="text-lg text-foreground/90 italic border-l-2 border-accent pl-4">
            Months ago I asked myself a question I couldn&apos;t answer: what is my purpose? Is it Web3Nova  or is there something else? I was so confused. But God directed me, and now I know: Web3Nova is an essential part of my purpose. But it&apos;s not the end. It&apos;s a stepping stone.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Question That Wouldn&apos;t Leave Me</h2>
          <p>
            In <Link href="/blog/finding-my-purpose" className="text-accent hover:underline font-medium">Finding My Purpose</Link>  Part 1 of this series  I admitted the raw truth: I felt stuck. Running in circles. Waiting for a breakthrough that wouldn&apos;t come. And underneath all of it was one question I kept circling back to: <em className="text-foreground/80">What am I actually here to do?</em>
          </p>
          <p>
            Is it Web3Nova? Is something else waiting for me? I went back and forth for months. Building one week, doubting the next. Then, through prayer and reflection, God gave me clarity: Web3Nova is an essential part of my purpose  but not the whole of it. It&apos;s the vehicle. The stepping stone. The place where the real work begins.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I Always Told My Students</h2>
          <p>
            For two years, students have walked through Web3Nova&apos;s doors to learn. And there&apos;s one thing I&apos;ve emphasized to every single one of them  the same thing every time:
          </p>
          <p className="text-lg text-foreground/90 italic border-l-2 border-accent pl-4">
            I don&apos;t want you to learn and not practice. The money  and my joy  is in you using whatever you learned from me to make a living for yourself.
          </p>
          <p>
            That was the whole vision. Not to collect attendance. Not to look good on stage. To build a community that would push each other to be successful against every obstacle and every odd. I wanted a family that refuses to stay down. <span className="text-foreground font-medium">People who take what they learn and turn it into income, into life, into their own wins.</span>
          </p>
          <p>
            Today, I look back and I can say: <span className="text-foreground font-medium">a part of that has already been achieved.</span> And the proof came knocking this month  in a phone call, a MacBook, and a party I never expected to cry at.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Call That Melted My Heart</h2>
          <p>
            Last week, a lady called me, and she was glowing with happiness. &ldquo;Mr. Bernard, I bought a new laptop. I paid 600,000 Naira for it  from the money I made from building.&rdquo;
          </p>
          <p>
            She said it so proudly. And my heart melted.
          </p>
          <p>
            I remember her from day one  back when she had nothing. The days she showed up and I could see she was struggling to get something out of all this. She kept showing up anyway. And now? Her own laptop, bought by her own skill, paid for by the act of building. <span className="text-foreground font-medium">That was never going to happen to someone who just learned. That&apos;s what happens when you learn <em className="text-foreground/80">and practice.</em></span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The First MacBook</h2>
          <p>
            Not long after, another one of my people came to see me  beaming  with his <span className="text-foreground font-medium">first MacBook</span>. Bought it with cash from a hackathon he won. $2,000.
          </p>
          <p>
            A year ago, this same guy was sitting somewhere trying to make sense of how development could ever become a living for him. Today, he&apos;s not asking whether it&apos;s possible. He&apos;s already spending the money it made. I was so proud of the growth I couldn&apos;t even find words. <span className="text-foreground font-medium">One year. From confusion to a MacBook. That&apos;s the whole journey in one picture.</span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Day They Made Me Cry</h2>
          <p>
            I had a couple of interns  I was showing them how to build. Teaching, reviewing, encouraging, grinding with them through the hard parts. And at some point, one of them joked: &ldquo;The day we win a hackathon, Mr. Bernard will dance.&rdquo;
          </p>
          <p>
            We laughed. It became our inside thing.
          </p>
          <p>
            Then that day came. <span className="text-foreground font-medium">They won.</span>
          </p>
          <p>
            I didn&apos;t dance. I cried. Tears fell through my eyes  not because I&apos;m soft, but because in that moment I saw it all: every meeting, every nudge to keep going, every &ldquo;you can do it&rdquo; when they wanted to quit  <span className="text-foreground font-medium">none of it was wasted.</span> They proved it on a stage, in front of judges, with their own work. I blessed God for that moment.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">The Best Birthday Gift</h2>
          <p>
            Somewhere in the middle of all this  the call about the laptop, the MacBook, the first win  it hit me. God just gave me the best birthday gift I ever wished for: <span className="text-foreground font-medium">a month where my people won.</span>
          </p>
          <p>
            And this is just one of many. The fruits are still on the tree.
          </p>
          <p>
            That&apos;s when it all made sense. The purpose I was confused about for months was never a mystery  it was unfolding right in front of me the whole time. Not as a title. Not as a job offer. <span className="text-foreground font-medium">As people.</span>
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Part of My Purpose: Making the Impossible Possible</h2>
          <p>
            So here&apos;s what I know now, looking back at the last two years:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>Web3Nova is an <span className="text-foreground font-medium">essential part</span> of my purpose  but not the end of it. It&apos;s the stepping stone that takes me  and my people  to what&apos;s next.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>My joy was never in teaching. It&apos;s in watching what my students <em className="text-foreground/80">do</em> with it. Money made, laptops bought, hackathons won  <span className="text-foreground font-medium">that&apos;s the proof.</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              <span>My purpose is <span className="text-foreground font-medium">making the impossible possible.</span> For the girl with nothing who bought a 600,000 Naira laptop. For the guy who went from confusion to a MacBook in one year. For the interns who made me cry on their win day.</span>
            </li>
          </ul>
          <p>
            I&apos;m not &ldquo;stuck&rdquo; anymore. I was never moving in circles  I was building in them. And now I know the direction: <span className="text-foreground font-medium">keep building people, keep building products, keep making the impossible possible.</span>
          </p>
          <p className="text-lg text-foreground/90 italic border-l-2 border-accent pl-4">
            I spent months searching for my purpose. Turns out, I was living it every day  one student, one win, one prayer away from it clicking.
          </p>

          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 mt-8">
            <h3 className="text-foreground font-heading text-lg mb-2">✅ Promise Kept</h3>
            <p className="text-sm">
              In March 2026, I promised to come back and update my post  either with the breakthrough or the lessons. This is the breakthrough. Read <Link href="/blog/finding-my-purpose" className="text-accent hover:underline font-medium">Part 1</Link> to see where this started.
            </p>
            <p className="text-sm mt-3 text-muted">
              <em>Published: September 2026</em>
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
          <Link href="/blog/finding-my-purpose" className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Part 1: Finding My Purpose
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