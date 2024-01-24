#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const myArray = [];
    const stats = JSON.parse(body);
    for (const task of stats) {
      if (task.completed === true) {
        myArray.push(task);
      }
    }
    const myDict = {};
    let j = 0;
    for (let i = 1; i <= 10; i++) {
      j = 0;
      for (const task of myArray) {
        if (task.userId === i) {
          j++;
          myDict[i] = j;
        }
      }
    }
    console.log(myDict);
  }
});
