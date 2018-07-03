'use strict'

const debug = require('debug')('core:lib:fcoin')
const path = require('path')
const FcoinAPI = require(path.join(__dirname, './fcoin-api'))
const get = require('https').get

class fcoin {
  constructor (config) {
    this.config = config
    this.fc = new FcoinAPI({key: config.key, secret: config.secret})
  }

  getconfig () {
    debug(this.config)
    return this.config
  }

  /**
  * 公共接口 查询服务器时间
  * GET https://api.fcoin.com/v2/public/server-time
  * @param {callback} callback
  * @returns {void}
  */
  getServerTime (callback) {
    get('https://api.fcoin.com/v2/public/server-time', function (res) {
      debug('status code: ' + res.statusCode)
      debug('headers: ' + res.headers)
      res.on('data', function (data) {
        debug('json stringify data:' + JSON.stringify(data))
        let jD = JSON.parse(data)
        debug(jD)
        if (jD.status === 0) {
          callback(jD.data)
        } else {
          throw Error('get server time error')
        }
      })
    }).on('error', function (err) {
      debug(err)
    })
  }

  /**
  * 公共接口 查询可用币种
  * GET https://api.fcoin.com/v2/public/currencies
  * @param {callback} callback
  * @returns {void}
  */
  getCurrencies (callback) {
    get('https://api.fcoin.com/v2/public/currencies', function (res) {
      debug('status code: ' + res.statusCode)
      debug('headers: ' + res.headers)
      res.on('data', function (data) {
        debug('json stringify data:' + JSON.stringify(data))
        let jD = JSON.parse(data)
        debug(jD)
        if (jD.status === 0) {
          callback(jD.data)
        } else {
          throw Error('get Currencies error')
        }
      })
    }).on('error', function (err) {
      debug(err)
    })
  }

  /**
  * 公共接口 查询可用交易对
  * GET https://api.fcoin.com/v2/public/symbols
  * @param {callback} callback
  * @returns {void}
  */
  getSymbols (callback) {
    get('https://api.fcoin.com/v2/public/symbols', function (res) {
      debug('status code: ' + res.statusCode)
      debug('headers: ' + res.headers)
      res.on('data', function (data) {
        debug('data:' + JSON.stringify(data))
        let jD = JSON.parse(data)
        debug(jD)
        if (jD.status === 0) {
          let length = Object.keys(jD.data).length
          let symbols = new Array(length)
          for (let i = 0; i < length; i++) {
            symbols[i] = jD.data[i].name
          }
          callback(symbols)
        }
      })
    }).on('error', function (err) {
      debug(err)
    })
  }

  /**
   * 行情接口(ticker)
   * @param {交易对} symbol
   * @param {callback} callback
   * @returns {void}
   */
  getTicker (symbol, callback) {
    this.fc.getTicker(symbol).then(data => {
      debug('data:' + JSON.stringify(data))
      let jD = data
      debug(jD)
      if (jD.status === 0) {
        callback(jD.data)
      }
    })
  }

  /**
   * 深度查询
   * @param {'20 default'} deep
   * @param {交易对} symbol
   * @param {callback} callback
   * @returns {void}
   */
  getDepth (deep, symbol, callback) {
    this.fc.getDepth(deep, symbol).then(data => {
      debug('data:' + JSON.stringify(data))
      let jD = data
      debug(jD)
      if (jD.status === 0) {
        callback(jD.data)
      }
    })
  }

  /**
   * 创建订单（买卖）
   * @param {交易对} symbol
   * @param {买卖方向} side
   * @param {现价还是市价} type
   * @param {'价格, string'} price
   * @param {'数量, string'} amount
   * @param {callback} callback
   * @returns {void}
   */
  createOrder (symbol, side, type, price, amount, callback) {
    this.fc.createOrder(symbol, side, type, price, amount).then(data => {
      debug('createOrder:' + JSON.stringify(data))
      callback(data)
    })
  }

  /**
   * 撤销订单（买卖）
   * @param {订单id} id
   * @returns {void}
   */
  cancelOrder (id) {
    this.fc.cancelOrder(id).then(data => {
      debug('cancelOrder: ')
      debug(data)
    })
  }

  /**
   * 查询账户资产
   * @param {callback} callback
   * @returns {void}
   */
  getBalance (callback) {
    this.fc.getBalance().then(data => {
      debug('getBalance:' + JSON.stringify(data))
      let jD = data
      debug(jD)
      if (jD.status === 0) {
        callback(jD.data)
      }
    })
  }

  /**
   * 按交易对查询账户资产
   * @param {货币} currency
   * @param {callback} callback
   * @returns {void}
   */
  getBalanceByCurrency (currency, callback) {
    this.fc.getBalance().then(data => {
      debug('getBalance:' + JSON.stringify(data))
      let jD = data
      debug(jD)
      if (jD.status === 0) {
        let length = Object.keys(jD.data).length
        let Balance = new Array(length)
        for (let i = 0; i < length; i++) {
          if (jD.data[i].currency === currency) {
            Balance.currency = jD.data[i].currency
            Balance.available = jD.data[i].available
            Balance.frozen = jD.data[i].frozen
            Balance.balance = jD.data[i].balance
          }
        }
        callback(Balance)
      }
    })
  }
  /**
   * 查询所有订单
   * @param {交易对} symbol  'submitted,filled'
   * @param {订单状态} states
   * @param {每页限制数量} limit
   * @param {'在某个时间戳之后, string'} after
   * @param {'在某个时间戳之前, string'} before
   * @returns {void}
   */
  getOrders (symbol, states, limit, after, before) {
    this.fc.getOrders(symbol, states, limit, after, before).then(data => {
      debug('getOrders: ')
      debug(data)
    })
  }

  /**
   * 获取指定 id 的订单
   * @param {订单id} id
   * @returns {void}
   */
  getOrderByid (id) {
    this.fc.getOrderByid(id).then(data => {
      debug('getOrderByid: ')
      debug(data)
    })
  }
}

module.exports = fcoin
