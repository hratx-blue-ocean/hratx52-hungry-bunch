const AWS = require('aws-sdk');

const ID = 'AKIAIZ2RR4N3VM44OJ2A';
const SECRET = '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';
const BUCKET_NAME = 'hratx52-hungry-bunch';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: 'us-east-2'
  }
};

s3.createBucket(params, function(err, data) {
  if (err) { console.log(err, err.stack); } else { console.log('Bucket Created Successfully', data.Location); }
});