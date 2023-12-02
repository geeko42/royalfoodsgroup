import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'myButtonText-color': 'var(--myButtonText-color)',
        'mytext-color': 'var(--mytext-color)',
        'myUnderLine-color': 'var(--myUnderLine-color)',
        'dark-color': 'var(--dark-color)',
        'light-color': 'var(--light-color)',
        'offwhite-color': 'var(--offwhite-color)',
        'bodyText-color': 'var(--myBodeText-color)',
      },
    },
  },
  plugins: [],
};

export default config;
