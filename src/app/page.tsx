import Link from 'next/link'
import TypewriterText from '@/components/TypewriterText'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
          <TypewriterText text="Bernard Onuh" className="text-foreground" />
        </h1>
        <p className="text-xl text-muted font-light">
          Software Engineer & Community Builder
        </p>
      </div>

      {/* Bio Section */}
      <div className="space-y-6 text-muted leading-relaxed text-base md:text-lg">
        <p>
          Hello, I am currently a <span className="accent-glow">Software Engineer</span> building blockchain products and a <span className="accent-glow">Community Builder</span>. I have had to wear multiple hats over 5 years of my career. I am a very <span className="accent-glow">anxious learner and action taker</span>.
        </p>

        <p>
          I have built products that have processed over{' '}
          <span className="text-foreground font-semibold">300+ transactions</span>,{' '}
          serving <span className="text-foreground font-semibold">100+ users</span> and handling{' '}
          <span className="text-foreground font-semibold">$20,000+</span> in volume. From smart contracts to full-stack dApps, I ship products that people actually use.
        </p>
        
        <p>
          For 5 years, I have contributed to projects like{' '}
          <Link 
            href="https://polygon.technology/" 
            className="link-dotted text-foreground/90 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polygon Africa
          </Link>
          ,{' '}
          <Link 
            href="https://onchainglobal.com/" 
            className="link-dotted text-foreground/90 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onchain Global
          </Link>
          , and{' '}
          <Link 
            href="https://basedwestafrica.com/" 
            className="link-dotted text-foreground/90 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Based West Africa
          </Link>
          , building communities and shipping code across the African blockchain ecosystem.
        </p>

        <p>
          Currently, I am open to new opportunities and collaborations. You can reach out to me via my contacts to discuss that.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">300+</p>
          <p className="text-sm text-muted mt-1">Transactions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">100+</p>
          <p className="text-sm text-muted mt-1">Users</p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">$20K+</p>
          <p className="text-sm text-muted mt-1">Volume</p>
        </div>
      </div>
    </div>
  )
}
