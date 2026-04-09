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
        btcDark:        "#080C14",   // Page background
        btcSurface:     "#0D1829",   // Navbar, footer, cards
        btcCard:        "#131C2E",   // Elevated card surfaces
        btcBorder:      "#1E2D45",   // Borders & dividers
        btcOrange:      "#F7931A",   // Bitcoin orange – primary accent & CTAs
        btcOrangeHover: "#E8820E",   // CTA hover state
        btcText:        "#EEF2FF",   // Primary text
        btcMuted:       "#8BA3C4",   // Secondary / muted text
        btcGreen:       "#00D97E",   // Success / checkmarks
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        s:         "0.8rem",
        l:         "1.5rem",
        sm:        "1.3rem",
        base:      "1.4rem",
        mbHeading: "2.25rem",
        xl:        "1em",
        "2xl":     "1.8em",
        "3xl":     "2.8rem",
        "4xl":     "4.025rem",
        "5xl":     "8.052rem",
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

