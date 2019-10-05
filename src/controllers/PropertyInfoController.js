/* eslint-disable no-console */
/* eslint-disable camelcase */

const PropertyInfoService = require('../services/PropertyInfoService');

// Retorno de todos os imoveis registrados
// Formar array imoveis com:
// Preço
// Bairro
// Tipo
// Proposito
// Fotos - Chamar PhotoController
// Tratamento erro caso array vazio
// Retornar json com array
const GetAll = (req, res, db) => {
  db.select('*').from('property')
    .then((prop) => {
      if (prop.length) {
        res.json(prop);
      } else {
        res.status(400).json('Property not found');
      }
    })
    .catch(() => res.status(400).json('No available houses'));
};


const Get = (req, res, db) => {
  PropertyInfoService.Get(req, db)
    .then((resp) => res.json(resp))
    .catch((err) => res.status(400).json(`Error getting Property - ${err}`));
};

const Add = (req, res, db) => {
  // Alterar dps para o metodo receber certo o valor
  const data = req.body.data.info;

  PropertyInfoService.Add(db, data)
    .then(() => res.status(200).json('New property registered'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
};


const Update = (req, res, db) => {
  PropertyInfoService.Update(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};


const Remove = (req, res, db) => {
  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  PropertyInfoService.Remove(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};

const GetDetails = (req, res, db) => {
  const { id } = req.params;

  db.select('*').from('property')
    .leftJoin('property_details', 'property.id', 'property_details.property_id')
    .leftJoin('property_features', 'property.id', 'property_features.property_id')
    .where({ id })
    .then((data) => {
      if (data.length) {
        res.json(data[0]);
      } else {
        res.status(400).json('Property not found');
      }
    })
    .catch((err) => {
      res.status(400).json(`Error - ${err}`);
    });
};

const AddProperty = (req, res, db) => {
  const {
    neighborhood_id,
    position,
    price,
    purpose_id,
    type_id,
    area,
    building_area,
  } = req.body.data.info;

  const { creator_id } = req.body;

  // console.log(creator_id);

  db('property').insert({
    neighborhood_id,
    position,
    price,
    area,
    building_area,
    purpose_id,
    type_id,
    creator_id,
  }).then((resp) => {
    const id = resp[0];

    return db('property_details').insert({
      ...req.body.data.details,
      property_id: id,
    }).then(() => {
      db('property_features').insert({
        ...req.body.data.features,
        property_id: id,
      })
        .then()
        .catch((err) => console.log(err));
    })
      .then()
      .catch((err) => console.log(err));
  })
    .then(() => {
      res.status(200).json('Property registerd');
    })
    .catch((err) => {
      res.status(400).json(`Error while registering - ${err}`);
    });
};


module.exports = {
  Get,
  Add,
  Update,
  Remove,
  GetAll,
  GetDetails,
  AddProperty,
};
