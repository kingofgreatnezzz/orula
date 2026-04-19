import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ORULA Logo Colors - Vibrant Green Theme
        primary: {
          DEFAULT: '#1B4D2E',     // Dark Forest Green - Main logo color
          light: '#3A7D44',       // Medium Green - Palm fronds
          dark: '#0F2E1C',        // Darker Forest Green
        },
        secondary: {
          DEFAULT: '#5BA55C',     // Bright Leaf Green - Highlights
          light: '#8BBF4A',       // Light Yellow-Green - Accent
          dark: '#3A7D44',        // Medium Green
        },
        accent: {
          DEFAULT: '#D4AF37',     // Rich Gold - Stars
          light: '#E8C55C',       // Light Gold
          dark: '#9B7A1C',        // Dark Gold/Bronze
        },
        success: {
          DEFAULT: '#8BBF4A',     // Light Yellow-Green - Success
          light: '#A8D46A',       // Lighter Yellow-Green
          dark: '#6B9A3A',        // Darker Yellow-Green
        },
        // Additional ORULA tones
        orula: {
          cream: '#F5EDD6',       // Cream/Ivory - Banner
          brown: '#6B4226',       // Coconut Brown
          white: '#FFFFFF',       // Pure White
          'dark-green': '#1B4D2E',
          'medium-green': '#3A7D44',
          'light-green': '#5BA55C',
          'yellow-green': '#8BBF4A',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'], // More luxurious font
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(197, 165, 114, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(197, 165, 114, 0.6)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-orula': 'linear-gradient(135deg, #1B4D2E 0%, #3A7D44 100%)',
        'gradient-green': 'linear-gradient(135deg, #1B4D2E 0%, #5BA55C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C55C 100%)',
        'gradient-natural': 'linear-gradient(135deg, #3A7D44 0%, #8BBF4A 100%)',
        'gradient-cream': 'linear-gradient(135deg, #F5EDD6 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
export default config