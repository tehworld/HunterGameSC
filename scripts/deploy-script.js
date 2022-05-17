const hre = require("hardhat");

async function main() {

//run with this for testing: npx hardhat run scripts/deploy-script.js --network rinkeby 
//run with this for mainnet: npx hardhat run scripts/deploy-script.js --network mainnet

// We get the contract to deploy
  let deployment_base_uri = "https://gateway.pinata.cloud/ipfs/QmRiHGybEkJ84y3mxTrJncPoucBURWWa1At1zuvJMyEHWS"

  const HunterGameContract = await hre.ethers.getContractFactory("HunterGame");
  const HunterGame = await HunterGameContract.deploy(deployment_base_uri);

  await HunterGame.deployed();

  
  console.log("HunterGame deployed to:", HunterGame.address);
  console.log(`See collection in Rarible:  https://rinkeby.rarible.com/token/${HunterGame.address}`)
  console.log(`See collection in Opensea: https://testnets.opensea.io/${HunterGame.address}`)

  await HunterGame.createNewToken("0xfeB31F196D4d9115642c505C6efe95be0b75B664",  1, ethers.utils.parseEther("0.001"), 5000, 3,"0x", "QmeW6WC8rcm1FKX4TLgi3fEx8L2oCYXseks8U8YF4NNGUQ")

  console.log("tokenMinted")

  await HunterGame.transferOwnership("0xf7476355082BFD5001A578d04aacf812daFf13fF")

  console.log("Ownership Transferred")

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
