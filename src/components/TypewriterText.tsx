'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function TypewriterText({ text, className = '', delay = 500, speed = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1))
        index++
        if (index >= text.length) {
          clearInterval(interval)
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1000)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </span>
  )
}