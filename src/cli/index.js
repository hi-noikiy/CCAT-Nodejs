/* eslint-disable no-console */
'use strict'

const debug = require('debug')('cli:index')
const colors = require('colors/safe')
const readlineSync = require('readline-sync')
const usages = [
  'See Help Info',
  'Running Default Arbitrage Trading',
  'Running Bilateral Arbitrage Trading',
  'Running Trilateral Arbitrage Trading',
  'Running Mixed Arbitrage Trading',
  'To be continue'
]
const help = require('./help.js').printHelp
const markets = [
  'Okex',
  'Binance',
  'Bithumb',
  'Huobi',
  'Hitbtc',
  'Bitfinex',
  'Zb',
  'Lbank',
  'Quolinex',
  'Bibox',
  'Fcoin',
  'Coinex',
  'Coinpark',
  'Coinbig'
]
var index
var subIndex

debug('src/cli/index.js is called')

;(async () => {
  do {
    console.log(colors.green('Welcome to CCAT-Core, select your function:'))
    index = await readlineSync.keyInSelect(usages)
    switch (index) {
      case 0:
        await help()
        break
      case 1:
        console.log(colors.green('\nDefault Arbitrage Trading Starting..., select your markets:'))
        subIndex = await readlineSync.keyInSelect(markets)
        break
      case 2:
        console.log(colors.green('\nBilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = await readlineSync.keyInSelect(markets)
        break
      case 3:
        console.log(colors.green('\nTrilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = await readlineSync.keyInSelect(markets)
        break
      case 4:
        console.log(colors.green('\nMixed Arbitrage Trading Starting..., select your markets:'))
        subIndex = await readlineSync.keyInSelect(markets)
        break
      case 5:
        console.log(colors.green('\nBilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = await readlineSync.keyInSelect(markets)
        break
      case 6:
        console.log(colors.yellow('\nTo be continue...\n'))
        break
      default:
        console.log(colors.green('\nCANCEL selected. Bye!\n'))
        break
    }
  } while (index >= 0 || subIndex)
})()
