const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
  await fs.writeFile(fileName, fileContent);
  console.log('File updated successfully.');
};

updateFile(fileName, 'Newton School, is an online learning platform');

module.exports = updateFile;
