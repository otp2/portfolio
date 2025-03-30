module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neofolioshadcnuikitcomalabaster:
          "var(--neofolioshadcnuikitcomalabaster)",
        neofolioshadcnuikitcomblack: "var(--neofolioshadcnuikitcomblack)",
        "neofolioshadcnuikitcomcod-gray":
          "var(--neofolioshadcnuikitcomcod-gray)",
        "neofolioshadcnuikitcomdove-gray":
          "var(--neofolioshadcnuikitcomdove-gray)",
        neofolioshadcnuikitcommercury: "var(--neofolioshadcnuikitcommercury)",
        neofolioshadcnuikitcomteak: "var(--neofolioshadcnuikitcomteak)",
        "neofolioshadcnuikitcomteak-15": "var(--neofolioshadcnuikitcomteak-15)",
        "neofolioshadcnuikitcomteak-30": "var(--neofolioshadcnuikitcomteak-30)",
        "neofolioshadcnuikitcomteak-90": "var(--neofolioshadcnuikitcomteak-90)",
        neofolioshadcnuikitcomwhite: "var(--neofolioshadcnuikitcomwhite)",
        "neofolioshadcnuikitcomwild-sand":
          "var(--neofolioshadcnuikitcomwild-sand)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "neofolio-shadcnuikit-com-nunito-bold":
          "var(--neofolio-shadcnuikit-com-nunito-bold-font-family)",
        "neofolio-shadcnuikit-com-nunito-medium":
          "var(--neofolio-shadcnuikit-com-nunito-medium-font-family)",
        "neofolio-shadcnuikit-com-nunito-medium-underline":
          "var(--neofolio-shadcnuikit-com-nunito-medium-underline-font-family)",
        "neofolio-shadcnuikit-com-nunito-regular":
          "var(--neofolio-shadcnuikit-com-nunito-regular-font-family)",
        "neofolio-shadcnuikit-com-semantic-heading-1":
          "var(--neofolio-shadcnuikit-com-semantic-heading-1-font-family)",
        "neofolio-shadcnuikit-com-semantic-heading-2":
          "var(--neofolio-shadcnuikit-com-semantic-heading-2-font-family)",
        "neofolio-shadcnuikit-com-semantic-heading-4":
          "var(--neofolio-shadcnuikit-com-semantic-heading-4-font-family)",
        "neofolio-shadcnuikit-com-semantic-heading-5":
          "var(--neofolio-shadcnuikit-com-semantic-heading-5-font-family)",
        "neofolio-shadcnuikit-com-semantic-link":
          "var(--neofolio-shadcnuikit-com-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};