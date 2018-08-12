/* eslint-env mocha */

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
    var res = binance.getMarkets()
    expect(JSON.stringify(res)).to.equal('{}')
  })
  it('binance getSymbols', () => {
    var res = binance.getSymbols()
    expect(JSON.stringify(res)).to.equal('{}')
  })
  it('binance getCurrencies', () => {
    var res = binance.getCurrencies()
    expect(JSON.stringify(res)).to.equal('{}')
  })
  it('binance getTicker', () => {
    var res = binance.getTicker('ethbtc')
    console.log(res)
  })
})
