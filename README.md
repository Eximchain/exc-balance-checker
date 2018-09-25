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

The `balanceOf()` function uses `async/await` syntax, so the caller ought to use it as well:
```
let myBalance = await checker.balanceOf(<myAddress>);
```
