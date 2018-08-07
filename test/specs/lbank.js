/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('lbank.spec.js', () => {
  it('lbank', () => {
    expect('lbank').to.equal('lbank')
  })
})
