require('@babel/polyfill');
var Web3 = require('web3');
var sample = require('lodash.sample');

const valOrNull = (obj, name) => { return obj[name] ? obj[name] : null }

const mainNetTxExecutors = [
    'https://tx-executor-us-east.eximchain.com',
    'https://tx-executor-us-west.eximchain.com',
    'https://tx-executor-singapore.eximchain.com'
]

const gammaTxExecutor = 'https://gamma-tx-executor-us-east.eximchain.com';

const checkEXC = (address, opts={}) => {
    if (opts.useTestNet && opts.customEndpoint){
        throw new Error("Supplied useTestNet and customEndpoint, conflicting options.  Either specify an endpoint or use the built-in ones, but not both.");
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(
        opts.customEndpoint ? 
            opts.customEndpoint : opts.useTestNet ?
                gammaTxExecutor : sample(mainNetTxExecutors), 
        valOrNull(opts, 'timeout'), 
        valOrNull(opts, 'user'), 
        valOrNull(opts, 'password'), 
        valOrNull(opts, 'headers')
    ));
    return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
}

export default checkEXC;