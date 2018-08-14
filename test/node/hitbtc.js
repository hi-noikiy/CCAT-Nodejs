/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('hitbtc.spec.js', () => {
  it('hitbtc', () => {
    expect('hitbtc').to.equal('hitbtc')
  })
})
