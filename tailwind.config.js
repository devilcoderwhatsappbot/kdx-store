/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kdx-bg': '#030303',
        'kdx-red': '#ee0000',
        'kdx-glass': 'rgba(255, 255, 255, 0.05)',
        'kdx-glass-hover': 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-slide-up': 'fadeInSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'hover-lift': 'hoverLift 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(238, 0, 0, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(238, 0, 0, 0.8)' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
