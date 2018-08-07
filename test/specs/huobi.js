/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('huobi.spec.js', () => {
  it('huobi', () => {
    expect('huobi').to.equal('huobi')
  })
})
