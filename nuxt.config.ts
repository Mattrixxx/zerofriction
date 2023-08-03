// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true
})
module.exports = {
  app:{
    head: {
      title: 'zerofriction',
      link: [
        { rel: 'stylesheet', href: '/app/css/style.css' },
        { rel: 'icon', type: 'image/png', href: '/app/images/logo.png' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "description", content: "zerofriction" },
        { 'http-equiv': 'cache-control', content: 'max-age=0' },
      ],
      plugins: [{ src: '~/plugins/aos.ts', mode: 'client' },],
    }
  },
  modules: [
    'nuxt-icon',
    'nuxt-swiper',
  ],
}
