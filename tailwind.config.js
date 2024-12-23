/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'gradient-placeholder': 'linear-gradient(to right, #ec4899, #f97316)', // Pink to orange
        'gradient-gray': 'linear-gradient(to right, #868F96, #596164)', // Grayish gradient
      },
    },
  },
  plugins: [],
}
