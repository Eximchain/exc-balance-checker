var Web3 = require('web3');

class EXCChecker {
    constructor(providerURL){
        const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));
        this.EXC = web3.eth.Contract(JSON.parse(require('./excSpec.json')), '0x00c4B398500645eb5dA00a1a379a88B11683ba01');
    }

    async balanceOf(address){
        let balance;
        await EXC.balanceOf(address).call().then(function(result){
            balance = result;
        });
        console.log('Balance found: ',balance);
        return balance;
    }
}

export default EXCChecker;