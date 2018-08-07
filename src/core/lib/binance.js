'use strict'

const debug = require('debug')('core:lib:binance')
const ccxt = require('ccxt')

class binance {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.binanceAPI = new ccxt.binance({ // eslint-disable-line
      apiKey: config.key,
      secret: config.secret
    })
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }
}

module.exports = binance
