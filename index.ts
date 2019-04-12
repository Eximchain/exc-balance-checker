require('@babel/polyfill');
import Web3 from 'web3';
var sample = require('lodash.sample');

const valOrNull = (obj:Options, name) => { return obj[name] ? obj[name] : null }

const mainNetTxExecutors = [
    'https://tx-executor-us-east.eximchain.com',
    'https://tx-executor-us-west.eximchain.com',
    'https://tx-executor-singapore.eximchain.com'
]

const gammaTxExecutor = 'https://gamma-tx-executor-us-east.eximchain-dev.com';

interface Options {
    useTestNet: boolean
    requireChecksum: boolean
    customEndpoint?: string
    timeout?: number
}

const defaultOptions = {
    useTestNet : false,
    requireChecksum : false
}

const checkEXC = (address:string, opts:Options=defaultOptions) => {
    if (opts.useTestNet && opts.customEndpoint){
        throw new Error("Supplied useTestNet and customEndpoint, conflicting options.  Either specify an endpoint or use the built-in ones, but not both.");
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(
        opts.customEndpoint ? 
            opts.customEndpoint : opts.useTestNet ?
                gammaTxExecutor : sample(mainNetTxExecutors), 
        valOrNull(opts, 'timeout')
    ));
    return web3.eth.getBalance(opts.requireChecksum ? address : address.toLowerCase());
}

export default checkEXC;