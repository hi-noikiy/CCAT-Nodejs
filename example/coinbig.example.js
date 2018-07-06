'use strict'

const debug = require('debug')('example:coinbig')
const path = require('path')
const config = require(path.join(__dirname, '../src/core/config.js')).coinbig
const Coinbig = require(path.join(__dirname, '../src/core/lib/coinbig.js'))
const xCoin = new Coinbig(config);

(async function () {
  await debug('coinbig.example.js is called')

  await debug('getConfig:')
  let config = await xCoin.getConfig()
  await debug(config)

  await debug('getSymbols:')
  let symbols = await xCoin.getSymbols()
  await debug(symbols)

  await debug('getTicker:')
  let ticker = await xCoin.getTicker('ETH_USDT')
  await debug(ticker)

  await debug('getDepth:')
  let depth = await xCoin.getDepth('ETH_USDT')
  await debug(depth)

  await debug('createOrder:')
  let order = await xCoin.createOrder('ETH_USDT', 'buy', 'limit', 0.01, 100)
  await debug(order)
})()
