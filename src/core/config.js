'use strict'

const debug = require('debug')('core:config')
const config = require('../../config')

debug('src/core/config.js is called')
debug('config file parse result:')
debug(config)

module.exports = {
  proxy: {
    name: config.proxy.name,
    url: config.proxy.url
  },
  okex: {
    name: config.okex.name,
    key: config.okex.key,
    secret: config.okex.secret
  },
  binance: {
    name: config.binance.name,
    key: config.binance.key,
    secret: config.binance.secret
  },
  bithumb: {
    name: config.bithumb.name,
    key: config.bithumb.key,
    secret: config.bithumb.secret
  },
  huobi: {
    name: config.huobi.name,
    key: config.huobi.key,
    secret: config.huobi.secret
  },
  hitbtc: {
    name: config.hitbtc.name,
    key: config.hitbtc.key,
    secret: config.hitbtc.secret
  },
  bitfinex: {
    name: config.bitfinex.name,
    key: config.bitfinex.key,
    secret: config.bitfinex.secret
  },
  zb: {
    name: config.zb.name,
    key: config.zb.key,
    secret: config.zb.secret
  },
  lbank: {
    name: config.lbank.name,
    key: config.lbank.key,
    secret: config.lbank.secret
  },
  quolinex: {
    name: config.quolinex.name,
    key: config.quolinex.key,
    secret: config.quolinex.secret
  },
  bibox: {
    name: config.bibox.name,
    key: config.bibox.key,
    secret: config.bibox.secret
  },
  coinex: {
    name: config.coinex.name,
    key: config.coinex.key,
    secret: config.coinex.secret
  },
  gate: {
    name: config.gate.name,
    key: config.gate.key,
    secret: config.gate.secret
  },
  cryptopia: {
    name: config.cryptopia.name,
    key: config.cryptopia.key,
    secret: config.cryptopia.secret
  },
  fcoin: {
    name: config.fcoin.name,
    key: config.fcoin.key,
    secret: config.fcoin.secret
  },
  coinpark: {
    name: config.coinpark.name,
    key: config.coinpark.key,
    secret: config.coinpark.secret
  },
  coinbig: {
    name: config.coinbig.name,
    key: config.coinbig.key,
    secret: config.coinbig.secret
  }
}
