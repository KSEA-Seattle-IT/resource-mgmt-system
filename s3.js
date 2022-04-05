require('dotenv').config()
//aws-sdk library will used to view image from s3 bucket
const S3 = require('aws-sdk/clients/s3');

//load aws credentials from .env file
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

//query a file from S3
function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream