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

var mainNetTxExecutors = ['http://ec2-3-80-165-200.compute-1.amazonaws.com:8080', 'http://ec2-34-219-140-122.us-west-2.compute.amazonaws.com:8080', 'http://ec2-54-255-248-144.ap-southeast-1.compute.amazonaws.com:8080'];
var gammaTxExecutor = 'http://ec2-3-91-44-3.compute-1.amazonaws.com:8080';

var checkEXC = function checkEXC(address) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var web3 = new Web3(new Web3.providers.HttpProvider(opts.useTestNet ? gammaTxExecutor : sample(mainNetTxExecutors), valOrNull(opts, 'timeout'), valOrNull(opts, 'user'), valOrNull(opts, 'password'), valOrNull(opts, 'headers')));
  return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
};

var _default = checkEXC;
exports.default = _default;
