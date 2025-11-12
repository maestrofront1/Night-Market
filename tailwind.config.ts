import type { Config } from "tailwindcss";

export default {
    darkMode: ["class", "class"],
    content: ["./client/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
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
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
                gold: {
                    50: "#faf8f3",
                    100: "#f3ebe0",
                    200: "#e8dcc8",
                    300: "#d4b896",
                    400: "#c9a961",
                    500: "#b8933e",
                    600: "#a17d2e",
                    700: "#7a5f24",
                    800: "#644d1f",
                    900: "#533f1a",
                },
                burgundy: {
                    50: "#faf6f5",
                    100: "#f3e8e5",
                    200: "#e5d4cd",
                    300: "#d1a89f",
                    400: "#ba7f6d",
                    500: "#9e5d4a",
                    600: "#8b4d3a",
                    700: "#6d3d2a",
                    800: "#5a3224",
                    900: "#472620",
                },
                navy: {
                    50: "#f2f4f7",
                    100: "#e8ecf0",
                    200: "#d4dce8",
                    300: "#a6b8d4",
                    400: "#7a8fb8",
                    500: "#4a659f",
                    600: "#3a528a",
                    700: "#2c3d6b",
                    800: "#1f2a4d",
                    900: "#0f1729",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    // plugins: [require("tailwindcss-animate")],
} satisfies Config;
