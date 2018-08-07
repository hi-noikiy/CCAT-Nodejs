/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('okex.spec.js', () => {
  it('okex', () => {
    expect('okex').to.equal('okex')
  })
})
