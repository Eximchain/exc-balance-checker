"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('@babel/polyfill');

var Web3 = require('web3');

var sample = require('lodash.sample');

var valOrNull = function valOrNull(obj, name) {
  return obj[name] ? obj[name] : null;
};

var mainNetTxExecutors = ['http://ec2-3-80-165-200.compute-1.amazonaws.com:8080', 'http://ec2-34-219-140-122.us-west-2.compute.amazonaws.com:8080', 'http://ec2-54-255-248-144.ap-southeast-1.compute.amazonaws.com:8080'];
var gammaTxExecutor = 'http://ec2-3-91-44-3.compute-1.amazonaws.com:8080';

var checkEXC = function checkEXC(address, opts) {
  var user = valOrNull(opts, 'user');
  var timeout = valOrNull(opts, 'timeout');
  var password = valOrNull(opts, 'password');
  var headers = valOrNull(opts, 'headers');
  var providerUrl = opts.useTestNet ? gammaTxExecutor : sample(mainNetTxExecutors);
  var web3 = new Web3(new Web3.providers.HttpProvider(providerUrl, timeout, user, password, headers));
  var checkAddress = opts.requireChecksum ? address : address.toLowerCase();
  return web3.eth.getBalance(checkAddress);
};

var test =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var addr, bal;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addr = '0x8d565a885860CD28d08db457cFBB36dA08441009';
            _context.next = 3;
            return checkEXC(addr, {
              useTestNet: false,
              requireChecksum: false
            });

          case 3:
            bal = _context.sent;
            console.log("Balance of ".concat(addr, ": ").concat(bal));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

test();
var _default = checkEXC;
exports.default = _default;
