'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Award, Globe, Zap, Star } from 'lucide-react'

const Timeline = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'SS Solar was established with a vision to make solar energy accessible to every Texan.',
      icon: Calendar,
      color: 'bg-blue-500',
      achievements: ['First office opened', 'Initial team of 5 employees', 'First solar installation completed']
    },
    {
      year: '2020',
      title: 'Rapid Growth',
      description: 'Expanded operations across Central Texas with a growing team of certified installers.',
      icon: Users,
      color: 'bg-green-500',
      achievements: ['Team expanded to 25 employees', '100+ installations completed', 'New service areas added']
    },
    {
      year: '2021',
      title: 'Quality Recognition',
      description: 'Received industry recognition for excellence in solar installation and customer service.',
      icon: Award,
      color: 'bg-yellow-500',
      achievements: ['Industry excellence award', 'Customer satisfaction award', 'Safety certification achieved']
    },
    {
      year: '2022',
      title: 'Statewide Expansion',
      description: 'Extended services to cover the entire state of Texas with regional offices.',
      icon: Globe,
      color: 'bg-purple-500',
      achievements: ['Coverage across all Texas regions', '300+ installations completed', 'Partnerships established']
    },
    {
      year: '2023',
      title: 'Innovation Leadership',
      description: 'Introduced cutting-edge solar technologies and smart monitoring systems.',
      icon: Zap,
      color: 'bg-orange-500',
      achievements: ['Smart monitoring systems', 'Battery storage solutions', 'Advanced panel technology']
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Established as one of Texas\' premier solar installation companies with 500+ successful projects.',
      icon: Star,
      color: 'bg-red-500',
      achievements: ['500+ installations completed', '98% customer satisfaction', 'Industry leadership position']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading solar installation company, 
            discover the key milestones that shaped SS Solar&apos;s success story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-300"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                    <div className={`${milestone.color} rounded-full p-3 w-fit ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} mb-4`}>
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      
                      {/* Achievements */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-center space-x-2">
                            {index % 2 === 0 ? (
                              <>
                                <span className="text-yellow-500">•</span>
                                <span>{achievement}</span>
                              </>
                            ) : (
                              <>
                                <span>{achievement}</span>
                                <span className="text-yellow-500">•</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Looking to the Future
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              As we continue to grow and innovate, our commitment to excellence and customer 
              satisfaction remains unwavering. We&apos;re excited to lead Texas into a sustainable 
              energy future and help more families and businesses make the switch to solar power.
            </p>
            <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Be Part of Our Future
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
