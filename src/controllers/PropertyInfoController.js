/* eslint-disable camelcase */

const PropertyInfoService = require('../services/PropertyInfoService');

const Get = (req, res, db) => {
  PropertyInfoService.Get(req, db)
    .then((resp) => {
      if (resp.length > 0) {
        res.json(resp);
      } else {
        res.status(404).json('Property not found');
      }
    })
    .catch((err) => res.status(400).json(`${err}`));
};

const Add = (req, res, db) => {
  // Alterar dps para o metodo receber certo o valor
  const data = req.body.data.info;

  PropertyInfoService.Add(db, data)
    .then(() => res.status(200).json('New property registered'))
    .catch((err) => res.status(400).json(`${err}`));
};


const Update = (req, res, db) => {
  PropertyInfoService.Update(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};


const Remove = (req, res, db) => {
  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  PropertyInfoService.Remove(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};


module.exports = {
  Get,
  Add,
  Update,
  Remove,
};
