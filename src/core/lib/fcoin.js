'use strict'

const debug = require('debug')('core:lib:fcoin')
const ccxt = require('ccxt')

class fcoin {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.fcoinAPI = new ccxt.fcoin({ // eslint-disable-line
      apiKey: config.key,
      secret: config.secret
    })
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }
}

module.exports = fcoin
