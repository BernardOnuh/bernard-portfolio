'use client'

import Link from 'next/link'
import { FadeUp, BlurFade, motion } from '@/components/motion'

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 print:py-8 print:px-0">
      {/* Print button */}
      <div className="print:hidden mb-8">
        <BlurFade>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to site
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </motion.button>
          </div>
        </BlurFade>
      </div>

      {/* Resume Content */}
      <div className="space-y-8 print:space-y-5">
        {/* Header */}
        <FadeUp>
          <div className="text-center pb-6 border-b border-theme print:pb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg viewBox="0 0 32 32" className="w-10 h-10 shrink-0 print:w-8 print:h-8" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="resume-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#06B6D4' }} />
                    <stop offset="100%" style={{ stopColor: '#0891B2' }} />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#resume-bg)" />
                <text x="16" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">BO</text>
              </svg>
              <h1 className="text-3xl md:text-4xl font-heading print:text-2xl">Bernard Onuh</h1>
            </div>
            <p className="text-accent text-lg font-medium mb-3 print:text-base">Software Engineer · Developer Relations · Community Builder</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted print:text-xs">
              <span>📍 Nigeria</span>
              <span>·</span>
              <Link href="mailto:bernard@web3nova.org" className="hover:text-accent transition-colors">bernard@web3nova.org</Link>
              <span>·</span>
              <Link href="https://github.com/BernardOnuh" className="hover:text-accent transition-colors" target="_blank">github.com/BernardOnuh</Link>
              <span>·</span>
              <Link href="https://x.com/bernard_o1" className="hover:text-accent transition-colors" target="_blank">@bernard_o1</Link>
              <span>·</span>
              <Link href="https://linkedin.com/in/bernardonuh" className="hover:text-accent transition-colors" target="_blank">LinkedIn</Link>
            </div>
          </div>
        </FadeUp>

        {/* Summary */}
        <FadeUp delay={0.05}>
          <section>
            <h2 className="text-lg font-heading text-foreground mb-3 uppercase tracking-wider text-accent print:text-sm">Summary</h2>
            <p className="text-muted text-[15px] leading-relaxed print:text-xs print:leading-relaxed">
              Software Engineer with 5+ years of experience building blockchain products, leading developer communities, and shipping Web3 applications across multiple ecosystems. Won 5+ hackathons (Wormhole, LayerZero, Base, Polygon, Hyperliquid). Onboarded 200+ developers to blockchain. Organized 8+ events with 500+ attendees through Web3Nova. Proven track record of shipping products that process real transactions and serve real users.
            </p>
          </section>
        </FadeUp>

        {/* Experience */}
        <FadeUp delay={0.1}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Experience</h2>
            <div className="space-y-6 print:space-y-4">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-foreground print:text-sm">Software Engineer & Founder</h3>
                    <p className="text-sm text-accent print:text-xs">Web3Nova</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">2024 – Present</p>
                </div>
                <ul className="mt-2 space-y-1 text-muted text-sm print:text-xs">
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Built and shipped blockchain products processing 300+ transactions, serving 100+ users, handling $20K+ volume</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Developed on-ramp/off-ramp solutions (USDC ↔ NGN) for the African market</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Organized 8+ events (hacker houses, workshops, meetups) with 500+ total attendees</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Partnered with Base, Avalanche, SUI, Farcaster, and Lisk for community events</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-foreground print:text-sm">Community Builder & DevRel</h3>
                    <p className="text-sm text-accent print:text-xs">Based West Africa</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">2024 – Present</p>
                </div>
                <ul className="mt-2 space-y-1 text-muted text-sm print:text-xs">
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Building the Base blockchain ecosystem across West Africa</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Organized Base Batches 1.0 & 2.0 hacker houses (100+ and 70+ builders)</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Recognized by Base for outstanding community contributions</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-foreground print:text-sm">Developer Advocate</h3>
                    <p className="text-sm text-accent print:text-xs">Onchain Global</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">2023 – Present</p>
                </div>
                <ul className="mt-2 space-y-1 text-muted text-sm print:text-xs">
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Onboarded 200+ developers to blockchain through workshops and mentorship</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Created technical content, documentation, and workshop curricula</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Conducted hands-on workshops on Solidity, smart contracts, and dApp development</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-foreground print:text-sm">Community Lead</h3>
                    <p className="text-sm text-accent print:text-xs">Polygon Africa</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">2021 – 2023</p>
                </div>
                <ul className="mt-2 space-y-1 text-muted text-sm print:text-xs">
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Grew and managed Polygon developer communities across African markets</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Organized large-scale events, workshops, and educational programs</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Earned Certified Smart Contract Developer recognition</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-foreground print:text-sm">Freelance Software Engineer</h3>
                    <p className="text-sm text-accent print:text-xs">Independent</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">2022 – Present</p>
                </div>
                <ul className="mt-2 space-y-1 text-muted text-sm print:text-xs">
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Built Aboki (crypto-to-fiat), Bizflip (decentralized marketplace), STX Ramp (on-ramp/off-ramp)</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Developed Future Edge & Refuel Bot (Telegram trading/DeFi bots)</li>
                  <li className="flex items-start"><span className="text-accent mr-2">·</span>Delivered projects across Ethereum, Polygon, Base, Stacks, and Hyperliquid ecosystems</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Hackathons */}
        <FadeUp delay={0.15}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Hackathons Won</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 print:grid-cols-5 print:gap-2">
              {['Wormhole', 'LayerZero', 'Base', 'Polygon', 'Hyperliquid'].map((name) => (
                <div key={name} className="p-3 border border-theme rounded-lg text-center print:p-2">
                  <p className="text-sm font-medium text-foreground print:text-xs">🏆 {name}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Projects */}
        <FadeUp delay={0.2}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Key Projects</h2>
            <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-2">
              {[
                { name: 'Aboki', desc: 'Crypto-to-fiat platform — V1→V2 frontend revamp', tech: 'Next.js · TypeScript · DeFi' },
                { name: 'Bizflip', desc: 'Decentralized business marketplace with smart contract escrow', tech: 'Next.js · Solidity · Web3' },
                { name: 'STX Ramp', desc: 'STX/USDC ↔ NGN on-ramp/off-ramp — $20K+ volume', tech: 'TypeScript · Stacks · Clarity' },
                { name: 'LinguaLink', desc: 'AI-powered translation platform for Africa', tech: 'Next.js · TypeScript · AI' },
                { name: 'Future Edge', desc: 'Telegram trading bot with real-time market analysis', tech: 'Python · Telegram API · DeFi' },
                { name: 'Refuel Bot', desc: 'Automated DeFi operations bot — gas, swaps, portfolio', tech: 'TypeScript · Telegram API' },
              ].map((p) => (
                <div key={p.name} className="p-3 border border-theme rounded-lg print:p-2">
                  <h4 className="text-sm font-medium text-foreground print:text-xs">{p.name}</h4>
                  <p className="text-xs text-muted mt-1 print:text-[10px]">{p.desc}</p>
                  <p className="text-[11px] text-accent mt-1 print:text-[9px]">{p.tech}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Skills */}
        <FadeUp delay={0.25}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Skills</h2>
            <div className="space-y-3 print:space-y-2">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2 print:text-xs">Languages & Frameworks</h4>
                <p className="text-sm text-muted print:text-xs">Solidity · JavaScript · TypeScript · Python · React · Next.js · Node.js · Tailwind CSS</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2 print:text-xs">Blockchain & Web3</h4>
                <p className="text-sm text-muted print:text-xs">Ethereum · Polygon · Base · Stacks · Hyperliquid · LayerZero · Wormhole · Hardhat · Foundry · Ethers.js · EVM · Smart Contracts · DeFi · Cross-chain</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2 print:text-xs">Tools & Platforms</h4>
                <p className="text-sm text-muted print:text-xs">Git · GitHub · VS Code · Vercel · Figma · Postman · Remix IDE · MetaMask · Alchemy · Etherscan</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2 print:text-xs">Community & DevRel</h4>
                <p className="text-sm text-muted print:text-xs">Developer Relations · Community Building · Technical Writing · Public Speaking · Workshop Facilitation · Developer Onboarding · Content Creation</p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Education */}
        <FadeUp delay={0.3}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Education</h2>
            <div className="space-y-4 print:space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium text-foreground print:text-sm">Bachelor of Technology, Software Engineering</h3>
                  <p className="text-sm text-muted print:text-xs">Federal University of Technology Akure (FUTA)</p>
                </div>
                <p className="text-xs text-muted shrink-0">2019 – 2024</p>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium text-foreground print:text-sm">Web3 & Blockchain Certifications</h3>
                  <p className="text-sm text-muted print:text-xs">Polygon · Cyfrin Updraft · Alchemy University · The Nirvana Academy</p>
                </div>
                <p className="text-xs text-muted shrink-0">2021 – Present</p>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Recognition */}
        <FadeUp delay={0.35}>
          <section>
            <h2 className="text-lg font-heading mb-4 uppercase tracking-wider text-accent print:text-sm print:mb-3">Recognition</h2>
            <p className="text-sm text-muted print:text-xs">
              Recognized as a builder by <span className="text-foreground">Wormhole</span>, <span className="text-foreground">LayerZero</span>, <span className="text-foreground">Base</span>, and <span className="text-foreground">Polygon</span> for contributions to their ecosystems. Certified Smart Contract Developer (Polygon). Organized events partnering with Base, Avalanche, SUI, Farcaster, and Lisk.
            </p>
          </section>
        </FadeUp>

        {/* Footer */}
        <FadeUp delay={0.4}>
          <div className="pt-6 border-t border-theme text-center print:pt-3">
            <p className="text-xs text-muted">
              <Link href="https://github.com/BernardOnuh" className="hover:text-accent transition-colors" target="_blank">GitHub</Link>
              {' · '}
              <Link href="https://x.com/bernard_o1" className="hover:text-accent transition-colors" target="_blank">Twitter</Link>
              {' · '}
              <Link href="https://linkedin.com/in/bernardonuh" className="hover:text-accent transition-colors" target="_blank">LinkedIn</Link>
              {' · '}
              <Link href="https://www.youtube.com/@Bernard_O1" className="hover:text-accent transition-colors" target="_blank">YouTube</Link>
              {' · '}
              <Link href="https://www.web3nova.org" className="hover:text-accent transition-colors" target="_blank">Web3Nova</Link>
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
