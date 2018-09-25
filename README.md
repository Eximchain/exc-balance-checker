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

There is one implementation which uses `async/await` syntax and another one which returns a Promise whose result is the balance:
```
let myBalance = await checker.balanceOfAsync(<myAddress>);

checker.balanceOf(<myAddress>).then((myBalance) => {
    // Use myBalance within here
})
```