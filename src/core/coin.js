'use strict'

const debug = require('debug')('core:coin')
const Okex = require('./lib/okex.js')
const Binance = require('./lib/binance.js')
const Bithumb = require('./lib/bithumb.js')
const Huobi = require('./lib/huobi.js')
const Hitbtc = require('./lib/hitbtc.js')
const Bitfinex = require('./lib/bitfinex.js')
const Zb = require('./lib/zb.js')
const Lbank = require('./lib/lbank.js')
const Quolinex = require('./lib/quolinex.js')
const Bibox = require('./lib/bibox.js')
const Gate = require('./lib/gate.js')
const Fcoin = require('./lib/fcoin.js')
const Coinex = require('./lib/coinex.js')
const Coinpark = require('./lib/coinpark.js')
const Coinbig = require('./lib/fcoin.js')

debug('src/core/coin.js is called')

class Coin {
  constructor (config) {
    debug('constructor is called')
    debug('config.name is: ' + config.name)
    this.config = config
    switch (config.name) {
      case 'okex':
        this.xc = new Okex(config)
        break
      case 'binance':
        this.xc = new Binance(config)
        break
      case 'bithumb':
        this.xc = new Bithumb(config)
        break
      case 'Huobi':
        this.xc = new Huobi(config)
        break
      case 'hitbtc':
        this.xc = new Hitbtc(config)
        break
      case 'bitfinex':
        this.xc = new Bitfinex(config)
        break
      case 'zb':
        this.xc = new Zb(config)
        break
      case 'lbank':
        this.xc = new Lbank(config)
        break
      case 'quolinex':
        this.xc = new Quolinex(config)
        break
      case 'bibox':
        this.xc = new Bibox(config)
        break
      case 'gate':
        this.xc = new Gate(config)
        break
      case 'fcoin':
        this.xc = new Fcoin(config)
        break
      case 'coinex':
        this.xc = new Coinex(config)
        break
      case 'coinpark':
        this.xc = new Coinpark(config)
        break
      case 'coinbig':
        this.xc = new Coinbig(config)
        break
      default:
        throw new Error('core:coin.js, config.name (' + config.name + ') not defined')
    }
  }

  setProxy (agent) {
    debug('setProxy is called')
    return this.xc.setProxy(agent)
  }

  getConfig () {
    debug('getConfig is called')
    return this.xc.getConfig()
  }

  getMarkets () {
    debug('getMarkets is called')
    return this.xc.getMarkets()
  }

  getSymbols () {
    debug('getSymbols is called')
    return this.xc.getSymbols()
  }

  getCurrencies () {
    debug('getCurrency is called')
    return this.xc.getCurrencies()
  }

  getTicker (symbol, params = {}) {
    debug('getTicker is called')
    return this.xc.getTicker(symbol, params)
  }

  getTickers (symbols, params = {}) {
    debug('getTickers is called')
    return this.xc.getTickers(symbols, params)
  }

  getDepth (symbol, deep = undefined, params = {}) {
    debug('getDepth is called')
    return this.xc.getDepth(symbol, deep, params)
  }

  createOrder (symbol, type, side, amount, price = undefined, params = {}) {
    debug('createOrder is called')
    return this.xc.createOrder(symbol, type, side, amount, price, params)
  }

  cancelOrder (id, symbol = undefined, params = {}) {
    debug('cancelOrder is called')
    return this.xc.cancelOrder(id, symbol, params)
  }

  getOrder (id, symbol = undefined, params = {}) {
    debug('getOrder is called')
    return this.xc.getOrder(id, symbol, params)
  }

  getOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
    debug('getOrders is called')
    return this.xc.getOrders(symbol, since, limit, params)
  }

  getOpenOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
    debug('getOpenOrders is called')
    return this.xc.getOpenOrders(symbol, since, limit, params)
  }

  getClosedOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
    debug('getClosedOrders is called')
    return this.xc.getClosedOrders(symbol, since, limit, params)
  }

  getTrades (symbol = undefined, since = undefined, limit = undefined, params = {}) {
    debug('getTrades is called')
    return this.xc.getTrades(symbol, since, limit, params)
  }

  getBalance (params = {}) {
    debug('getBalance is called')
    return this.xc.getBalance(params)
  }

  calculateFee (symbol, type, side, amount, price, takerOrMaker = 'taker', params = {}) {
    debug('calculateFee is called')
    return this.xc.calculateFee(symbol, type, side, amount, price, takerOrMaker, params)
  }

  withdraw (currency, amount, address, tag = undefined, params = {}) {
    debug('withdraw is called')
    return this.xc.withdraw(currency, amount, address, tag, params)
  }
}

module.exports = Coin
