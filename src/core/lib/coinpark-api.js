/* eslint-disable */

let CryptoJS = require("crypto-js");
let request = require("request");

class Coinpark{
  constructor(obj) {
    this.config = obj;
  }
  getconfig() {
    return this.config;
  }
  
let doPost (url, params, callBack) {
    request.post({url: url, form: params}, function (error, response, body) {
        if (!error && response && response.statusCode===200) {
            let result = JSON.parse(body);
            callBack(result);
        } else {
            console.log('err: ', error);
            callBack(error);
        }
    });
};

let doGet = function (url, callBack) {
    request.get({url: url}, function (error, response, body) {
        if (!error && response && response.statusCode===200) {
            let result = JSON.parse(body);
            callBack(result);
        } else {
            console.log('err: ', error);
            callBack(error);
        }
    });
};
 
let getSign = function (data) {
    var secret = 'your apikey secret';
    var sign = CryptoJS.HmacMD5(JSON.stringify(data), secret).toString();
    return sign;
};

let doApiRequestWithApikey = function (url, cmds, callBack) {
    let form = {
        cmds: JSON.stringify(cmds),
        apikey: 'your apikey',
        sign: getSign(cmds)
    };

    doPost(url, form, function (result) {
        callBack(result);
    });
};

let doApiRequest = function (url, cmds, callBack) {
    let form = {
        cmds: JSON.stringify(cmds)
    };

    doPost(url, form, function (result) {
        callBack(result);
    });
};

let getDepth = function (pair, size) {
    let _func_name_ = 'getDepth';

    //GET
    let get_url = 'https://api.coinpark.cc/v1/mdata?cmd=depth&pair=' + pair + '&size=' + size;

    doGet(get_url, function (res) {
        console.log('%s: GET return：', _func_name_, JSON.stringify(res));
    });


    //POST
    let cmds = [
        {
            cmd: "api/depth",
            body: {
                pair: pair,
                size: size
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: POST return：', _func_name_, JSON.stringify(res));
    });
};


let getDeals = function (pair, size) {
    let _func_name_ = 'getDeals';

    let cmds = [
        {
            cmd: "api/deals",
            body: {
                pair: pair,
                size: size
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};


let getKline = function (pair, period, size) {
    let _func_name_ = 'getKline';

    let cmds = [
        {
            cmd: "api/kline",
            body: {
                pair: pair,
                period: period,
                size: size
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let getTicker = function (pair) {
    let _func_name_ = 'getTicker';

    let cmds = [
        {
            cmd: "api/ticker",
            body: {
                pair: pair
            }
        }
    ];

    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let getMarket = function (pair) {
    let _func_name_ = 'getMarket';

    let cmds = [
        {
            cmd: "api/market",
            body: {
                pair: pair
            }
        }
    ];

    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let getMarketAll = function () {
    let _func_name_ = 'getMarketAll';

    let cmds = [
        {
            cmd: "api/marketAll",
            body: {}
        }
    ];

    let url = 'https://api.coinpark.cc/v1/mdata';
    doApiRequest(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};


let getUserOrderPending = function (pair, account_type, page, size) {
    let _func_name_ = 'getUserOrderPending';

    let cmds = [
        {
            cmd: "orderpending/orderPendingList",
            body: {
                pair: pair,
                page: page,
                size: size
            }
        }
    ];

    let url = 'https://api.coinpark.cc/v1/orderpending';
    doApiRequestWithApikey(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let getUserOrderHistory = function (pair, account_type, page, size) {
    let _func_name_ = 'getUserOrderHistory';

    let cmds = [
        {
            cmd: "orderpending/orderHistoryList",
            body: {
                pair: pair,
                page: page,
                size: size
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/orderpending';
    doApiRequestWithApikey(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let doTrade = function (trade_order) {
    let _func_name_ = 'doTrade';

    let cmds = [
        {
            cmd: "orderpending/trade",
            body: {
                pair: trade_order.pair,
                account_type: trade_order.account_type,
                order_type: trade_order.order_type,
                order_side: trade_order.order_side,
                price: trade_order.price,
                amount: trade_order.amount
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/orderpending';
    doApiRequestWithApikey(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let doCancelTrade = function (orders_id) {
    let _func_name_ = 'doCancelTrade';

    let cmds = [
        {
            cmd: "orderpending/cancelTrade",
            body: {
                orders_id: orders_id
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/orderpending';
    doApiRequestWithApikey(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};

let getUserAssets = function () {
    let _func_name_ = 'getUserAssets';

    let cmds = [
        {
            cmd: "transfer/assets",
            body: {
                select: 1
            }
        }
    ];
    let url = 'https://api.coinpark.cc/v1/transfer';
    doApiRequestWithApikey(url, cmds, function (res) {
        console.log('%s: return：', _func_name_, JSON.stringify(res));
    });
};
}

module.exports = Coinpark;
