import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'purple': {
        100: '#FBF9FF',
        200: '#F2EDFD',
        300: '#E4DAFB',
        400: '#C9B6F7',
        500: '#AE91F3',
        600: '#936CEF',
        700: '#865AED',
        900: '#7F4FEB'
      },
      'purple-black': {
        900: '#070212'
      }
      
    },
    extend: {
      
    },
   
  },
  plugins: [],
};
export default config;
