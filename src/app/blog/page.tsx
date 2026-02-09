'use client'

import Link from 'next/link'
import { FadeUp, FadeLeft, BlurFade, StaggerContainer, StaggerItem, RevealLine, ScaleUp, motion } from '@/components/motion'

const posts = [
  {
    slug: 'how-i-won-my-first-hackathon',
    title: 'How I Won My First Hackathon',
    excerpt: 'From nervously submitting my first project to standing on stage as a winner — the sleepless nights, the pivots, the lessons, and the moment everything clicked. Here\'s what nobody tells you about hackathons.',
    date: 'February 2026',
    readTime: '10 min read',
    category: 'Story',
    emoji: '🏆',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'hover:border-yellow-500/50',
    tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    featured: true,
  },
  {
    slug: 'my-first-tech-event',
    title: 'How I Attended My First Tech Event',
    excerpt: 'Walking into a room full of builders for the first time changed everything. The connections I made, the ideas that sparked, and why showing up is the most underrated skill in tech.',
    date: 'February 2026',
    readTime: '8 min read',
    category: 'Story',
    emoji: '🎤',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    featured: true,
  },
  {
    slug: 'first-freelance-job',
    title: 'How I Got My First Freelance Job',
    excerpt: 'No portfolio, no reputation, just raw hunger and a willingness to learn. From cold DMs to my first paid project — the hustle, the imposter syndrome, and how I finally broke through.',
    date: 'February 2026',
    readTime: '12 min read',
    category: 'Career',
    emoji: '💼',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/50',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    featured: true,
  },
  {
    slug: 'contributing-to-ecosystems',
    title: 'How I Contributed to Base, Polygon & Beyond',
    excerpt: 'From community member to recognized builder — my journey contributing to major blockchain ecosystems. How I went from learning Solidity to being recognized by protocols like Wormhole, LayerZero, and Base.',
    date: 'February 2026',
    readTime: '15 min read',
    category: 'Web3',
    emoji: '🌐',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    featured: true,
  },
]

const upcomingPosts = [
  {
    title: "Building on Stacks: A Developer's Journey",
    category: 'Development',
    emoji: '⛏️',
  },
  {
    title: 'The Future of Cross-Chain Infrastructure in Africa',
    category: 'Analysis',
    emoji: '🔗',
  },
  {
    title: 'Community Building in Web3: Best Practices',
    category: 'Community',
    emoji: '🤝',
  },
  {
    title: 'Smart Contract Security: Lessons from Production',
    category: 'Security',
    emoji: '🔒',
  },
  {
    title: 'From FUTA to Web3: My University to Blockchain Pipeline',
    category: 'Story',
    emoji: '🎓',
  },
  {
    title: 'Running 8+ Events in One Year: The Web3Nova Playbook',
    category: 'DevRel',
    emoji: '📋',
  },
]

function FeaturedPost({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative border border-theme rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${post.borderColor}`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${post.color}`} />

      <div className="p-7">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.span
                className="text-3xl"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 400 }}
              >
                {post.emoji}
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 500 }}
                className={`text-[10px] px-2.5 py-1 rounded-full font-medium border ${post.tagColor}`}
              >
                {post.category}
              </motion.span>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted">{post.date}</p>
              <p className="text-[10px] text-muted/60">{post.readTime}</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted text-[15px] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Read link */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Read article
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
            <span className="text-[10px] text-muted/40 uppercase tracking-wider">
              {String(index + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Blog() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        {/* Hero */}
        <div>
          <BlurFade>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Blog</p>
          </BlurFade>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-heading mb-4">Stories & Insights</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              Real stories from my journey — winning hackathons, building communities, and navigating the Web3 space in Africa.
            </p>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.3}>
            <div className="flex gap-8 mt-6 pt-6 border-t border-theme">
              {[
                { value: `${posts.length}`, label: 'Articles' },
                { value: `${upcomingPosts.length}`, label: 'Coming Soon' },
                { value: '5+', label: 'Topics' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-2xl font-heading text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Featured Articles */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Latest Articles</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <FeaturedPost key={post.slug} post={post} index={index} />
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section>
          <FadeLeft>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-heading text-foreground">Coming Soon</h2>
              <RevealLine className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
          </FadeLeft>

          <StaggerContainer className="grid gap-3 md:grid-cols-2" staggerDelay={0.08}>
            {upcomingPosts.map((post) => (
              <StaggerItem key={post.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="group flex items-center gap-3 p-4 border border-theme rounded-lg hover:border-accent/30 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <span className="text-xl shrink-0">{post.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {post.title}
                    </p>
                    <p className="text-[11px] text-muted">{post.category} · Coming Soon</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Newsletter / CTA */}
        <ScaleUp>
          <div className="p-8 border border-theme rounded-2xl text-center hover:border-accent/30 transition-all duration-500">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-3xl mb-3 block">✍️</span>
              <h3 className="text-xl font-heading text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted text-sm mb-6 max-w-md mx-auto">
                Follow me on Twitter for real-time thoughts, threads, and updates on new articles.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href="https://x.com/bernard_o1"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-accent/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </Link>
                <Link
                  href="https://www.youtube.com/@Bernard_O1"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-theme hover:border-red-500/50 text-muted hover:text-red-400 transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Subscribe on YouTube
                </Link>
              </div>
            </motion.div>
          </div>
        </ScaleUp>
      </div>
    </div>
  )
}
