/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('binance.spec.js', () => {
  it('binance', () => {
    expect('binance').to.equal('binance')
  })
})
