<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function () {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
            padding: 0%;
            margin: 0%;
        }

        html.dark {
            background-color: oklch(0.145 0 0);

            padding: 0%;
            margin: 0%;
        }
    </style>

    <title inertia>{{ config('app.name', 'TacostudiosWeb') }}</title>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
        tailwind.config = {
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
    </script>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="">

    @inertia
</body>

</html>