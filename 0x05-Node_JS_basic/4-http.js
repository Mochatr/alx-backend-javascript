const http = require('http');

const portNumber = 1245;
const hostname = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(portNumber, hostname, () => {
  console.log(`Server running at http://${hostname}:${portNumber}/`);
});

module.exports = app;
