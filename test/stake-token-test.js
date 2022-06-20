// test/StakeToken.test.js

const { ethers, upgrades } = require("hardhat");

describe("StakeToken", function () {
  it("deploys", async function () {
    const StakeTokenV1 = await ethers.getContractFactory("StakeToken");
    await upgrades.deployProxy(StakeTokenV1, { kind: "uups" });
  });
});
