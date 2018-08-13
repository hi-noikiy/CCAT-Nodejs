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

  setProxy (agent) {
    debug('setProxy is called')
    this.binanceAPI.agent = agent
  }

  getConfig () {
    debug('getConfig is called')
    return {
      config: this.config,
      xc: this.binanceAPI
    }
  }

  async getMarkets () {
    debug('getMarkets is called')
    var res = await this.binanceAPI.fetchMarkets()
    return res
  }

  async getSymbols () {
    debug('getSymbols is called')
    await this.binanceAPI.loadMarkets()
    return this.binanceAPI.symbols
  }

  async getCurrencies () {
    debug('getCurrencies is called')
    await this.binanceAPI.loadMarkets()
    return this.binanceAPI.currencies
  }

  async getTicker (symbol, params) {
    debug('getTicker is called')
    var res = await this.binanceAPI.fetchTicker(symbol, params)
    return res
  }

  async getTickers (symbols, params) {
    debug('getTickers is called')
    var res = await this.binanceAPI.fetchTickers(symbols, params)
    return res
  }

  async getDepth (symbol, deep, params) {
    debug('getDepth is called')
    var res = await this.binanceAPI.fetchOrderBook(symbol, deep, params)
    return res
  }

  async createOrder (symbol, type, side, amount, price, params) {
    debug('createOrder is called')
    var res = await this.binanceAPI.createOrder(symbol, type, side, amount, price, params)
    return res
  }

  async cancelOrder (id, symbol, params) {
    debug('cancelOrder is called')
    var res = await this.binanceAPI.cancelOrder(id, symbol, params)
    return res
  }

  async getOrder (id, symbol, params) {
    debug('getOrder is called')
    var res = await this.binanceAPI.fetchOrder(id, symbol, params)
    return res
  }

  async getOrders (symbol, since, limit, params) {
    debug('getOrders is called')
    var res = await this.binanceAPI.fetchOrders(symbol, since, limit, params)
    return res
  }

  async getOpenOrders (symbol, since, limit, params) {
    debug('getOpenOrders is called')
    var res = await this.binanceAPI.fetchOpenOrders(symbol, since, limit, params)
    return res
  }

  async getClosedOrders (symbol, since, limit, params) {
    debug('getClosedOrders is called')
    var res = await this.binanceAPI.fetchClosedOrders(symbol, since, limit, params)
    return res
  }

  async getTrades (symbol, since, limit, params) {
    debug('getTrades is called')
    var res = await this.binanceAPI.fetchMyTrades(symbol, since, limit, params)
    return res
  }

  async getBalance (params) {
    debug('getBalance is called')
    var res = await this.binanceAPI.fetchBalance(params)
    return res
  }

  async calculateFee (symbol, type, side, amount, price, takerOrMaker, params) {
    debug('calculateFee is called')
    await this.binanceAPI.loadMarkets()
    var res = await this.binanceAPI.calculateFee(symbol, type, side, amount, price, takerOrMaker, params)
    return res
  }
  async withdraw (currency, amount, address, tag, params) {
    debug('withdraw is called')
    var res = await this.binanceAPI.withdraw(currency, amount, address, tag, params)
    return res
  }
}

module.exports = binance
