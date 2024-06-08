import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      fontSize: {
        h1: "5.875rem",
        h2: "3.688rem",
        h3: "2.938rem",
        h4: "2.063rem",
        h5: "1.5rem",
        h6: "1.25rem",
        subtitle1: "1rem",
        subtitle2: "0.875rem",
        body1: "1rem",
        body2: "0.875rem",
        button: "0.875rem",
        caption: "0.75rem",
        overline: "0.625rem",
      },
      letterSpacing: {
        h1: "-0.094rem",
        h2: "-0.031rem",
        h3: "0rem",
        h4: "0.016rem",
        h5: "0rem",
        h6: "0.009rem",
        subtitle1: "0.009rem",
        subtitle2: "0.006rem",
        body1: "0.031rem",
        body2: "0.016rem",
        button: "0.078rem",
        caption: "0.025rem",
        overline: "0.094rem",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
