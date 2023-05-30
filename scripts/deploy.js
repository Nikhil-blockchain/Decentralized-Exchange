const hre = require("hardhat");

async function main() {
  //BOO Token
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(` BOO deployed to ${booToken.address}`);

  //Life Token
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(` LIFE deployed to ${lifeToken.address}`);

  //Single Swap Token
  const SingleSwapToken = await hre.ethers.getContractFactory(
    "SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(` SingleSwapToken deployed to ${singleSwapToken.address}`);

  //MultiHop Token
  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(` SwapMultiHop deployed to ${swapMultiHop.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
