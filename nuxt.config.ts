// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
  },
  nitro: {
    preset: "static",
    output: {
      publicDir: "dist",
    },
    prerender: {
      routes: [
        "/rooms",
        "/rooms/champagne",
        "/rooms/nid",
        "/rooms/creatif",
        "/rooms/nartuby",
        "/rooms/lavande",
      ],
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/eslint"],
  i18n: {
    locales: [
      { code: "fr", file: "fr.json", name: "Français" },
      { code: "en", file: "en.json", name: "English" },
      { code: "de", file: "de.json", name: "Deutsch" },
    ],
    defaultLocale: "fr",
    langDir: "translations",
    strategy: "no_prefix",
  },
  ui: {
    theme: {
      colors: ["primary", "orange"],
    },
  },
  colorMode: {
    preference: "light",
  },
});
