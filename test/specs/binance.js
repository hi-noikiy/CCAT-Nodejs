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
  it('binance getMarkets', async () => {
    var res = await binance.getMarkets()
    // expect(JSON.stringify(res)).not.to.equal('{}')
    console.log(res)
  })
  it('binance getSymbols', () => {
    var res = binance.getSymbols()
    console.log(res)
  })
  it('binance getCurrencies', () => {
    var res = binance.getCurrencies()
    console.log(res)
  })
  it('binance getTicker', async () => {
    var res = await binance.getTicker('BTC/USDT')
    console.log(res)
  })
  it('binance getDepth', async () => {
    var res = await binance.getDepth('BTC/USDT', 20)
    console.log(res)
  })
})
