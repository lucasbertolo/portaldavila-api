const PropertyDetails = require('../model/PropertyDetails');

const Add = (data, db) => {
  const details = new PropertyDetails(data);

  return db('property_details')
    .insert({
      ...details,
    })
    .then(() => 'Details registered')
    .catch((err) => Promise.reject(Error(err)));
};

module.exports = {
  Add,
};
