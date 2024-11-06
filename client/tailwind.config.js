/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 1.5s ease-in-out infinite',
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
      },
      colors: {
        // Primary Colors from the logo
        primaryGreenLight: '#8ABF6D', // Light green from the logo ring
        primaryGreenDark: '#6E9F51', // Darker green for hover effects
        primaryBlack: '#000000', // Black for text/icons
        primaryGray: '#333333', // Dark gray for secondary text or borders

        // Secondary/Accent Colors
        accentBeige: '#F5F5DC', // Light beige for backgrounds/cards
        accentCream: '#FAF8F3', // Lighter cream for subtle backgrounds
        pureWhite: '#FFFFFF', // White for backgrounds
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
