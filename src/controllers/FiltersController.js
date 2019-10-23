const FiltersService = require('../services/FiltersService');

const FilterCode = (obj, id) => FiltersService.FilterCode(obj, id)
  .then((item) => item)
  .catch((err) => Promise.reject(Error(err)));

module.exports = {
  FilterCode,
};
