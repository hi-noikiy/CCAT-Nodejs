'use strict'

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

;(async () => {
  do {
    console.log(colors.green('Welcome to CCAT-Core, select your function:'))
    var index = readlineSync.keyInSelect(usages)
    let subIndex
    switch (index) {
      case 0:
        await help()
        break
      case 1:
        console.log(colors.yellow('\nDefault Arbitrage Trading Starting..., select your markets:'))
        subIndex = readlineSync.keyInSelect(markets)
        break
      case 2:
        console.log(colors.yellow('\nBilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = readlineSync.keyInSelect(markets)
        break
      case 3:
        console.log(colors.yellow('\nTrilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = readlineSync.keyInSelect(markets)
        break
      case 4:
        console.log(colors.yellow('\nMixed Arbitrage Trading Starting..., select your markets:'))
        subIndex = readlineSync.keyInSelect(markets)
        break
      case 5:
        console.log(colors.yellow('\nBilateral Arbitrage Trading Starting..., select your markets:'))
        subIndex = readlineSync.keyInSelect(markets)
        break
      case 6:
        console.log(colors.yellow('\nTo be continue...\n'))
        break
      default:
        console.log(colors.yellow('\nCANCEL selected. Bye!\n'))
        break
    }
  } while (index >= 0)
})()
