/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                instagem: ["Segoe UI"],
            },
            colors: {
                inputBorder: "rgb(219, 219, 219)",
                inputOutline: "rgba(38, 38, 38, 0.2)",
                buttonActive: "#0095f6",
                button: "rgba(0, 149, 246, 0.3)",
                dash: "#dbdbdb",
                textGray: "#8e8e8e",
                textDarkGray: "#262626",
                redBadge: "rgb(255, 48, 65)",
                errorOrDestructive: "rgba(237, 73, 86)",
                overlay: "rgba(0, 0, 0, 0.65)",
                142: "rgb(142, 142, 142)",
                38: "rgb(38, 38, 38)",
                250: "rgb(250, 250, 250)",
            },
        },
    },
    plugins: [],
};
