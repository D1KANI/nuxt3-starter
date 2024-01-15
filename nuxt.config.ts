// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  css: ["@/assets/style/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/_variables.scss";',
        },
      },
    },
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
})
