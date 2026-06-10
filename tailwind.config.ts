import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const flattenColors = (colors: Record<string, any>, prefix = ''): Record<string, string> => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      acc[`--${prefix}${key}`] = value;
    } else {
      Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
    }
    return acc;
  }, {} as Record<string, string>);
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['var(--font-figtree)'],
        space_mono: ['var(--font-space-mono)'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F4F3F2',
      'red': '#F84A5C',
      'yellow': {
        light: '#FDD88A',
        DEFAULT: '#FCBC49',
        dark: '#78280F',
      },
      'blue': '#5FC1C9',
      'purple': {
        light: '#7D61CA',
        DEFAULT: '#4D3F78',
        dark: '#1D1E21',
      },
    }
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        ':root': flattenColors(theme('colors')),
      });
    },
  ],
};
export default config;
