/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('calc.spec.js', () => {
  it('calc', () => {
    expect('calc').to.equal('calc')
  })
})
