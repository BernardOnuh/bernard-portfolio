import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-heading mb-6">About</h1>
          <p className="text-muted text-lg leading-relaxed">
            Software Engineer building blockchain products, Community Builder, and Developer Relations professional.
          </p>
        </div>

        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <p>
            I&apos;m a <span className="accent-glow">Software Engineer</span> with a deep focus on
            blockchain and Web3 technologies. Over the past 5 years, I&apos;ve worn many hats — building
            products, growing communities, and helping developers navigate the onchain world.
          </p>

          <p>
            I&apos;m an anxious but action-oriented learner. I live by the quote:{' '}
            <em className="text-foreground/80">&ldquo;Learn, Build, and Earn.&rdquo;</em> I believe
            in learning by doing, staying curious, and taking bold steps to turn ideas into reality.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">What I&apos;ve Built</h2>

          <p>
            I&apos;ve shipped products that have processed <span className="text-foreground font-medium">300+ transactions</span>,
            served <span className="text-foreground font-medium">100+ users</span>, and handled
            over <span className="text-foreground font-medium">$20,000</span> in volume. From smart
            contracts to full-stack dApps — I build things that people actually use.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Communities & Contributions</h2>

          <p>
            Through{' '}
            <Link href="https://polygon.technology/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Polygon Africa
            </Link>, I helped grow developer communities, organized educational events, and ran workshops
            bridging traditional tech and blockchain innovation.
          </p>

          <p>
            My work with{' '}
            <Link href="https://web.telegram.org/k/#@onchainbuilders" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Onchain Global
            </Link>{' '}
            focuses on developer education and advocacy — creating content, conducting workshops, and
            helping developers build with cutting-edge blockchain technologies.
          </p>

          <p>
            With{' '}
            <Link href="https://base.org/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Base
            </Link>{' '}and{' '}
            <Link href="https://x.com/BasedWestAfrica" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Based West Africa
            </Link>, I&apos;m building a thriving ecosystem around the Base blockchain in West Africa —
            connecting developers, entrepreneurs, and innovators passionate about going onchain.
          </p>

          <p>
            At{' '}
            <Link href="https://x.com/web3_nova" className="link-dotted text-foreground/90">
              Web3Nova
            </Link>, I continue to push the boundaries of what&apos;s possible in the African blockchain space.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Hackathons & Recognition</h2>

          <p>
            I&apos;ve won <span className="text-foreground font-medium">5+ hackathons</span> and have been
            recognized by leading blockchain protocols including{' '}
            <Link href="https://x.com/Bernard_O1/status/1828832827594682687" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Wormhole
            </Link>,{' '}
            <Link href="https://x.com/PrimordialAA/status/1993005650465767463" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              LayerZero
            </Link>,{' '}
            <Link href="https://x.com/Bernard_O1/status/1988845679691608069" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Base
            </Link>,{' '}
            <Link href="https://x.com/Bernard_O1/status/1990215252332384666" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Hyperliquid
            </Link>,
             and{' '}
            <Link href="https://x.com/Bernard_O1/status/1609842862060888064" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Polygon
            </Link> for my contributions to the ecosystem.
          </p>

          {/* Add your hackathon links here */}
          {/* 
          <ul className="space-y-2 pl-4">
            <li>🏆 <Link href="#" className="link-dotted text-foreground/90">Hackathon Name 1</Link> — Winner</li>
            <li>🏆 <Link href="#" className="link-dotted text-foreground/90">Hackathon Name 2</Link> — Winner</li>
          </ul>
          */}

          <h2 className="text-xl font-heading text-foreground pt-4">Developer Onboarding</h2>

          <p>
            I&apos;ve onboarded <span className="text-foreground font-medium">200+ developers</span> to
            blockchain so far — and I&apos;m still onboarding more. Teaching and mentoring is a core part
            of who I am. If you&apos;re looking to get started in Web3, I&apos;m happy to help.
          </p>

          <h2 className="text-xl font-heading text-foreground pt-4">Let&apos;s Connect</h2>

          <p>
            I&apos;m always excited to connect with fellow builders, innovators, and anyone passionate
            about decentralized technologies. Whether it&apos;s collaborating on a project, exploring
            new opportunities, or just chatting about the future of Web3 —{' '}
            <Link href="https://calendly.com/bernardonuh" className="link-dotted text-accent font-medium" target="_blank" rel="noopener noreferrer">
              let&apos;s chat ↗
            </Link>
          </p>
        </div>

        {/* Education */}
        <div className="pt-4">
          <h2 className="text-2xl font-heading text-foreground mb-8">Education</h2>
          <div className="space-y-6">
            <div className="group p-6 border border-theme rounded-lg hover:border-accent/50 transition-all duration-300">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                Bachelor of Technology, Software Engineering
              </h3>
              <p className="text-sm text-muted mt-1 mb-3">
                <Link href="https://www.futa.edu.ng/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
                  Federal University of Technology Akure (FUTA)
                </Link>{' '}
                · 2019 - 2024
              </p>
              <p className="text-muted leading-relaxed text-sm">
                Graduated with excellent grades, top of the class, from Nigeria&apos;s best technology university.
                Studied software engineering fundamentals including data structures, algorithms, system design,
                and distributed systems — building a strong foundation for shipping scalable blockchain applications.
              </p>
            </div>

            <div className="group p-6 border border-theme rounded-lg hover:border-accent/50 transition-all duration-300">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                Web3 &amp; Blockchain Certifications
              </h3>
              <p className="text-sm text-muted mt-1 mb-3">2021 - Ongoing</p>
              <p className="text-muted leading-relaxed text-sm">
                Certified Smart Contract Developer through{' '}
                <Link href="https://polygon.technology/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Polygon</Link> and{' '}
                <Link href="https://updraft.cyfrin.io/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Cyfrin Updraft</Link>.
                Completed programs at{' '}
                <Link href="https://www.alchemy.com/university" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">Alchemy University</Link> and{' '}
                <Link href="#" className="link-dotted text-foreground/90">The Nirvana Academy</Link>.
                Continuously upskilling in Solidity, smart contract security, EVM architecture, and cross-chain protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="pt-4">
          <h2 className="text-2xl font-heading text-foreground mb-8">Skills</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Solidity', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Smart Contracts', 'EVM', 'Hardhat', 'Foundry', 'Ethers.js', 'REST APIs', 'Git', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Blockchain & Web3</h3>
              <div className="flex flex-wrap gap-2">
                {['Ethereum', 'Polygon', 'Base', 'Stacks', 'LayerZero', 'Wormhole', 'Hyperliquid', 'DeFi', 'Cross-chain', 'Token Standards', 'dApp Development'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Community & DevRel</h3>
              <div className="flex flex-wrap gap-2">
                {['Developer Relations', 'Community Building', 'Technical Writing', 'Public Speaking', 'Workshop Facilitation', 'Developer Onboarding', 'Content Creation'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'GitHub', 'Vercel', 'Figma', 'Postman', 'Remix IDE', 'MetaMask', 'Alchemy', 'Etherscan'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-theme">
          <div>
            <p className="text-2xl font-heading text-foreground">5+</p>
            <p className="text-xs text-muted mt-1 uppercase tracking-wide">Years in Web3</p>
          </div>
          <div>
            <p className="text-2xl font-heading text-foreground">200+</p>
            <p className="text-xs text-muted mt-1 uppercase tracking-wide">Devs Onboarded</p>
          </div>
          <div>
            <p className="text-2xl font-heading text-foreground">300+</p>
            <p className="text-xs text-muted mt-1 uppercase tracking-wide">Transactions</p>
          </div>
          <div>
            <p className="text-2xl font-heading text-foreground">$20K+</p>
            <p className="text-xs text-muted mt-1 uppercase tracking-wide">Volume</p>
          </div>
          <div>
            <p className="text-2xl font-heading text-foreground">5+</p>
            <p className="text-xs text-muted mt-1 uppercase tracking-wide">Hackathons Won</p>
          </div>
        </div>
      </div>
    </div>
  )
}
