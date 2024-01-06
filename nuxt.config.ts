// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  runtimeConfig: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  }
})
