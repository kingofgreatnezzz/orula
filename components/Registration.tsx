'use client'

import { useState } from 'react'
import { CheckCircle, Phone, Mail, Clock, User, Award, Target, Users, Shield, Star } from 'lucide-react'

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    playerAge: '',
    program: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const benefits = [
    { icon: Award, text: 'Certified professional coaches' },
    { icon: Target, text: 'State-of-the-art facilities' },
    { icon: Star, text: 'Proven track record of success' },
    { icon: User, text: 'Individual development plans' },
    { icon: Shield, text: 'Safe and inclusive environment' },
    { icon: Users, text: 'College & professional pathways' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      alert('Please agree to receive information via WhatsApp to proceed.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Format WhatsApp message
      const whatsappMessage = `*New Registration - ORULA Football Academy*%0A%0A` +
        `*Name:* ${formData.fullName}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Player Age:* ${formData.playerAge}%0A` +
        `*Program:* ${formData.program}%0A` +
        `*Message:* ${formData.message || 'No additional message'}%0A%0A` +
        `_Submitted via website registration form_`

      // Get WhatsApp number from environment or use default
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY_NUMBER || '15551234567'
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')

      // Show success message
      setSubmitStatus('success')
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          playerAge: '',
          program: '',
          message: '',
          consent: false,
        })
        setSubmitStatus('idle')
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Journey Today
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Join our championship-winning academy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Why Choose ORULA Academy?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h4 className="font-heading text-xl font-bold mb-6">Have Questions?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium">Call us</div>
                    <div className="text-white/90">{process.env.NEXT_PUBLIC_ACADEMY_PHONE || '(555) 123-4567'}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium">Email us</div>
                    <div className="text-white/90">{process.env.NEXT_PUBLIC_ACADEMY_EMAIL || 'info@ORULAfootballacademy.com'}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-white/90">{process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || 'Mon-Fri: 9AM-6PM'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Registration Form
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  placeholder="Enter full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Player Age & Program */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Player's Age *
                  </label>
                  <input
                    type="number"
                    name="playerAge"
                    value={formData.playerAge}
                    onChange={handleChange}
                    required
                    min="5"
                    max="25"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    placeholder="Enter age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  >
                    <option value="">Select a program</option>
                    <option value="beginner">Beginner's Program (Ages 5-10) - $200/month</option>
                    <option value="advanced">Advanced Program (Ages 11-16) - $350/month</option>
                    <option value="ORULA">ORULA Program (Ages 16+) - $500/month</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 text-secondary focus:ring-secondary/20 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to receive information about programs and updates via WhatsApp
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-semibold rounded-lg transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-secondary to-secondary-light text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit via WhatsApp</span>
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Registration submitted successfully! You are being redirected to WhatsApp.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-700">
                    <span>There was an error submitting your registration. Please try again.</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                By submitting, you'll be redirected to WhatsApp to complete your registration.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
