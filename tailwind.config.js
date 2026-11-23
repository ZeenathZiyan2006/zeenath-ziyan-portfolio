/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          bg: '#F7F5EC',        // Main background: #F7F5EC
          soft: '#DCE8D5',      // Soft Sage Green: #DCE8D5
          forest: '#526B50',    // Forest Green: #526B50
          muted: '#A3B899',     // Muted Sage: #A3B899
          olive: '#343D32',     // Deep Olive: #343D32
          surface: '#FFFFFF',   // Pure White: #FFFFFF
          50: '#F7F5EC',
          100: '#EDF3E8',
          200: '#DCE8D5',
          300: '#C2D5B9',
          400: '#A3B899',
          500: '#76946C',
          600: '#526B50',
          700: '#41553F',
          800: '#343D32',
          900: '#232921',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(52, 61, 50, 0.03)',
        'card': '0 4px 20px -2px rgba(52, 61, 50, 0.05), 0 2px 6px -1px rgba(52, 61, 50, 0.02)',
        'card-hover': '0 16px 32px -4px rgba(82, 107, 80, 0.12), 0 6px 14px -2px rgba(52, 61, 50, 0.04)',
        'elevated': '0 24px 48px -12px rgba(82, 107, 80, 0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
