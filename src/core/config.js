'use strict'

const debug = require('debug')('core:config')
const fs = require('fs')
const path = require('path')
const configFile = path.resolve(process.cwd(), './config.json')
const config = JSON.parse(fs.readFileSync(configFile))

debug('config.js is called')
debug('config is: \n')
debug(config)

module.exports = {
  fcoin: {
    name: config.fcoin.name,
    key: config.fcoin.key,
    secret: config.fcoin.secret
  },
  coinpark: {
    name: config.coinpark.name,
    key: config.coinpark.key,
    secret: config.coinpark.secret
  },
  coinbig: {
    name: config.coinbig.name,
    key: config.coinbig.key,
    secret: config.coinbig.secret
  }
}
