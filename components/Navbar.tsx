'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Trophy } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="#home" 
            className="flex items-center space-x-3 group"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary group-hover:scale-105 transition-transform">
              <img 
                src="/orula.png" 
                alt="ORULA Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary">ORULA</span>
              <span className="text-xs text-secondary">FOOTBALL ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-medium text-gray-700 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-secondary after:to-secondary-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#register')}
              className="px-6 py-2.5 bg-gradient-to-r from-secondary to-secondary-light text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                className="block w-full px-4 py-3 bg-gradient-to-r from-secondary to-secondary-light text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
