export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Imale',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css",}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~style/global.css",
  ],

  loading: { color: '#df3749'},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  ssr: false
}
