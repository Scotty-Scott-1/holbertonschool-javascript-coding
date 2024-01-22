#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const text = process.argv[3];

fs.writeFile(filePath, text, 'utf8', (error) => {
  if (error) {
    console.log(error);
  }
});
