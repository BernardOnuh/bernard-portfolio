'use client'

import Link from 'next/link'
import TypewriterText from '@/components/TypewriterText'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, motion } from '@/components/motion'

const stats = [
  { value: '300+', label: 'Transactions' },
  { value: '200+', label: 'Devs Onboarded' },
  { value: '$20K+', label: 'Volume' },
  { value: '5+', label: 'Hackathons Won' },
]

const socials = [
  { name: 'Twitter', href: 'https://x.com/bernard_o1' },
  { name: 'GitHub', href: 'https://github.com/BernardOnuh' },
  { name: 'YouTube', href: 'https://www.youtube.com/@Bernard_O1' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/bernardonuh' },
  { name: 'Telegram', href: 'https://t.me/bernardonuh' },
  { name: 'Resume', href: '#' },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-14">
        <BlurFade>
          <h1 className="text-3xl md:text-5xl font-heading mb-3 tracking-tight">
            <TypewriterText text="Bernard Onuh" className="text-foreground" />
          </h1>
        </BlurFade>
        <FadeUp delay={0.8}>
          <p className="text-lg text-muted">
            Software Engineer · Community Builder · Developer Relations
          </p>
        </FadeUp>
      </div>

      {/* Bio Section */}
      <div className="space-y-5 text-muted leading-relaxed text-base md:text-[17px]">
        <FadeUp delay={1.0}>
          <p>
            Hello, I&apos;m currently a <span className="accent-glow">Software Engineer</span> building
            blockchain products, a <span className="accent-glow">Community Builder</span>, and
            a <span className="accent-glow">Developer Relations</span> professional. Over the past 5 years,
            I&apos;ve worn many hats in the Web3 space.
          </p>
        </FadeUp>

        <FadeUp delay={1.1}>
          <p>
            I&apos;m an anxious but action-oriented learner — I live by the quote:{' '}
            <em className="text-foreground/80">&ldquo;Learn, Build, and Earn.&rdquo;</em>
          </p>
        </FadeUp>

        <FadeUp delay={1.2}>
          <p>
            I&apos;ve shipped products that have processed{' '}
            <span className="text-foreground font-medium">300+ transactions</span>, served{' '}
            <span className="text-foreground font-medium">100+ users</span>, and handled over{' '}
            <span className="text-foreground font-medium">$20,000</span> in volume — from smart
            contracts to full-stack dApps that people actually use.
          </p>
        </FadeUp>

        <FadeUp delay={1.3}>
          <p>
            For 5 years, I&apos;ve contributed to projects like{' '}
            <Link href="https://polygon.technology/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Polygon Africa
            </Link>,{' '}
            <Link href="https://web.telegram.org/k/#@onchainbuilders" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Onchain Global
            </Link>,{' '}
            <Link href="https://base.org/" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Base
            </Link>,{' '}
            <Link href="https://x.com/BasedWestAfrica" className="link-dotted text-foreground/90" target="_blank" rel="noopener noreferrer">
              Based West Africa
            </Link>, and{' '}
            <Link href="https://x.com/web3_nova" className="link-dotted text-foreground/90">
              Web3Nova
            </Link> — building communities and shipping code across the blockchain ecosystem.
          </p>
        </FadeUp>

        <FadeUp delay={1.4}>
          <p>
            I&apos;ve onboarded <span className="text-foreground font-medium">200+ developers</span> to
            blockchain so far — and I&apos;m still onboarding more. If you&apos;re looking to get started
            in Web3, feel free to reach out — happy to help!{' '}
            <Link href="https://calendly.com/bernard-web3nova/30min" className="link-dotted text-accent font-medium" target="_blank" rel="noopener noreferrer">
              Let&apos;s chat ↗
            </Link>
          </p>
        </FadeUp>

        <FadeUp delay={1.5}>
          <p>
            Currently open to new opportunities and collaborations. Reach out at{' '}
            <Link href="mailto:bernard@web3nova.org" className="link-dotted text-accent font-medium">
              bernard@web3nova.org
            </Link>{' '}
            or via my socials to discuss.
          </p>
        </FadeUp>
      </div>

      {/* Stats */}
      <FadeUp delay={0.2}>
        <div className="mt-14 pt-10 border-t border-theme">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <p className="text-2xl md:text-3xl font-heading text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeUp>

      {/* Social links */}
      <FadeUp delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 text-sm text-muted">
          {socials.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <Link href={social.href} className="hover:text-accent transition-colors" target="_blank">
                {social.name} ↗
              </Link>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </div>
  )
}
