import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">About</h1>
          <p className="text-muted text-lg leading-relaxed">
            A passionate software engineer and community builder shaping the future of blockchain technology across West Africa.
          </p>
        </div>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            I'm a <span className="accent-glow font-medium">Software Engineer</span> with a deep focus on blockchain and Web3 technologies. Over the past 5 years, I've immersed myself in the crypto/web3 space, building innovative products and fostering vibrant communities across West Africa.
          </p>
          
          <p>
            My journey began with a curiosity about decentralized systems and has evolved into a mission to make blockchain technology more accessible and impactful in Africa. I believe in the transformative power of decentralized technologies and their potential to create new opportunities for economic empowerment.
          </p>
          
          <p>
            As a <span className="accent-glow font-medium">Community Builder</span>, I've had the privilege of working with some of the most influential organizations in the space. Through{' '}
            <Link 
              href="https://polygon.technology/" 
              className="link-dotted text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polygon Africa
            </Link>
            , I helped grow and nurture developer communities, organized educational events, and facilitated workshops that bridged the gap between traditional tech and blockchain innovation.
          </p>
          
          <p>
            My work with{' '}
            <Link 
              href="https://onchainglobal.com/" 
              className="link-dotted text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Onchain Global
            </Link>
            {' '}focuses on developer education and advocacy, where I create content, conduct workshops, and help developers understand and build with cutting-edge blockchain technologies.
          </p>
          
          <p>
            Currently, I'm involved with{' '}
            <Link 
              href="https://basedwestafrica.com/" 
              className="link-dotted text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Based West Africa
            </Link>
            , where we're building a thriving ecosystem around Base blockchain in West Africa, connecting developers, entrepreneurs, and innovators who are passionate about onchain possibilities.
          </p>
          
          <p>
            I'm a self-described <span className="accent-glow font-medium">"anxious learner and action taker"</span> – I believe in learning by doing, staying curious, and taking bold steps to turn ideas into reality. Whether it's building smart contracts, developing dApps, or organizing community events, I approach every project with enthusiasm and a commitment to excellence.
          </p>
          
          <p>
            When I'm not coding or building communities, you can find me exploring new technologies, contributing to open-source projects, or sharing insights about the evolving blockchain landscape through various platforms.
          </p>
          
          <p>
            I'm always excited to connect with fellow builders, innovators, and anyone passionate about the potential of decentralized technologies. Feel free to reach out – I'd love to discuss opportunities, collaborate on projects, or simply chat about the future of Web3.
          </p>
        </div>
      </div>
    </div>
  )
}