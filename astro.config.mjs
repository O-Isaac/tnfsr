import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro'

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), keystatic()],
  output: "hybrid",
  redirects: {
    "/admin": "/keystatic"
  },

  adapter: vercel()
});