/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('coin.spec.js', () => {
  it('coin', () => {
    expect('coin').to.equal('coin')
  })
})
