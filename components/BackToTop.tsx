'use client'

import { ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Main Button */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
          <ChevronUp className="w-6 h-6 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg shadow-xl text-sm whitespace-nowrap">
            Back to top
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        </div>
      </div>
    </button>
  )
}

export default BackToTop
