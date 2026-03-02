/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          light: '#EEF0FF',
        },
        accent: {
          DEFAULT: '#FF8C42',
          light: '#FFF4EC',
        },
        success: '#34D399',
        'bg-page': '#FAFAFA',
        'bg-card': '#FFFFFF',
        'text-primary': '#1A1A2E',
        'text-secondary': '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
