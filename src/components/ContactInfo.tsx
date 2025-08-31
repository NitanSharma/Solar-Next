'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 123-4568'],
      description: 'Speak directly with our solar specialists',
      action: 'Call Now',
      actionLink: 'tel:+15551234567',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@sssolar.com', 'sales@sssolar.com'],
      description: 'Send us a detailed message about your needs',
      action: 'Send Email',
      actionLink: 'mailto:info@sssolar.com',
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Solar Street', 'City, State 12345'],
      description: 'Stop by our office for a face-to-face consultation',
      action: 'Get Directions',
      actionLink: '#',
      color: 'bg-purple-500'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500"
        >
          <div className="flex items-start space-x-4">
            <div className={`${method.color} rounded-lg p-3`}>
              <method.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {method.description}
              </p>
              <div className="space-y-1 mb-4">
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-800 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <a
                href={method.actionLink}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                {method.action}
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500"
      >
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-500 rounded-lg p-3">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Business Hours
            </h3>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white"
      >
        <div className="flex items-start space-x-4">
          <div className="bg-white/20 rounded-lg p-3">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-yellow-100 mb-4">
              For urgent solar system issues or emergency support, 
              our team is available 24/7.
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Emergency Hotline
            </a>
          </div>
        </div>
      </motion.div>

      {/* Consultation Booking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200"
      >
        <div className="text-center">
          <div className="bg-yellow-100 rounded-full p-3 w-fit mx-auto mb-4">
            <Calendar className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Schedule a Free Consultation
          </h3>
          <p className="text-gray-600 mb-6">
            Book your free, no-obligation solar consultation with our experts. 
            We&apos;ll assess your energy needs and provide a customized solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo
