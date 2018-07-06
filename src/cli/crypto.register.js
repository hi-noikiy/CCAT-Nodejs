'use strict'

const debug = require('debug')('cli:crypto')
const path = require('path')
const config = require(path.join(__dirname, '../core/config.js')).crypto
const Crypto = require(path.join(__dirname, '../core/crypto.js'))
const Register = require(path.join(__dirname, '../core/register.js'))

debug('crypto script demo')
let cry = new Crypto(config)
let publicKey = cry.getconfig().publicKey
let register = new Register(config.register)
let promise = register.getMac()

var username = 'CCATer'
var privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDFWnl8fChyKI/Tgo1ILB+IlGr8ZECKnnO8XRDwttBbf5EmG0qV
8gs0aGkh649rb75I+tMu2JSNuVj61CncL/7Ct2kAZ6CZZo1vYgtzhlFnxd4V7Ra+
aIwLZaXT/h3eE+/cFsL4VAJI5wXh4Mq4Vtu7uEjeogAOgXACaIqiFyrk3wIDAQAB
AoGBAKdrunYlqfY2fNUVAqAAdnvaVOxqa+psw4g/d3iNzjJhBRTLwDl2TZUXImEZ
QeEFueqVhoROTa/xVg/r3tshiD/QC71EfmPVBjBQJJIvJUbjtZJ/O+L2WxqzSvqe
wzYaTm6Te3kZeG/cULNMIL+xU7XsUmslbGPAurYmHA1jNKFpAkEA48aUogSv8VFn
R2QuYmilz20LkCzffK2aq2+9iSz1ZjCvo+iuFt71Y3+etWomzcZCuJ5sn0w7lcSx
nqyzCFDspQJBAN3O2VdQF3gua0Q5VHmK9AvsoXLmCfRa1RiKuFOtrtC609RfX4DC
FxDxH09UVu/8Hmdau8t6OFExcBriIYJQwDMCQQCZLjFDDHfuiFo2js8K62mnJ6SB
H0xlIrND2+/RUuTuBov4ZUC+rM7GTUtEodDazhyM4C4Yq0HfJNp25Zm5XALpAkBG
atLpO04YI3R+dkzxQUH1PyyKU6m5X9TjM7cNKcikD4wMkjK5p+S2xjYQc1AeZEYq
vc187dJPRIi4oC3PN1+tAkBuW51/5vBj+zmd73mVcTt28OmSKOX6kU29F0lvEh8I
oHiLOo285vG5ZtmXiY58tAiPVQXa7eU8hPQHTHWa9qp6
-----END RSA PRIVATE KEY-----`

promise.then((macAddr) => {
  debug('mac Value:' + macAddr)

  let hash = cry.getHash('sha256', username + '@' + macAddr)
  debug('hash value:' + hash)

  let ecPub = cry.encrypter('aes-256-cfb', publicKey, hash) // as series
  debug('series value:' + ecPub)

  // let dcPub = cry.decrypter('aes-256-cfb', publicKey, ecPub)
  // debug('decode hash value:' + dcPub)

  let sig = cry.signer('RSA-SHA256', privateKey, ecPub) // as regCode
  debug('regCode value:' + sig)

  // let vrf = cry.verifyer('RSA-SHA256', publicKey, sig, ecPub)
  // debug('verify result:' + vrf)
})
