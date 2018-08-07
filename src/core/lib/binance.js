'use strict'

const debug = require('debug')('core:lib:binance')
const ccxt = require('ccxt')

debug('src/core/lib/binance.js is called')

class binance {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.binanceAPI = new ccxt.binance({ // eslint-disable-line
      apiKey: config.binance.key,
      secret: config.binance.secret
    })
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }
}

module.exports = binance
