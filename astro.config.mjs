import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      // All urls that don't contain `pl` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en-US",
        // The `defaultLocale` value must present in `locales` keys
        es: "pl-PL",
        fr: "fr-BE"
      }
    }
  }), prefetch(), image(), svelte()]
});