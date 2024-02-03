const fs = require('fs').promises;

async function countStudents(db) {
  try {
    const data = await fs.readFile(db, 'utf8');
    const lines = data.split('\n');

    lines.splice(0, 1);
    lines.splice(10, 1);

    const noStudents = lines.length;
    console.log(`Number of students: ${noStudents}`);

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

    for (const ob of myArray) {
      if (ob.class === 'SWE') {
        result2.push(ob);
      }
    }
    const resultStr2 = result2.map((ob) => ob.firstName);
    const resultStr3 = resultStr2.join(', ');
    console.log(`Number of students in SWE: ${result2.length}. List: ${resultStr3}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
