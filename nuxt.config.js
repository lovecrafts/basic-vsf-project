export default {
  plugins: [
    './plugins/commercetools.js',
  ],
  buildModules: [
    [
      '@vue-storefront/nuxt', {
        logger: {
          verbosity: 'debug'
        }
      }
    ]
  ]
}