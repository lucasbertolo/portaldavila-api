const PropertyDetails = require('../model/PropertyDetails');

const Add = (data, db) => {
  const details = new PropertyDetails(data);

  return db('property_details')
    .insert({
      ...details,
    })
    .then(() => 'Details registered')
    .catch((err) => Promise.reject(Error(err)));
};

const Update = (req, data, db) => {
  const { id } = req.params;

  return db('property_details')
    .where({ id })
    .update({
      ...data,
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
