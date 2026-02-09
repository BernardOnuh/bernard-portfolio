'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, ScaleUp, motion } from '@/components/motion'

const projects = [
  {
    name: 'Aboki',
    description: 'Crypto-to-fiat conversion platform enabling seamless swaps between digital assets and Nigerian Naira with real-time rates.',
    tech: ['Next.js', 'TypeScript', 'DeFi', 'Payments'],
    github: 'https://github.com/BernardOnuh/Aboki-V2-Frontend',
    demo: '#',
    featured: true,
    color: 'cyan',
    logo: '/logos/aboki.jpg',
    fallbackLetter: 'A',
  },
  {
    name: 'Bizflip',
    description: 'Decentralized business marketplace platform with smart contract escrow for buying, selling, and flipping digital businesses.',
    tech: ['Next.js', 'Solidity', 'Smart Contracts'],
    github: 'https://github.com/BernardOnuh/Bizflip-Frontend',
    demo: '#',
    featured: true,
    color: 'purple',
    logo: '/logos/bizflip.webp',
    fallbackLetter: 'B',
  },
  {
    name: 'STX Ramp',
    description: 'STX/USDC to NGN On-Ramp & Off-Ramp solution for seamless fiat-to-crypto conversion in Nigeria.',
    tech: ['TypeScript', 'Next.js', 'Stacks Blockchain'],
    github: 'https://github.com/BernardOnuh/stx-ramp',
    demo: 'https://stx-ramp.vercel.app',
    featured: true,
    color: 'orange',
    logo: '/logos/stacks.jpg',
    fallbackLetter: 'S',
  },
  {
    name: 'Zap Amadi',
    description: 'Crypto-to-fiat dApp built for the Base Onchain Summer Buildathon — seamless conversion powered by Base.',
    tech: ['TypeScript', 'Base', 'Onchain'],
    github: 'https://github.com/BernardOnuh/zap-Amadi',
    demo: '#',
    featured: true,
    color: 'blue',
    logo: 'https://avatars.githubusercontent.com/u/108554348?s=200&v=4',
    fallbackLetter: 'Z',
  },
  {
    name: 'LinguaLink',
    description: 'AI-powered translation and language learning platform bridging communication gaps across Africa.',
    tech: ['TypeScript', 'Next.js', 'AI'],
    github: 'https://github.com/BernardOnuh/LinguaLink-New',
    demo: '#',
    featured: true,
    color: 'green',
    logo: '/logos/lingualink.webp',
    fallbackLetter: 'L',
  },
  {
    name: 'Future Edge',
    description: 'Telegram trading bot for automated crypto trading strategies with real-time market analysis.',
    tech: ['Python', 'Telegram Bot', 'Trading'],
    github: 'https://github.com/BernardOnuh/futureTg',
    demo: null,
    featured: false,
    color: 'cyan',
    logo: '/logos/futureedge.webp',
    fallbackLetter: 'F',
  },
  {
    name: 'Refuel Bot',
    description: 'Automated Telegram bot for DeFi operations — gas refueling, token swaps, and portfolio management.',
    tech: ['TypeScript', 'Telegram Bot', 'DeFi'],
    github: 'https://github.com/BernardOnuh/Hurryfibot',
    demo: null,
    featured: false,
    color: 'orange',
    logo: '/logos/refuel.jpg',
    fallbackLetter: 'R',
  },
  {
    name: 'STX Portfolio Tracker',
    description: 'Web app and Chrome extension for monitoring multiple STX addresses, tracking balances and portfolio value.',
    tech: ['JavaScript', 'Chrome Extension', 'Stacks API'],
    github: 'https://github.com/BernardOnuh/STX-Portfolio-Tracker',
    demo: 'https://stxportfoliotracker.vercel.app',
    featured: false,
    color: 'purple',
    logo: '/logos/stacks.jpg',
    fallbackLetter: 'P',
  },
  {
    name: 'Hyperliquid Hackathon',
    description: 'Project built at the Staking Summit Buenos Aires 2025 hackathon on Hyperliquid.',
    tech: ['TypeScript', 'Hyperliquid', 'DeFi'],
    github: 'https://github.com/BernardOnuh/hyperliquid-hackathon-ba-25',
    demo: null,
    featured: false,
    color: 'green',
    fallbackLetter: 'H',
  },
  {
    name: 'StackSend',
    description: 'Multisend dApp on Stacks Network — batch token transfers to multiple addresses in one transaction.',
    tech: ['TypeScript', 'Stacks', 'Web3'],
    github: 'https://github.com/BernardOnuh/stacksend',
    demo: 'https://stacksend.xyz',
    featured: false,
    color: 'blue',
    logo: '/logos/stacks.jpg',
    fallbackLetter: 'S',
  },
  {
    name: 'StacksFlow Bridge',
    description: 'Cross-chain bridge connecting Stacks with other blockchain networks for seamless asset transfers.',
    tech: ['TypeScript', 'Cross-chain', 'Bridge'],
    github: 'https://github.com/BernardOnuh/stacksflow',
    demo: 'https://stacksbridge.vercel.app',
    featured: false,
    color: 'cyan',
    logo: '/logos/stacks.jpg',
    fallbackLetter: 'F',
  },
  {
    name: 'StableFlow',
    description: 'Stablecoin liquidity protocol with yield farming and automated market making on Stacks.',
    tech: ['JavaScript', 'DeFi', 'AMM'],
    github: 'https://github.com/BernardOnuh/stable-flow',
    demo: 'https://stable-flow.vercel.app',
    featured: false,
    color: 'purple',
    logo: '/logos/usdc.png',
    fallbackLetter: 'S',
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; solid: string }> = {
  cyan: {
    border: 'group-hover:border-cyan-500/60',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/10',
    solid: 'bg-cyan-500',
  },
  purple: {
    border: 'group-hover:border-purple-500/60',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/10',
    solid: 'bg-purple-500',
  },
  orange: {
    border: 'group-hover:border-orange-500/60',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/10',
    solid: 'bg-orange-500',
  },
  blue: {
    border: 'group-hover:border-blue-500/60',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/10',
    solid: 'bg-blue-500',
  },
  green: {
    border: 'group-hover:border-emerald-500/60',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/10',
    solid: 'bg-emerald-500',
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

function ProjectLogo({ project, size = 40 }: { project: typeof projects[0]; size?: number }) {
  const colors = colorMap[project.color] || colorMap.cyan

  if (project.logo) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-theme group-hover:border-accent/30 transition-all duration-300`}
        style={{ width: size, height: size }}
      >
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          width={size}
          height={size}
          className="object-cover"
          unoptimized
          onError={(e) => {
            // Hide broken image, show fallback
            (e.target as HTMLImageElement).style.display = 'none'
            const parent = (e.target as HTMLImageElement).parentElement
            if (parent) {
              const fallback = parent.querySelector('.logo-fallback') as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }
          }}
        />
        <div
          className={`logo-fallback hidden absolute inset-0 ${colors.bg} items-center justify-center text-lg font-bold ${colors.text}`}
        >
          {project.fallbackLetter}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${colors.bg} rounded-xl flex items-center justify-center border border-theme group-hover:border-accent/30 transition-all duration-300`}
      style={{ width: size, height: size }}
    >
      <span className={`text-lg font-bold ${colors.text}`}>{project.fallbackLetter}</span>
    </div>
  )
}

function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const colors = colorMap[project.color] || colorMap.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative border border-theme rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl ${colors.border} ${colors.glow}`}
    >
      {/* Number badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 500 }}
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-card border border-theme flex items-center justify-center text-xs font-mono text-muted"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 400 }}
            >
              <ProjectLogo project={project} size={44} />
            </motion.div>
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
    </motion.div>
  )
}

function CompactCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const colors = colorMap[project.color] || colorMap.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
    <Link
      href={project.github}
      className={`group relative block border border-theme rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${colors.border} ${colors.glow}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ProjectLogo project={project} size={32} />
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
    </motion.div>
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
          <BlurFade>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
          </BlurFade>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-heading mb-4">Projects</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              Blockchain apps, smart contracts, and Web3 tools — built to solve real problems.
            </p>
          </FadeUp>
          {/* Stats bar */}
          <FadeUp delay={0.3}>
            <div className="flex gap-8 mt-6 pt-6 border-t border-theme">
              {[
                { value: projects.length, label: 'Projects' },
                { value: featuredProjects.length, label: 'Featured' },
                { value: '5+', label: 'Chains' },
              ].map((stat, i) => (
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

        {/* Featured */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Featured</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">More Projects</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <CompactCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScaleUp>
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
        </ScaleUp>
      </div>
    </div>
  )
}
