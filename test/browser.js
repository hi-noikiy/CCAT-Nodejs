/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('browser.js', () => {
  it('browser', () => {
    expect('browser').to.equal('browser')
  })
})
