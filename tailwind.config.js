/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "primary-50": "#FEFFEC",
            "primary-100": "#FEFFD9",
            "primary-200": "#FDFEB2",
            "primary-300": "#FBFE8C",
            "primary-400": "#FAFD65",
            "primary-500": "#F9FD3F",
            "primary-600": "#9DA026",
            "primary-700": "#707119",
            "primary-800": "#42430D",
            "primary-900": "#2B2B06",
            "primary-950": "#141400",
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
