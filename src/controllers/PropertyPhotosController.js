const PropertyPhotosService = require('../services/PropertyPhotosService');

const signS3 = (req, res) => {
  PropertyPhotosService.signS3(req, res)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json(`${err}`));
};

const Add = (req, res, db) => {
  const data = req.body;
  PropertyPhotosService.Add(data, db)
    .then(() => res.status(200).json('Success'))
    .catch((err) => res.status(400).json(`${err}`));
};

module.exports = {
  signS3,
  Add,
};
