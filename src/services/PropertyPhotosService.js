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
    .catch((err) => Promise.reject(new Error(err)));
};

const Update = (req, db) => {
  const { id } = req.params;

  return db('property_photos')
    .where({ id })
    .update({
      ...req.body,
    })
    .then((data) => {
      if (data === 1) {
        return 'Property updated';
      } return Promise.reject(new Error('Property not found'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

const Remove = (req, db) => {
  const { id } = req.params;

  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  return db('property_photos')
    .where({ id })
    .del()
    .then((data) => {
      if (data === 1) {
        return 'Property deleted';
      } return Promise.reject(Error('Id inexistent'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property_photos').where({ id })
    .then((item) => {
      if (item.length) {
        return item[0];
      }
      return Promise.reject(new Error('Property not found'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

module.exports = {
  signS3,
  Add,
  Get,
  Remove,
  Update,
};
