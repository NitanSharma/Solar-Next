import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Store contact submission in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message
      }
    })

    // In a real application, you might want to:
    // 1. Send an email notification to the team
    // 2. Send a confirmation email to the customer
    // 3. Log the submission for analytics

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error submitting contact form:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // This endpoint could be used to retrieve contact submissions
    // (with proper authentication in a real application)
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 10 // Limit to last 10 submissions
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
