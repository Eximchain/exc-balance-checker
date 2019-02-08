require('@babel/polyfill');
var Web3 = require('web3');
var sample = require('lodash.sample');

const valOrNull = (obj, name) => { return obj[name] ? obj[name] : null }

const mainNetTxExecutors = [
    'http://ec2-3-80-165-200.compute-1.amazonaws.com:8080',
    'http://ec2-34-219-140-122.us-west-2.compute.amazonaws.com:8080',
    'http://ec2-54-255-248-144.ap-southeast-1.compute.amazonaws.com:8080'
]

const gammaTxExecutor = 'http://ec2-3-91-44-3.compute-1.amazonaws.com:8080';

const checkEXC = (address, opts={}) => {
    const web3 = new Web3(new Web3.providers.HttpProvider(
        opts.useTestNet ? gammaTxExecutor : sample(mainNetTxExecutors), 
        valOrNull(opts, 'timeout'), 
        valOrNull(opts, 'user'), 
        valOrNull(opts, 'password'), 
        valOrNull(opts, 'headers')
    ));
    return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
}

export default checkEXC;