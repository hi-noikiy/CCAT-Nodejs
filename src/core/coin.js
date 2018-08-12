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

  getConfig () {
    debug('getConfig is called')
    return this.config
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

  getTicker (symbol) {
    debug('getTicker is called')
    return this.xc.getTicker(symbol)
  }

  getDepth (deep, symbol) {
    debug('getDepth is called')
    return this.xc.getDepth(deep, symbol)
  }

  createOrder (symbol, side, type, price, amount) {
    debug('createOrder is called')
    return this.xc.createOrder(symbol, side, type, price, amount)
  }

  cancelOrders () {
    debug('createOrder is called')
    return this.xc.cancelOrders()
  }

  cancelOrderByID (id) {
    debug('cancelOrderByID is called')
    return this.xc.cancelOrderByID(id)
  }

  getOrders (symbol, type, size) {
    debug('getOrders is called')
    return this.xc.getOrders(symbol, type, size)
  }

  getOrderByID (id) {
    debug('getOrderByID is called')
    return this.xc.getOrderByID(id)
  }

  getBalance () {
    debug('getBalance is called')
    return this.xc.getBalance()
  }

  getBalanceByCurrency (currency) {
    debug('getBalanceByCurrency is called')
    return this.xc.getBalanceByCurrency(currency)
  }
}

module.exports = Coin
