/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('gate.spec.js', () => {
  it('gate', () => {
    expect('gate').to.equal('gate')
  })
})
