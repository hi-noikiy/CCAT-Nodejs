/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('coinex.spec.js', () => {
  it('coinex', () => {
    expect('coinex').to.equal('coinex')
  })
})
