/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin/coin.js')
const config = require('../../src/core/config.js').bithumb
const bithumb = new Coin(config)

const proxy = require('../../src/core/config.js').proxy
const ProxyAgent = require('proxy-agent')
bithumb.setProxy(new ProxyAgent(proxy.url))

describe('bithumb.spec.js', () => {
  it('bithumb setProxy', () => {
    var res = bithumb.getConfig().api
    // console.log(res)
    expect(res.agent.proxyUri).to.equal(proxy.url)
  })
  it('bithumb getConfig', () => {
    var res = bithumb.getConfig().config
    // console.log(res)
    expect(res.name).to.equal('bithumb')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('bithumb getMarkets', () => {
    return bithumb.getMarkets().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb getSymbols', () => {
    return bithumb.getSymbols().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb getCurrencies', () => {
    return bithumb.getCurrencies().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb getTicker', () => {
    return bithumb.getTicker('ETH/KRW').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb getTickers', () => {
    return bithumb.getTickers('ETH/KRW,BTC/KRW').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb getDepth', () => {
    return bithumb.getDepth('BTC/KRW', 5).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb createOrder', () => {
    // return bithumb.createOrder('ETH/KRW', 'limit', 'buy', 0.01, 300000).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('bithumb cancelOrder', () => {
    // return bithumb.cancelOrder('1534223582323983', 'ETH/KRW', {side: 'buy', currency: 'ETH'}).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })

  // it('bithumb getOrder', () => { // to be continue
  //   return bithumb.getOrder('xxx', 'ETH/KRW').then((res) => {
  //     // console.log(res)
  //     expect(res).not.equal('')
  //   })
  // })
  // it('bithumb getOrders', () => { // to be continue
  //   return bithumb.getOrders('ETH/KRW', new Date('2018-08-01 00:00:00'), 10).then((res) => {
  //     // console.log(res)
  //     expect(res).not.equal('')
  //   })
  // })
  // it('bithumb getOpenOrders', () => { // to be continue
  //   return bithumb.getOpenOrders('ETH/KRW', new Date('2018-08-01 00:00:00'), 10).then((res) => {
  //     // console.log(res)
  //     expect(res).not.equal('')
  //   })
  // })
  // it('bithumb getClosedOrders', () => { // to be continue
  //   return bithumb.getClosedOrders('ETH/KRW', new Date('2018-08-01 00:00:00'), 10).then((res) => {
  //     // console.log(res)
  //     expect(res).not.equal('')
  //   })
  // })
  // it('bithumb getTrades', () => { // to be continue
  //   return bithumb.getTrades('ETH/KRW', new Date('2018-08-01 00:00:00'), 5).then((res) => {
  //     console.log(res)
  //     expect(res).not.equal('')
  //   })
  // })

  it('bithumb getBalance', () => {
    return bithumb.getBalance().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('bithumb calculateFee', () => {
    return bithumb.calculateFee('ETH/KRW', 'limit', 'buy', 0.05, 315, 'maker').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
})
