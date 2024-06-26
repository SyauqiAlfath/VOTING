async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["Muhammad Ridho Maulana - Nuria Zulfa", "Ahmad Fakhri Ali - Norsyifa Aulia Wahidah", "Maulana Kholid - Gabriella Bertha Ayusanti"], 10);
  // const Voting_ = await Voting.deploy(["H. Muhidin - Hasnuryadi", "Raudhatul Jannah - Rozanie", "Zairullah Azhar - Ibnu Sina"], 10);
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });