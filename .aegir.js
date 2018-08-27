'use strict'

module.exports = {
  webpack: {},
  karma: {
    proxies: {
      '/web': 'http://localhost:8123'
    },
    browsers: ['ChromiumHeadless']
  },
  hooks: {},
  entry: 'src/core/index.js',
}
