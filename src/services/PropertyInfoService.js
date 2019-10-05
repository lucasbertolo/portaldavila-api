const PropertyInfo = require('../model/PropertyInfo');

const Add = (db, data) => {
  const info = new PropertyInfo(data);

  return db('property')
    .insert({
      ...info,
    })
    .then((res) => res)
    .catch((err) => {
      Promise.reject(new Error(`Error - ${err}`));
    });
};

module.exports = {
  Add,
};
