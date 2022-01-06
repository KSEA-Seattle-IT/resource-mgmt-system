//aws-sdk library will used to view image from s3 bucket
const AWS = require('aws-sdk')
//Load HTTP module
const http = require("http");
const HOST = '127.0.0.1';
const PORT = 8080;
require("dotenv").config();

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


const s3 = new AWS.S3 ({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})

// view the photo albums that exist in the bucket.
function viewImages() {

}