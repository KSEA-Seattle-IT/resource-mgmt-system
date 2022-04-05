const express = require('express');
const { getFileStream } = require('./s3');
const app = express();
const path = require('path');
const router = express.Router();
const HOST = '127.0.0.1';
const PORT = 8080;

//router.get('/', (req, res) => {

  //});    

  app.get('/images/:key', (res, req) => {
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key)
  
    readStream.pipe(res)
  })
  

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/events', function(req, res){
  res.sendFile(path.join(__dirname + '/events.html'));
});

app.use('/', router);

// router.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// })

app.listen(PORT, () => {
  console.log(`Web Server running at http://${HOST}:${PORT}/`);
});