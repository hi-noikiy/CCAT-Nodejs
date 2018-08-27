'use strict'

const debug = require('debug')('core:lib:cryptopia')
const ccxt = require('ccxt')

debug('src/core/lib/cryptopia.js is called')

class cryptopia {
  constructor (config) {
    debug('constructor is called')
    this.config = config
    this.cryptopiaAPI = new ccxt.cryptopia({ // eslint-disable-line
      apiKey: config.key,
      secret: config.secret
    })
  }

  getConfig () {
    debug('getConfig is called')
    return this.config
  }
}

module.exports = cryptopia
