// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'SS Solar - Professional Rooftop Solar Installation Services',
//   description: 'Leading solar rooftop installation company providing sustainable energy solutions for homes and businesses. Get your free solar consultation today!',
//   keywords: 'solar installation, rooftop solar, solar panels, renewable energy, solar power, solar consultation',
//   authors: [{ name: 'SS Solar' }],
//   openGraph: {
//     title: 'SS Solar - Professional Rooftop Solar Installation Services',
//     description: 'Leading solar rooftop installation company providing sustainable energy solutions for homes and businesses.',
//     type: 'website',
//     locale: 'en_US',
//   },
//   robots: 'index, follow',
//   viewport: 'width=device-width, initial-scale=1',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
