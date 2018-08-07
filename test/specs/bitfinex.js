/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('bitfinex.spec.js', () => {
  it('bitfinex', () => {
    expect('bitfinex').to.equal('bitfinex')
  })
})
