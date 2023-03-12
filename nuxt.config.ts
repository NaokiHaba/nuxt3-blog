// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src",
    runtimeConfig: {
        apiKey: process.env.API_KEY,
        serviceDomain: process.env.SERVICE_DOMAIN,
    },
    modules: ['@nuxtjs/color-mode'],
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ["vuetify"],

    },

})
