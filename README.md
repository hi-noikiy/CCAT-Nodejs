# CCAT-Core
## ( Crypto Currency Arbitrage Trading )

![npm](https://img.shields.io/badge/Project-CCAT%20Core-blue.svg?style=plastic)
![npm](https://img.shields.io/badge/Status-Devloping-blue.svg?style=plastic)
![npm](https://img.shields.io/badge/Made%20by-OpenInfoGraphic-blue.svg?style=plastic)

[![Build Status](http://45.76.208.48:8080/buildStatus/icon?job=CCAT-Core&style=plastic)](http://45.76.208.48:8080/job/CCAT-Core)
[![codecov](https://codecov.io/gh/OpenInfoGraphic/CCAT-Core/branch/master/graph/badge.svg?style=plastic)](https://codecov.io/gh/OpenInfoGraphic/CCAT-Core)
![Nodejs](https://img.shields.io/badge/Node.js-%3E%3D8.11.0-orange.svg?style=plastic)
![npm](https://img.shields.io/badge/npm-%3E%3D6.0.0-orange.svg?style=plastic)

> OpenInfoGraphic implemetation. Core of Crypto Currency Arbitrage Trading
[CCAT-Core](https://github.com/OpenInfoGraphic/CCAT-Core) specification

> Maintainer:
[Paul Zhang](https://github.com/paulplayer)

## Catalogue
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [CCAT-Core](#ccat-core)
	- [( Crypto Currency Arbitrage Trading )](#-crypto-currency-arbitrage-trading-)
	- [Catalogue](#catalogue)
	- [0. Project Status ( Developing )](#0-project-status-developing-)
		- [0.1 Schedules Timeline](#01-schedules-timeline)
			- [2018.07.24](#20180724)
			- [2018.08.24](#20180824)
			- [2018.09.24](#20180924)
		- [0.2 Bugs and issues](#02-bugs-and-issues)
	- [1. Abstract](#1-abstract)
		- [1.1 Currently Supported Cryptocurrency Exchange Markets](#11-currently-supported-cryptocurrency-exchange-markets)
		- [1.2 Currently Supported Arbitrage Strategy and Risk Control](#12-currently-supported-arbitrage-strategy-and-risk-control)
	- [2. Install](#2-install)
		- [2.1 In Node.js through npm](#21-in-nodejs-through-npm)
		- [2.2 Browser: Browserify, Webpack, other bundlers](#22-browser-browserify-webpack-other-bundlers)
		- [2.3 In the Browser through `<script>` tag](#23-in-the-browser-through-script-tag)
	- [3. Usage](#3-usage)
		- [3.1 Example](#31-example)
		- [3.2 API](#32-api)
	- [4. Contribute](#4-contribute)
	- [5. Acknowledgement](#5-acknowledgement)
	- [6. Donate](#6-donate)
	- [7. License](#7-license)

<!-- /TOC -->

## 0. Project Status ( Developing )

### 0.1 Schedules Timeline

#### 2018.07.24
- [x] Start part-time job coding, based on ccxt and other js api

#### 2018.08.24
- [x] Make the project framework into two part, as src/coin and src/engine.
- [x] Make crypto currencise trading api a universe api, as src/coin/coin.js.
- [x] Done the following src/coin/lib
	- [x] /lib/binance.js
	- [x] /lib/bithumb.js

#### 2018.09.24
- [x] Make the src/engine a light weighted engine with arbitrage strategy and risk control.
- [ ] Done the following src/engine/lib
	- [ ] /lib/calc.js
	- [ ] /lib/risk.js
	- [ ] /lib/strategy.js

### 0.2 Bugs and issues

- [ ] Browser proxy issue in karma test, [see here](https://github.com/OpenInfoGraphic/CCAT-Core/issues)

## 1. Abstract

CCAT-Core is designed as a light weighted core lib for crypto currency abitrage trading, whcih is developed in purely javascript, supporting both nodejs and browsers.

CCAT-Core has two main part, one is src/coin part for trading in crypto exchanges, the other is src/engine part to make the arbitrage strategy and risk control.

### 1.1 Currently Supported Cryptocurrency Exchange Markets

| No. | id   | name | status | certified   | others |
| --- | ---- | ---- | ------ | ----------- | ------ |
| 1   | okex | OKex | coding | not passing |        |

### 1.2 Currently Supported Arbitrage Strategy and Risk Control

| No. | type               | id           | name                | status | certified | others |
| --- | ------------------ | ------------ | ------------------- | ------ | --------- | ------ |
|     | Arbitrage Strategy |              |                     |        |           |        |
| 1.  |                    | bi-arbitrage | Bilateral Arbitrage | Coding |           |        |
| 2.  |                    | tr-arbitrage | Triangle Arbitrage  | Coding |           |        |
|     | Risk Control       |              |                     |        |           |        |
|     |                    |              |                     |        |           |        |

## 2. Install

### 2.1 In Node.js through npm

```bash
> npm install --save CCAT-Core
```

### 2.2 Browser: Browserify, Webpack, other bundlers

The code published to npm that gets loaded on require is in fact an ES5 transpiled version with the right shims added. This means that you can require it and use with your favourite bundler without having to adjust asset management process.

```javascript
const CCAT-Core = require('CCAT-Core')
```


### 2.3 In the Browser through `<script>` tag

Loading this module through a script tag will make the ```CCAT-Core``` obj available in the global namespace.

```html
<script src="https://unpkg.com/CCAT-Core/dist/index.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/CCAT-Core/dist/index.js"></script>
```

## 3. Usage

### 3.1 Example

```javascript

```

### 3.2 API

See the doc. (To be continue)

## 4. Contribute

Contributions welcome. Please check out [the issues](https://github.com/OpenInfoGraphic/CCAT-Core/issues).

## 5. Acknowledgement

@ccxt
[ccxt](https://github.com/ccxt/ccxt.git)

@mathjs
[mathjs](https://github.com/josdejong/mathjs.git)

## 6. Donate

Cryptocurrency is welcomed.

[BTC](#):

[LTC](#):

[ETH](#): 0x16EEbbA3A0aa82825c5b3E35EF15E3aCec6450a3

[BCH](#):

## 7. License

[MIT](LICENSE) © 2018 OpenInfoGraphic Inc.
