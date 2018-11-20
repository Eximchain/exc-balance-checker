"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require('@babel/polyfill');

var Web3 = require('web3');

var valOrNull = function valOrNull(obj, name) {
  return obj[name] ? obj[name] : null;
};

var EXCChecker =
/*#__PURE__*/
function () {
  function EXCChecker(providerURL) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, EXCChecker);

    var user = valOrNull(opts, 'user');
    var timeout = valOrNull(opts, 'timeout');
    var password = valOrNull(opts, 'password');
    var headers = valOrNull(opts, 'headers');
    var web3 = new Web3(new Web3.providers.HttpProvider(providerURL, timeout, user, password, headers));
    this.EXC = new web3.eth.Contract(require('./excSpec.json'), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
  }

  _createClass(EXCChecker, [{
    key: "balanceOf",
    value: function balanceOf(address) {
      return this.EXC.methods.balanceOf(address).call();
    }
  }]);

  return EXCChecker;
}();

var _default = EXCChecker;
exports.default = _default;
