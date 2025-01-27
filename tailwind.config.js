/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xl": ["18px", "30px"],
        "2xl": ["22px", "32px"],
        "3xl": ["42px", "54px"],
        "8xl": ["86px", "120%"],
        h1: ["86px", "120%"],
        h4: ["22px", "32px"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
      
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    }
  ]
};
