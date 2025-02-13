import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          background: "#121212",
          primary: "#1E1E1E",
          secondary: "#292929",
          accent: "#E63946",
          text: "#E0E0E0",
          subtext: "#B0B0B0",
          border: "#333333",
          hover: "#252525",
        
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
} satisfies Config;
