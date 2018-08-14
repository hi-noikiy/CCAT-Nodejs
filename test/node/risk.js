/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('risk.spec.js', () => {
  it('risk', () => {
    expect('risk').to.equal('risk')
  })
})
