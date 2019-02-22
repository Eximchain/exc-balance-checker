"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require('@babel/polyfill');

var Web3 = require('web3');

var sample = require('lodash.sample');

var valOrNull = function valOrNull(obj, name) {
  return obj[name] ? obj[name] : null;
};

var mainNetTxExecutors = ['https://tx-executor-us-east.eximchain.com', 'https://tx-executor-us-west.eximchain.com', 'https://tx-executor-singapore.eximchain.com'];
var gammaTxExecutor = 'https://gamma-tx-executor-us-east.eximchain-dev.com';

var checkEXC = function checkEXC(address) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (opts.useTestNet && opts.customEndpoint) {
    throw new Error("Supplied useTestNet and customEndpoint, conflicting options.  Either specify an endpoint or use the built-in ones, but not both.");
  }

  var web3 = new Web3(new Web3.providers.HttpProvider(opts.customEndpoint ? opts.customEndpoint : opts.useTestNet ? gammaTxExecutor : sample(mainNetTxExecutors), valOrNull(opts, 'timeout'), valOrNull(opts, 'user'), valOrNull(opts, 'password'), valOrNull(opts, 'headers')));
  return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
};

var _default = checkEXC;
exports.default = _default;
