require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth misery uncle hunt globe flock trade'; 
let testAccounts = [
"0x65ae44647144feb18506792938d59dedb2db79a9eed22e5e9c54a697b16dc2a7",
"0x096f93d2eb46d9dd488b7f72248ad8823ebfe3b2e6e01f08c63782a06ff1f19e",
"0x20678e5f4bea6f48dff7be42853b7ca91004b8da5b94ec6b4557d3da2baf9175",
"0x12c1934399a6cf5d733d142d8dbcc978952a1d507dd06eb32d92931b8b02dbc4",
"0x7b14154a531affcf2964954535f4adca5b454e2a21abae7ddbd4a7b7db81b190",
"0x571017e11e5954cb92acb81baff01e230f27e595777eeafd128778c64bd718df",
"0x34007601ba4805ed7dd1ce575aba553ee046fc33fa122c2e7f379e2a7cc68523",
"0xb123a5da968d9066fff741aa3bd75fdab95f4ae168263600ceac4fc2ff6fca7c",
"0xb54902d3e3c46406495684fdba5bf05eaafb848cf46081432044d773642b83c7",
"0x7ecadd52894c93261881d3a59e69149c6073db722765e31d3249ac662a43a2ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


