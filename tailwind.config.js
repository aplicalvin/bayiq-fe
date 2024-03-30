/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "primary-50": "#FFEEEB",
            "primary-100": "#FFDDD7",
            "primary-200": "#FFCCC3",
            "primary-300": "#FFBBAF",
            "primary-400": "#FE9988",
            "primary-500": "#FE7760",
            "primary-600": "#FE5538",
            "primary-700": "#CE442D",
            "primary-800": "#9E3422",
            "primary-900": "#6E2316",
            "primary-950": "#3E130B",
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
