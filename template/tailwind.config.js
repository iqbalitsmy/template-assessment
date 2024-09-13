/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t1-primary-color": "var(--t1-primary-color)",
        "t1-secondary-color": "var(--t1-secondary-color)",
        "t2-primary-color": "var(--t2-primary-color)",
        "t2-secondary-color": "var(--t2-secondary-color)",
        "t3-primary-color": "var(--t3-primary-color)",
        "t3-secondary-color": "var(--t3-secondary-color)",
        "t4-second-secondary-color": "var(--t4-second-secondary-color)",
      },
    },
  },
  plugins: [],
}

