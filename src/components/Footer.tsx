import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'Resume', href: '#', external: false },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/bernardonuh', external: true },
    { name: 'Twitter', href: 'https://x.com/bernard_o1', external: true },
    { name: 'GitHub', href: 'https://github.com/BernardOnuh', external: true },
    { name: 'YouTube', href: 'https://www.youtube.com/@Bernard_O1', external: true },
    { name: 'Telegram', href: 'https://t.me/bernardonuh', external: true },
  ]

  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:text-foreground link-dotted transition-colors"
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="text-center text-muted text-xs mt-8">
          © 2024 Bernard Onuh. All rights reserved.
        </div>
      </div>
    </footer>
  )
}