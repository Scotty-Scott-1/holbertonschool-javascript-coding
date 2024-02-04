const http = require('http');

function myFunction() {
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  });

  const port = 1245;

  module.exports = app;
  app.listen(port);
}

if (require.main === module) {
  myFunction();
}
