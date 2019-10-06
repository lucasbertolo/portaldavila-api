const PropertyFeatures = require('../model/PropertyFeatures');

const Add = (data, db) => {
  const features = new PropertyFeatures(data);
  return db('property_features')
    .insert({
      ...features,
    })
    .then(() => 'Features registered')
    .catch((err) => Promise.reject(Error(err)));
};

module.exports = {
  Add,
};
