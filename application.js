//AWS sdk
const AWS = require('aws-sdk')


//Load HTTP module
const http = require("http");
const HOST = '127.0.0.1';
const PORT = 8080;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('KSEAIT - Resource Managment\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
