/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const path = require('path')
const config = require(path.join(__dirname, '../../src/core/config.js')).coinbig
const Coinbig = require(path.join(__dirname, '../../src/core/lib/coinbig.js'))
const xCoin = new Coinbig(config)

describe('coinbig.spec.js', () => {
  it('getConfig', () => {
    expect(xCoin.getConfig()).to.equal(config)
  })
  it('getSymbols', () => {
    let symbols = new Array(['ETH_USDT', 'HT_USDT', 'BTC_USDT'])
    expect(xCoin.getSymbols()).to.equal(symbols)
  })
})
