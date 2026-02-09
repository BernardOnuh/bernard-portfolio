'use client'

import Link from 'next/link'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, ScaleUp, motion } from '@/components/motion'

const talks = [
  {
    title: 'Building Cross-Chain Applications with Wormhole',
    event: 'Wormhole Hackathon',
    type: 'Workshop',
    date: '2024',
    description: 'Hands-on workshop on building cross-chain dApps using Wormhole\'s messaging protocol for seamless multi-chain communication.',
    link: 'https://x.com/Bernard_O1/status/1828832827594682687',
  },
  {
    title: 'Getting Started with Smart Contracts on Stacks',
    event: 'Web3Nova Workshop',
    type: 'Workshop',
    date: '2024',
    description: 'Developer workshop covering Clarity smart contract development, testing, and deployment on the Stacks blockchain.',
    link: '#',
  },
  {
    title: 'Onchain Summer: Building on Base',
    event: 'Based West Africa Meetup',
    type: 'Talk',
    date: '2024',
    description: 'Community talk on the Base ecosystem, building consumer-facing dApps, and the Onchain Summer initiative in Africa.',
    link: 'https://x.com/BasedWestAfrica',
  },
  {
    title: 'Introduction to DeFi Development',
    event: 'Onchain Global Workshop',
    type: 'Workshop',
    date: '2023',
    description: 'Beginner-friendly workshop teaching DeFi fundamentals — AMMs, lending protocols, and building your first DeFi dApp.',
    link: 'https://web.telegram.org/k/#@onchainbuilders',
  },
  {
    title: 'Polygon for African Developers',
    event: 'Polygon Africa Summit',
    type: 'Talk',
    date: '2022',
    description: 'Keynote on Polygon\'s ecosystem, Layer 2 scaling solutions, and opportunities for African developers in the Polygon ecosystem.',
    link: 'https://polygon.technology/',
  },
  {
    title: 'From Zero to Smart Contract Developer',
    event: 'Polygon Africa Bootcamp',
    type: 'Workshop Series',
    date: '2022',
    description: 'Multi-week bootcamp taking developers from JavaScript basics to deploying production smart contracts on Polygon.',
    link: 'https://polygon.technology/',
  },
]

const topics = [
  'Smart Contract Development',
  'Cross-chain & Interoperability',
  'DeFi Architecture',
  'Developer Onboarding',
  'Building on Base',
  'Stacks & Bitcoin L2',
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
    link: 'https://x.com/web3_nova',
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

const impactStats = [
  { value: '200+', label: 'Developers Onboarded' },
  { value: '20+', label: 'Workshops Delivered' },
  { value: '5+', label: 'Communities Built' },
  { value: '10K+', label: 'Community Members' },
]

const typeColors: Record<string, string> = {
  'Workshop': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Talk': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Workshop Series': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
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
              Workshops, talks, and community building — helping developers go from zero to onchain across Africa and beyond.
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

        {/* Talks & Workshops */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Talks & Workshops</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <div className="space-y-4 relative">
            {/* Timeline */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent"
            />

            {talks.map((talk, index) => (
              <FadeUp key={index} delay={index * 0.08}>
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
                    transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 500 }}
                    className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-accent border-2"
                    style={{ borderColor: 'var(--bg)' }}
                  />

                  <div className="p-5 border border-theme rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                          {talk.title}
                        </h3>
                        <p className="text-xs text-muted mt-0.5">{talk.event} · {talk.date}</p>
                      </div>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + 0.3, type: 'spring', stiffness: 500 }}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium border shrink-0 ${typeColors[talk.type] || typeColors['Talk']}`}
                      >
                        {talk.type}
                      </motion.span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{talk.description}</p>
                    {talk.link && talk.link !== '#' && (
                      <Link
                        href={talk.link}
                        className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View details
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
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
                I&apos;m available for workshops, talks, panels, and community events — especially around blockchain development and Web3 in Africa.
              </p>
              <div className="flex items-center justify-center gap-4">
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
