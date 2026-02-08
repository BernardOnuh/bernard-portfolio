import Link from 'next/link'

const experiences = [
  {
    title: 'Software Engineer & Founder',
    company: 'Web3Nova',
    companyUrl: '#',
    period: '2024 - Present',
    type: 'work',
    description: [
      'Building blockchain products end-to-end — from smart contracts to full-stack dApps',
      'Shipped products processing 300+ transactions, serving 100+ users, and handling $20,000+ in volume',
      'Developing on-ramp/off-ramp solutions (STX/USDC ↔ NGN) for the African market',
      'Leading a team of developers building across multiple EVM chains',
    ],
  },
  {
    title: 'Community Builder & DevRel',
    company: 'Based West Africa',
    companyUrl: 'https://basedwestafrica.com/',
    period: '2024 - Present',
    type: 'work',
    description: [
      'Building and growing the Base blockchain ecosystem across West Africa',
      'Organizing community events, hackathons, and developer workshops',
      'Connecting African developers, entrepreneurs, and innovators with the Base ecosystem',
      'Recognized by Base for outstanding community contributions',
    ],
  },
  {
    title: 'Developer Advocate',
    company: 'Onchain Global',
    companyUrl: 'https://onchainglobal.com/',
    period: '2023 - Present',
    type: 'work',
    description: [
      'Leading developer education initiatives — onboarded 200+ developers to blockchain',
      'Creating technical content, documentation, and workshop curricula',
      'Conducting hands-on workshops on Solidity, smart contract development, and dApp building',
      'Building relationships with developer communities across the African continent',
    ],
  },
  {
    title: 'Community Lead',
    company: 'Polygon Africa',
    companyUrl: 'https://polygon.technology/',
    period: '2021 - 2023',
    type: 'work',
    description: [
      'Grew and managed Polygon developer communities across African markets',
      'Organized large-scale events, workshops, and educational programs',
      'Earned Certified Smart Contract Developer recognition from Polygon',
      'Mentored emerging developers and entrepreneurs in blockchain technology',
    ],
  },
  {
    title: 'Freelance Software Engineer',
    company: 'Independent',
    companyUrl: null,
    period: '2022 - Present',
    type: 'work',
    description: [
      'Built custom smart contracts, token systems, and DeFi protocols for clients',
      'Developed full-stack dApps with React/Next.js frontends and Solidity backends',
      'Integrated wallet connections, cross-chain bridges, and payment systems',
      'Delivered projects across Ethereum, Polygon, Base, and Stacks ecosystems',
    ],
  },
]

const hackathons = [
  {
    name: 'Wormhole Hackathon',
    result: '🏆 Winner',
    protocol: 'Wormhole',
    protocolUrl: 'https://wormhole.com/',
    description: 'Built a cross-chain application leveraging Wormhole\'s messaging protocol',
  },
  {
    name: 'LayerZero Hackathon',
    result: '🏆 Winner',
    protocol: 'LayerZero',
    protocolUrl: 'https://layerzero.network/',
    description: 'Developed an omnichain solution using LayerZero\'s interoperability framework',
  },
  {
    name: 'Base Buildathon',
    result: '🏆 Winner',
    protocol: 'Base',
    protocolUrl: 'https://base.org/',
    description: 'Shipped a consumer-facing dApp on Base with real transaction volume',
  },
  {
    name: 'Polygon BUIDL IT',
    result: '🏆 Winner',
    protocol: 'Polygon',
    protocolUrl: 'https://polygon.technology/',
    description: 'Created a DeFi application on Polygon with gas-optimized smart contracts',
  },
  {
    name: 'Stacks Hackathon',
    result: '🏆 Winner',
    protocol: 'Stacks',
    protocolUrl: 'https://www.stacks.co/',
    description: 'Built Bitcoin DeFi tooling on the Stacks ecosystem',
  },
]

const freelanceProjects = [
  {
    name: 'STX Ramp',
    description: 'On-ramp/off-ramp platform for STX and USDC to Nigerian Naira. Handled $20,000+ in volume with 300+ transactions.',
    tech: ['Next.js', 'Stacks.js', 'Clarity', 'Tailwind'],
    url: 'https://github.com/BernardOnuh/stx-ramp',
  },
  {
    name: 'Cross-Chain Token Bridge',
    description: 'Built a token bridge enabling seamless asset transfers between Ethereum and Polygon with optimized gas fees.',
    tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
    url: null,
  },
  {
    name: 'NFT Marketplace',
    description: 'Full-stack NFT marketplace with minting, listing, auction, and royalty features for an African art collective.',
    tech: ['Solidity', 'Next.js', 'IPFS', 'The Graph'],
    url: null,
  },
  {
    name: 'DAO Governance Platform',
    description: 'Custom governance platform with proposal creation, token-weighted voting, and treasury management.',
    tech: ['Solidity', 'React', 'Snapshot', 'Safe'],
    url: null,
  },
  {
    name: 'DeFi Yield Aggregator',
    description: 'Automated yield optimization protocol that routes funds to the highest-yielding strategies across multiple protocols.',
    tech: ['Solidity', 'Foundry', 'Next.js', 'Alchemy'],
    url: null,
  },
]

export default function Experience() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-heading mb-3">Experience</h1>
          <p className="text-muted text-lg leading-relaxed">
            5 years of building products, winning hackathons, and growing communities in Web3.
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-heading text-foreground mb-8">Work</h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-accent/40 pl-6 hover:border-accent transition-colors duration-300">
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-foreground">{exp.title}</h3>
                  {exp.companyUrl ? (
                    <Link href={exp.companyUrl} className="text-accent hover:text-accent-hover transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                      {exp.company} ↗
                    </Link>
                  ) : (
                    <p className="text-accent text-sm">{exp.company}</p>
                  )}
                  <p className="text-xs text-muted mt-1">{exp.period}</p>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted text-sm leading-relaxed flex items-start">
                      <span className="text-accent/60 mr-2 mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <h2 className="text-2xl font-heading text-foreground mb-2">Hackathons</h2>
          <p className="text-muted text-sm mb-8">5+ hackathons won. Recognized by leading blockchain protocols.</p>
          <div className="space-y-4">
            {hackathons.map((hack, index) => (
              <div key={index} className="group p-5 border border-theme rounded-lg hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                        {hack.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                        {hack.result}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{hack.description}</p>
                  </div>
                  <Link
                    href={hack.protocolUrl}
                    className="text-xs text-muted hover:text-accent transition-colors whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hack.protocol} ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Projects */}
        <div>
          <h2 className="text-2xl font-heading text-foreground mb-2">Freelance Projects</h2>
          <p className="text-muted text-sm mb-8">Selected client and personal projects shipped.</p>
          <div className="space-y-6">
            {freelanceProjects.map((project, index) => (
              <div key={index} className="group border-l-2 border-theme pl-6 hover:border-accent/50 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  {project.url && (
                    <Link href={project.url} className="text-xs text-muted hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                      ↗
                    </Link>
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-card border border-theme rounded-full text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="pt-8 border-t border-theme">
          <h2 className="text-2xl font-heading text-foreground mb-6">Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Wormhole', url: 'https://wormhole.com/' },
              { name: 'LayerZero', url: 'https://layerzero.network/' },
              { name: 'Base', url: 'https://base.org/' },
              { name: 'Polygon', url: 'https://polygon.technology/' },
            ].map((org) => (
              <Link
                key={org.name}
                href={org.url}
                className="group p-4 border border-theme rounded-lg text-center hover:border-accent/50 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">{org.name}</p>
                <p className="text-xs text-muted mt-1">Recognized Builder</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
