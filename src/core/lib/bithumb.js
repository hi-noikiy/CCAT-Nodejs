'use strict'

const debug = require('debug')('core:lib:binance')
const ccxt = require('ccxt')

debug('src/core/lib/binance.js is called')

class binance {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.binanceAPI = new ccxt.binance({ // eslint-disable-line
      apiKey: config.key,
      secret: config.secret
    })
    debug(this.binanceAPI)
    debug('constructor is done')
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }

  getCurrency () {
    debug('getCurrency is called')
  }
}

module.exports = binance
