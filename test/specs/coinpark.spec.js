/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('coinpark.spec.js', () => {
  it('coinpark', () => {
    expect('coinpark').to.equal('coinpark')
  })
})
