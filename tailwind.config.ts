import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comforta: [ 'comforta', "Sans"],
        dancing: [ 'Dancing Script', 'cursive'],
        montserrat: ["montserrat","sans-serif"], 
        lovers: ["Lovers Quarrel","sans-serif"],
      },
      colors: {
        primary: '#06062a',
        secondary: '#151538',
        tertiary: '#242445',
        robust: '#000000',
        accent: {
          DEFAULT: '#fb1cfcff',
          hover: '#cc23cdff'
        }
      },
    },
  },
  plugins: [
  ],
}
export default config