/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('bithumb.spec.js', () => {
  it('bithumb', () => {
    expect('bithumb').to.equal('bithumb')
  })
})
