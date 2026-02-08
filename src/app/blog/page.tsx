import Link from 'next/link'

const comingSoonPosts = [
  {
    title: "Building on Stacks: A Developer's Journey",
    excerpt: "My experience developing DeFi applications on the Stacks blockchain and lessons learned along the way.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Development"
  },
  {
    title: "The Future of Cross-Chain Infrastructure in Africa",
    excerpt: "Exploring how blockchain bridges and interoperability solutions can unlock financial inclusion across the continent.",
    date: "Coming Soon",
    readTime: "12 min read",
    category: "Analysis"
  },
  {
    title: "Community Building in Web3: Best Practices",
    excerpt: "Strategies and insights from growing developer communities across West Africa in the blockchain space.",
    date: "Coming Soon",
    readTime: "10 min read",
    category: "Community"
  },
  {
    title: "Smart Contract Security: Lessons from Production",
    excerpt: "Common vulnerabilities I've encountered and how to build more secure DeFi applications.",
    date: "Coming Soon",
    readTime: "15 min read",
    category: "Security"
  }
]

export default function Blog() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">Blog</h1>
          <p className="text-muted text-lg leading-relaxed">
            Thoughts on blockchain development, community building, and the evolving Web3 ecosystem in Africa.
          </p>
        </div>

        <div className="text-center bg-gray-900 border border-gray-800 rounded-lg p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Coming Soon</h2>
            <p className="text-muted">
              I'm currently working on some exciting content about blockchain development, 
              community building, and the Web3 ecosystem. Stay tuned for insightful articles 
              and tutorials!
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-foreground border-b border-gray-800 pb-3">
            Planned Articles
          </h2>
          
          <div className="space-y-6">
            {comingSoonPosts.map((post, index) => (
              <article key={index} className="border border-gray-800 rounded-lg p-6 opacity-60">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span className="px-2 py-1 bg-gray-900 rounded text-xs">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-sm text-muted">
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-muted">
            Want to stay updated? Follow me on{' '}
            <Link 
              href="https://x.com/bernard_o1" 
              className="link-dotted text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            {' '}for the latest updates and insights.
          </p>
        </div>
      </div>
    </div>
  )
}