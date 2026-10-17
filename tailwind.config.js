/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3, 30%, 89%)",
        input: "hsl(214.3, 56%, 49%)",
        ring: "hsl(222.2, 82%, 56%)",
      },
    },
  },
}
