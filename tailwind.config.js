//
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',  // Blue-600
          dark: '#3b82f6',     // Blue-500
        },
        surface: {
          light: '#ffffff',
          dark: '#1f2937',     // Gray-800
        },
        background: {
          light: '#f3f4f6',    // Gray-100
          dark: '#111827',     // Gray-900
        },
        border: {
          light: '#e5e7eb',
          dark: '#374151',     // Gray-700
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

