"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Web3 = require('web3');

class EXCChecker {
  constructor(providerURL) {
    const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));
    this.EXC = new web3.eth.Contract(require('./excSpec.json'), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
  }

  async balanceOfAsync(address) {
    let balance;
    await this.EXC.methods.balanceOf(address).call().then(function (result) {
      balance = result;
    });
    return balance;
  }

  balanceOf(address) {
    return this.EXC.methods.balanceOf(address).call();
  }

}

var _default = EXCChecker;
exports.default = _default;
