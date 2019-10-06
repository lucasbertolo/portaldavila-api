/* eslint-disable camelcase */

const PropertyService = require('../services/PropertyService');

const Get = (req, res, db) => {
  PropertyService.Get(req, db)
    .then((item) => {
      if (item.length > 0) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Not found');
      }
    })
    .catch((err) => res.status(400).json(`${err}`));
};

// const Add = (req, res, db) => {

// };

// const AddProperty = (req, res, db) => {
//   const {
//     neighborhood_id,
//     position,
//     price,
//     purpose_id,
//     type_id,
//     area,
//     building_area,
//   } = req.body.data.info;

//   const { creator_id } = req.body;

//   // console.log(creator_id);

//   db('property').insert({
//     neighborhood_id,
//     position,
//     price,
//     area,
//     building_area,
//     purpose_id,
//     type_id,
//     creator_id,
//   }).then((resp) => {
//     const id = resp[0];

//     return db('property_details').insert({
//       ...req.body.data.details,
//       property_id: id,
//     }).then(() => {
//       db('property_features').insert({
//         ...req.body.data.features,
//         property_id: id,
//       })
//         .then()
//         .catch((err) => console.log(err));
//     })
//       .then()
//       .catch((err) => console.log(err));
//   })
//     .then(() => {
//       res.status(200).json('Property registerd');
//     })
//     .catch((err) => {
//       res.status(400).json(`Error while registering - ${err}`);
//     });
// };

module.exports = {
  Get,
//   AddProperty,
};
