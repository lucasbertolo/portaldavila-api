const PropertyDetailsService = require('../services/PropertyDetailsService');

const Add = (req, res, db) => {
  const data = req.body;

  PropertyDetailsService.Add(data, db)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};

const Update = (req, res, db) => {
  PropertyDetailsService.Update(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Remove = (req, res, db) => {
  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  PropertyDetailsService.Remove(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Get = (req, res, db) => {
  PropertyDetailsService.Get(req, db)
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
  Update,
  Remove,
  Get,
};
