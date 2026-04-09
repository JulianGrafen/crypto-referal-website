/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Legacy colors (preserved for backward compatibility) ──
        bluePrimary: "#27435E",
        blue1: "#3670A6",
        blue2: "#22344A",
        blue3: "#1D2335",
        secondary: "#00f6ff",
        videoBluePrimary: "#022441",
        videoBlueSecondary: "#061927",

        // ── Design system: Bitcoin dark theme ──
        btcDark:        "#060A10",   // Page background
        btcSurface:     "#0B1422",   // Navbar, footer, elevated surfaces
        btcCard:        "#111927",   // Card surfaces
        btcBorder:      "#1A2840",   // Borders & dividers
        btcOrange:      "#F7931A",   // Bitcoin orange – primary accent & CTAs
        btcOrangeHover: "#E8820E",   // CTA hover state
        btcText:        "#F0F4FF",   // Primary text
        btcMuted:       "#7A95B8",   // Secondary / muted text
        btcGreen:       "#00D97E",   // Success / checkmarks
        btcGlass:       "rgba(255,255,255,0.04)", // Glassmorphism surface
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #F7931A 0%, #F5C842 100%)',
        'gradient-hero':   'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(247,147,26,0.12) 0%, transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(247,147,26,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(247,147,26,0)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.5s ease-out both',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
    },

    screens: {
      mb:  "420px",
      xs:  "480px",
      ss:  "620px",
      sm:  "768px",
      md:  "1060px",
      lg:  "1200px",
      xl:  "1700px",
    },
  },
};

