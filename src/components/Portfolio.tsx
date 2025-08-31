'use client'

import { motion } from 'framer-motion'
import { Star, Eye, Zap, Home, Building2 } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Residential Solar',
      category: 'Residential',
      description: 'Complete 8kW solar installation with battery backup for a family home',
      image: '/solar-residential.jpg',
      stats: { power: '8kW', savings: '$2,400/year', panels: 24 },
      rating: 5,
      reviews: 12,
      icon: Home
    },
    {
      id: 2,
      title: 'Commercial Office Complex',
      category: 'Commercial',
      description: 'Large-scale 50kW solar array for corporate headquarters',
      image: '/solar-commercial.jpg',
      stats: { power: '50kW', savings: '$15,000/year', panels: 150 },
      rating: 5,
      reviews: 8,
      icon: Building2
    },
    {
      id: 3,
      title: 'Eco-Friendly Villa',
      category: 'Residential',
      description: 'Luxury villa with integrated solar and smart home technology',
      image: '/solar-villa.jpg',
      stats: { power: '12kW', savings: '$3,600/year', panels: 36 },
      rating: 5,
      reviews: 15,
      icon: Home
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      category: 'Commercial',
      description: 'Massive 100kW installation for manufacturing facility',
      image: '/solar-warehouse.jpg',
      stats: { power: '100kW', savings: '$30,000/year', panels: 300 },
      rating: 5,
      reviews: 6,
      icon: Building2
    },
    {
      id: 5,
      title: 'Smart Home Solar',
      category: 'Residential',
      description: 'Intelligent solar system with AI-powered optimization',
      image: '/solar-smart.jpg',
      stats: { power: '10kW', savings: '$3,000/year', panels: 30 },
      rating: 5,
      reviews: 20,
      icon: Home
    },
    {
      id: 6,
      title: 'Shopping Center',
      category: 'Commercial',
      description: 'Multi-building solar installation for retail complex',
      image: '/solar-shopping.jpg',
      stats: { power: '75kW', savings: '$22,500/year', panels: 225 },
      rating: 5,
      reviews: 10,
      icon: Building2
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold mb-6 border border-green-200">
            <Eye className="w-5 h-5 mr-2 text-green-600" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solar Projects That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Inspire
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful solar installations across residential and commercial projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-900 to-cyan-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <project.icon className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm shadow-inner"></div>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                    <Zap className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm font-semibold text-blue-800">{project.stats.power}</div>
                    <div className="text-xs text-blue-600">Power</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <div className="text-lg font-bold text-green-800 mb-1">$</div>
                    <div className="text-sm font-semibold text-green-800">{project.stats.savings}</div>
                    <div className="text-xs text-green-600">Savings</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-yellow-800 mb-1">{project.stats.panels}</div>
                    <div className="text-sm font-semibold text-yellow-800">Panels</div>
                    <div className="text-xs text-yellow-600">Total</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({project.reviews} reviews)</span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm group-hover:underline transition-all duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have already switched to clean, renewable solar energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300">
                View More Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
