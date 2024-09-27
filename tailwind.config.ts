import type { Config } from 'tailwindcss';

const px0_100 = Object.fromEntries(
  Array.from(Array(101)).map((_, i) => [i, `${i}px`]),
);

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        ...px0_100,
      },
      spacing: {
        ...px0_100,
      },
      borderRadius: {
        ...px0_100,
      },
      borderWidth: {
        ...px0_100,
      },
      padding: {
        ...px0_100,
      },
    },
  },
  plugins: [],
};
export default config;
