/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      display: ["group-hover"],

      backgroundImage: {
    
      },

      fontFamily: {
        'DM-sans': ['DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
    },
  },
  plugins: [],
}

