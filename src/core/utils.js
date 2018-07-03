'use strict'

const debug = require('debug')('core:utils')
const path = require('path')
const Fcoin = require(path.join(__dirname, 'lib/fcoin.js'))

class utils {
  constructor (config) {
    this.config = config
    switch (config.name) {
      case 'fcoin':
        this.xc = new Fcoin(config)
        break
      default:
        throw new Error('core:utils.js: config.name not defined')
    }
  }

  getconfig () {
    debug(this.config)
    return this.config
  }

  /**
  * 查询服务器时间 多态实现
  * @param {callback} callback
  * @returns {void}
  */
  getServerTime (callback) {
    debug('getServerTime is called')
    this.xc.getServerTime((data) => {
      let time = new Date(data) // UTC
      debug(time.toLocaleString())
      callback(time)
    })
  }

  /**
  * 查询可用币种 多态实现
  * @returns {void}
  */
  getCurrencies () {
    this.xc.getCurrencies()
  }

  /**
  * 查询可用交易对 多态实现
  * @param {callback} callback
  * @returns {void}
  */
  getSymbols (callback) {
    debug('getSymbols is called')
    this.xc.getSymbols((data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 行情接口(ticker) 多态实现
   * @param {交易对} symbol
   * @param {callback} callback
   * @returns {void}
   */
  getTicker (symbol, callback) {
    debug('getTicker is called')
    this.xc.getTicker(symbol, (data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 深度查询  多态实现
   * @param {'L20 default'} deep
   * @param {交易对} symbol
   * @param {callback} callback
   * @returns {void}
   */
  getDepth (deep, symbol, callback) {
    debug('getDepth is called')
    this.xc.getDepth(deep, symbol, (data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 创建订单（买卖） 多态实现
   * @param {交易对} symbol
   * @param {买卖方向} side
   * @param {现价还是市价} type
   * @param {'价格, string'} price
   * @param {'数量, string'} amount
   * @param {callback} callback
   * @returns {void}
   */
  createOrder (symbol, side, type, price, amount, callback) {
    debug('createOrder is called')
    this.xc.createOrder(symbol, side, type, price, amount, (data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 撤销订单（买卖） 多态实现
   * @param {订单id} id
   * @returns {void}
   */
  cancelOrder (id) {
    this.xc.cancelOrder(id)
  }

  /**
   * 查询账户资产  多态实现
   * @param {callback} callback
   * @returns {void}
   */
  getBalance (callback) {
    this.xc.getBalance((data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 按交易对查询账户资产  多态实现
   * @param {交易对} currency
   * @param {callback} callback
   * @returns {void}
   */
  getBalanceByCurrency (currency, callback) {
    this.xc.getBalanceByCurrency(currency, (data) => {
      debug(data)
      callback(data)
    })
  }

  /**
   * 查询所有订单  多态实现
   * @param {交易对} symbol  'submitted,filled'
   * @param {订单状态} states
   * @param {每页限制数量} limit
   * @param {'在某个时间戳之后, string'} after
   * @param {'在某个时间戳之前, string'} before
   * @returns {void}
   */
  getOrders (symbol, states, limit, after, before) {
    this.xc.getOrders(symbol, states, limit, after, before)
  }

  /**
   * 获取指定 id 的订单  多态实现
   * @param {订单id} id
   * @returns {void}
   */
  getOrderByid (id) {
    this.xc.getOrderByid(id)
  }
}

module.exports = utils
