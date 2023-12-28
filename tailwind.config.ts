import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      cyan: "#2ab2af",
      brightYellow: "#c0df34",

      /* Neutral */
      lightGray: "#e5eff5",
      grayishBlue: "#98a6bd",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
