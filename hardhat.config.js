require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "https://eth-ropsten.alchemyapi.io/v2/qdMzuaA_U9umL_rmTuKuKKxX0rV-LFnK";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "b26095934b5a88ba6721d4ef6b82b69edf4372b77c16871aa03e6558e7d87cf3";

module.exports = {
  solidity: {version:"0.8.0"},
  networks: {
    ropsten: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
