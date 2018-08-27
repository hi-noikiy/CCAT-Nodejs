/* eslint-env mocha */
/* eslint-disable no-console */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin/coin.js')
const config = require('../../src/core/config.js').binance
const binance = new Coin(config)

describe('binance.spec.js', () => {
  it('binance getConfig', () => {
    var res = binance.getConfig().config
    // console.log(res)
    expect(res.name).to.equal('binance')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('binance getMarkets', () => {
    return binance.getMarkets().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getSymbols', () => {
    return binance.getSymbols().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getCurrencies', () => {
    return binance.getCurrencies().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getTicker', () => {
    return binance.getTicker('ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getTickers', () => {
    return binance.getTickers('BTC/USDT,ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getDepth', () => {
    return binance.getDepth('BTC/USDT', 5).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance createOrder', () => {
    // return binance.createOrder('ETH/USDT', 'limit', 'buy', 0.05, 315).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('binance cancelOrder', () => {
    // return binance.cancelOrder('xxx', 'ETH/USDT').then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('binance getOrder', () => {
    // return binance.getOrder('xxx', 'ETH/USDT').then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('binance getOrders', () => {
    return binance.getOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getOpenOrders', () => {
    return binance.getOpenOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getClosedOrders', () => {
    return binance.getClosedOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getTrades', () => {
    return binance.getTrades('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance getBalance', () => {
    return binance.getBalance().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('binance calculateFee', () => {
    return binance.calculateFee('ETH/USDT', 'limit', 'buy', 0.05, 315, 'maker').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
})
