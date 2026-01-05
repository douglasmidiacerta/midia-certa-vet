/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Veterinária Profissional e Moderna
        primary: '#0ea5e9',      // Azul médico vibrante
        primaryDark: '#0284c7',  // Azul escuro
        primaryLight: '#38bdf8', // Azul claro
        
        secondary: '#14b8a6',    // Verde-azulado (teal médico)
        secondaryDark: '#0f766e',
        secondaryLight: '#2dd4bf',
        
        accent: '#f97316',       // Laranja energético e caloroso
        accentDark: '#ea580c',
        accentLight: '#fb923c',
        
        cta: '#10b981',          // Verde vivo para CTAs
        ctaHover: '#059669',
        
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        textPrimary: '#0f172a',
        textSecondary: '#475569',
        textTertiary: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 40px -5px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.12)',
        'glow-primary': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-accent': '0 0 20px rgba(249, 115, 22, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
        'gradient-hero': 'linear-gradient(135deg, #e0f2fe 0%, #ccfbf1 50%, #fed7aa 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
