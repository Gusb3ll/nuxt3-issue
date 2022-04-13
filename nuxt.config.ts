import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  serverMiddleware: [{ path: '/api', handler: '~/server/api' }],

  buildModules: ['nuxt-windicss'],
})
