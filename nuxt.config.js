export default {
  plugins: [
    './plugins/commercetools.js',
  ],
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  buildModules: [
    [
      '@vue-storefront/nuxt'
    ]
  ]
}
