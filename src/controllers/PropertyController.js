/* eslint-disable camelcase */

const PropertyService = require('../services/PropertyService');

const Get = (req, res, db) => {
  PropertyService.Get(req, db)
    .then((item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Not found');
      }
    })
    .catch((err) => res.status(400).json(`${err}`));
};


const Add = (req, res, db) => {
  const dataInfo = req.body.data.info;
  const dataDetails = req.body.data.details;
  const dataFeatures = req.body.data.features;
  const dataPhotos = req.body.data.images;

  PropertyService.Add(dataInfo, dataDetails, dataFeatures, dataPhotos, db)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};

const Update = (req, res, db) => {
  const dataInfo = req.body.data.info;
  const dataDetails = req.body.data.details;
  const dataFeatures = req.body.data.features;
  const dataPhotos = req.body.data.images;

  PropertyService.Update(dataInfo, dataDetails, dataFeatures, dataPhotos, db, req)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};
module.exports = {
  Get,
  Add,
  Update,
};
