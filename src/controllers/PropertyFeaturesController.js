const PropertyFeaturesService = require('../services/PropertyFeaturesService');

const Add = (req, res, db) => {
  const data = req.body;

  PropertyFeaturesService.Add(data, db)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

module.exports = {
  Add,
};
