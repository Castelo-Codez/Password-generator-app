/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-offwhite": "#e6e5ea",
                "primary-grey": "#817d92",
                "primary-darkgrey": "#25242c",
                "primary-verydarkgrey": "#18171f",
                "primary-lightgreen": "#a4ffaf",
                "primary-red": "#f64a4a",
                "primary-orange": "#fb7c58",
                "primary-yellow": "#f8cd65",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
        },
    },
    plugins: [],
};
