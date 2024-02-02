function myFunction() {
  process.stdin.setEncoding('utf8');

  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
    process.exit();
  });

  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

module.exports = myFunction;

if (require.main === module) {
  myFunction();
}
