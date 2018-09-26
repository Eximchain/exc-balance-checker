'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Web3 = require('web3');

var EXCChecker = function () {
    function EXCChecker(providerURL) {
        _classCallCheck(this, EXCChecker);

        var web3 = new Web3(new Web3.providers.HttpProvider(providerURL));
        this.EXC = new web3.eth.Contract(require('./excSpec.json'), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
    }

    _createClass(EXCChecker, [{
        key: 'balanceOfAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
                var balance;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                balance = void 0;
                                _context.next = 3;
                                return this.EXC.methods.balanceOf(address).call().then(function (result) {
                                    balance = result;
                                });

                            case 3:
                                return _context.abrupt('return', balance);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function balanceOfAsync(_x) {
                return _ref.apply(this, arguments);
            }

            return balanceOfAsync;
        }()
    }, {
        key: 'balanceOf',
        value: function balanceOf(address) {
            return this.EXC.methods.balanceOf(address).call();
        }
    }]);

    return EXCChecker;
}();

exports.default = EXCChecker;
