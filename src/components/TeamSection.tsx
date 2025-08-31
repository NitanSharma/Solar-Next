'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      position: 'CEO & Founder',
      experience: '15+ years in solar industry',
      bio: 'Michael founded SS Solar with a vision to make clean energy accessible to every Texan. His leadership has guided the company from startup to industry leader.',
      expertise: ['Solar Engineering', 'Business Strategy', 'Team Leadership'],
      image: '/api/placeholder/300/300',
      email: 'michael@sssolar.com',
      phone: '(555) 123-4567',
      linkedin: '#'
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Operations Officer',
      experience: '12+ years in operations',
      bio: 'Sarah oversees all operational aspects of SS Solar, ensuring smooth project execution and maintaining our high standards of quality and safety.',
      expertise: ['Project Management', 'Quality Control', 'Process Optimization'],
      image: '/api/placeholder/300/300',
      email: 'sarah@sssolar.com',
      phone: '(555) 123-4568',
      linkedin: '#'
    },
    {
      name: 'David Thompson',
      position: 'Head of Engineering',
      experience: '18+ years in solar engineering',
      bio: 'David leads our engineering team, designing innovative solar solutions that maximize efficiency and meet the unique needs of each customer.',
      expertise: ['System Design', 'Technical Innovation', 'Performance Optimization'],
      image: '/api/placeholder/300/300',
      email: 'david@sssolar.com',
      phone: '(555) 123-4569',
      linkedin: '#'
    },
    {
      name: 'Emily Martinez',
      position: 'Customer Success Director',
      experience: '10+ years in customer service',
      bio: 'Emily ensures every customer has an exceptional experience, from initial consultation through installation and ongoing support.',
      expertise: ['Customer Relations', 'Project Coordination', 'Support Management'],
      image: '/api/placeholder/300/300',
      email: 'emily@sssolar.com',
      phone: '(555) 123-4570',
      linkedin: '#'
    }
  ]

  const certifications = [
    'NABCEP Certified Solar Installers',
    'OSHA Safety Certified',
    'Texas Licensed Electrical Contractors',
    'Solar Energy Industries Association Members',
    'BBB Accredited Business',
    'Energy Star Certified Partners'
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
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in solar energy, 
            ensuring that every project meets the highest standards of quality and innovation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Member Image */}
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-sm">Photo</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.experience}
                </p>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Certifications & Memberships
            </h3>
            <p className="text-lg text-gray-600">
              We maintain the highest industry standards and certifications to ensure 
              your solar installation meets all safety and quality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md text-center"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-lg">✓</span>
                </div>
                <p className="text-gray-800 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              We&apos;re always looking for passionate individuals who share our vision for a 
              sustainable energy future. If you&apos;re interested in joining the SS Solar team, 
              we&apos;d love to hear from you.
            </p>
            <div className="inline-flex items-center bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Career Opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
