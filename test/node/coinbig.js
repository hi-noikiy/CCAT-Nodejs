/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('coinbig.spec.js', () => {
  it('coinbig', () => {
    expect('coinbig').to.equal('coinbig')
  })
})
