const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("pshhh");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

	let txn = await domainContract.register("holymoley", { value: hre.ethers.utils.parseEther('0.1') });
	await txn.wait();
  console.log("Minted domain holymoley.pshhh");

  txn = await domainContract.setRecord("holymoley", "Are you holymoley??");
  await txn.wait();
  console.log("Set record for holymoley.pshhh");

  const address = await domainContract.getAddress("holymoley");
  console.log("Owner of domain holymoley:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
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