var fs = require('fs')
var readDir = fs.readdirSync("loading_screens");
fs.writeFile('readDir.txt', JSON.stringify(readDir), err => {
  if (err) {
    console.error(err);
  }
});