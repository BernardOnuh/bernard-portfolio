import Link from 'next/link'

const projects = [
  {
    name: 'Aboki',
    description: 'Crypto-to-fiat conversion platform enabling seamless swaps between digital assets and Nigerian Naira with real-time rates.',
    tech: ['Next.js', 'TypeScript', 'DeFi', 'Payments'],
    github: 'https://github.com/BernardOnuh/Aboki-V2-Frontend',
    demo: '#',
    featured: true
  },
  {
    name: 'Bizflip',
    description: 'Decentralized business marketplace platform with smart contract escrow for buying, selling, and flipping digital businesses.',
    tech: ['Next.js', 'Solidity', 'Smart Contracts'],
    github: 'https://github.com/BernardOnuh/Bizflip-Frontend',
    demo: '#',
    featured: true
  },
  {
    name: 'STX Ramp',
    description: 'STX/USDC to NGN On-Ramp & Off-Ramp solution for seamless fiat-to-crypto conversion in Nigeria.',
    tech: ['TypeScript', 'Next.js', 'Stacks Blockchain'],
    github: 'https://github.com/BernardOnuh/stx-ramp',
    demo: 'https://stx-ramp.vercel.app',
    featured: true
  },
  {
    name: 'Zap Amadi',
    description: 'Crypto-to-fiat dApp built for the Base Onchain Summer Buildathon — seamless conversion powered by Base.',
    tech: ['TypeScript', 'Base', 'Onchain'],
    github: 'https://github.com/BernardOnuh/zap-Amadi',
    demo: '#',
    featured: true
  },
  {
    name: 'LinguaLink',
    description: 'AI-powered translation and language learning platform bridging communication gaps across Africa.',
    tech: ['TypeScript', 'Next.js', 'AI'],
    github: 'https://github.com/BernardOnuh/LinguaLink-New',
    demo: '#',
    featured: true
  },
  {
    name: 'Future Edge',
    description: 'Telegram trading bot for automated crypto trading strategies with real-time market analysis.',
    tech: ['Python', 'Telegram Bot', 'Trading'],
    github: 'https://github.com/BernardOnuh/futureTg',
    demo: null,
    featured: false
  },
  {
    name: 'Refuel Bot',
    description: 'Automated Telegram bot for DeFi operations — gas refueling, token swaps, and portfolio management.',
    tech: ['TypeScript', 'Telegram Bot', 'DeFi'],
    github: 'https://github.com/BernardOnuh/Hurryfibot',
    demo: null,
    featured: false
  },
  {
    name: 'STX Portfolio Tracker',
    description: 'Web app and Chrome extension for monitoring multiple STX addresses, tracking balances and portfolio value.',
    tech: ['JavaScript', 'Chrome Extension', 'Stacks API'],
    github: 'https://github.com/BernardOnuh/STX-Portfolio-Tracker',
    demo: 'https://stxportfoliotracker.vercel.app',
    featured: false
  },
  {
    name: 'Hyperliquid Hackathon',
    description: 'Project built at the Staking Summit Buenos Aires 2025 hackathon on Hyperliquid.',
    tech: ['TypeScript', 'Hyperliquid', 'DeFi'],
    github: 'https://github.com/BernardOnuh/hyperliquid-hackathon-ba-25',
    demo: null,
    featured: false
  },
  {
    name: 'StackSend',
    description: 'Multisend dApp on Stacks Network — batch token transfers to multiple addresses in one transaction.',
    tech: ['TypeScript', 'Stacks', 'Web3'],
    github: 'https://github.com/BernardOnuh/stacksend',
    demo: 'https://stacksend.xyz',
    featured: false
  },
  {
    name: 'StacksFlow Bridge',
    description: 'Cross-chain bridge connecting Stacks with other blockchain networks for seamless asset transfers.',
    tech: ['TypeScript', 'Cross-chain', 'Bridge'],
    github: 'https://github.com/BernardOnuh/stacksflow',
    demo: 'https://stacksbridge.vercel.app',
    featured: false
  },
  {
    name: 'StableFlow',
    description: 'Stablecoin liquidity protocol with yield farming and automated market making on Stacks.',
    tech: ['JavaScript', 'DeFi', 'AMM'],
    github: 'https://github.com/BernardOnuh/stable-flow',
    demo: 'https://stable-flow.vercel.app',
    featured: false
  }
]

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">Projects</h1>
          <p className="text-muted text-lg leading-relaxed">
            A collection of blockchain applications, smart contracts, and Web3 infrastructure projects I've built over the years.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-foreground border-b border-gray-800 pb-3">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-1">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        className="text-muted hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="text-muted hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-foreground border-b border-gray-800 pb-3">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <div key={index} className="group border border-gray-800 rounded-lg p-5 hover:border-accent transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2">
                      <Link
                        href={project.github}
                        className="text-muted hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="text-muted hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-900 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
          <p className="text-muted">
            More projects available on{' '}
            <Link 
              href="https://github.com/BernardOnuh" 
              className="link-dotted text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}