/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('fcoin.spec.js', () => {
  it('fcoin', () => {
    expect('fcoin').to.equal('fcoin')
  })
})
