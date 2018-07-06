'use strict'

const debug = require('debug')('core:coin')
const path = require('path')
const Fcoin = require(path.join(__dirname, 'lib/fcoin.js'))
const Coinpark = require(path.join(__dirname, 'lib/coinpark.js'))
const Coinbig = require(path.join(__dirname, 'lib/fcoin.js'))

class Coin {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    switch (config.name) {
      case 'fcoin':
        this.xc = new Fcoin(config)
        break
      case 'coinpark':
        this.xc = new Coinpark(config)
        break
      case 'coinbig':
        this.xc = new Coinbig(config)
        break
      default:
        throw new Error('core:coin.js: config.name not defined')
    }
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }

  getCurrency () {
    debug('getCurrency is called')
    return this.xc.getCurrency()
  }

  getSymbols () {
    debug('getSymbols is called')
    return this.xc.getSymbols()
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
    debug('createOrder is called')
    return this.xc.cancelOrderByID(id)
  }

  getOrders (symbol, states, limit, after, before) {
    debug('createOrder is called')
    return this.xc.getOrders(symbol, states, limit, after, before)
  }

  getOrderByID (id) {
    debug('createOrder is called')
    return this.xc.getOrderByID(id)
  }

  getBalance () {
    debug('createOrder is called')
    return this.xc.getBalance()
  }

  getBalanceByCurrency (currency) {
    debug('createOrder is called')
    return this.xc.getBalanceByCurrency(currency)
  }
}

module.exports = Coin
