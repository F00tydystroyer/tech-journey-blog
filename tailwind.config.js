/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            
            {
                "mytheme": {
                    "primary": "#6a4c1b",
                    "secondary": "#275111",
                    "accent": "#0c343d",
                    "neutral": "#6a4c1b",
                    "base-100": "#312511",
                },
            },
        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite'
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
