# Elite Football Academy - Next.js Website

A professional, luxury football academy website built with Next.js 15, TypeScript, and Tailwind CSS. Features WhatsApp integration for lead collection and a modern, responsive design.

## 🎯 Features

### 1. **Complete Website Sections**
- **🏠 Home Page**: Compelling introduction with stats and strong call-to-action
- **📖 About Us**: Academy history, mission, values with engaging storytelling
- **⚽ Programs**: Three-tier training system (Beginner, Advanced, Elite)
- **💰 Pricing**: Transparent pricing with special offers
- **📝 Registration**: WhatsApp-integrated enrollment system
- **📞 Contact**: Multiple contact options with WhatsApp chat

### 2. **Design Specifications**
- **Luxury Aesthetic**: Mature, professional feel with sweet, appealing vibe
- **Brand Colors**: Extracted from football academy logo:
  - Primary: `#1a365d` (Deep Navy Blue)
  - Secondary: `#d4af37` (Gold)
  - Accent: `#c53030` (Crimson Red)
- **Responsive Design**: Perfect on all devices
- **Animations**: Smooth hover effects, scroll animations, floating elements

### 3. **WhatsApp Integration**
- Registration forms redirect to WhatsApp with pre-filled messages
- Contact forms send messages via WhatsApp
- Floating WhatsApp button for quick access
- Configurable WhatsApp numbers via `.env.local`

## 🚀 Quick Start

### 1. **Installation**
```bash
cd football-academy-next
npm install
```

### 2. **Configure Environment**
```bash
cp .env.example .env.local
# Edit .env.local with your WhatsApp numbers and contact info
```

### 3. **Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. **Build for Production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
football-academy-next/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Hero.tsx           # Hero section with stats
│   ├── About.tsx          # About academy section
│   ├── Programs.tsx       # Training programs
│   ├── Pricing.tsx        # Pricing plans
│   ├── Registration.tsx   # WhatsApp-integrated form
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer with links
│   ├── WhatsAppFloat.tsx  # Floating WhatsApp button
│   └── BackToTop.tsx      # Back to top button
├── public/                # Static assets
├── .env.example          # Environment template
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### 1. **Update Brand Colors**
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1a365d', // Your primary color
        light: '#2d4a7a',
        dark: '#0f1f3d',
      },
      secondary: {
        DEFAULT: '#d4af37', // Your secondary color
        light: '#e6c158',
        dark: '#b8941f',
      },
    },
  },
}
```

### 2. **Update Content**
Edit component files in `/components`:
- Update text content
- Modify program details
- Change pricing information
- Update contact information

### 3. **Configure WhatsApp**
Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_PRIMARY_NUMBER=15551234567
NEXT_PUBLIC_WHATSAPP_SECONDARY_NUMBER=15559876543
NEXT_PUBLIC_ACADEMY_PHONE=(555) 123-4567
NEXT_PUBLIC_ACADEMY_EMAIL=info@yourfootballacademy.com
```

## 📱 WhatsApp Integration

### How It Works
1. Users fill out registration/contact forms
2. Form data is formatted into a WhatsApp message
3. User is redirected to WhatsApp with pre-filled message
4. Academy receives lead information directly on WhatsApp

### Message Format
```
*New Registration - Elite Football Academy*

*Name:* John Doe
*Email:* john@example.com
*Phone:* (555) 123-4567
*Player Age:* 12
*Program:* Advanced Program (Ages 11-16) - $350/month
*Message:* Looking forward to joining!

_Submitted via website registration form_
```

## 🏗️ Technical Details

### Built With
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful & consistent icons
- **Google Fonts**: Inter & Montserrat fonts

### Features Implemented
- ✅ Smooth scrolling navigation
- ✅ Mobile-responsive design
- ✅ Form validation
- ✅ WhatsApp integration
- ✅ Animations and hover effects
- ✅ SEO-friendly structure
- ✅ Accessibility (ARIA labels)
- ✅ Performance optimized

### Performance
- Optimized images and assets
- Code splitting and lazy loading
- Fast page load times
- Optimized for Core Web Vitals

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Traditional Hosting
```bash
npm run build
# Upload the .next, public, and package.json files
```

## 📊 Analytics (Optional)

### Google Analytics
Add to `app/layout.tsx`:
```typescript
// Inside <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `,
}} />
```

## 📞 Support

### Common Issues
1. **WhatsApp not opening**: Ensure numbers are in international format
2. **Forms not submitting**: Check browser console for errors
3. **Mobile menu not working**: Ensure JavaScript is enabled
4. **Build errors**: Check TypeScript compilation errors

### Updates
- Keep dependencies updated
- Monitor WhatsApp API changes
- Regular content updates recommended

## 📄 License

This project is free to use for your football academy. Customize as needed for your specific requirements.

## 🙏 Credits

- Design inspired by modern luxury brands
- Icons by Lucide React
- Fonts by Google Fonts
- Built with Next.js and Tailwind CSS

---

**Ready to launch your football academy's online presence!** ⚽✨"# orula" 
