const PropertyFeaturesService = require('../services/PropertyFeaturesService');

const Add = (req, res, db) => {
  const data = req.body;

  PropertyFeaturesService.Add(data, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Update = (req, res, db) => {
  PropertyFeaturesService.Update(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Remove = (req, res, db) => {
  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  PropertyFeaturesService.Remove(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Get = (req, res, db) => {
  PropertyFeaturesService.Get(req, db)
    .then((resp) => {
      if (resp) {
        res.json(resp);
      } else {
        res.status(404).json('Property not found');
      }
    })
    .catch((err) => res.status(400).json(`${err}`));
};

module.exports = {
  Add,
  Get,
  Update,
  Remove,
};
