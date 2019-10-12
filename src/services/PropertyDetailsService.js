/* eslint-disable camelcase */
const PropertyDetails = require('../model/PropertyDetails');

const Add = (data, db, id) => {
  const details = new PropertyDetails(data, id);

  return db('property_details')
    .insert({
      ...details,
    })
    .then(() => 'Details registered')
    .catch((err) => Promise.reject(Error(err)));
};

const Update = (req, data, db) => {
  const { id } = req.params;
  const property_id = id;

  const details = new PropertyDetails(data);
  details.property_id = property_id;

  return db('property_details')
    .where({ property_id })
    .update({
      ...details,
    })
    .then((item) => {
      if (item === 1) {
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
  return db('property_details')
    .where({ id })
    .del()
    .then((item) => {
      if (item === 1) {
        return 'Property deleted';
      } return Promise.reject(Error('Id inexistent'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property_details').where({ id })
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
  Update,
  Remove,
  Get,
};
