/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('zb.spec.js', () => {
  it('zb', () => {
    expect('zb').to.equal('zb')
  })
})
