const PropertyInfo = require('../model/PropertyInfo');

const Add = (data, db) => {
  const info = new PropertyInfo(data);
  return new Promise((resolve, reject) => {
    db('property')
      .insert({
        ...info,
      })
      .returning(['id'])
      .then((res) => resolve(res))
      .catch((err) => reject(Error(err)));
  });
};

const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property').where({ id })
    .then((usr) => {
      if (usr.length) {
        return usr[0];
      }
      return Promise.reject(new Error('Property not found'));
    })
    .catch((err) => Promise.reject(new Error(err)));
};

const Update = (req, data, db) => {
  const { id } = req.params;

  const info = new PropertyInfo(data);
  return db('property')
    .where({ id })
    .update({
      ...info,
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
  return db('property')
    .where({ id })
    .del()
    .then((data) => {
      if (data === 1) {
        return 'Property deleted';
      } return Promise.reject(Error('Id inexistent'));
    })
    .catch((err) => Promise.reject(Error(err)));
};

const setVisibility = (db, id, status) => db('property')
  .where({ id })
  .update({
    isvisible: status,
  })
  .then(() => Promise.resolve('Visibility updated'))
  .catch((err) => Promise.reject(Error(err)));

module.exports = {
  Add,
  Get,
  Update,
  Remove,
  setVisibility,
};
