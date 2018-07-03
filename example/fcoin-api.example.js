'use strict'

const Fcoin = require('fcoin-api')

// Important
let fcoin = new Fcoin({
  key: '',
  secret: ''
})

/**
 * 行情接口(ticker)
 * @param {交易对} symbol
 */
fcoin.getTicker('ethusdt').then(data => {})

/**
 * 深度查询
 * @param {L20 default} deep
 * @param {交易对} symbol
 */
fcoin.getDepth('L20', 'ethusdt').then(data => {})

/**
 * 创建订单（买卖）
 * @param {交易对} symbol
 * @param {买卖方向} side
 * @param {现价还是市价} type
 * @param {价格, string} price
 * @param {数量, string} amount
 */
fcoin.createOrder(symbol, side, type, price, amount).then(data => {})

/**
 * 撤销订单（买卖）
 * @param {订单id} id
 */
fcoin.cancelOrder(id).then(data => {})

/**
 * 查询账户资产
 */
fcoin.getBalance().then(data => {})

/**
 * 查询所有订单
 * @param {交易对} symbol  'submitted,filled'
 * @param {订单状态} states
 * @param {每页限制数量} limit
 * @param {在某个时间戳之后, string} after
 * @param {在某个时间戳之前, string} before
 */
fcoin.getOrders(symbol, states, limit, after, before).then(data => {})

/**
 * 获取指定 id 的订单
 * @param {订单id} id
 */
fcoin.getOrderByid(id).then(data => {})
