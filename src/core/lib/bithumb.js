'use strict'

const debug = require('debug')('core:lib:bithumb')
const ccxt = require('ccxt')

debug('src/core/lib/bithumb.js is called')

class bithumb {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.api = new ccxt.bithumb({ // eslint-disable-line
      apiKey: config.key,
      secret: config.secret,
      timeout: 30000,
      enableRateLimit: true
    })
    debug(this.api)
  }

  setProxy (agent) {
    debug('setProxy is called')
    this.api.agent = agent
  }

  getConfig () {
    debug('getConfig is called')
    return {
      config: this.config,
      api: this.api
    }
  }

  async getMarkets () {
    debug('getMarkets is called')
    var res = await this.api.fetchMarkets()
    return res
  }

  async getSymbols () {
    debug('getSymbols is called')
    await this.api.loadMarkets()
    return this.api.symbols
  }

  async getCurrencies () {
    debug('getCurrencies is called')
    await this.api.loadMarkets()
    return this.api.currencies
  }

  async getTicker (symbol, params) {
    debug('getTicker is called')
    var res = await this.api.fetchTicker(symbol, params)
    return res
  }

  async getTickers (symbols, params) {
    debug('getTickers is called')
    var res = await this.api.fetchTickers(symbols, params)
    return this.api.filterByArray(res, 'symbol', symbols)
  }

  async getDepth (symbol, deep, params) {
    debug('getDepth is called')
    var res = await this.api.fetchOrderBook(symbol, deep, params)
    return res
  }

  async createOrder (symbol, type, side, amount, price, params) {
    debug('createOrder is called')
    var res = await this.api.createOrder(symbol, type, side, amount, price, params)
    return res
  }

  async cancelOrder (id, symbol, params) {
    debug('cancelOrder is called')
    var res = await this.api.cancelOrder(id, symbol, params)
    return res
  }

  async getOrder (id, symbol, params) {
    debug('getOrder is called')
    var res = await this.api.fetchOrder(id, symbol, params)
    return res
  }

  async getOrders (symbol, since, limit, params) {
    debug('getOrders is called')
    var res = await this.api.fetchOrders(symbol, since, limit, params)
    return res
  }

  async getOpenOrders (symbol, since, limit, params) {
    debug('getOpenOrders is called')
    var res = await this.api.fetchOpenOrders(symbol, since, limit, params)
    return res
  }

  async getClosedOrders (symbol, since, limit, params) {
    debug('getClosedOrders is called')
    var res = await this.api.fetchClosedOrders(symbol, since, limit, params)
    return res
  }

  async getTrades (symbol, since, limit, params) {
    debug('getTrades is called')
    var res = await this.api.fetchMyTrades(symbol, since, limit, params)
    return res
  }

  async getBalance (params) {
    debug('getBalance is called')
    var res = await this.api.fetchBalance(params)
    return res
  }

  async calculateFee (symbol, type, side, amount, price, takerOrMaker, params) {
    debug('calculateFee is called')
    await this.api.loadMarkets()
    var res = await this.api.calculateFee(symbol, type, side, amount, price, takerOrMaker, params)
    return res
  }
  async withdraw (currency, amount, address, tag, params) {
    debug('withdraw is called')
    var res = await this.api.withdraw(currency, amount, address, tag, params)
    return res
  }
}

module.exports = bithumb
