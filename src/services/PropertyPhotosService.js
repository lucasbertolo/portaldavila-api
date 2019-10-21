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

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        reject(Error({ success: false, error: err }));
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };

      resolve({ success: true, data: { returnData } });
    });
  });
};

const Add = (data, db, id) => {
  const list = data.map((x) => {
    const item = { ...x };
    item.property_id = id;
    return item;
  });

  const photos = [];
  if (Array.isArray(list) && list.length) {
    // eslint-disable-next-line array-callback-return
    list.map((item) => {
      photos.push(new PropertyPhotos(item));
    });
  }

  return new Promise((resolve, reject) => {
    db('property_photos')
      .insert(photos)
      .then()
      .catch((err) => reject(Error(err)));

    resolve('success');
  });
};

const Update = (req, data, db) => {
  // eslint-disable-next-line camelcase
  const property_id = req.params.id;

  // eslint-disable-next-line array-callback-return
  data.map((item) => {
    const { id } = item;
    const newphotos = [];
    const photo = new PropertyPhotos(item);
    if (id !== undefined) {
      db('property_photos')
        .where({ id })
        .update({
          ...photo,
        })
        .then()
        .catch((err) => Promise.reject(new Error(err)));
    } else {
      newphotos.push(item);
      Add(newphotos, db, property_id);
    }
  });

  return Promise.resolve();
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

  // eslint-disable-next-line camelcase
  const property_id = id;

  return db.select(['url', 'alt', 'id', 'isCover']).from('property_photos').where({ property_id })
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
  Update,
};
