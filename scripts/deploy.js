// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const baf721name = "BlockrithmNFT721";
  const baf721symbol = "NFT721";
  const baf1155name = "BlockrithmNFT1155";
  const baf1155symbol = "NFT1155";
  const tokenURIPrefix = "https://gateway.pinata.cloud/ipfs/ "
  const buyerFee = 25;
  const sellerFee = 25;
  const Nebula721 = await hre.ethers.getContractFactory("Blockrithm721");
  const Nebula1155 = await hre.ethers.getContractFactory("Blockrithm1155");
  const Trade = await hre.ethers.getContractFactory("Trade");
  const Proxy = await hre.ethers.getContractFactory("TransferProxy");
  const Factory721 = await hre.ethers.getContractFactory("Factory721");
  const Factory1155 = await hre.ethers.getContractFactory("Factory1155");

  // //proxy
  // const proxy = await Proxy.deploy();
  // await proxy.deployed();
  // console.log("proxy deployed to:", proxy.address);

  // // NFT721
  // const nebula721 = await Nebula721.deploy(baf721name,baf721symbol,tokenURIPrefix);
  // await nebula721.deployed();
  // console.log("nebula721 deployed to:", nebula721.address);


  // // NFT1155
  // const nebula1155 = await Nebula1155.deploy(baf1155name,baf1155symbol,tokenURIPrefix);
  // await nebula1155.deployed();
  // console.log("nebula1155 deployed to:", nebula1155.address);

  // // trade
  // const trade = await Trade.deploy(buyerFee,sellerFee,proxy.address);
  // await trade.deployed();
  // console.log("trade deployed to:", trade.address);
  // await proxy.changeOperator(trade.address)

  // // Factory721
  // const factory721 = await Factory721.deploy()
  // await factory721.deployed();
  // console.log(`factory721`,factory721.address);

  // // Factory1155
  // const factory1155 = await Factory1155.deploy()
  // await factory1155.deployed()
  // console.log(`factory1155:`,factory1155.address);

  // VERIFY
  // //proxy
  //  await hre.run("verify:verify", {
  //   address: '0xED22B6169550c20Ce3df4A8EF6797f4c665FeeaF',
  // });
  // //Factory721
  // await hre.run("verify:verify", {
  //   address: '0xCBB03Da92a5A79e10ADc1F1c810CAFedEDA1AEF5',
  // });
  // // Factory1155
  // await hre.run("verify:verify", {
  //   address: '0x23249c328cBAB8D9fBEb4F3Fc7617d1CE8F6b7f0',
  // });

  // // NFT721
  // await hre.run("verify:verify", {
  //   address: '0x3f9b4293Cc9c7582A2e97aAFf1d34cE68E464938',
  //   constructorArguments: [baf721name,baf721symbol,tokenURIPrefix],
  // });

  // //NFT1155
  // await hre.run("verify:verify", {
  //   address: '0xd47beF3a91A5234901b944b63599B59F923A7F3F',
  //   constructorArguments: [baf1155name,baf1155symbol,tokenURIPrefix],
  // });

  //trade
  // await hre.run("verify:verify", {
  //   address: '0x14e9Ebab1866a68f0268cAF7B8437597F899E0e0',
  //   constructorArguments: [sellerFee,sellerFee,'0xED22B6169550c20Ce3df4A8EF6797f4c665FeeaF'],
  // });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
