import fs from "fs";

if (!fs.existsSync(".env")) {
  fs.writeFileSync(".env", "MY_ENV_VARIABLE=hello");
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false, // auto-import components based only on its name, not path
    },
  ],

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
    },
  },

  // https://nitro.unjs.io/config
  nitro: {},

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  css: [
    "~/assets/main.css",
    "element-plus/dist/index.css",
    "element-plus/theme-chalk/dark/css-vars.css",
  ],

  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@unocss/nuxt",
    "@unocss/preset-icons",
    "@vueuse/nuxt",
    "@element-plus/nuxt",
  ],

  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"], // dark theme
  },

  extends: ["./some-app"],
});
