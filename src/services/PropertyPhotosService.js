const aws = require('aws-sdk');
const PropertyPhotos = require('../model/PropertyPhotos');

require('dotenv').config();

aws.config.update({
  region: 'sa-east-1',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const S3_BUCKET = process.env.bucket;

const signS3 = (req) => {
  const s3 = new aws.S3();
  const { fileName } = req.body;
  const { fileType } = req.body;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      return ({ success: false, error: err });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return ({ success: true, data: { returnData } });
  });
};

const Add = (data, db) => {
  const photos = new PropertyPhotos(data);

  return db('property_photos')
    .insert({
      ...photos,
    })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      Promise.reject(new Error(err));
    });
};

module.exports = {
  signS3,
  Add,
};
