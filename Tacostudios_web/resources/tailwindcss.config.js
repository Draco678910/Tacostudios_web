/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                //Poner brillos: hover:animate-rgdGlow transition-shadow duration-500
                rainbowGlow: {
                    "0%": { boxShadow: "0 0 20px #ff0000" }, // rojo
                    "16%": { boxShadow: "0 0 20px #ff7f00" }, // naranja
                    "33%": { boxShadow: "0 0 20px #ffff00" }, // amarillo
                    "50%": { boxShadow: "0 0 20px #00ff00" }, // verde
                    "66%": { boxShadow: "0 0 20px #00FFFF" }, // cyan
                    "83%": { boxShadow: "0 0 20px #FFD1DC" }, // rosa
                    "100%": { boxShadow: "0 0 20px #ff0000" }, // rojo
                },
                tGlow: {
                    "0%": { boxShadow: "0px 0px 20px #00FFFF" }, // cyan
                    "28%": { boxShadow: "0px 0px 20px #FF69B4" }, // rosa
                    "56%": { boxShadow: "0px 0px 20px #FFFFFF" }, // blanco
                    "84%": { boxShadow: "0px 0px 20px #FF69B4" }, // rosa
                    "100%": { boxShadow: "0px 0px 20px #00FFFF" }, // cyan
                },
                rgdGlow: {
                    "0%": { boxShadow: "0 0 20px #ff0000" }, // rojo
                    "28%": { boxShadow: "0 0 20px #000000" }, // black
                    "56%": { boxShadow: "0 0 20px #D4AF37" }, // gold
                    "84%": { boxShadow: "0 0 20px #000000" }, // black
                    "100%": { boxShadow: "0 0 20px #ff0000" }, // rojo
                },
            },
            animation: {
                rainbowGlow: "rainbowGlow 2.5s infinite linear",
                tGlow: "tGlow 5.0s infinite linear",
                rgdGlow: "rgdGlow 4.5s infinite linear",
            },
            "colors": {
                "primary-fixed": "#bc87fe",
                "on-tertiary-fixed-variant": "#6c192e",
                "surface-tint": "#c799ff",
                "secondary-fixed": "#4af8e3",
                "outline": "#767575",
                "tertiary-fixed": "#ff8fa2",
                "tertiary-container": "#fb899c",
                "error": "#ff6e84",
                "on-primary": "#440080",
                "tertiary": "#ff9dac",
                "on-primary-container": "#340064",
                "surface-bright": "#2c2c2c",
                "on-surface-variant": "#adaaaa",
                "surface-container-highest": "#262626",
                "on-background": "#ffffff",
                "surface": "#0e0e0e",
                "on-tertiary-fixed": "#390010",
                "on-primary-fixed": "#000000",
                "error-dim": "#d73357",
                "on-tertiary": "#69162c",
                "on-secondary-container": "#dcfff8",
                "on-primary-fixed-variant": "#40007a",
                "primary-container": "#bc87fe",
                "inverse-on-surface": "#565555",
                "primary-fixed-dim": "#af7aef",
                "on-secondary-fixed-variant": "#00655b",
                "background": "#0e0e0e",
                "surface-variant": "#262626",
                "on-error": "#490013",
                "on-error-container": "#ffb2b9",
                "secondary-dim": "#33e9d5",
                "surface-dim": "#0e0e0e",
                "error-container": "#a70138",
                "primary-dim": "#ba85fb",
                "secondary-fixed-dim": "#33e9d5",
                "tertiary-fixed-dim": "#f18194",
                "primary": "#c799ff",
                "inverse-surface": "#fcf9f8",
                "on-tertiary-container": "#5b0a22",
                "on-surface": "#ffffff",
                "outline-variant": "#484847",
                "inverse-primary": "#7744b5",
                "on-secondary-fixed": "#00463f",
                "surface-container": "#1a1a1a",
                "surface-container-lowest": "#000000",
                "secondary": "#4af8e3",
                "on-secondary": "#005b51",
                "surface-container-low": "#131313",
                "secondary-container": "#006a60",
                "tertiary-dim": "#eb7c8f",
                "surface-container-high": "#20201f"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "fontFamily": {
                "headline": ["Space Grotesk"],
                "body": ["Manrope"],
                "label": ["Manrope"]
            }
        },
    },
}