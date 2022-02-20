require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: process.env.ALCHEMY_MUMBAI_ENDPOINT,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
		}
  }
};