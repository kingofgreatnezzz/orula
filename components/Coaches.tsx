'use client'

import { Award, Trophy, Users, Target, Star, CheckCircle, MessageCircle, Share2, Briefcase } from 'lucide-react'
import { useEffect, useState } from 'react'

const Coaches = () => {
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

    const element = document.getElementById('coaches')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const coaches = [
    {
      name: "Coach Marcus Johnson",
      role: "Head Coach & Technical Director",
      experience: "15+ years",
      specialization: "Technical Development & Tactics",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "UEFA Pro License",
        "Former Professional Player (EPL)",
        "Developed 10+ Professional Players",
        "National Team Scout"
      ],
      bio: "Former Premier League midfielder with extensive coaching experience across Europe. Specializes in youth development and tactical innovation.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Coach Sarah Martinez",
      role: "Fitness & Conditioning Specialist",
      experience: "12+ years",
      specialization: "Athletic Performance & Recovery",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Sports Science PhD",
        "FIFA Certified Trainer",
        "Olympic Athlete Coach",
        "Nutrition Specialist"
      ],
      bio: "Sports scientist with expertise in athletic performance optimization. Works with ORULA athletes to maximize potential and prevent injuries.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Coach David Chen",
      role: "Goalkeeping Coach",
      experience: "18+ years",
      specialization: "Goalkeeper Development",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Former National Team Goalkeeper",
        "Goalkeeping Coach License",
        "Developed 5 Professional Keepers",
        "Youth Development Expert"
      ],
      bio: "Former international goalkeeper with extensive coaching experience. Specializes in modern goalkeeping techniques and mental preparation.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Coach Elena Rodriguez",
      role: "Skills & Development Coach",
      experience: "10+ years",
      specialization: "Technical Skills & Creativity",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Brazilian Football Academy Certified",
        "Futsal Development Expert",
        "Creative Play Specialist",
        "Youth Psychology Certified"
      ],
      bio: "Specialist in technical skill development and creative play. Trained in Brazilian football methodology with focus on flair and innovation.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    }
  ]

  const coachStats = [
    { icon: Trophy, value: "50+", label: "Players Turned Pro" },
    { icon: Award, value: "100+", label: "Championships Won" },
    { icon: Users, value: "1000+", label: "Players Trained" },
    { icon: Target, value: "15", label: "Years Average Experience" },
  ]

  return (
    <section id="coaches" className="py-20 bg-gradient-to-b from-luxury-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            ORULA Coaching Staff
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-6" />
          <p className="text-luxury-gray max-w-2xl mx-auto text-lg">
            Learn from the best in the business. Our world-class coaching team brings decades of professional experience and championship-winning expertise.
          </p>
        </div>

        {/* Coach Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {coachStats.map((stat, index) => {
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

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coaches.map((coach, index) => (
            <div
              key={coach.name}
              className={`group bg-white rounded-3xl overflow-hidden border border-luxury-silver/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 400}ms` }}
            >
              {/* Coach Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${coach.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 bg-gradient-gold text-white text-sm font-bold rounded-full shadow-lg">
                    {coach.experience}
                  </div>
                </div>
              </div>

              {/* Coach Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-bold text-primary mb-1">
                    {coach.name}
                  </h3>
                  <div className="text-secondary font-semibold mb-2">
                    {coach.role}
                  </div>
                  <div className="text-sm text-luxury-gray bg-luxury-cream/50 px-3 py-1.5 rounded-lg inline-block">
                    {coach.specialization}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  {coach.achievements.slice(0, 3).map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-luxury-gray">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-sm text-luxury-gray mb-6 line-clamp-3">
                  {coach.bio}
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href={coach.social.twitter}
                    className="w-8 h-8 bg-luxury-cream rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Message"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={coach.social.linkedin}
                    className="w-8 h-8 bg-luxury-cream rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Briefcase className="w-4 h-4" />
                  </a>
                  <a
                    href={coach.social.instagram}
                    className="w-8 h-8 bg-luxury-cream rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coaching Philosophy */}
        <div className="bg-gradient-premium rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Our Coaching Philosophy
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Individual Development</h4>
                    <p className="text-white/80 text-sm">Personalized training plans for each player's unique potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Technical Excellence</h4>
                    <p className="text-white/80 text-sm">Mastering fundamentals while developing advanced skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Team Dynamics</h4>
                    <p className="text-white/80 text-sm">Building cohesive units that understand tactical systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Mental Preparation</h4>
                    <p className="text-white/80 text-sm">Developing championship mindset and resilience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-6xl font-bold text-secondary mb-2">1:8</div>
                <div className="text-xl font-semibold">Coach to Player Ratio</div>
                <p className="text-white/70 mt-2">Maximum individual attention for optimal development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coaches
