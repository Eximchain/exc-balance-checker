"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require('@babel/polyfill');
var web3_1 = __importDefault(require("web3"));
var sample = require('lodash.sample');
var valOrNull = function (obj, name) { return obj[name] ? obj[name] : null; };
var mainNetTxExecutors = [
    'https://tx-executor-us-east.eximchain.com',
    'https://tx-executor-us-west.eximchain.com',
    'https://tx-executor-singapore.eximchain.com'
];
var gammaTxExecutor = 'https://gamma-tx-executor-us-east.eximchain-dev.com';
var defaultOptions = {
    useTestNet: false,
    requireChecksum: false
};
var checkEXC = function (address, opts) {
    if (opts === void 0) { opts = defaultOptions; }
    if (opts.useTestNet && opts.customEndpoint) {
        throw new Error("Supplied useTestNet and customEndpoint, conflicting options.  Either specify an endpoint or use the built-in ones, but not both.");
    }
    var web3 = new web3_1["default"](new web3_1["default"].providers.HttpProvider(opts.customEndpoint ?
        opts.customEndpoint : opts.useTestNet ?
        gammaTxExecutor : sample(mainNetTxExecutors), valOrNull(opts, 'timeout')));
    return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
};
exports["default"] = checkEXC;
