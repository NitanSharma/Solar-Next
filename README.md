# SS Solar - Professional Solar Installation Website

A modern, responsive, and SEO-friendly website for SS Solar Rooftop Installation Company built with Next.js 15, Prisma ORM, and Neon Postgres database.

## 🚀 Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Mobile-first responsive design with hamburger navigation
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Contact Form**: Functional contact form with database storage
- **Server Components**: Next.js 15 server components for optimal performance
- **Database Integration**: Prisma ORM with Neon Postgres database

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: Prisma ORM, Neon Postgres
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Navigation.tsx     # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Portfolio.tsx      # Portfolio section
│   ├── CTA.tsx            # Call-to-action section
│   ├── AboutHero.tsx      # About page hero
│   ├── CompanyValues.tsx  # Company values
│   ├── Timeline.tsx       # Company timeline
│   ├── TeamSection.tsx    # Team section
│   ├── ContactForm.tsx    # Contact form
│   └── ContactInfo.tsx    # Contact information
├── lib/                    # Utility libraries
│   └── db.ts              # Prisma database client
└── prisma/                 # Database schema
    └── schema.prisma      # Prisma schema file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon Postgres database account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SS-Solar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
   NODE_ENV=development
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Prisma Schema

The project includes a Prisma schema with a `Contact` model for storing form submissions:

```prisma
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  message   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

## 🎨 Customization

### Colors and Branding

The website uses a solar-themed color palette:
- Primary: Yellow (`#f59e0b`)
- Secondary: Orange (`#ea580c`)
- Accent: Blue (`#3b82f6`)
- Neutral: Gray scale

### Content Updates

- **Company Information**: Update contact details in `Footer.tsx` and `ContactInfo.tsx`
- **Services**: Modify services in `Services.tsx`
- **Portfolio**: Update projects in `Portfolio.tsx`
- **Team**: Edit team members in `TeamSection.tsx`
- **Testimonials**: Update customer reviews in `Testimonials.tsx`

### Styling

The project uses Tailwind CSS 4 with custom CSS animations. Custom styles can be added to `globals.css`.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Structure

- **Components**: Reusable React components with TypeScript
- **Pages**: Next.js pages with proper metadata
- **API Routes**: Server-side API endpoints
- **Database**: Prisma ORM with type-safe database operations

## 📊 Performance Features

- **Server Components**: Next.js 15 server components for better performance
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Static generation where possible
- **API Routes**: Efficient API endpoints for dynamic functionality

## 🔒 Security

- **Input Validation**: Form validation on both client and server
- **SQL Injection Protection**: Prisma ORM prevents SQL injection
- **Environment Variables**: Sensitive data stored in environment variables
- **HTTPS**: Secure connections in production

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Semantic HTML structure
- **Performance**: Core Web Vitals optimization
- **Accessibility**: ARIA labels and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: info@sssolar.com
- Phone: (555) 123-4567
- Website: [sssolar.com](https://sssolar.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Tailwind CSS team for the utility-first CSS framework
- Framer Motion team for the animation library
- Lucide team for the beautiful icons

---

**Built with ❤️ for SS Solar**
