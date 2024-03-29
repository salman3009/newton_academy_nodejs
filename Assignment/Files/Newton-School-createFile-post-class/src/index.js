const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  try {
    // Check if file already exists
    await fs.access(fileName);
    console.log(`${fileName} already exists. Skipping write operation.`);
  } catch (err) {
    // File does not exist, so write to it
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created and data written successfully!`);
  }
};
writeFile(fileName, fileContent);
module.exports =  writeFile ;
