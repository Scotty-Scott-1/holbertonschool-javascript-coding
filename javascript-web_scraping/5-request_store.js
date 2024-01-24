#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const fs = require('fs');
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const content = body;

  fs.writeFile(filePath, content, 'utf8', (error) => {
    if (error) {
      console.error(error);
    }
  });
});
