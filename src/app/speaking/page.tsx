'use client'

import Link from 'next/link'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, ScaleUp, motion } from '@/components/motion'

const events = [
  {
    title: 'Base Batches 2.0 Hacker House',
    event: 'Web3Nova × Base',
    type: 'Hacker House',
    date: 'November 2025',
    location: 'Akure',
    attendees: '70+',
    description: 'Builders coming together to participate in the hackathon Base Batches 2.0.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'SUI on Campus FUTA Workshop',
    event: 'Web3Nova × SUI',
    type: 'Workshop',
    date: 'September 2025',
    location: 'FUTA, Akure',
    attendees: '80+',
    description: 'Introducing students to SUI blockchain technology, covering smart contracts and decentralized applications.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'Avax Builders Workshop',
    event: 'Web3Nova × Avalanche',
    type: 'Workshop',
    date: 'August 2025',
    location: 'FUTA, Akure',
    attendees: '40+',
    description: 'Introducing Avax L1 and NFTs, wrapping up with paint and sip.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'Farcaster Meetup',
    event: 'Web3Nova × Farcaster',
    type: 'Meetup',
    date: 'August 2025',
    location: 'Akure',
    attendees: '50+',
    description: 'Community gathering focused on the Farcaster protocol, exploring decentralized social networking.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'Avalanche Workshop',
    event: 'Web3Nova × Avalanche',
    type: 'Workshop',
    date: 'June 2025',
    location: 'Akure',
    attendees: '65+',
    description: 'Deep dive into Avalanche blockchain ecosystem, featuring subnet development and cross-chain capabilities.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'Base Batches 1.0 Hacker House',
    event: 'Web3Nova × Base',
    type: 'Hacker House',
    date: 'May 2025',
    location: 'Akure',
    attendees: '100+',
    description: 'Intensive hacker house event on Base L2 blockchain, bringing developers together to build innovative projects.',
    link: 'https://www.web3nova.org/events',
    youtube: 'https://www.youtube.com/watch?v=tA-YJ3KCFZU',
  },
  {
    title: 'DEVCON Workshop',
    event: 'Web3Nova',
    type: 'Workshop',
    date: 'February 2025',
    location: 'Akure',
    attendees: '70+',
    description: 'Post-DEVCON workshop sharing insights from the global Ethereum conference and protocol updates.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
  {
    title: 'Base Hacker Workshop',
    event: 'Web3Nova × Base',
    type: 'Workshop',
    date: 'October 2024',
    location: 'Akure',
    attendees: '60+',
    description: 'Introduction to building on Base — smart contract deployment, gas optimization, and integrating Base into Web3 applications.',
    link: 'https://www.web3nova.org/events',
    youtube: null,
  },
]

const workshopVideos = [
  {
    title: 'Transition From Web2 to Web3 — Connecting to the Blockchain',
    youtube: 'https://www.youtube.com/watch?v=kVoq_B6rncM',
  },
  {
    title: 'Web2 to Web3 PT 2 — Connect Using VIEM, WAGMI & THIRDWEB',
    youtube: 'https://www.youtube.com/watch?v=rZB06zhVi3g',
  },
  {
    title: 'BASE BATCHES — Bring Your Dream on Base',
    youtube: 'https://www.youtube.com/watch?v=tA-YJ3KCFZU',
  },
  {
    title: 'Giza & Enzymes Hackathon',
    youtube: 'https://www.youtube.com/watch?v=JJHoVg3ofOw',
  },
  {
    title: 'Scaling Web3 Hackathon — Infinity',
    youtube: 'https://www.youtube.com/watch?v=wYMxq2r00ic',
  },
  {
    title: 'ETHGlobal Hackathon',
    youtube: 'https://www.youtube.com/watch?v=vXIt3f-9RLQ',
  },
]

const topics = [
  'Smart Contract Development',
  'Cross-chain & Interoperability',
  'DeFi Architecture',
  'Developer Onboarding',
  'Building on Base',
  'Stacks & Bitcoin L2',
  'SUI Blockchain',
  'Avalanche Ecosystem',
  'Farcaster & SocialFi',
  'Web3 in Africa',
  'Community Building',
  'Hackathon Strategy',
  'DevRel Best Practices',
]

const communities = [
  {
    name: 'Web3Nova',
    role: 'Founder',
    description: 'Building the next generation of Web3 builders in Africa through education, mentorship, and hands-on development.',
    link: 'https://www.web3nova.org',
    members: '500+',
  },
  {
    name: 'Based West Africa',
    role: 'Community Builder',
    description: 'Growing the Base blockchain ecosystem across West Africa — connecting developers, entrepreneurs, and innovators.',
    link: 'https://x.com/BasedWestAfrica',
    members: '1K+',
  },
  {
    name: 'Onchain Global',
    role: 'Developer Advocate',
    description: 'Leading developer education initiatives, creating content, and conducting workshops for onchain builders worldwide.',
    link: 'https://web.telegram.org/k/#@onchainbuilders',
    members: '2K+',
  },
  {
    name: 'Polygon Africa',
    role: 'Community Lead (2021-2023)',
    description: 'Grew and managed Polygon developer communities, organized events and educational programs across Africa.',
    link: 'https://polygon.technology/',
    members: '3K+',
  },
]

const totalAttendees = events.reduce((sum, e) => sum + parseInt(e.attendees), 0)

const impactStats = [
  { value: '200+', label: 'Developers Onboarded' },
  { value: `${events.length}+`, label: 'Events Organized' },
  { value: `${totalAttendees}+`, label: 'Total Attendees' },
  { value: '5+', label: 'Communities Built' },
]

const typeColors: Record<string, string> = {
  'Workshop': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Hacker House': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Meetup': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Talk': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function Speaking() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        {/* Hero */}
        <div>
          <BlurFade>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">DevRel</p>
          </BlurFade>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-heading mb-4">Speaking & Community</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              Workshops, hacker houses, and community building — helping developers go from zero to onchain across Africa.
            </p>
          </FadeUp>

          {/* Impact stats */}
          <FadeUp delay={0.3}>
            <div className="flex gap-8 mt-6 pt-6 border-t border-theme">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-2xl font-heading text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Communities */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Communities</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {communities.map((community) => (
              <StaggerItem key={community.name}>
                <motion.div
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group p-6 border border-theme rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                          {community.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                          {community.role}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mt-2">{community.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-heading text-foreground">{community.members}</p>
                      <p className="text-[10px] text-muted uppercase tracking-wide">Members</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-theme/50">
                    <Link
                      href={community.link}
                      className="text-xs text-muted hover:text-accent transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join community
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Events & Talks */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-heading text-foreground">Events & Workshops</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>
          <FadeUp delay={0.1}>
            <p className="text-muted text-sm mb-8">
              Organized and spoke at {events.length}+ events with {totalAttendees}+ total attendees.{' '}
              <Link href="https://www.web3nova.org/events" className="link-dotted text-accent" target="_blank" rel="noopener noreferrer">
                See all events ↗
              </Link>
            </p>
          </FadeUp>

          <div className="space-y-4 relative">
            {/* Timeline */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent"
            />

            {events.map((talk, index) => (
              <FadeUp key={index} delay={index * 0.06}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="pl-6 relative group"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 + 0.2, type: 'spring', stiffness: 500 }}
                    className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-accent border-2"
                    style={{ borderColor: 'var(--bg)' }}
                  />

                  <div className="p-5 border border-theme rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                          {talk.title}
                        </h3>
                        <p className="text-xs text-muted mt-0.5">{talk.event} · {talk.date} · {talk.location}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06 + 0.3, type: 'spring', stiffness: 500 }}
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${typeColors[talk.type] || typeColors['Talk']}`}
                        >
                          {talk.type}
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06 + 0.35, type: 'spring', stiffness: 500 }}
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-foreground/5 text-foreground/60 border border-theme"
                        >
                          {talk.attendees}
                        </motion.span>
                      </div>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{talk.description}</p>
                    {talk.youtube && (
                      <Link
                        href={talk.youtube}
                        className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Watch on YouTube
                      </Link>
                    )}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Link to tweet */}
          <FadeUp delay={0.2}>
            <div className="mt-6 pl-6">
              <Link
                href="https://x.com/bernard_o1/status/1961746638298321113"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                See more event highlights on X ↗
              </Link>
            </div>
          </FadeUp>
        </section>

        {/* Workshop Videos */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Workshop Videos</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <StaggerContainer className="grid gap-3 md:grid-cols-2" staggerDelay={0.08}>
            {workshopVideos.map((video) => (
              <StaggerItem key={video.youtube}>
                <Link
                  href={video.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="group flex items-center gap-3 p-4 border border-theme rounded-lg hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-red-400 transition-colors truncate">
                        {video.title}
                      </p>
                      <p className="text-[11px] text-muted">YouTube</p>
                    </div>
                    <svg className="w-4 h-4 text-muted group-hover:text-red-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3}>
            <div className="mt-4 text-center">
              <Link
                href="https://www.youtube.com/@Bernard_O1"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                View all videos on YouTube ↗
              </Link>
            </div>
          </FadeUp>
        </section>

        {/* Topics */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Topics I Speak On</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Protocols banner */}
        <section>
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-heading text-foreground">Protocols & Partners</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {['Base', 'Avalanche', 'Farcaster', 'SUI', 'Lisk', 'Polygon', 'Wormhole', 'LayerZero', 'Hyperliquid'].map((protocol, i) => (
                <motion.span
                  key={protocol}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm font-medium bg-card border border-theme rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default"
                >
                  {protocol}
                </motion.span>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* CTA */}
        <ScaleUp>
          <div className="p-8 border border-theme rounded-2xl text-center hover:border-accent/30 transition-all duration-500">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-heading text-foreground mb-2">Want me to speak at your event?</h3>
              <p className="text-muted text-sm mb-6 max-w-md mx-auto">
                I&apos;m available for workshops, talks, hacker houses, and community events — especially around blockchain development and Web3 in Africa.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href="mailto:bernard@web3nova.org"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-accent/20"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                <Link
                  href="https://calendly.com/bernard-web3nova/30min"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme hover:border-accent/50 text-muted hover:text-accent transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call ↗
                </Link>
              </div>
            </motion.div>
          </div>
        </ScaleUp>
      </div>
    </div>
  )
}
