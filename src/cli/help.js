'use strict'

const colors = require('colors/safe')
const readlineSync = require('readline-sync')
const helpStr = `
Welcome to CCAT-Core. CCAT-Core is a tool designed for trading on crypto currency market.
CCAT-Core is now support numbers of markets, you can using it by typing following number.

[1] Printing this help
[2] Running Default Arbitrage Trading
[3] Running Bilateral Arbitrage Trading
[4] Running Trilateral Arbitrage Trading
[5] Running Mixed Arbitrage Trading
[6] To be continue
[0] CANCEL and Exit

Enjoy your CCAT-Core!
`

function printHelp () {
  console.log(colors.yellow(helpStr))
  readlineSync.question('Press ENTER key to continue...\n')
}

module.exports.printHelp = printHelp
