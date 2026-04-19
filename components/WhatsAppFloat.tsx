'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY_NUMBER || '15551234567'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Floating Button */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className={`absolute right-16 bottom-1/2 transform translate-y-1/2 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        } transition-all duration-300 pointer-events-none`}>
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
            <div className="text-sm font-semibold">Chat with us</div>
            <div className="text-xs text-gray-300">Quick responses</div>
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        </div>

        {/* Ping Animation */}
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-20" />
      </div>
    </a>
  )
}

export default WhatsAppFloat
