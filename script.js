//import nodejs fs module for file system operations
const fs = require('fs');

//function to get result
function generateArray() {
  const resultArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push('BIGBANG');
    } else if (i % 3 === 0) {
      resultArray.push('BIG');
    } else if (i % 5 === 0) {
      resultArray.push('BANG');
    } else {
      resultArray.push(String(i));
    }
  }
  return resultArray;
}

// Generate the array
const generatedArray = generateArray();

// Convert the array to JSON format
const jsonData = JSON.stringify(generatedArray);

// Write JSON data to a file
fs.writeFile('output.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
    return;
  }
  console.log('JSON file has been saved.');
});
