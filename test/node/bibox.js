/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('bibox.spec.js', () => {
  it('bibox', () => {
    expect('bibox').to.equal('bibox')
  })
})
