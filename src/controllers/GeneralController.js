// General methods

const listNeighborhood = (req, res, db) => {
  db.select('*').from('neighborhood')
    .then((prop) => {
      if (prop.length) {
        res.json(prop);
      } else {
        res.status(400).json('No neighborhood found');
      }
    })
    .catch(() => res.status(400).json('No available neighborhood'));
};

const listTypeProperty = (req, res, db) => {
  db.select('type').from('property_type')
    .then((prop) => {
      if (prop.length) {
        res.json(prop);
      } else {
        res.status(400).json('No type found');
      }
    })
    .catch(() => res.status(400).json('No available types'));
};

module.exports = {
  listNeighborhood,
  listTypeProperty,
};
