# Liquid Security Token SDK for JavaScript
The non-official Liquid Network SDK for JavaScript, available for Node.js backends

## Synopsis

This projects helps you to make HTTPS requests for the creation and management of security token to the Liquid Network API by Blockstream.


## Installation

```sh
npm install liquidSTO-node
```

```javasctipt
const liquidSTO = require('liquidSTO-node');

```

```javasctipt
const client = new liquidSTO();
client.setAuthTokenHeader("username","password",function (error, data) {
	console.log(data)
});

```

## Liquid
Liquid is a Bitcoin sidechain built using the open-source Elements software. Liquid uses a federated consensus model which allows for rapid settlement of both Bitcoin and Issued Assets. Liquid also utilizes Confidential Transactions, which allows the asset amount and type to be hidden from any actors not directly involved in the transaction. Liquid also provides the ability to reveal any of this information to select third parties, such as auditors and regulators.

When managed through Liquid Securities, those assets can represent the tokenized, digital form of traditional securities.

##Liquid Securities
Liquid Securities is currently available as an API. The API allows Liquid Securities to be integrated into an existing token platform, providing an easy way to expose end users to the asset capabilities of the Liquid Network.

###Features and Benefits
*Manage Liquid’s Issued Assets as security tokens.

*Assign and distribute security tokens over the Liquid Network to registered investors.

*Apply category-based transfer restrictions using a Liquid Securities Account ID in Blockstream Green.

*Restrict which investors are allowed to receive a security token.

*Enable granular control of transaction restrictions by plugging into your own authorization API.

*Report on investor balances, ownership and security token activities.

*Track reissuance and burn of security token circulating supply.

*Simplify registering your security token with the Liquid Asset Registry for integration into Blockstream Green, Blockstream Explorer, and other supporting services.

*Blacklist investor UTXOs to cover key-loss scenarios.

*Manage the assignment and distribution of security tokens as vesting shares.

*Record external dividend payments in one place.

*Before going into detail about Liquid Securities, it is useful to review some commonly-used terminology and the features enabled by the Liquid Network.

## API Reference

https://docs.blockstream.com/liquid-securities/overview.html

## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.



