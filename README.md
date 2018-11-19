# exc-balance-checker
Code for checking an address' balance with Eximchain's ERC20 token.

## Usage
Install via:
```
npm install --save exc-balance-checker
```

Import the main checker class:
```
import BalanceChecker from 'exc-balance-checker';
```

Configure internal provider and you're ready to check balances:
```
const checker = new BalanceChecker("https://mainnet.infura.io/...");
```
The constructor takes an optional second `options` argument.  It is an object which can have keys `timeout`, `user`, `password`, and `headers`, corresponding to the additional arguments which can be passed to the `web3.HttpProvider()`.  This is useful for setting the CORS `Access-Control-Allow-Origin` header of your provider URL, as Firefox and Safari will block requests which do not have that set.

```
checker.balanceOf(<myAddress>).then((myBalance) => {
    // Use myBalance within here
})

// or

var myBalance = await checker.balanceOf(<myAddress>);
```