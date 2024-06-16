/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: {
                50: "#fef1f6",
                100: "#fee5f0",
                200: "#ffcae2",
                300: "#ffa0c9",
                400: "#ff65a3",
                500: "#fd3880",
                600: "#ee1459",
                700: "#cf0740",
                800: "#ab0935",
                900: "#8e0d30",
                950: "#580017",
            },
            "stone-50": "#fafaf9",
            "stone-100": "#f5f5f4",
            "stone-200": "#e7e5e4",
            "stone-300": "#d6d3d1",
            "stone-400": "#a8a29e",
            "stone-500": "#78716c",
            "stone-600": "#57534e",
            "stone-700": "#44403c",
            "stone-800": "#292524",
            "stone-900": "#1c1917",
            "stone-950": "#0c0a09",
        },
        extend: {
            fontFamily: {
                Jakarta: ["Jakarta", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
