/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                color1: "rgb(34, 30, 145)",
                color2: "rgba(0, 0, 0, 0.7)",

                headerColor: "rgb(249, 250, 254)",
                headerBorderColor: "rgb(168, 168, 168)",
            },
            screens: {
                xs: "480px",
            },
            fontFamily: {
                inter: ["Inter var", "sans-serif"],
            },
            boxShadow: {
                card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
                cardhover:
                    "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
            },
        },
    },
    plugins: [],
};
