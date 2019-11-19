/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
const PropertyDetailsService = require('./PropertyDetailsService');
const PropertyInfoService = require('./PropertyInfoService');
const PropertyFeaturesService = require('./PropertyFeaturesService');
const PropertyPhotosService = require('./PropertyPhotosService');


const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property')
    .leftJoin('property_details', 'property.id', 'property_details.property_id')
    .leftJoin('property_features', 'property.id', 'property_features.property_id')
    .where({ id })
    .then((data) => data[0])
    .catch((err) => Promise.reject(Error(err)));
};

const GetAll = (req, db) => db.select('*').from('property')
  .join('property_details', 'property.id', 'property_details.property_id')
  .join('property_photos', 'property.id', 'property_photos.property_id')
  .where('property_photos.iscover', '=', true)
  .then((data) => data)
  .catch((err) => Promise.reject(Error(err)));


const Add = (dataInfo, dataDetails, dataFeatures, dataPhotos, db) => {
  let id;
  const messages = [];

  return new Promise((resolve, reject) => {
    PropertyInfoService.Add(dataInfo, db)
      .then((item) => {
        id = item[0].id;
      })
      .catch((err) => messages.push(err))

      .then(() => PropertyDetailsService.Add(dataDetails, db, id))
      .catch((err) => messages.push(err))

      .then(() => PropertyFeaturesService.Add(dataFeatures, db, id))
      .catch((err) => messages.push(err))

      .then(() => {
        if (dataPhotos.length > 0) {
          dataPhotos.map((x) => PropertyPhotosService.Add(db, x, id));
        }
      })
      .then(() => Promise.resolve())
      .catch((err) => {
        messages.push(err);
      })

      .then(() => {
        if (messages.length > 0) {
          return reject(Error(messages));
        }
        return resolve('success');
      });
  });
};

const Update = (dataInfo, dataDetails, dataFeatures, dataPhotos, db, req) => {
  try {
    const { id } = req.params;
    if (dataDetails !== undefined) {
      PropertyInfoService.Update(req, dataInfo, db)
        .then()
        .catch((err) => Promise.reject(Error(err)));
    }

    if (dataDetails !== undefined) {
      PropertyDetailsService.Update(req, dataDetails, db)
        .then()
        .catch((err) => Promise.reject(Error(err)));
    }

    if (dataFeatures !== undefined) {
      PropertyFeaturesService.Update(req, dataFeatures, db)
        .then()
        .catch((err) => Promise.reject(Error(err)));
    }
    if (dataPhotos !== undefined) {
      if (dataPhotos.length > 1) {
        dataPhotos.map((item) => {
          if (item.id !== undefined) {
            return PropertyPhotosService.Update(db, item, item.id)
              .then(() => Promise.resolve())
              .catch((err) => Promise.reject(Error(err)));
          }
          return PropertyPhotosService.Add(db, item, id)
            .then(() => Promise.resolve())
            .catch((err) => Promise.reject(Error(err)));
        });
      }
    }
    return Promise.resolve();
  } catch (err) {
    Promise.reject(Error(err));
  }
};

const Remove = (req, res, db) => {
  // Checar por token ou validar autorizacao para apagar usuario
  // Delete no banco e tabelas relacionadas - CASCADE
  // Deletar fotos na AWS - AUTOMATIZAR
  PropertyInfoService.Remove(req, db)
    .then(() => Promise.resolve('Property deleted'))
    .catch((err) => Promise.reject(Error(err)));
};

module.exports = {
  Get,
  Add,
  Update,
  GetAll,
  Remove,
};
