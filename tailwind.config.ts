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
        hiveGold: "#E8C840",
        hiveGray: "#f5f5f5",
        hiveDark: "#111111",
      },
      fontFamily: {
        century: [
          "Century Gothic",
          "CenturyGothic",
          "AppleGothic",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
