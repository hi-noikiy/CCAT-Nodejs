/* eslint-env mocha */
/* eslint-disable no-console */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const Coin = require('../../src/core/coin.js')
const config = require('../../src/core/config.js').binance
const binance = new Coin(config)

describe('binance.spec.js', () => {
  it('binance getConfig', () => {
    var res = binance.getConfig()
    expect(res.name).to.equal('binance')
    expect(res.key).to.equal(config.key)
    expect(res.secret).to.equal(config.secret)
  })
  it('binance getMarkets', () => {
    return binance.getMarkets().then((res) => {
      console.log(res)
    })
  })
  it('binance getSymbols', () => {
    return binance.getSymbols().then((res) => {
      console.log(res)
    })
  })
  it('binance getCurrencies', () => {
    return binance.getCurrencies().then((res) => {
      console.log(res)
    })
  })
  it('binance getTicker', () => {
    return binance.getTicker('BTC/USDT').then((res) => {
      console.log(res)
    })
  })
  it('binance getDepth', () => {
    return binance.getDepth('BTC/USDT', 5).then((res) => {
      console.log(res)
    })
  })
})
