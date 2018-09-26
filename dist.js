"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Web3 = require('web3');

var EXCChecker =
/*#__PURE__*/
function () {
  function EXCChecker(providerURL) {
    _classCallCheck(this, EXCChecker);

    var web3 = new Web3(new Web3.providers.HttpProvider(providerURL));
    this.EXC = new web3.eth.Contract(require('./excSpec.json'), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
  }

  _createClass(EXCChecker, [{
    key: "balanceOfAsync",
    value: function () {
      var _balanceOfAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(address) {
        var balance;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.EXC.methods.balanceOf(address).call().then(function (result) {
                  balance = result;
                });

              case 2:
                return _context.abrupt("return", balance);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function balanceOfAsync(_x) {
        return _balanceOfAsync.apply(this, arguments);
      };
    }()
  }, {
    key: "balanceOf",
    value: function balanceOf(address) {
      return this.EXC.methods.balanceOf(address).call();
    }
  }]);

  return EXCChecker;
}();

var _default = EXCChecker;
exports.default = _default;
