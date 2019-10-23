const FilterCode = (obj, id) => {
  const res = obj.filter((item) => (
    item.id === id
  ));

  return res;
};

const FilterPrice = (obj, maxPrice) => {
  const res = obj.filter((item) => (
    item.price <= maxPrice
  ));

  return res;
};

const FilterNeighborhood = (obj, neighId) => {
  const res = obj.filter((item) => (
    item.neighborhood_id === neighId
  ));

  return res;
};


module.exports = {
  FilterCode,
  FilterPrice,
  FilterNeighborhood,
};
