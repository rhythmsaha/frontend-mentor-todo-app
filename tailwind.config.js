module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bg-light": "url('/public/images/bg-desktop-light.jpg')",
                "bg-light-mobile": "url('/public/images/bg-mobile-light.jpg')",
                "bg-dark": "url('/public/images/bg-desktop-dark.jpg')",
                "bg-dark-mobile": "url('/public/images/bg-mobile-dark.jpg')",
            },
        },
    },
    plugins: [],
};
