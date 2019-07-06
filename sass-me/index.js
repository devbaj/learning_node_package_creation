const fs = require('fs');

function buildTree(startPath) {
  fs.readdir(startPath, (err, entries) => {
    console.log(entries);
    entries.forEach(file => {
      const path = `${startPath}/${file}`;
      if (fs.lstatSync(path).isDirectory()) {
        buildTree(path);
      }
    });
  });
}

buildTree('/home/baj');