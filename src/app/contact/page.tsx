import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - SS Solar | Get Your Free Solar Consultation',
  description: 'Contact SS Solar for your free solar consultation. Our experts are ready to help you switch to clean, renewable energy. Call, email, or fill out our contact form today.',
  keywords: 'contact SS Solar, solar consultation, solar quote, solar installation contact',
}

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us today for a free consultation 
            and discover how much you can save with solar energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
