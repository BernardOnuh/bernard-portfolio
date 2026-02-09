'use client'

import Link from 'next/link'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, motion } from '@/components/motion'

const stats = [
  { value: '5+', label: 'Years in Web3' },
  { value: '200+', label: 'Devs Onboarded' },
  { value: '300+', label: 'Transactions' },
  { value: '$20K+', label: 'Volume' },
  { value: '5+', label: 'Hackathons Won' },
]

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['Solidity', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Smart Contracts', 'EVM', 'Hardhat', 'Foundry', 'Ethers.js', 'REST APIs', 'Git', 'Tailwind CSS'],
  },
  {
    title: 'Blockchain & Web3',
    skills: ['Ethereum', 'Polygon', 'Base', 'Stacks', 'LayerZero', 'Wormhole', 'Hyperliquid', 'DeFi', 'Cross-chain', 'Token Standards', 'dApp Development'],
  },
  {
    title: 'Community & DevRel',
    skills: ['Developer Relations', 'Community Building', 'Technical Writing', 'Public Speaking', 'Workshop Facilitation', 'Developer Onboarding', 'Content Creation'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'GitHub', 'Vercel', 'Figma', 'Postman', 'Remix IDE', 'MetaMask', 'Alchemy', 'Etherscan'],
  },
]

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-8">
        {/* Hero */}
        <div>
          <BlurFade>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">About Me</p>
          </BlurFade>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-heading mb-6">About</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              Software Engineer building blockchain products, Community Builder, and Developer Relations professional.
            </p>
          </FadeUp>
        </div>

        {/* Bio sections */}
        <div className="space-y-6 text-muted leading-relaxed text-base md:text-[17px]">
          <FadeUp delay={0.1}>
            <p>
              I&apos;m a <span className="accent-glow">Software Engineer</span> with a deep focus on
              blockchain and Web3 technologies. Over the past 5 years, I&apos;ve worn many hats — building
              products, growing communities, and helping developers navigate the onchain world.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p>
              I&apos;m an anxious but action-oriented learner. I live by the quote:{' '}
              <em className="text-foreground/80">&ldquo;Learn, Build, and Earn.&rdquo;</em> I believe
              in learning by doing, staying curious, and taking bold steps to turn ideas into reality.
            </p>
          </FadeUp>

          <FadeLeft delay={0.1}>
            <h2 className="text-xl font-heading text-foreground pt-4">What I&apos;ve Built</h2>
          </FadeLeft>

          <FadeUp>
            <p>
              I&apos;ve shipped products that have processed <span className="text-foreground font-medium">300+ transactions</span>,
              served <span className="text-foreground font-medium">100+ users</span>, and handled
              over <span className="text-foreground font-medium">$20,000</span> in volume. From smart
              contracts to full-stack dApps — I build things that people actually use.
            </p>
          </FadeUp>

          <FadeLeft delay={0.1}>
            <h2 className="text-xl font-heading text-foreground pt-4">Communities & Contributions</h2>
          </FadeLeft>

          <FadeUp>
            <p>
              Through{' '}
              <Link href="https://polygon.technology/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
                Polygon Africa
              </Link>, I helped grow developer communities, organized educational events, and ran workshops
              bridging traditional tech and blockchain innovation.
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <p>
              My work with{' '}
              <Link href="https://web.telegram.org/k/#@onchainbuilders" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
                Onchain Global
              </Link>{' '}
              focuses on developer education and advocacy — creating content, conducting workshops, and
              helping developers build with cutting-edge blockchain technologies.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
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
          </FadeUp>

          <FadeUp delay={0.15}>
            <p>
              At{' '}
              <Link href="https://x.com/web3_nova" className="link-dotted text-foreground/90">
                Web3Nova
              </Link>, I continue to push the boundaries of what&apos;s possible in the African blockchain space.
            </p>
          </FadeUp>

          <FadeLeft delay={0.1}>
            <h2 className="text-xl font-heading text-foreground pt-4">Hackathons & Recognition</h2>
          </FadeLeft>

          <FadeUp>
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
          </FadeUp>

          <FadeLeft delay={0.1}>
            <h2 className="text-xl font-heading text-foreground pt-4">Developer Onboarding</h2>
          </FadeLeft>

          <FadeUp>
            <p>
              I&apos;ve onboarded <span className="text-foreground font-medium">200+ developers</span> to
              blockchain so far — and I&apos;m still onboarding more. Teaching and mentoring is a core part
              of who I am. If you&apos;re looking to get started in Web3, I&apos;m happy to help.
            </p>
          </FadeUp>

          <FadeLeft delay={0.1}>
            <h2 className="text-xl font-heading text-foreground pt-4">Let&apos;s Connect</h2>
          </FadeLeft>

          <FadeUp>
            <p>
              I&apos;m always excited to connect with fellow builders, innovators, and anyone passionate
              about decentralized technologies. Whether it&apos;s collaborating on a project, exploring
              new opportunities, or just chatting about the future of Web3 —{' '}
              <Link href="https://calendly.com/bernardonuh" className="link-dotted text-accent font-medium" target="_blank" rel="noopener noreferrer">
                let&apos;s chat ↗
              </Link>
            </p>
          </FadeUp>
        </div>

        {/* Education */}
        <div className="pt-4">
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-heading text-foreground">Education</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>
          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group p-6 border border-theme rounded-lg hover:border-accent/50 transition-colors duration-300"
              >
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
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group p-6 border border-theme rounded-lg hover:border-accent/50 transition-colors duration-300"
              >
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
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Skills */}
        <div className="pt-4">
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-heading text-foreground">Skills</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>
          <StaggerContainer className="space-y-10" staggerDelay={0.12}>
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <h3 className="text-lg font-medium text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 text-sm bg-card border border-theme rounded-full hover:border-accent/50 hover:text-accent transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Quick stats */}
        <FadeUp>
          <div className="pt-8 border-t border-theme">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6" staggerDelay={0.08}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <p className="text-2xl font-heading text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted mt-1 uppercase tracking-wide">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
