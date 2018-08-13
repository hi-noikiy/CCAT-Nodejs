/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('quolinex.spec.js', () => {
  it('quolinex', () => {
    expect('quolinex').to.equal('quolinex')
  })
})
