'use strict'

const debug = require('debug')('cli:fcoin')
const config = require('../core/config.js')
const Utils = require('../core/utils.js')

debug('fcoin script demo')
let fcoin = new Utils(config.fcoin)
// fcoin.getServerTime((time) => {
//   debug(time.toLocaleString())
// })
// fcoin.getCurrencies()
// fcoin.getSymbols((symbols) => {
//   debug(symbols)
// })
// fcoin.getTicker('ftusdt', (ticker) => {
//   debug(ticker)
// })
// fcoin.getDepth('L20', 'ftusdt', (ticker) => {
//   debug(ticker)
// })
// fcoin.createOrder('ftusdt', 'buy', 'limit', '0.37', '10.0', (order) => {
//   debug(order)
// })
// fcoin.cancelOrder(id)
fcoin.getBalance((balance) => {
  debug(balance)
})
// fcoin.getBalanceByCurrency('ft', (balance) => {
//   debug(balance)
// })
// fcoin.getOrders('ftusdt', 'submitted')
// fcoin.getOrderByid(id)
