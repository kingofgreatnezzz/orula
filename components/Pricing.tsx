'use client'

import { Check, Gift, Shield, Clock, Target, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

const Pricing = () => {
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

    const element = document.getElementById('pricing')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const pricingPlans = [
    {
      title: "Beginner's Program",
      price: "$200",
      period: "/month",
      description: "Perfect for young beginners",
      features: [
        "8 sessions per month",
        "Small group training",
        "Basic equipment provided",
        "Progress reports",
        "Parent workshops",
      ],
      color: "from-blue-500 to-cyan-500",
      badge: null,
      specialOffer: null,
    },
    {
      title: "Advanced Program",
      price: "$350",
      period: "/month",
      description: "Most popular choice",
      features: [
        "12 sessions per month",
        "Competitive match play",
        "Advanced equipment",
        "Video analysis",
        "Scout exposure events",
      ],
      color: "from-secondary to-secondary-light",
      badge: "Best Value",
      featured: true,
      specialOffer: "6 months = 1 month free",
    },
    {
      title: "ORULA Program",
      price: "$500",
      period: "/month",
      description: "Professional development",
      features: [
        "16 sessions per month",
        "Individual coaching",
        "Performance analytics",
        "Nutrition planning",
        "College recruitment support",
      ],
      color: "from-primary to-primary-light",
      badge: null,
      specialOffer: "Annual discount available",
    },
  ]

  const includedFeatures = [
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "All players are covered during training and matches",
    },
    {
      icon: Award,
      title: "Academy Kit",
      description: "Professional training kit included with enrollment",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple time slots available for all programs",
    },
    {
      icon: Target,
      title: "Progress Tracking",
      description: "Regular assessments and performance reports",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment in Excellence
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Transparent pricing for quality training
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative rounded-3xl overflow-hidden border-2 ${
                plan.featured 
                  ? 'border-secondary shadow-2xl transform lg:scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300 hover:shadow-xl bg-white ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-secondary to-secondary-light text-white text-sm font-semibold rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} p-8`}>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/90 ml-2">{plan.period}</span>
                </div>
                <p className="text-white/90">{plan.description}</p>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Special Offer */}
                {plan.specialOffer && (
                  <div className="mb-8 p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-semibold text-secondary">Special Offer</div>
                        <div className="text-sm text-gray-600">{plan.specialOffer}</div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => scrollToSection('#register')}
                  className={`w-full py-3 font-semibold rounded-lg transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-secondary to-secondary-light text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Included Features */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What's Included in All Plans
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every program comes with these premium benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`bg-white rounded-2xl p-6 border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-gray-100 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span className="font-medium">Family discounts available for multiple enrollments</span>
          </div>
          <p className="text-gray-500 mt-4">
            All prices are in USD. Payment plans available upon request.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
