import Link from 'next/link'

const projects = [
  {
    name: 'STX Ramp',
    description: 'STX/USDC to NGN On-Ramp & Off-Ramp solution for seamless fiat-to-crypto conversion in Nigeria.',
    tech: ['TypeScript', 'Next.js', 'Stacks Blockchain'],
    github: 'https://github.com/BernardOnuh/stx-ramp',
    demo: 'https://stx-ramp.vercel.app',
    featured: true
  },
  {
    name: 'STX Portfolio Tracker',
    description: 'Web app and Chrome extension for monitoring multiple STX addresses, tracking balances and portfolio value with real-time data.',
    tech: ['JavaScript', 'Chrome Extension', 'Stacks API'],
    github: 'https://github.com/BernardOnuh/STX-Portfolio-Tracker',
    demo: 'https://stxportfoliotracker.vercel.app',
    featured: true
  },
  {
    name: 'Stacks Lightning Swaps',
    description: 'Bridge between Bitcoin Lightning Network and Stacks blockchain for instant, low-cost transactions.',
    tech: ['TypeScript', 'Lightning Network', 'Stacks'],
    github: 'https://github.com/BernardOnuh/stacks-lightning-swaps',
    demo: null,
    featured: true
  },
  {
    name: 'StackSend',
    description: 'Multisend dApp on Stacks Network enabling batch token transfers to multiple addresses in a single transaction.',
    tech: ['TypeScript', 'Stacks', 'Web3'],
    github: 'https://github.com/BernardOnuh/stacksend',
    demo: 'https://stacksend.xyz',
    featured: false
  },
  {
    name: 'Ordyswap',
    description: 'Decentralized exchange for Bitcoin Ordinals and inscriptions on the Stacks blockchain.',
    tech: ['Clarity', 'Bitcoin Ordinals', 'Stacks'],
    github: 'https://github.com/BernardOnuh/ordyswap',
    demo: null,
    featured: false
  },
  {
    name: 'Stacks Fundraising Platform',
    description: 'Decentralized crowdfunding platform built on Stacks blockchain for transparent project funding.',
    tech: ['TypeScript', 'Stacks', 'Smart Contracts'],
    github: 'https://github.com/BernardOnuh/Stacks-Fundraising',
    demo: null,
    featured: false
  },
  {
    name: 'BTC Prediction Market',
    description: 'Decentralized prediction market for Bitcoin price movements with community-driven forecasting.',
    tech: ['TypeScript', 'DeFi', 'Prediction Markets'],
    github: 'https://github.com/BernardOnuh/btc-prediction-market',
    demo: null,
    featured: false
  },
  {
    name: 'Bitcoin TX-Enabled NFT',
    description: 'NFT smart contract that enables Bitcoin transaction verification and cross-chain functionality.',
    tech: ['Clarity', 'Bitcoin', 'NFTs'],
    github: 'https://github.com/BernardOnuh/btc-tx-enabled-nft',
    demo: null,
    featured: false
  },
  {
    name: 'Stacks Fungible Token',
    description: 'Standard implementation of fungible tokens on the Stacks blockchain with enhanced features.',
    tech: ['TypeScript', 'Clarity', 'Token Standards'],
    github: 'https://github.com/BernardOnuh/stacks-fungible-token',
    demo: null,
    featured: false
  },
  {
    name: 'Semi-Fungible Token',
    description: 'Implementation of semi-fungible token standard combining properties of both fungible and non-fungible tokens.',
    tech: ['Clarity', 'Token Standards', 'Stacks'],
    github: 'https://github.com/BernardOnuh/semi-fungible-token',
    demo: null,
    featured: false
  },
  {
    name: 'StacksFlow Bridge',
    description: 'Cross-chain bridge connecting Stacks with other major blockchain networks for seamless asset transfers.',
    tech: ['TypeScript', 'Cross-chain', 'Bridge Protocol'],
    github: 'https://github.com/BernardOnuh/stacksflow',
    demo: 'https://stacksbridge.vercel.app',
    featured: false
  },
  {
    name: 'StableFlow',
    description: 'Stablecoin liquidity protocol providing yield farming and automated market making on Stacks.',
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