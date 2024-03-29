import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        'pointy': 'url(/images/icons8-dot-30.png), pointer',
        'pointy2': 'url(/images/icons8-dot-24.png), pointer'
      },
      colors: {
        Gunmetal: '#1F292D',
        AirSuperioriyBlue: '#7AA5B3',
        RawUmber: '#906B59',
        DarkSlateGray: '#315A5D',
        SteelBlue: '#818cf8',
        White: '#FFFFFF',
        Void: '#0e0b16'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
