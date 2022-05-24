## Useful commands to run the project 

You need to have Node.js (>=12.0)installed in your computer
You can find it [here](https://nodejs.org/en/)

## Install project dependencies
```bash
npm install
```

## Install dotenv to store environment variables and keep them secret
```bash
npm install dotenv
```

You need at least these variables in your .env file. BE SURE TO ADD IT TO GITIGNORE

DEVELOPMENT_ALCHEMY_KEY = "somestringhere"
PRIVATE_KEY = "somenumberhere"
ETHERSCAN_KEY = "anothernumberhere"

The following are optional and less security critical

PUBLIC_ADDRESS = "notsosecretstringofnumbers"

# Use the project
Deploy scripts 

## deploy contract 
run with this for testing: 
```bash
npx hardhat run scripts/deploy-script.js --network rinkeby 
```
run with this for mainnet: 
```bash
npx hardhat run scripts/deploy-script.js --network mainnet
```

# Run tests
```bash
npx hardhat test test/test.js 
```

## Veryfy contract 
```bash
npx hardhat verify --network rinkeby 0x303DFb2DFBE7d10eF218B8d28d5F69b8f693d49A
```

##Current contract address
Rinkeby testnet = 0x303DFb2DFBE7d10eF218B8d28d5F69b8f693d49A

