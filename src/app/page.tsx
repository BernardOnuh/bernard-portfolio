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
      <div className="space-y-6 text-muted leading-relaxed">
        <p>
          Hello, I am currently a <span className="accent-glow font-medium">Software Engineer</span> building blockchain products and a <span className="accent-glow font-medium">Community Builder</span>. I have had to wear multiple hats over 5 years of my career. I am a very <span className="accent-glow font-medium">anxious learner and action taker</span>.
        </p>
        
        <p>
          For 5 years, I have contributed to projects like{' '}
          <Link 
            href="https://polygon.technology/" 
            className="link-dotted text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polygon Africa
          </Link>
          ,{' '}
          <Link 
            href="https://onchainglobal.com/" 
            className="link-dotted text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onchain Global
          </Link>
          , and{' '}
          <Link 
            href="https://basedwestafrica.com/" 
            className="link-dotted text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Based West Africa
          </Link>
          .
        </p>
        
        <p>
          Currently, I am open to new opportunities and collaborations. You can reach out to me via my contacts to discuss that.
        </p>
      </div>
    </div>
  )
}