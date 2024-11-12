/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme=> ({
        'purple-500': '#7A0BC0',
        'pink-500': "FF69B4",
        'orange-500': "#FFA07A",
      }),
    },
  },
  plugins: [],
}

