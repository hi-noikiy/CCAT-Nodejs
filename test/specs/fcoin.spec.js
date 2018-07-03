/* eslint-env mocha */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)
const config = require('../../src/core/config.js').fcoin
const Utils = require('../../src/core/utils.js')

describe('fcoin.spec.js', () => {
  describe('config file load', () => {
    let fcoin = new Utils(config)
    let name = fcoin.getconfig().name
    let key = fcoin.getconfig().key
    let secret = fcoin.getconfig().secret

    it('name read', () => {
      expect(name).to.equal('fcoin')
    })
    it('key read', () => {
      expect(key).to.equal('61e49da7b3164c87a7949c3dbc4da13a')
    })
    it('secret read', () => {
      expect(secret).to.equal('d58b269058254544bf4a8334dbea493a')
    })
  })

  describe('func load', () => {
    let fcoin = new Utils(config)
    it('constructor and getconfig', () => {
      expect(fcoin.getconfig()).to.equal(config)
    })
  })
})
