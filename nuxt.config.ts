// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/saas/main.scss'],

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/saas/_home.scss" as *;'
        }
      }
    }
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

})
