require('@babel/polyfill');
var Web3 = require('web3');

const valOrNull = (obj, name) => { return obj[name] ? obj[name] : null }

class EXCChecker {
    constructor(providerURL, opts={}){
        const user = valOrNull(opts, 'user');
        const timeout = valOrNull(opts, 'timeout');
        const password = valOrNull(opts, 'password');
        const headers = valOrNull(opts, 'headers');
        const web3 = new Web3(new Web3.providers.HttpProvider(providerURL, timeout, user, password, headers));
        this.EXC = new web3.eth.Contract(require('./excSpec.json'), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
    }

    balanceOf(address){
        return this.EXC.methods.balanceOf(address).call();
    }
}

export default EXCChecker;