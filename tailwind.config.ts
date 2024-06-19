import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#a3c4f3",
        "pastel-green": "#b4e1c5",
        "light-grey": "#f7f7f7",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
