import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "white",
      color: "ink.700",
      fontFamily: "body",
    },
    "::selection": {
      bg: "brand.100",
      color: "brand.900",
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#EBF3F9" },
          100: { value: "#D2E3F1" },
          200: { value: "#A7C9E3" },
          300: { value: "#72A9D1" },
          400: { value: "#3E86BD" },
          500: { value: "#1767A3" },
          600: { value: "#004E85" },
          700: { value: "#003D6B" },
          800: { value: "#00365F" }, // Condor Academy primary brand color
          900: { value: "#002542" },
          950: { value: "#00172B" },
        },
        accent: {
          50: { value: "#F2F4FA" },
          100: { value: "#E3E7F4" },
          200: { value: "#C7CFE9" },
          300: { value: "#AAB7DE" },
          400: { value: "#8E9ED2" },
          500: { value: "#7485C1" }, // Condor Academy accent/secondary color
          600: { value: "#5A6CA8" },
          700: { value: "#43538C" },
          800: { value: "#303D6E" },
          900: { value: "#1F284B" },
        },
        ink: {
          50: { value: "#F7F8FA" },
          100: { value: "#EEF0F4" },
          200: { value: "#E3E6EC" },
          300: { value: "#CDD2DC" },
          400: { value: "#98A1B3" },
          500: { value: "#6B7489" },
          600: { value: "#4D566B" },
          700: { value: "#343C50" },
          800: { value: "#1E2536" },
          900: { value: "#0E1424" },
        },
      },
      fonts: {
        heading: { value: "'Gotham', 'Cairo', 'Plus Jakarta Sans', Inter, system-ui, sans-serif" },
        body: { value: "'Gotham', 'Cairo', Inter, system-ui, -apple-system, 'Segoe UI', sans-serif" },
      },
      shadows: {
        soft: { value: "0 1px 2px rgba(0, 54, 95, 0.04), 0 1px 3px rgba(0, 54, 95, 0.06)" },
        card: { value: "0 1px 2px rgba(0, 54, 95, 0.04), 0 8px 24px -8px rgba(0, 54, 95, 0.12)" },
        lift: { value: "0 2px 4px rgba(0, 54, 95, 0.04), 0 24px 48px -16px rgba(0, 54, 95, 0.22)" },
      },
    },
    semanticTokens: {
      colors: {
        // Enables colorPalette="brand" on Chakra components (Button, Badge…)
        brand: {
          solid: { value: "{colors.brand.800}" },
          contrast: { value: "{colors.white}" },
          fg: { value: "{colors.brand.800}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.200}" },
          focusRing: { value: "{colors.brand.500}" },
        },
        accent: {
          solid: { value: "{colors.accent.500}" },
          contrast: { value: "{colors.white}" },
          fg: { value: "{colors.accent.700}" },
          muted: { value: "{colors.accent.100}" },
          subtle: { value: "{colors.accent.50}" },
          emphasized: { value: "{colors.accent.200}" },
          focusRing: { value: "{colors.accent.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
