'use client'

import { motion } from 'framer-motion'
import { 
  Home, 
  Building2, 
  Settings, 
  Shield, 
  CheckCircle,
  Zap,
  Sun,
  Battery
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar solutions for homeowners including design, installation, and maintenance.',
      features: ['Custom system design', 'Professional installation', 'Warranty coverage', 'Monitoring setup'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Large-scale solar installations for businesses and commercial properties.',
      features: ['Energy cost reduction', 'Tax incentives', 'Scalable solutions', 'ROI optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Solar Maintenance',
      description: 'Regular maintenance and monitoring to ensure optimal system performance.',
      features: ['Performance monitoring', 'Cleaning services', 'Repair & replacement', 'Annual inspections'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Warranty & Support',
      description: 'Comprehensive warranty coverage and ongoing customer support.',
      features: ['25-year warranty', '24/7 support', 'Performance guarantee', 'Insurance coverage'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Immediate Savings',
      description: 'Start saving on your electricity bills from day one',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Reduce your carbon footprint with renewable solar power',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Battery,
      title: 'Energy Independence',
      description: 'Generate your own power and reduce grid dependency',
      color: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-sm font-semibold mb-6 border border-yellow-200">
            <Sun className="w-5 h-5 mr-2 text-yellow-600" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Solar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final installation, we provide comprehensive 
            solar solutions tailored to your specific needs and energy goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 md:p-16 border border-gray-100"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Solar Energy?
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the numerous benefits of switching to solar power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-br ${benefit.color} rounded-full p-6 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="mt-20">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Installation Process
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Free site assessment and energy analysis', icon: '🔍' },
                { step: '02', title: 'Design', desc: 'Custom system design and proposal', icon: '✏️' },
                { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians', icon: '🔧' },
                { step: '04', title: 'Activation', desc: 'System activation and monitoring setup', icon: '⚡' }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {process.step}
                    </div>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h5 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-yellow-600 transition-colors duration-300">{process.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
