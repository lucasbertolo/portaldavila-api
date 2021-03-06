const PropertyPhotosService = require('../services/PropertyPhotosService');
const PropertyService = require('../services/PropertyService');

const Get = (req, res, db) => {
  PropertyService.Get(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const GetDescription = (req, res, db) => {
  PropertyService.Get(req, db)
    .then((item) => {
      if (item) {
        const property = item;
        return PropertyPhotosService.Get(req, db)
          .then((resp) => {
            const images = resp.map((x) => JSON.stringify(x));

            res.send({ property, images });
          })
          .catch((err) => res.status(400).json(`${err}`));
      }
      res.status(200).json(item);
    })
    .catch((err) => res.status(400).json(`${err}`));
};

const GetAll = (req, res, db) => {
  PropertyService.GetAll(req, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Add = (req, res, db) => {
  const dataInfo = req.body.data.info;
  const info = { ...dataInfo };
  info.creator_id = req.body.creator_id;

  const dataDetails = req.body.data.details;
  const dataFeatures = req.body.data.features;
  const dataPhotos = req.body.data.images;

  PropertyService.Add(info, dataDetails, dataFeatures, dataPhotos, db)
    .then((item) => {
      if (item) { res.status(200).json('Success'); }
    })
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

const Remove = (req, res, db) => {
  const { id } = req.params;
  PropertyService.Remove(db, id)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};

const GetFavorites = (req, res, db) => {
  const { id } = req.params;
  PropertyService.GetFavorites(db, id)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

module.exports = {
  Get,
  Add,
  Update,
  GetAll,
  Remove,
  GetDescription,
  GetFavorites,
};
