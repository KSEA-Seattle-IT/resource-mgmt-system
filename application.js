const express = require('express')
const app = express();
const HOST = '127.0.0.1';
const PORT = 8080;
//aws-sdk library will used to view image from s3 bucket
const aws = require('aws-sdk');
require('dotenv').config()

//load aws credentials from .env file
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION

app.get('/', (req, res) => {

  aws.config.update({
    accessKeyId,
    secretAccessKey,
    region,
  });

  const s3 = new aws.S3();

  async function viewImage() {
    const data = s3.getObject(
      {
        Bucket: bucketName,
        Key: 'event-2021/Slide2-1024x576.jpeg',
      }

    ).promise();
    return data;
  }

  viewImage()
    .then((img) => {
      let image = "<img src='data:image/jpeg;base64," + encode(img.Body) + "'" + "/>";
      let startHTML = "<html><body></body>";
      let endHTML = "</body></html>";
      let html = startHTML + image + endHTML;
      res.send(html)
    }).catch((e) => {
      res.send(e)
    })


  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64
  }
})

app.listen(PORT, () => {
  console.log(`Web Server running at http://${HOST}:${PORT}/`);
});