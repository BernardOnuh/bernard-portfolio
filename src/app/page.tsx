import Link from 'next/link'
import TypewriterText from '@/components/TypewriterText'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-14">
        <h1 className="text-3xl md:text-5xl font-heading mb-3 tracking-tight">
          <TypewriterText text="Bernard Onuh" className="text-foreground" />
        </h1>
        <p className="text-lg text-muted">
          Software Engineer · Community Builder · Developer Relations
        </p>
      </div>

      {/* Bio Section */}
      <div className="space-y-5 text-muted leading-relaxed text-base md:text-[17px]">
        <p>
          Hello, I&apos;m currently a <span className="accent-glow">Software Engineer</span> building
          blockchain products, a <span className="accent-glow">Community Builder</span>, and
          a <span className="accent-glow">Developer Relations</span> professional. Over the past 5 years,
          I&apos;ve worn many hats in the Web3 space.
        </p>

        <p>
          I&apos;m an anxious but action-oriented learner — I live by the quote:{' '}
          <em className="text-foreground/80">&ldquo;Learn, Build, and Earn.&rdquo;</em>
        </p>

        <p>
          I&apos;ve shipped products that have processed{' '}
          <span className="text-foreground font-medium">300+ transactions</span>, served{' '}
          <span className="text-foreground font-medium">100+ users</span>, and handled over{' '}
          <span className="text-foreground font-medium">$20,000</span> in volume — from smart
          contracts to full-stack dApps that people actually use.
        </p>
        
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

        <p>
          I&apos;ve onboarded <span className="text-foreground font-medium">200+ developers</span> to
          blockchain so far — and I&apos;m still onboarding more. If you&apos;re looking to get started
          in Web3, feel free to reach out — happy to help!{' '}
          <Link href="https://calendly.com/bernard-web3nova/30min" className="link-dotted text-accent font-medium" target="_blank" rel="noopener noreferrer">
            Let&apos;s chat ↗
          </Link>
        </p>

        <p>
          Currently open to new opportunities and collaborations. You can contact me via my details to discuss.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-theme">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-heading text-foreground">300+</p>
          <p className="text-xs text-muted mt-1 uppercase tracking-wide">Transactions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-heading text-foreground">200+</p>
          <p className="text-xs text-muted mt-1 uppercase tracking-wide">Devs Onboarded</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-heading text-foreground">$20K+</p>
          <p className="text-xs text-muted mt-1 uppercase tracking-wide">Volume</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-heading text-foreground">5+</p>
          <p className="text-xs text-muted mt-1 uppercase tracking-wide">Hackathons Won</p>
        </div>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 text-sm text-muted">
        <Link href="https://x.com/bernard_o1" className="hover:text-accent transition-colors" target="_blank">Twitter ↗</Link>
        <Link href="https://github.com/BernardOnuh" className="hover:text-accent transition-colors" target="_blank">GitHub ↗</Link>
        <Link href="https://www.youtube.com/@Bernard_O1" className="hover:text-accent transition-colors" target="_blank">YouTube ↗</Link>
        <Link href="https://linkedin.com/in/bernardonuh" className="hover:text-accent transition-colors" target="_blank">LinkedIn ↗</Link>
        <Link href="https://t.me/bernardonuh" className="hover:text-accent transition-colors" target="_blank">Telegram ↗</Link>
        <Link href="#" className="hover:text-accent transition-colors">Resume ↗</Link>
      </div>
    </div>
  )
}
