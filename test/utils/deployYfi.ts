import { ethers } from "hardhat";
import { IERC20 } from "typechain";

export const deployYfi = async () => {
  const TokenFactory = await ethers.getContractFactory("ERC20");
  return (await TokenFactory.deploy(18, "YFI")) as IERC20;
};
