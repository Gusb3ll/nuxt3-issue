import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  components: true,

  serverMiddleware: [{ path: '/api', handler: '~/server/api' }],

  buildModules: [
    'nuxt-windicss'
  ],

  typescript: { shim: false },

  windicss: { analyze: true },
})
