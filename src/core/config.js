'use strict'

const debug = require('debug')('core:config')
const fs = require('fs')
const path = require('path')
const configFile = path.join(__dirname, '../config.json')
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
  },
  register: {
    user: config.register.user,
    email: config.register.email,
    phone: config.register.phone,
    pwd: config.register.pwd,
    series: config.register.series,
    regCode: config.register.regCode
  },
  crypto: {
    privateKey: '',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFWnl8fChyKI/Tgo1ILB+IlGr8
ZECKnnO8XRDwttBbf5EmG0qV8gs0aGkh649rb75I+tMu2JSNuVj61CncL/7Ct2kA
Z6CZZo1vYgtzhlFnxd4V7Ra+aIwLZaXT/h3eE+/cFsL4VAJI5wXh4Mq4Vtu7uEje
ogAOgXACaIqiFyrk3wIDAQAB
-----END PUBLIC KEY-----`
  }
}
