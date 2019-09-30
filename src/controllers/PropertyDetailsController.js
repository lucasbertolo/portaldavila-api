const Add = (req, res, db) => {
  const data = req.body;

  db('property_details')
    .insert({
      ...data.state,
    })
    .then(() => res.status(200).json('Details registered'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
};

module.exports = {
  Add,
};
