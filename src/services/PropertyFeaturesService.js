const PropertyFeatures = require('../model/PropertyFeatures');

const Add = (data, db) => {
  const features = new PropertyFeatures(data);
  return db('property_features')
    .insert({
      ...features,
    })
    .then(() => 'Features registered')
    .catch((err) => Promise.reject(Error(err)));
};

const Update = (req, db) => {
  const { id } = req.params;

  return db('property_features')
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
  return db('property_features')
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
