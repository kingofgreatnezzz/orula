'use client'

import { Target, Users, Trophy, Star, Award, CheckCircle, Globe, Shield, Heart, Flag } from 'lucide-react'
import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Pursuing the highest standards in training, facilities, and coaching',
      color: 'from-secondary to-secondary-light',
    },
    {
      icon: Users,
      title: 'Legacy',
      description: 'Building champions who leave lasting impacts on and off the field',
      color: 'from-accent to-accent-light',
    },
    {
      icon: Trophy,
      title: 'Victory',
      description: 'Cultivating a winning mindset through discipline and dedication',
      color: 'from-success to-success-light',
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Integrating cutting-edge technology with proven methodologies',
      color: 'from-secondary to-accent',
    },
  ]

  const achievements = [
    { icon: Globe, text: 'International Training Programs', detail: 'Global exposure opportunities' },
    { icon: Shield, text: 'FIFA & UEFA Certified', detail: 'World-class accreditation' },
    { icon: Award, text: 'ORULA Player Development', detail: 'Proven track record' },
    { icon: Heart, text: 'Holistic Approach', detail: 'Mind, body, and spirit' },
  ]

  const inspirationalImages = [
    'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80',
  ]

  const timeline = [
    { year: '2009', event: 'Academy Founded', detail: 'Started with 20 passionate young players' },
    { year: '2012', event: 'First Championship', detail: 'Won regional youth tournament' },
    { year: '2015', event: 'Professional Partnerships', detail: 'Established scout network' },
    { year: '2020', event: 'International Recognition', detail: 'FIFA certification achieved' },
    { year: '2024', event: 'Global Expansion', detail: 'Training programs in 3 countries' },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-luxury-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-8">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Crafting Football Excellence
          </h2>
          <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mb-8" />
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto leading-relaxed">
            Where raw talent meets world-class training. We transform passion into performance through a proven methodology that has developed professional athletes for over a decade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Mission & Vision with inspirational image */}
          <div className="space-y-12">
            <div className="relative rounded-3xl overflow-hidden border border-luxury-silver/20 shadow-xl group">
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${inspirationalImages[0]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-2xl font-bold mb-2">Training Champions</div>
                <div className="text-white/80">State-of-the-art facilities</div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-8 border border-luxury-silver/20 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center space-x-3">
                  <Target className="w-6 h-6 text-secondary" />
                  <span>Our Mission</span>
                </h3>
                <p className="text-luxury-gray leading-relaxed text-lg">
                  To forge exceptional footballers and outstanding individuals through ORULA coaching, cutting-edge facilities, and a culture of excellence that transcends the pitch.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-luxury-silver/20 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-secondary" />
                  <span>Our Vision</span>
                </h3>
                <p className="text-luxury-gray leading-relaxed text-lg">
                  To be the global benchmark for football excellence, recognized for producing world-class athletes who embody leadership, integrity, and championship mentality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-12">
            <div>
              <h3 className="font-heading text-3xl font-bold text-primary mb-10">
                Our Philosophy
              </h3>
              <div className="grid gap-6">
                {coreValues.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={value.title}
                      className={`group bg-white rounded-2xl p-6 border border-luxury-silver/20 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 ${
                        isVisible ? 'animate-slide-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-primary text-xl mb-2">
                            {value.title}
                          </h4>
                          <p className="text-luxury-gray">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-premium rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-8">Why Choose Us</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="font-bold">{achievement.text}</div>
                        <div className="text-white/70 text-sm">{achievement.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-primary mb-12 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary via-accent to-success hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2 px-4 md:px-8 mb-4 md:mb-0">
                    <div className={`bg-white rounded-2xl p-6 border border-luxury-silver/20 shadow-lg ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <div className="text-secondary font-bold text-lg mb-2">{item.year}</div>
                      <div className="font-heading font-bold text-primary text-xl mb-2">{item.event}</div>
                      <div className="text-luxury-gray">{item.detail}</div>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center z-10">
                    <Flag className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="w-full md:w-1/2 px-4 md:px-8" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="relative rounded-3xl overflow-hidden border border-luxury-silver/20 group">
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${inspirationalImages[1]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-3xl">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                "Greatness is not a destination, it's a journey we take together."
              </div>
              <div className="text-white/80 text-lg">
                Join us in writing the next chapter of football excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
