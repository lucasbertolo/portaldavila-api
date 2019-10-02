const Add = (req, res, db) => {
  const data = req.body;

  db('property_features')
    .insert({
      ...data.state,
    })
    .then(() => res.status(200).json('Features registered'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
};

module.exports = {
  Add,
};
