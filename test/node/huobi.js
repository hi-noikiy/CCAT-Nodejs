/* eslint-env mocha */
/* eslint-disable no-console */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin/coin.js')
const config = require('../../src/core/config.js').huobi
const huobi = new Coin(config)

const proxy = require('../../src/core/config.js').proxy
const ProxyAgent = require('proxy-agent')
huobi.setProxy(new ProxyAgent(proxy.url))

describe('huobi.spec.js', () => {
  it('huobi setProxy', () => {
    var res = huobi.getConfig().api
    // console.log(res)
    expect(res.agent.proxyUri).to.equal(proxy.url)
  })
  it('huobi getConfig', () => {
    var res = huobi.getConfig().config
    // console.log(res)
    expect(res.name).to.equal('huobi')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('huobi getMarkets', () => {
    return huobi.getMarkets().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi getSymbols', () => {
    return huobi.getSymbols().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi getCurrencies', () => {
    return huobi.getCurrencies().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi getTicker', () => {
    return huobi.getTicker('ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi getTickers', () => {
    return huobi.getTickers('BTC/USDT,ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi getDepth', () => {
    return huobi.getDepth('BTC/USDT', 5).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('huobi createOrder', () => {
    // return huobi.createOrder('ETH/USDT', 'limit', 'buy', 0.05, 315).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi cancelOrder', () => {
    // return huobi.cancelOrder('xxx', 'ETH/USDT').then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getOrder', () => {
    // return huobi.getOrder('xxx', 'ETH/USDT').then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getOrders', () => {
    // return huobi.getOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getOpenOrders', () => {
    // return huobi.getOpenOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getClosedOrders', () => {
    // return huobi.getClosedOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getTrades', () => {
    // return huobi.getTrades('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi getBalance', () => {
    // return huobi.getBalance().then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('huobi calculateFee', () => {
    return huobi.calculateFee('ETH/USDT', 'limit', 'buy', 0.05, 315, 'maker').then((res) => {
      console.log(res)
      expect(res).not.equal('')
    })
  })
})
