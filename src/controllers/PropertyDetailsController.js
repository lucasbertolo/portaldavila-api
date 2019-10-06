const PropertyDetailsService = require('../services/PropertyDetailsService');

const Add = (req, res, db) => {
  const data = req.body;

  PropertyDetailsService.Add(data, db)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};

module.exports = {
  Add,
};
