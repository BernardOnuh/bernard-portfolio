import Link from 'next/link'

const projects = [
  {
    name: 'Aboki',
    emoji: '💱',
    description: 'Crypto-to-fiat conversion platform enabling seamless swaps between digital assets and Nigerian Naira with real-time rates.',
    tech: ['Next.js', 'TypeScript', 'DeFi', 'Payments'],
    github: 'https://github.com/BernardOnuh/Aboki-V2-Frontend',
    demo: '#',
    featured: true,
    color: 'cyan',
  },
  {
    name: 'Bizflip',
    emoji: '🏪',
    description: 'Decentralized business marketplace platform with smart contract escrow for buying, selling, and flipping digital businesses.',
    tech: ['Next.js', 'Solidity', 'Smart Contracts'],
    github: 'https://github.com/BernardOnuh/Bizflip-Frontend',
    demo: '#',
    featured: true,
    color: 'purple',
  },
  {
    name: 'STX Ramp',
    emoji: '🚀',
    description: 'STX/USDC to NGN On-Ramp & Off-Ramp solution for seamless fiat-to-crypto conversion in Nigeria.',
    tech: ['TypeScript', 'Next.js', 'Stacks Blockchain'],
    github: 'https://github.com/BernardOnuh/stx-ramp',
    demo: 'https://stx-ramp.vercel.app',
    featured: true,
    color: 'orange',
  },
  {
    name: 'Zap Amadi',
    emoji: '⚡',
    description: 'Crypto-to-fiat dApp built for the Base Onchain Summer Buildathon — seamless conversion powered by Base.',
    tech: ['TypeScript', 'Base', 'Onchain'],
    github: 'https://github.com/BernardOnuh/zap-Amadi',
    demo: '#',
    featured: true,
    color: 'blue',
  },
  {
    name: 'LinguaLink',
    emoji: '🌍',
    description: 'AI-powered translation and language learning platform bridging communication gaps across Africa.',
    tech: ['TypeScript', 'Next.js', 'AI'],
    github: 'https://github.com/BernardOnuh/LinguaLink-New',
    demo: '#',
    featured: true,
    color: 'green',
  },
  {
    name: 'Future Edge',
    emoji: '📈',
    description: 'Telegram trading bot for automated crypto trading strategies with real-time market analysis.',
    tech: ['Python', 'Telegram Bot', 'Trading'],
    github: 'https://github.com/BernardOnuh/futureTg',
    demo: null,
    featured: false,
    color: 'cyan',
  },
  {
    name: 'Refuel Bot',
    emoji: '⛽',
    description: 'Automated Telegram bot for DeFi operations — gas refueling, token swaps, and portfolio management.',
    tech: ['TypeScript', 'Telegram Bot', 'DeFi'],
    github: 'https://github.com/BernardOnuh/Hurryfibot',
    demo: null,
    featured: false,
    color: 'orange',
  },
  {
    name: 'STX Portfolio Tracker',
    emoji: '📊',
    description: 'Web app and Chrome extension for monitoring multiple STX addresses, tracking balances and portfolio value.',
    tech: ['JavaScript', 'Chrome Extension', 'Stacks API'],
    github: 'https://github.com/BernardOnuh/STX-Portfolio-Tracker',
    demo: 'https://stxportfoliotracker.vercel.app',
    featured: false,
    color: 'purple',
  },
  {
    name: 'Hyperliquid Hackathon',
    emoji: '🏆',
    description: 'Project built at the Staking Summit Buenos Aires 2025 hackathon on Hyperliquid.',
    tech: ['TypeScript', 'Hyperliquid', 'DeFi'],
    github: 'https://github.com/BernardOnuh/hyperliquid-hackathon-ba-25',
    demo: null,
    featured: false,
    color: 'green',
  },
  {
    name: 'StackSend',
    emoji: '📨',
    description: 'Multisend dApp on Stacks Network — batch token transfers to multiple addresses in one transaction.',
    tech: ['TypeScript', 'Stacks', 'Web3'],
    github: 'https://github.com/BernardOnuh/stacksend',
    demo: 'https://stacksend.xyz',
    featured: false,
    color: 'blue',
  },
  {
    name: 'StacksFlow Bridge',
    emoji: '🌉',
    description: 'Cross-chain bridge connecting Stacks with other blockchain networks for seamless asset transfers.',
    tech: ['TypeScript', 'Cross-chain', 'Bridge'],
    github: 'https://github.com/BernardOnuh/stacksflow',
    demo: 'https://stacksbridge.vercel.app',
    featured: false,
    color: 'cyan',
  },
  {
    name: 'StableFlow',
    emoji: '💧',
    description: 'Stablecoin liquidity protocol with yield farming and automated market making on Stacks.',
    tech: ['JavaScript', 'DeFi', 'AMM'],
    github: 'https://github.com/BernardOnuh/stable-flow',
    demo: 'https://stable-flow.vercel.app',
    featured: false,
    color: 'purple',
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  cyan: {
    border: 'group-hover:border-cyan-500/60',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  purple: {
    border: 'group-hover:border-purple-500/60',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/10',
  },
  orange: {
    border: 'group-hover:border-orange-500/60',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/10',
  },
  blue: {
    border: 'group-hover:border-blue-500/60',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/10',
  },
  green: {
    border: 'group-hover:border-emerald-500/60',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/10',
  },
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const colors = colorMap[project.color] || colorMap.cyan

  return (
    <div
      className={`group relative border border-theme rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl ${colors.border} ${colors.glow} hover:-translate-y-1`}
    >
      {/* Number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-card border border-theme flex items-center justify-center text-xs font-mono text-muted">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.emoji}</span>
            <div>
              <h3 className="text-xl font-heading text-foreground group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <Link
              href={project.github}
              className="p-2 rounded-lg hover:bg-card border border-transparent hover:border-theme transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code"
            >
              <GitHubIcon className="w-5 h-5" />
            </Link>
            {project.demo && project.demo !== '#' && (
              <Link
                href={project.demo}
                className="p-2 rounded-lg hover:bg-card border border-transparent hover:border-theme transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
              >
                <ExternalIcon className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed text-[15px]">
          {project.description}
        </p>

        {/* Tech + Links row */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full border border-theme ${colors.bg} ${colors.text} transition-all duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={project.github}
            className="text-xs text-muted hover:text-accent transition-colors whitespace-nowrap flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CompactCard({ project }: { project: typeof projects[0] }) {
  const colors = colorMap[project.color] || colorMap.cyan

  return (
    <Link
      href={project.github}
      className={`group relative block border border-theme rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${colors.border} ${colors.glow} hover:-translate-y-0.5`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Emoji float */}
      <span className="absolute -top-2.5 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1">
        {project.emoji}
      </span>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-base">{project.emoji}</span>
            <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          <div className="flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
            <GitHubIcon className="w-4 h-4" />
            {project.demo && project.demo !== '#' && (
              <ExternalIcon className="w-4 h-4" />
            )}
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-medium rounded-full border border-theme bg-card text-muted group-hover:border-accent/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        {/* Hero */}
        <div>
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-heading mb-4">Projects</h1>
          <p className="text-muted text-lg leading-relaxed max-w-xl">
            Blockchain apps, smart contracts, and Web3 tools — built to solve real problems.
          </p>
          {/* Stats bar */}
          <div className="flex gap-8 mt-6 pt-6 border-t border-theme">
            <div>
              <p className="text-2xl font-heading text-foreground">{projects.length}</p>
              <p className="text-xs text-muted uppercase tracking-wide">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-heading text-foreground">{featuredProjects.length}</p>
              <p className="text-xs text-muted uppercase tracking-wide">Featured</p>
            </div>
            <div>
              <p className="text-2xl font-heading text-foreground">5+</p>
              <p className="text-xs text-muted uppercase tracking-wide">Chains</p>
            </div>
          </div>
        </div>

        {/* Featured */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-heading text-foreground">Featured</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-heading text-foreground">More Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <CompactCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="https://github.com/BernardOnuh"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme hover:border-accent/50 text-muted hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-4 h-4" />
            View all projects on GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
