const fs = require('fs').promises;

async function countStudents(db) {
  try {
    const data = await fs.readFile(db, 'utf8');
    const lines = data.split('\n');
    lines.splice(0, 1);
    lines.splice(10, 1);
    const noStudents = lines.length;
    console.log(`Number of students: ${noStudents}`);
    const line1 = `Number of students: ${noStudents}`;
    const keys = ['firstName', 'lastName', 'age', 'class'];
    let myArray = [];
    const result1 = [];
    const result2 = [];

    myArray = lines.map((item) => {
      const values = item.split(',');
      const myDict = {};
      for (let i = 0; i < values.length; i += 1) {
        myDict[keys[i]] = values[i];
      }
      return myDict;
    });

    for (const ob of myArray) {
      if (ob.class === 'CS') {
        result1.push(ob);
      }
    }

    const resultStr = result1.map((ob) => ob.firstName);
    const resultStr1 = resultStr.join(', ');
    console.log(`Number of students in CS: ${result1.length}. List: ${resultStr1}`);
    const line2 = `Number of students in CS: ${result1.length}. List: ${resultStr1}`;

    for (const ob of myArray) {
      if (ob.class === 'SWE') {
        result2.push(ob);
      }
    }

    const resultStr2 = result2.map((ob) => ob.firstName);
    const resultStr3 = resultStr2.join(', ');
    console.log(`Number of students in SWE: ${result2.length}. List: ${resultStr3}`);
    const line3 = `Number of students in SWE: ${result2.length}. List: ${resultStr3}`;

    const resultOb = {
      result: `This is the list of our students\n${line1}\n${line2}\n${line3}`,
    };
    return resultOb;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const express = require('express');

const app = express();
const port = 1245;
const db = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const resultOb = await countStudents(db);
    res.type('text/plain');
    res.send(resultOb.result);
  } catch (error) {
    console.error('Error:', error.message);
    res.type('text/plain');
    res.send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on at http://localhost:${port}`);
});

module.exports = app;
