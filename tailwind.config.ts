import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oolee: {
          pink: "#EC008C",
          "pink-hover": "#D1007D",
          "pink-soft": "#FFE4F2",
          "pink-light": "#FFF0F7",
          navy: "#0B1230",
          blue: "#2B3FE3",
          "blue-soft": "#EEF0FF",
          "blue-light": "#F4F5FF",
          bg: "#FFFFFF",
          "bg-alt": "#F7F8FB",
          ink: "#1A1A2E",
          muted: "#6B7280",
          line: "#E5E7EB",
          dark: "#0E0B1F",
          "dark-2": "#191427",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        "card-hover":
          "0 4px 6px rgba(16, 24, 40, 0.05), 0 10px 20px rgba(16, 24, 40, 0.08)",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
