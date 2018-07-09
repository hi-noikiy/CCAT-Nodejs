/* eslint-disable */

// api-doc https://github.com/489405826/coinbigapi/wiki/API-Document

const qs = require('qs')
const md5 = require('crypto-js/md5')
const axios = require('axios')
// 创建一个axios对象避免污染axios原始对象
const instance = axios.create({
  baseURL: 'https://www.coinbig.com'
})

/**
 * 请求拦截器
 */
instance.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

class CoinBig {
  constructor(apiKey = '', secret = '') {
    this.apiKey = apiKey
    this.secret = secret
    this.url = 'https://www.coinbig.com'
  }

  /**
   * 签名请求参数
   * @param  {[type]} param [description]
   * @return {[type]}       [description]
   */
  sign(param) {
    let keys = Object.keys(param)
    keys.sort()
    let temp = {}
    for (let key of keys) {
      temp[key] = param[key]
    }
    temp['secret_key'] = this.secret
    let str = qs.stringify(temp)
    let hash = md5(str).toString()
    param['sign'] = hash.toUpperCase()
    return param
  }

  /**
   * 获取用户资产信息
   * @return {[type]} [description]
   */
  userinfo() {
    let params = {
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/userinfo', fromData).then(res => res.data)
  }

  /**
   * 获取交易信息
   * @type {CoinBig}
   */
  trades_info(symbol, since = 60) {
    let params = {
      symbol,
      since,
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/trades', fromData).then(res => res.data)
  }

  /**
   * 获取所有订单信息
   * @type {CoinBig}
   */
  orders_info(symbol, type, size = 50) {
    let params = {
      symbol,
      type,
      size,
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/orders_info', fromData).then(res => res.data)
  }

  /**
   * 撤销订单
   * @type {CoinBig}
   */
  cancel_order(order_id) {
    let params = {
      order_id,
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/cancel_order', fromData).then(res => res.data)
  }

  /**
   * 获取用户资产(币种)
   * @type {CoinBig}
   */
  userinfo_by_symbol(shortName = 'btc') {
    let params = {
      shortName,
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/userinfoBySymbol', fromData).then(res => res.data)
  }

  /**
   *  获取所有的币对符号
   * @type {CoinBig}
   */
  symbols() {
    return instance.get('/api/publics/v1/symbols').then(res => res.data)
  }

  /**
   *  下单交易(单个挂单)
   * @type {CoinBig}
   */
  trade(symbol, type, price, amount) {
    let params = {
      symbol,
      type,
      price,
      amount,
      apikey: this.apiKey
    }
    let fromData = this.sign(params)
    return instance.post('/api/publics/v1/trade', fromData).then(res => res.data)
  }

  /**
   *  获取深度图
   * @type {CoinBig}
   */
  depth(symbol, size = 100) {
    let params = {
      symbol,
      size
    }
    let fromData = this.sign(params)
    return instance.get(`/api/publics/v1/depth?${qs.stringify(params)}`).then(res => res.data)
  }
  /**
   *  获取行情
   * @type {CoinBig}
   */
  ticker(symbol) {
    let params = {
      symbol      
    }
    let fromData = this.sign(params)
    return instance.get(`/api/publics/v1/ticker?${qs.stringify(params)}`).then(res => res.data)
  }
}

module.exports = CoinBig