const AWS = require('aws-sdk');
const {S3_ID, S3_SECRET, S3_BUCKET_NAME} = require('./bucketConfig');

const s3 = new AWS.S3({
  accessKeyId: S3_ID,
  secretAccessKey: S3_SECRET,
});

const params = {
  Bucket: S3_BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: 'us-east-2'
  }
};

s3.createBucket(params, function(err, data) {
  if (err) { console.log(err, err.stack); } else { console.log('Bucket Created Successfully', data.Location); }
});