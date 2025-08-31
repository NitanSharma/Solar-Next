'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Austin, TX',
      rating: 5,
      content: 'SS Solar transformed our home with a beautiful solar installation. Our electricity bills dropped by 80% and the installation was completed in just two days. Highly recommend!',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      location: 'Dallas, TX',
      rating: 5,
      content: 'As a business owner, I was concerned about the upfront costs, but SS Solar helped us understand the ROI. We\'re now saving over $2,000 monthly on energy costs.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      location: 'Houston, TX',
      rating: 5,
      content: 'Professional service from start to finish. The team was knowledgeable, courteous, and completed the installation ahead of schedule. Our tenants love the green energy initiative.',
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      location: 'San Antonio, TX',
      rating: 5,
      content: 'The solar panels look great on our roof and we\'re already seeing significant savings. The monitoring app is easy to use and the customer support is excellent.',
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      role: 'Architect',
      location: 'Fort Worth, TX',
      rating: 5,
      content: 'I\'ve worked with many solar companies, but SS Solar stands out for their attention to detail and quality craftsmanship. They truly care about customer satisfaction.',
      avatar: 'LW'
    },
    {
      name: 'Robert Martinez',
      role: 'Retiree',
      location: 'El Paso, TX',
      rating: 5,
      content: 'Perfect for our retirement home. The system is maintenance-free and we\'re enjoying the energy independence. SS Solar made the whole process simple and stress-free.',
      avatar: 'RM'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24/7', label: 'Support Available' }
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about their solar experience with SS Solar.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-yellow-500" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get your free solar consultation and start saving on energy costs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-600 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
