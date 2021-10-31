module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                "92": "23rem",
                "144": "36rem",
            },
            boxShadow: {
                "lg": "5px 10px 30px #E5E7EB"
            }
        },
        fontFamily: {
            "sans": ["Inter"]
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
