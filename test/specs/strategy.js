/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('strategy.spec.js', () => {
  it('strategy', () => {
    expect('strategy').to.equal('strategy')
  })
})
