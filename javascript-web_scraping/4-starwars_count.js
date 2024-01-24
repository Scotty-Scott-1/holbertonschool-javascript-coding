#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  let i = 0;
  if (error) {
    console.log('code:', response.error);
  } else {
    const episodeInfo = JSON.parse(body).results;
    const wedge = 'https://swapi-api.hbtn.io/api/people/18/';
    for (const film of episodeInfo) {
      for (const character of film.characters) {
        if (character === wedge) {
          i++;
        }
      }
    }
  }
  console.log(i);
});
