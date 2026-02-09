# Bernard Onuh - Portfolio Website

A clean, minimal portfolio website for Bernard Onuh - Software Engineer & Community Builder.

## 🎨 Design

The website follows a minimal, elegant design inspired by lifeofdanel.xyz with:

- **Dark theme** with subtle accent color (#5546FF)
- **Typography**: Inter (sans-serif) + Playfair Display (serif)
- **Responsive design** with mobile hamburger menu
- **Smooth animations** and typewriter effects
- **Clean layout** focused on content and readability

## 🚀 Features

- **Homepage**: Typewriter effect on name with accent-glowed bio keywords
- **About**: Detailed background and journey in blockchain/Web3
- **Experience**: Timeline of roles with skills showcase
- **Projects**: Featured and other projects from actual GitHub repositories
- **Blog**: Placeholder for future content
- **Speaking**: Placeh,older for future content
- **Responsive**: Mobile-first design with hamburger navigation
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter + Playfair Display)
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with bio and typewriter effect
│   ├── about/page.tsx      # About page with detailed background
│   ├── experience/page.tsx # Experience timeline and skills
│   ├── projects/page.tsx   # Projects from GitHub repositories
│   ├── blog/page.tsx       # Blog placeholder
│   └── globals.css         # Global styles and custom classes
└── components/
    ├── Navbar.tsx          # Navigation with mobile menu
    ├── Footer.tsx          # Social links footer
    └── TypewriterText.tsx  # Custom typewriter component
```

## 🎯 Key Components

### TypewriterText
Custom component that creates a typewriter effect for the hero section name display.

### Navbar
Responsive navigation with mobile hamburger menu and smooth transitions.

### Projects
Dynamically displays projects from Bernard's actual GitHub repositories with:
- Featured projects section
- Tech stack tags
- GitHub and demo links
- Responsive grid layout

## 🚧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content

The website features:
- **Personal bio** with highlighted keywords and accent glow effects
- **Real GitHub projects** including STX Ramp, Portfolio Tracker, Lightning Swaps
- **Professional experience** at Polygon Africa, Onchain Global, Based West Africa
- **Social links** to Twitter, GitHub, YouTube, LinkedIn, Telegram
- **Contact information** for opportunities and collaborations

## 🎨 Styling Details

- **Accent glow**: `.accent-glow` class for highlighted keywords
- **Dotted links**: `.link-dotted` for stylish underline effects
- **Backdrop blur**: Navbar with glassmorphism effect
- **Custom animations**: Typewriter cursor and smooth transitions
- **Dark theme**: Background #0a0a0a with white/gray text hierarchy

## 📱 Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Hamburger menu for mobile navigation
- Flexible grid layouts for projects and experience
- Optimized typography scaling across devices

## 🔗 Links

- **GitHub**: [github.com/BernardOnuh/bernard-portfolio](https://github.com/BernardOnuh/bernard-portfolio)
- **Twitter**: [@bernard_o1](https://x.com/bernard_o1)
- **LinkedIn**: [bernardonuh](https://linkedin.com/in/bernardonuh)

---

Built with ❤️ by Bernard Onuh - Software Engineer & Community Builder
