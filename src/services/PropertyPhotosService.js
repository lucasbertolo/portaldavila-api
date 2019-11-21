const aws = require('aws-sdk');
const PropertyPhotos = require('../model/PropertyPhotos');
const config = require('../config');

require('dotenv').config();

aws.config.update({
  region: 'sa-east-1',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const S3_BUCKET = process.env.bucket;

const signS3 = (req) => {
  const s3 = new aws.S3();

  const { fileName, fileType } = req.body;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read',
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        return reject(Error({ success: false, error: err }));
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      return resolve({ success: true, data: { returnData } });
    });
  });
};

const Add = (db, data, id) => {
  const {
    url, alt, iscover, cdn,
  } = data;

  return db('property_photos')
    .insert({
      property_id: id,
      url,
      cdn,
      alt,
      iscover,
    })
    .then(() => Promise.resolve())
    .catch((err) => Promise.reject(err));
};

const Update = (db, data, id) => {
  const photo = new PropertyPhotos(data);
  return db('property_photos')
    .where({ id })
    .update({
      ...photo,
    })
    .then(() => Promise.resolve())
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
      }
      return Promise.reject(Error('Id inexistent'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};


const RemoveByProperty = (db, property_id) => db('property_photos')
  .where({ property_id })
  .del()
  .then(() => Promise.resolve())
  .catch((err) => Promise.reject(new Error(err)));

const Get = (req, db) => {
  const { id } = req.params;

  // eslint-disable-next-line camelcase
  const property_id = id;

  return db
    .select(['url', 'alt', 'id', 'iscover', 'cdn'])
    .from('property_photos')
    .where({ property_id })
    .then((item) => {
      if (item) {
        return item;
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
  RemoveByProperty,
  Update,
};
