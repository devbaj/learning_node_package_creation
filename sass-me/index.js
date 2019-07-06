const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const sassImports = `
  @import 'abstracts/_functions';
  @import 'abstracts/_mixins';
  @import 'abstracts/_variables';

  @import 'base/_animations';
  @import 'base/_base';
  @import 'base/_typography';
  @import 'base/_utilities';

  @import 'layouts/_footer';
  @import 'layouts/_header';
  @import 'layouts_navigation';

  @import 'pages/_home';
  `

function createFileStructure() {
  console.log("Creating SASS file structure");
  fs.mkdirSync("./sass-project", err => {
    if (err) { throw err; }
  });
  fs.mkdirSync("./sass-project/abstracts", {recursive: true}, err => {
    if (err) { throw err; }
  });
  fs.mkdirSync("./sass-project/base", {recursive: true}, err => {
    if (err) { throw err; }
  });
  fs.mkdirSync("./sass-project/layouts", {recursive: true}, err => {
    if (err) { throw err; }
  });
  fs.mkdirSync("./sass-project/pages", {recursive: true}, err => {
    if (err) { throw err; }
  });
}

createFileStructure();

process.exit();