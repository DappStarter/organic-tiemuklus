require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note spider coach hope prize swallow twice'; 
let testAccounts = [
"0x3038dd05af239182c53afc480544c506208f43cd5dab4537cbd27ee0a4bccf1e",
"0xdfe8a6c02fe99aa4c89a25f9c06b11c621f7393290d22c6da98d5d21d34b2ef3",
"0xa334c110642c1fd2d903ce737a23e784d023aa2c114642522071364ed576e014",
"0xde2eb020f7842e5ca7f2e4e46b0ab8cd82614a9d976cd0b02fc690be5b2a3075",
"0xc4226c48c4b9b747c826a3e82c6ad335e0cdcc14d8834a1c817175339b890749",
"0xe5becc79556e011ef99ef622b29634a7cb74915b3b1b6cd7b31734878196fb98",
"0xf227e79eb5cb5125c5acb2c2f7fe0808feb8d2066193c6f6f04a50d9ef02ec1b",
"0xac6b226b3be9abe5aa527a0f4aafa5fb4a910339b42ec14ef01c9dcd8b33e616",
"0x3b929b738e69c3c8bac522e2679e88690d299e63b4ed2f5156d8aa697dd7d8e9",
"0x53251ad1842bcd75e80b558054ca0fc586004e9407132ad16560e742345d8a43"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
