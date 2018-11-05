/* eslint-env mocha */
/* eslint-disable no-console */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin/coin.js')
const config = require('../../src/core/config.js').cryptopia
const cryptopia = new Coin(config)

const proxy = require('../../src/core/config.js').proxy
const ProxyAgent = require('proxy-agent')
cryptopia.setProxy(new ProxyAgent(proxy.url))

describe('cryptopia.spec.js', () => {
  it('cryptopia setProxy', () => {
    var res = cryptopia.getConfig().api
    // console.log(res)
    expect(res.agent.proxyUri).to.equal(proxy.url)
  })
  it('cryptopia getConfig', () => {
    var res = cryptopia.getConfig().config
    // console.log(res)
    expect(res.name).to.equal('cryptopia')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('cryptopia getMarkets', () => {
    return cryptopia.getMarkets().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getSymbols', () => {
    return cryptopia.getSymbols().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getCurrencies', () => {
    return cryptopia.getCurrencies().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getTicker', () => {
    return cryptopia.getTicker('ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getTickers', () => {
    return cryptopia.getTickers('BTC/USDT,ETH/USDT').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getDepth', () => {
    return cryptopia.getDepth('BTC/USDT', 5).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia createOrder', () => {
    // return cryptopia.createOrder('ETH/USDT', 'limit', 'buy', 0.05, 315).then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('cryptopia cancelOrder', () => {
    // return cryptopia.cancelOrder('xxx', 'ETH/USDT').then((res) => {
    //   console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('cryptopia getOrder', () => {
    // return cryptopia.getOrder('xxx', 'ETH/USDT').then((res) => {
    //   // console.log(res)
    //   expect(res).not.equal('')
    // })
  })
  it('cryptopia getOrders', () => {
    return cryptopia.getOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getOpenOrders', () => {
    return cryptopia.getOpenOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getClosedOrders', () => {
    return cryptopia.getClosedOrders('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getTrades', () => {
    return cryptopia.getTrades('ETH/USDT', new Date('2018-08-01 00:00:00'), 10).then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia getBalance', () => {
    return cryptopia.getBalance().then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
  it('cryptopia calculateFee', () => {
    return cryptopia.calculateFee('ETH/USDT', 'limit', 'buy', 0.05, 315, 'maker').then((res) => {
      // console.log(res)
      expect(res).not.equal('')
    })
  })
})
