/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: {
                    primary: "#BEADFA",
                    accent: "#DFCCFB",
                    secondary: "#D0BFFF",
                },
            },
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
    },
    plugins: [],
};
