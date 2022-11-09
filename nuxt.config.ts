// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Inspector from "vite-plugin-vue-inspector"

export default defineNuxtConfig({
  vite: {
    plugins:[
      Inspector({
        appendTo: "entry.mjs"
      })
    ]
  }
})
