/* eslint-env mocha */
/* eslint-disable no-console */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin/coin.js')
const config = require('../../src/core/config.js').okex
const okex = new Coin(config)

const proxy = require('../../src/core/config.js').proxy
const ProxyAgent = require('proxy-agent')
okex.setProxy(new ProxyAgent(proxy.url))

describe('okex.spec.js', () => {
  it('okex setProxy', () => {
    var res = okex.getConfig().api
    // console.log(res)
    expect(res.agent.proxyUri).to.equal(proxy.url)
  })
  it('okex getConfig', () => {
    var res = okex.getConfig().config
    // console.log(res)
    expect(res.name).to.equal('okex')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('okex getMarkets', () => {
    return okex.getMarkets().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getSymbols', () => {
    return okex.getSymbols().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getCurrencies', () => {
    return okex.getCurrencies().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getTicker', () => {
    return okex.getTicker('ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getTickers', () => {
    return okex.getTickers('BTC/USDT,ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getDepth', () => {
    return okex.getDepth('BTC/USDT', 5).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex createOrder', () => {
    // return okex.createOrder('ETH/USDT', 'limit', 'buy', 0.05, 315).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('okex cancelOrder', () => {
    // return okex.cancelOrder('xxx', 'ETH/USDT').then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('okex getOrder', () => {
    // return okex.getOrder('xxx', 'ETH/USDT').then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('okex getOrders', () => {
    return okex.getOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getOpenOrders', () => {
    return okex.getOpenOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getClosedOrders', () => {
    return okex.getClosedOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getTrades', () => {
    return okex.getTrades('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex getBalance', () => {
    return okex.getBalance().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('okex calculateFee', () => {
    return okex.calculateFee('ETH/USDT', 'limit', 'buy', 0.05, 315, 'maker').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
})
