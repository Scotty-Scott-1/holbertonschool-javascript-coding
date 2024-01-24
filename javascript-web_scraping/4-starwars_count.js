#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const episodeInfo = JSON.parse(body).results;
    let myArray = [];
    for (const film of episodeInfo) {
      const wedge = film.characters.filter(element => element.includes(18));
      myArray = myArray.concat(wedge);
    }
    console.log(myArray.length);
  }
});
