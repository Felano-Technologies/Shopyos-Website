/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { navy: '#10235f', lime: { DEFAULT: '#84cc16', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 600: '#65a30d', 700: '#4d7c0f' }, ink: '#172033', muted: '#5f6b7a', wash: '#f5f8fa' },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Plus Jakarta Sans', 'sans-serif'] },
    },
  },
};
