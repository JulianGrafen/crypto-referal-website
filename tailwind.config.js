/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#424756",
        secondary: "#00f6ff",
        videoBluePrimary: "#022441",
        videoBlueSecondary: "#061927"
        
    },
    fontFamily: {
     "poppins": ["Poppins", "sans-serif"]
    },
    fontSize: {
      "s" : '1.1rem',
      "m" : '1.2rem',
      "sm": '1.3rem',
      "base": '1.4rem',
      "mbHeading": "2.75rem",
      "xl": '1em',
      "2xl": '1.8em',
      "3xl": '2.8rem',
      "4xl": '4.025rem',
      "5xl": '8.052rem',
    }
    
  },
  
  screens: {
    mb: "420px",
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  }
}
