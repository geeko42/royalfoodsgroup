import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
        'bodyText-color': 'var(--myBodeText-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'third-color': 'var(--third-color)',
        'fourth-color': 'var(--fourth-color)',
        'fifth-color': 'var(--fifth-color)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
