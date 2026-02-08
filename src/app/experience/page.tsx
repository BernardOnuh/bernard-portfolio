const experiences = [
  {
    title: 'Software Engineer',
    company: 'Freelance',
    period: '2022 - Present',
    description: [
      'Building blockchain products, smart contracts, and decentralized applications (dApps)',
      'Developing innovative solutions for Web3 ecosystems and DeFi protocols',
      'Collaborating with startups and established companies on blockchain integration projects',
      'Creating user-friendly interfaces for complex blockchain interactions'
    ]
  },
  {
    title: 'Developer Advocate',
    company: 'Onchain Global',
    period: '2023 - Present',
    description: [
      'Leading developer education initiatives and technical workshops',
      'Creating educational content and documentation for blockchain developers',
      'Building relationships with developer communities across Africa',
      'Organizing hackathons and coding bootcamps focused on Web3 technologies'
    ]
  },
  {
    title: 'Community Builder',
    company: 'Based West Africa',
    period: '2024 - Present',
    description: [
      'Building and nurturing the Base blockchain ecosystem in West Africa',
      'Organizing community events, meetups, and educational sessions',
      'Connecting developers, entrepreneurs, and innovators in the region',
      'Facilitating partnerships between local talent and global opportunities'
    ]
  },
  {
    title: 'Community Lead',
    company: 'Polygon Africa',
    period: '2021 - 2023',
    description: [
      'Grew and managed developer communities across African markets',
      'Organized large-scale events, workshops, and educational programs',
      'Established partnerships with local universities and tech hubs',
      'Mentored emerging developers and entrepreneurs in blockchain technology'
    ]
  }
]

export default function Experience() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">Experience</h1>
          <p className="text-muted text-lg leading-relaxed">
            5 years of building and growing in the blockchain and Web3 space.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-6 pb-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
                <p className="text-sm text-muted">{exp.period}</p>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted leading-relaxed flex items-start">
                    <span className="text-accent mr-2 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <h2 className="text-xl font-semibold text-foreground mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Blockchain Development',
              'Smart Contracts',
              'Solidity',
              'Web3.js/Ethers.js',
              'React/Next.js',
              'TypeScript',
              'Node.js',
              'Community Building',
              'Developer Relations',
              'Technical Writing',
              'Event Organization',
              'Partnership Development'
            ].map((skill) => (
              <div key={skill} className="bg-gray-900 px-3 py-2 rounded-lg text-sm text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}