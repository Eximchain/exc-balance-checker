# exc-balance-checker
Code for checking an address' balance on Eximchain's main and test networks.

## Usage
Install via:
```
npm install --save exc-balance-checker
```

Import the checker function:
```
import excChecker from 'exc-balance-checker';
```

The balance checker returns a Promise and comes with URLs to our Community Nodes already baked in, so you're ready to go:
```
const acctBalance = await excChecker(yourAddr, options);
```

The options object has a few possible keys:

| Key Name | Default Value | Usage |
| -- | -- | -- |
| `useTestNet` | `false` | Boolean, set true to query test net instead of main net. |
| `requireChecksum` | `false` | Web3 typically requires that addresses follow checksum capitalization, but we disable that check.  Set to true to re-enable. |
| `user` | null | `user` argument for `web3.HttpProvider`. |
| `timeout` | null | `timeout` argument for `web3.HttpProvider`. |
| `password` | null | `password` argument for `web3.HttpProvider`. |
| `headers` | null | `headers` argument for `web3.HttpProvider`.  Useful for setting the CORS `Access-Control-Allow-Origin` header, as Firefox and Safari will block requests which do not have that set. |