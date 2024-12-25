/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mg': '480px',
        'sm-lg': '991px',
        'lg-xl': '1440px',
        '1300px': '1300px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6f00eb",
        black: "#000",
        "text-01": "#212123",
        "text-02": "#110d34",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'custom-pattern': "url('https://assets.website-files.com/641c0410c17bb111523922e8/64352ebe31b3f575af86e331_pattern.png')",
        'bg-icon-contactus': "url('/images/bg-icon-contactus.svg')",
      },
      translate: {
        '73': '73px',
        '50': '50px',
        'back-card-sm': '19% 77px',
        'back-card-xl': '17% -4px',
      },
      rotate: {
        '41.17': '41.17deg',
        '-102.53': '-102.53deg',
        '-100.53': '-100.53deg',
        '130': '130deg',
      },   
    },
  },
  plugins: [],
}
