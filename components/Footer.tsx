'use client'

import { Trophy, MessageCircle, Share2, Users, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Coaches', href: '#coaches' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    programs: [
      { label: "Beginner's Program", href: '#programs' },
      { label: 'Advanced Program', href: '#programs' },
      { label: 'ORULA Program', href: '#programs' },
      { label: 'Summer Camps', href: '#programs' },
      { label: 'Private Coaching', href: '#programs' },
    ],
  }

  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY_NUMBER || '15551234567'}`, label: 'WhatsApp' },
    { icon: Share2, href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '#', label: 'Instagram' },
    { icon: Users, href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || '#', label: 'Facebook' },
  ]

  const scrollToSection = (href: string) => {
    // This will be handled by the browser's native anchor behavior
    // The href already points to the section ID
    return
  }

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white">
                <img 
                  src="/orula.png" 
                  alt="ORULA Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">ORULA</span>
                <span className="text-sm text-white/70">FOOTBALL ACADEMY</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Developing ORULA champions on and off the pitch since 2009. Join our family of dedicated athletes and coaches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  {process.env.NEXT_PUBLIC_ACADEMY_ADDRESS || '123 Championship Drive, City 10001'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">
                  {process.env.NEXT_PUBLIC_ACADEMY_PHONE || '(555) 123-4567'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">
                  {process.env.NEXT_PUBLIC_ACADEMY_EMAIL || 'info@ORULAfootballacademy.com'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">
                  {process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || 'Mon-Fri: 9AM-6PM'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              &copy; {currentYear} ORULA Football Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="text-white/60 text-sm flex items-center space-x-2">
              <span>Designed with</span>
              <Heart className="w-4 h-4 text-success" />
              <span>for ORULA football excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



export default Footer
