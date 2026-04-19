'use client'

import { Star, Medal, Crown, Check, Users, Target, Award, Clock, Shield, Zap, TrendingUp, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('programs')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const programs = [
    {
      icon: Star,
      title: "FOUNDATION PROGRAM",
      age: "Ages 5-10",
      price: "$250",
      period: "/month",
      description: "Building the fundamentals of football excellence. Where young champions begin their journey.",
      features: [
        "Mastering ball control & coordination",
        "Developing football IQ through games",
        "Small group personalized attention",
        "Safety-first professional environment",
        "Progress tracking & parent reports",
      ],
      color: "from-accent to-accent-light",
      badge: "Most Popular",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
      duration: "8 sessions/month",
      intensity: "Beginner",
      outcomes: ["Confidence Building", "Skill Foundation", "Team Spirit"]
    },
    {
      icon: Medal,
      title: "PERFORMANCE PROGRAM",
      age: "Ages 11-16",
      price: "$450",
      period: "/month",
      description: "Elevating skills to competitive levels. For serious players aiming for excellence.",
      features: [
        "Advanced technical skill development",
        "Tactical understanding & game strategy",
        "Competitive match play experience",
        "Video analysis & performance review",
        "Scout exposure opportunities",
      ],
      color: "from-secondary to-secondary-light",
      badge: "ORULA Choice",
      image: "https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=800&q=80",
      duration: "12 sessions/month",
      intensity: "Intermediate",
      outcomes: ["Competitive Edge", "Tactical Intelligence", "Leadership Skills"]
    },
    {
      icon: Crown,
      title: "ORULA PROGRAM",
      age: "Ages 16+",
      price: "$650",
      period: "/month",
      description: "Professional-level training for future stars. The pathway to football greatness.",
      features: [
        "Professional coaching methodology",
        "Individual development plans",
        "College & pro recruitment support",
        "Sports psychology & mental training",
        "International exposure opportunities",
      ],
      color: "from-success to-success-light",
      badge: "Pro Pathway",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80",
      duration: "16 sessions/month",
      intensity: "Advanced",
      outcomes: ["Professional Readiness", "Global Opportunities", "Championship Mindset"]
    },
  ]

  const programStats = [
    { icon: Users, value: "1:8", label: "Coach to Player Ratio" },
    { icon: Clock, value: "98%", label: "Attendance Rate" },
    { icon: Target, value: "85%", label: "Skill Improvement" },
    { icon: Award, value: "50+", label: "Pro Players Developed" },
  ]

  const testimonials = [
    {
      name: "Alex Rodriguez",
      program: "ORULA Program Graduate",
      quote: "The ORULA Program transformed my game. Now playing professionally in Europe.",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sarah Chen",
      program: "Performance Program Parent",
      quote: "My son's confidence and skills have skyrocketed. Worth every penny.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Coach Martinez",
      program: "Head Scout",
      quote: "The most comprehensive youth development program I've seen.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=200&q=80"
    }
  ]

  const inspirationalImages = [
    'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1200&q=80',
  ]

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white to-luxury-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-premium rounded-2xl mb-8">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            ORULA Training Programs
          </h2>
          <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mb-8" />
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto leading-relaxed">
            Structured pathways to football excellence. Each program is designed to maximize potential at every stage of development.
          </p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {programStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-6 border border-luxury-silver/20 shadow-lg hover:shadow-xl transition-shadow ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-xl mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-luxury-gray">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className={`group relative bg-white rounded-3xl overflow-hidden border-2 ${
                  index === 1 
                    ? 'border-secondary shadow-2xl transform md:scale-105' 
                    : 'border-luxury-silver/20 hover:border-secondary/30'
                } transition-all duration-500 hover:shadow-2xl cursor-pointer`}
                onClick={() => setActiveProgram(index)}
                onMouseEnter={() => setActiveProgram(index)}
              >
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {program.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-4 py-2 bg-gradient-gold text-white text-sm font-bold rounded-full shadow-lg">
                        {program.badge}
                      </div>
                    </div>
                  )}
                </div>

                {/* Program Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{program.price}</div>
                      <div className="text-sm text-luxury-gray">{program.period}</div>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {program.title}
                  </h3>
                  <div className="text-secondary font-semibold mb-4">
                    {program.age} • {program.duration}
                  </div>

                  <p className="text-luxury-gray mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {program.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-luxury-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Program Outcomes */}
                  <div className="mb-8">
                    <div className="text-sm font-semibold text-primary mb-3">KEY OUTCOMES</div>
                    <div className="flex flex-wrap gap-2">
                      {program.outcomes.map((outcome, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 bg-luxury-cream text-luxury-gray text-xs font-medium rounded-full border border-luxury-silver/20"
                        >
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#register"
                    className={`block w-full py-3.5 font-bold rounded-lg transition-all text-center ${
                      index === 1
                        ? 'bg-gradient-gold text-primary hover:shadow-lg'
                        : 'bg-luxury-cream text-primary hover:bg-gradient-gold hover:text-primary'
                    }`}
                  >
                    Enroll Now
                  </a>
                </div>

                {/* Intensity Indicator */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-luxury-gray">{program.intensity}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Program Comparison */}
        <div className="bg-gradient-premium rounded-3xl p-8 md:p-12 text-white mb-20">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
            Program Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  {programs.map((program, index) => (
                    <th key={index} className="text-center py-4 px-6 font-semibold">
                      {program.title.split(' ')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Sessions/Month</td>
                  {programs.map((program, index) => (
                    <td key={index} className="text-center py-4 px-6 font-bold">
                      {program.duration.split('/')[0]}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Coach Ratio</td>
                  <td className="text-center py-4 px-6">1:10</td>
                  <td className="text-center py-4 px-6">1:8</td>
                  <td className="text-center py-4 px-6">1:6</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Video Analysis</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓✓</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Scout Exposure</td>
                  <td className="text-center py-4 px-6">Regional</td>
                  <td className="text-center py-4 px-6">National</td>
                  <td className="text-center py-4 px-6">International</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-primary mb-12 text-center">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white rounded-3xl p-8 border border-luxury-silver/20 shadow-lg hover:shadow-xl transition-shadow ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.program}</div>
                  </div>
                </div>
                <p className="text-luxury-gray italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-gold px-8 py-4 rounded-full mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="font-bold text-primary text-lg">Limited spots available</span>
          </div>
          <p className="text-luxury-gray max-w-2xl mx-auto mb-8">
            Join the ranks of future champions. Our programs fill quickly due to high demand and limited coach availability.
          </p>
          <a
            href="#register"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-premium text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>SECURE YOUR SPOT TODAY</span>
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Programs
