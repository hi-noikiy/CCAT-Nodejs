'use strict'

const debug = require('debug')('core:lib:coinbig')
const path = require('path')
const CoinbigAPI = require(path.join(__dirname, './coinbig-api'))

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
      xtype = side === 'market' ? 'buy_market' : 'buy'
    } else if (side === 'sell') {
      xtype = side === 'market' ? 'sell_market' : 'sell'
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
    debug('createOrder is called')
    return this.coinbigAPI.cancel_order(id).then(res => res.code === 0 ? res.data : res.msg)
  }

  getOrders (symbol, states, limit, after, before) {
    debug('createOrder is called')
    return this.coinbigAPI.orders_info(symbol, trade_type, size)
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

module.exports = Coinbig
