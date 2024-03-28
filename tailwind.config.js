/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "color-primary-50": "#FFEEEB",
            "color-primary-100": "#FFDDD7",
            "color-primary-200": "#FFCCC3",
            "color-primary-300": "#FFBBAF",
            "color-primary-400": "#FE9988",
            "color-primary-500": "#FE7760",
            "color-primary-600": "#FE5538",
            "color-primary-700": "#CE442D",
            "color-primary-800": "#9E3422",
            "color-primary-900": "#6E2316",
            "color-primary-950": "#3E130B",
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
