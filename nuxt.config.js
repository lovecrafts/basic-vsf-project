export default {
  plugins: [
    './plugins/commercetools.js',
  ],
  buildModules: [
    [
      '@vue-storefront/nuxt', {
        logger: {
          verbosity: 'debug'
        },
        useRawSource: {
          dev: [
            '@vue-storefront/commercetools',
            '@vue-storefront/core'
          ],
          prod: [
            '@vue-storefront/commercetools',
            '@vue-storefront/core'
          ]
        }
      }
    ]
  ]
}
