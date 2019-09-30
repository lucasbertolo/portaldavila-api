
const List = (req, res, db) => {
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
  List,
};
