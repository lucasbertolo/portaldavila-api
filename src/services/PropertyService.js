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

const Add = (dataInfo, dataDetails, dataFeatures, dataPhotos, db) => {
  try {
    return PropertyInfoService.Add(db, dataInfo)
      .then((item) => {
        const id = item[0];

        dataDetails.property_id = id;
        dataFeatures.property_id = id;
        dataPhotos.property_id = id;

        PropertyDetailsService.Add(dataDetails, db)
          .then()
          .catch((err) => Promise.reject(Error(err)));
        PropertyFeaturesService.Add(dataFeatures, db)
          .then()
          .catch((err) => Promise.reject(Error(err)));
        PropertyPhotosService.Add(dataPhotos, db)
          .then()
          .catch((err) => Promise.reject(Error(err)));
      })
      .catch((err) => Promise.reject(Error(err)));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

module.exports = {
  Get,
  Add,
};
