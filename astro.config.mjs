import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import SpeedInsights from '@vercel/speed-insights/astro';

export default defineConfig({
  integrations: [SpeedInsights()],
  vite: {
    plugins: [tailwindcss()],
  },
});
