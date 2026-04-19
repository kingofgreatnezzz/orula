'use client'

import { useState, useEffect } from 'react'
import { Play, Trophy, Users, Target, Award, Star, ChevronRight, Shield, Globe } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Rotate inspirational images
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % inspirationalImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Trophy, value: '75+', label: 'Championships Won', color: 'from-secondary to-secondary-light' },
    { icon: Users, value: '1500+', label: 'ORULA Players Trained', color: 'from-accent to-accent-light' },
    { icon: Target, value: '120+', label: 'Professional Contracts', color: 'from-success to-success-light' },
    { icon: Award, value: '98%', label: 'Success Rate', color: 'from-secondary to-accent' },
  ]

  const inspirationalImages = [
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1600&q=80', // Football action - player scoring
    'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=1600&q=80', // Football action - player dribbling
    'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1600&q=80', // Football celebration - team
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80', // Youth football training
    'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=1600&q=80', // Professional football match
    'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=1600&q=80', // Football skills training
  ]

  const certifications = [
    { icon: Shield, label: 'FIFA Certified', color: 'text-success' },
    { icon: Globe, label: 'UEFA Licensed', color: 'text-accent' },
    { icon: Star, label: 'ORULA Rated', color: 'text-secondary' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background with rotating inspirational images */}
      <div className="absolute inset-0">
        {inspirationalImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundAttachment: 'fixed'
            }}
          />
        ))}
        
        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Animated luxury elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-premium rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-success rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Premium Content */}
          <div className={`space-y-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              {/* Luxury badge */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-8 group hover:border-accent/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-green rounded-full animate-pulse" />
                <span className="text-white/90 font-medium tracking-wider text-sm">ORULA FOOTBALL ACADEMY</span>
                <Star className="w-4 h-4 text-accent" />
              </div>
              
              {/* Main headline */}
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block">ORULA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-green">FOOTBALL ACADEMY</span>
                <span className="block text-xl md:text-2xl font-normal text-white/70 mt-6 font-sans">
                  Where Green Meets Greatness
                </span>
              </h1>
              
              {/* Premium description */}
              <p className="text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-sans">
                Experience ORULA football training with world-class coaching, cutting-edge facilities, and a proven methodology that has developed professional athletes for over a decade. Your journey to greatness starts here.
              </p>
            </div>

            {/* Luxury CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#register"
                className="group px-10 py-5 bg-gradient-gold text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
              >
                <span className="tracking-wide">BEGIN YOUR LEGACY</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#programs"
                className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-secondary/50 text-lg"
              >
                EXPLORE PROGRAMS
              </a>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className={`w-5 h-5 ${cert.color}`} />
                    </div>
                    <span className="text-white/70 text-sm font-medium">{cert.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Luxury Stats Grid */}
          <div className={`grid grid-cols-2 gap-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-gold transition-all duration-700" />
                </div>
              )
            })}
            
            {/* Additional inspirational image card */}
            <div className="col-span-2 relative rounded-3xl overflow-hidden border border-white/20 group hover:border-secondary/50 transition-all duration-500">
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${inspirationalImages[2]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-lg">Training Like Champions</div>
                <div className="text-white/70 text-sm">State-of-the-art facilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-white/50 text-sm tracking-wider font-sans">EXPLORE EXCELLENCE</span>
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-gradient-gold rounded-full mt-3 animate-bounce" />
            <div className="absolute -bottom-6 w-1 h-1 bg-gradient-gold rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
