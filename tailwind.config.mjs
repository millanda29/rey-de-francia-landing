/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pool: '#56B1E3',
        deep: '#0B1D3A',
        royal: '#1A3E7A',
        gold: {
          DEFAULT: '#CFA94B',
          light: '#D8B859',
          dark: '#A8832E',
        },
        ivory: '#F5F2E8',
        whatsapp: '#25D366',
        primary: {
          50: '#eef6fc',
          100: '#d4eaf8',
          200: '#a8d4f0',
          300: '#56B1E3',
          400: '#3a9fd9',
          500: '#1A3E7A',
          600: '#153266',
          700: '#112a55',
          800: '#0B1D3A',
          900: '#081528',
          950: '#040c18',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce': 'bounce 2s ease-in-out infinite',
        'slideIn': 'slideIn 0.8s ease-out',
        'slideUp': 'slideUp 1s ease-out',
        'slideInRight': 'slideInRight 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        bounce: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
