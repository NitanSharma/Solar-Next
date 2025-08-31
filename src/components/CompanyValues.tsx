'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Heart, 
  Users, 
  Lightbulb, 
  Globe,
  Award,
  Clock
} from 'lucide-react'

const CompanyValues = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices. Our word is our bond.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in every installation, ensuring the highest quality standards and customer satisfaction.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We listen, understand, and exceed expectations.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration, supporting each other to achieve common goals.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to deliver cutting-edge solar installations.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Environmental Stewardship',
      description: 'We\'re committed to protecting our planet and promoting sustainable energy solutions.',
      color: 'from-emerald-500 to-green-600'
    }
  ]

  const commitments = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every installation undergoes rigorous quality checks to ensure optimal performance and longevity.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We respect your time and complete projects on schedule, keeping you informed every step of the way.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and every action we take. 
            They&apos;re the foundation of our company culture and the promise we make to our customers.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`bg-gradient-to-br ${value.color} rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Commitments to You
            </h3>
            <p className="text-lg text-gray-600">
              Beyond our values, we make specific commitments to ensure your solar journey is exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <commitment.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {commitment.title}
                    </h4>
                    <p className="text-gray-600">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Building a Sustainable Future Together
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              At SS Solar,               we don&apos;t just install solar panels—we&apos;re building partnerships 
              that last. Our values and commitments create a foundation of trust, quality, 
              and mutual success. When you choose SS Solar, you&apos;re choosing a company that 
              shares your vision for a cleaner, more sustainable world.
            </p>
            <div className="inline-flex items-center bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Our Mission
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyValues
