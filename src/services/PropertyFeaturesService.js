/* eslint-disable camelcase */
const PropertyFeatures = require('../model/PropertyFeatures');

const Add = (data, db, id) => {
  const features = new PropertyFeatures(data, id);
  return new Promise((resolve, reject) => {
    db('property_features')
      .insert({
        ...features,
      })
      .then(() => resolve('Features registered'))
      .catch((err) => reject(Error(err)));
  });
};

const Update = (req, data, db) => {
  const { id } = req.params;
  const property_id = id;

  const features = new PropertyFeatures(data);
  features.property_id = property_id;

  return new Promise((resolve, reject) => {
    db('property_features')
      .where({ property_id })
      .update({
        ...features,
      })
      .then(() => resolve('success'))
      .catch((err) => reject(Error(err)));
  });
};

const Remove = (db, property_id) => db('property_features')
  .where({ property_id })
  .del()
  .then(() => Promise.resolve())
  .catch((err) => Promise.reject(new Error(err)));

const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property_features').where({ id })
    .then((item) => {
      if (item.length) {
        return item[0];
      }
      return Promise.reject(new Error('Property not found'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

module.exports = {
  Add,
  Get,
  Remove,
  Update,
};
