const List = (req, res, db) => {
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

module.exports = {
  List,
};
