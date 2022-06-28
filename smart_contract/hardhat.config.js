// https://eth-goerli.alchemyapi.io/v2/epxMNOVP4si5w-QlWZ4molJerykuHddo

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/epxMNOVP4si5w-QlWZ4molJerykuHddo',
      accounts: [
        '394a6e8606de17ec8efc7a2bbb65e0f6bf898848d181420ea15c71b3cd763411',
      ],
    },
  },
};
