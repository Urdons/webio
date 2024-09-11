/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ts}"],
  theme: {
    extend: {},
    colors: {
      void: {
        dark: "#18181b",
        light: "#f4f4f5",
      },
      background: {
        dark: "#09090b",
        light: "#fafafa",
      },
      outline: {
        dark: "#27272a",
        light: "#e5e7eb",
      },
      text: {
        hard: {
          dark: "#fafafa",
          light: "#18181b",
        },
        soft: {
          dark: "#3f3f46",
          light: "#d4d4d8",
        },
      },
    },
  },
  plugins: [],
}

