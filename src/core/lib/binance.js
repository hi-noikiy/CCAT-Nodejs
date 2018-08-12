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
      secret: config.secret,
      enableRateLimit: true
    })
    debug(this.binanceAPI)
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }

  async getMarkets () {
    debug('getMarkets is called')
    await this.binanceAPI.loadMarkets()
    return this.binanceAPI.markets
  }

  async getSymbols () {
    debug('getSymbols is called')
    return this.binanceAPI.symbols
  }

  getCurrencies () {
    debug('getCurrencies is called')
    return this.binanceAPI.currencies
  }

  getTicker (symbol) {
    debug('getTicker is called')
    return this.binanceAPI.publicGetTickerPrice(symbol)
  }
}

module.exports = binance
