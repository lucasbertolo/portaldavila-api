/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
const PropertyDetailsService = require('./PropertyDetailsService');
const PropertyInfoService = require('./PropertyInfoService');
const PropertyFeaturesService = require('./PropertyFeaturesService');
const PropertyPhotosService = require('./PropertyPhotosService');
const FavoriteService = require('./FavoriteService');
const VisitService = require('./VisitService');

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


const GetFavorites = (db, user_id) => db.select('*').from('property')
  .join('property_details', 'property.id', 'property_details.property_id')
  .join('property_photos', 'property.id', 'property_photos.property_id')
  .join('favorites', 'favorites.property_id', 'property.id')
  .join('user', 'user.id', 'favorites.user_id')
  .where('property_photos.iscover', '=', true)
  .andWhere('favorites.user_id', '=', user_id)
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

const Remove = (db, id) => {
  const messages = [];
  return new Promise((resolve, reject) => {
    VisitService.Remove(db, id)
      .then()
      .catch((err) => messages.push(err))
      .then(() => FavoriteService.Remove(db, id))
      .catch((err) => messages.push(err))
      .then(() => PropertyPhotosService.RemoveByProperty(db, id))
      .catch((err) => messages.push(err))
      .then(() => PropertyFeaturesService.Remove(db, id))
      .catch((err) => messages.push(err))
      .then(() => PropertyDetailsService.Remove(db, id))
      .catch((err) => messages.push(err))
      .then(() => PropertyInfoService.Remove(db, id))
      .catch((err) => messages.push(err))
      .then(() => {
        if (messages.length > 0) {
          console.log(messages);
          return reject(Error(messages));
        }
        return resolve('success');
      })
      .catch();
  });
};

module.exports = {
  Get,
  Add,
  Update,
  GetAll,
  Remove,
  GetFavorites,
};
