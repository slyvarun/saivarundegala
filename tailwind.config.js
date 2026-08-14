/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nothing: {
          bg: "#000000",
          card: "#121212",
          border: "#262626",
          white: "#FFFFFF",
          grey: "#737373",
          lightGrey: "#E5E5E5",
          darkGrey: "#1A1A1A",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        space: ['"Space Mono"', 'monospace'],
        doto: ['"Doto"', 'sans-serif'],
      },
      backgroundImage: {
        'dot-matrix': 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
        'grid-lines': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-matrix': '20px 20px',
        'grid-lines': '40px 40px',
      },
    },
  },
  plugins: [],
};
