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

// Retorno de imovel por id
// Verificar se id existe
// Tratamento erro caso id nao exista
// Buscar informações complementares:
// Fotos
// Disponibilidade visita
// Tratamento caso fotos vazias
// Retorno Json com objeto com imovel
const Get = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('property').where({ id })
    .then((usr) => {
      if (usr.length) {
        res.json(usr[0]);
      } else {
        res.status(400).json('Property not found');
      }
    })
    .catch((err) => res.status(400).json(`Error getting Property - ${err}`));
};

// Retorno de imovel por filtros
// Verificar tipo de filtro
// Metodo especifico para cada filtro - Criar metodo externo
// Retornar json com array de imoveis

// Inserção de imovelc
// Verificação dos dados necessarios inseridos
// Tratamento caso falte dados
// Chamar photoController para inserir imagem em servidor externo
// Salvar id retornado na tabela de photos
const Add = (req, res, db) => {
  // const {
  //   neighborhood_id,
  //   position,
  //   price,
  //   purpose_id,
  //   type_id,
  //   creator_id,
  //   area,
  //   building_area,
  // } = req.body.data.info;

  const data = req.body.data.info;

  PropertyInfoService.Add(db, data)
    .then(() => res.status(200).json('New property registered'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
  // Creator ID - pegar sempre do usuario fazendo a atualizacao
  // Checar se ele é consultor
  // db('property')
  //   .insert({
  //     neighborhood_id,
  //     position,
  //     price,
  //     area,
  //     building_area,
  //     purpose_id,
  //     type_id,
  //     creator_id,
  //   })
  //   .then(() => res.status(200).json('New property registered'))
  //   .catch((err) => res.status(400).json(`Error - ${err}`));
};


// Atualização de imovel -> Controller Photos
// Tratamento erro caso id nao exista
// Merge dados e update entidade
const Update = (req, res, db) => {
  const { id } = req.params;

  db('property')
    .where({ id })
    .update({
      ...req.body,
    })
    .then((data) => {
      if (data === 1) {
        res.status(200).json('Property updated');
      } else res.status(400).json('Id inexistent');
    })
    .catch((err) => res.status(400).json(`erro - ${err}`));

  // Pegar id automatico do usuario que esta mexendo
};


// Delete Imovel -> Controller Photos
const Remove = (req, res, db) => {
  const { id } = req.params;

  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas
  // Deletar fotos na AWS
  db('property')
    .where({ id })
    .del()
    .then((data) => {
      if (data === 1) {
        res.status(200).json('Property deleted');
      } else res.status(400).json('Id inexistent');
    })
    .catch((err) => res.status(400).json(`Error - ${err}`));
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
        res.status(400).json('Propriedade inexistente');
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
