const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

//run with this for testing: npx hardhat run scripts/deploy-script.js --network rinkeby 
//run with this for mainnet: npx hardhat run scripts/deploy-script.js --network mainnet

// We get the contract to deploy
  let deployment_base_uri = "ipfs://QmUCSovMHdNbENRabqW8cfq6f3DhEpMGqjox68cpWTfgrQ/"

  const HunterGameContract = await hre.ethers.getContractFactory("HunterGame");
  const HunterGame = await HunterGameContract.deploy(deployment_base_uri);

  await HunterGame.deployed();

  console.log("HunterGame deployed to:", HunterGame.address);
  console.log(`See collection in Rarible:  https://rinkeby.rarible.com/token/${HunterGame.address}`)
  console.log(`See collection in Opensea: https://testnets.opensea.io/${HunterGame.address}`)

  await HunterGame.openPublicSale()
  await HunterGame.mintNFTs(1, {value: ethers.utils.parseEther("0.1")});
  await HunterGame.transferOwnership("0xf9B763867485304056677A8a9016c06E28bDe219")

  
 

}


const runMain = async () => {
  try {
      await main();
      process.exit(0);
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
};


runMain();
