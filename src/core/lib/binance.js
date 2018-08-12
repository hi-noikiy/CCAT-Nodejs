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
      timeout: 30000,
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

  getSymbols () {
    debug('getSymbols is called')
    return this.binanceAPI.symbols
  }

  getCurrencies () {
    debug('getCurrencies is called')
    return this.binanceAPI.currencies
  }

  async getTicker (symbol) {
    debug('getTicker is called')
    var res = await this.binanceAPI.fetchTicker(symbol)
    return res
  }

  async getDepth (symbol, deep) {
    debug('getDepth is called')
    var res = await this.binanceAPI.fetchOrderBook(symbol, deep)
    return res
  }

  async createOrder (symbol, side, type, price, amount) {
    debug('createOrder is called')
    return this.binanceAPI.createOrder(symbol, side, type, price, amount)
  }
}

module.exports = binance
