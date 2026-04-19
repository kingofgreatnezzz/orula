'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Academy',
      details: process.env.NEXT_PUBLIC_ACADEMY_ADDRESS || '123 Championship Drive\nSports Complex, City 10001',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: `${process.env.NEXT_PUBLIC_ACADEMY_PHONE || '(555) 123-4567'}\n${process.env.NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAYS || 'Mon-Fri: 9AM-6PM'}`,
      color: 'from-secondary to-secondary-light',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: `${process.env.NEXT_PUBLIC_ACADEMY_EMAIL || 'info@ORULAfootballacademy.com'}\nadmissions@ORULAfootballacademy.com`,
      color: 'from-primary to-primary-light',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Format WhatsApp message
      const whatsappMessage = `*Contact Form - ORULA Football Academy*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Subject:* ${formData.subject}%0A` +
        `*Message:* ${formData.message}%0A%0A` +
        `_Submitted via website contact form_`

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
          name: '',
          email: '',
          subject: '',
          message: '',
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We're here to answer your questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.details}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp Chat */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900">
                    Quick WhatsApp Chat
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get instant responses during business hours
                  </p>
                </div>
              </div>
              
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY_NUMBER || '15551234567'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                Chat with us on WhatsApp
              </a>
              
              <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Quick responses within business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  placeholder="How can we help you?"
                />
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
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700">
                    <Send className="w-5 h-5" />
                    <span>Message sent successfully! You are being redirected to WhatsApp.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-700">
                    <span>There was an error sending your message. Please try again.</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                By submitting, you'll be redirected to WhatsApp to send your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
