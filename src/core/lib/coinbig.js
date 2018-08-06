'use strict'

const debug = require('debug')('core:lib:coinbig')
const CoinbigAPI = require('./coinbig-api')

class Coinbig {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.coinbigAPI = new CoinbigAPI(config.key, config.secret)
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }

  getCurrency () {
    debug('getCurrency is called')
    return false // to be continue
  }

  getSymbols () {
    debug('getSymbols is called')
    return this.coinbigAPI.symbols().then(res => res.code === 0 ? res.data : res.msg)
  }

  getTicker (symbol) {
    debug('getTicker is called')
    return this.coinbigAPI.ticker(symbol).then(res => res.code === 0 ? res.data : res.msg)
  }

  getDepth (symbol, deep = 20) {
    debug('getDepth is called')
    return this.coinbigAPI.depth(symbol, deep).then(res => res.code === 0 ? res.data : res.msg)
  }

  createOrder (symbol, side, type, price, amount) {
    debug('createOrder is called')
    let xtype
    if (side === 'buy') {
      xtype = type === 'market' ? 'buy_market' : 'buy'
    } else if (side === 'sell') {
      xtype = type === 'market' ? 'sell_market' : 'sell'
    } else {
      return false
    }
    return this.coinbigAPI.trade(symbol, xtype, price, amount).then(res => res.code === 0 ? res.data : res.msg)
  }

  cancelOrders () {
    debug('createOrder is called')
    return false // to be continue
  }

  cancelOrderByID (id) {
    debug('cancelOrderByID is called')
    return this.coinbigAPI.cancel_order(id).then(res => res.code === 0 ? res.data : res.msg)
  }

  getOrders (symbol, type, size) {
    debug('getOrders is called')
    return this.coinbigAPI.orders_info(symbol, type, size).then(res => res.code === 0 ? res.data : res.msg)
  }

  getOrderByID (id) {
    debug('getOrderByID is called')
    return false // to be continue
  }

  getBalance () {
    debug('getBalance is called')
    return this.coinbigAPI.userinfo().then(res => res.code === 0 ? res.data : res.msg)
  }

  getBalanceByCurrency (currency) {
    debug('getBalanceByCurrency is called')
    return this.coinbigAPI.userinfo_by_symbol(currency).then(res => res.code === 0 ? res.data : res.msg)
  }
}

module.exports = Coinbig
