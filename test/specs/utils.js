/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('utils.spec.js', () => {
  it('utils', () => {
    expect('utils').to.equal('utils')
  })
})
