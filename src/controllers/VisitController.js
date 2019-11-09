
const VisitService = require('../services/VisitService');
const Visit = require('../model/Visit');

const Get = (req, res, db) => {
  const { id } = req.params;
  VisitService.Get(db, id)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'Visit not found' });
    })
    .catch(() => res.status(400).json('Internal Error'));
};


const Add = (req, res, db) => {
  const data = Visit(req.body);

  VisitService.Add(db)
    .then(() => res.status(200).json('Visit registered'))
    .catch(() => res.status(400).json('Internal error, contact the administrator'));
};


// const Update = (req, res, db) => {
//   const { id } = req.params;
//   const {
//     pass,
//     login,
//   } = req.body;

//   db('user')
//     .where({ id })
//     .update({
//       pass,
//       login,
//     })
//     .then((data) => {
//       if (data === 1) {
//         res.status(200).json('User updated');
//       } else res.status(400).json('Id inexistent');
//     })
//     .catch((err) => res.status(400).json(`erro - ${err}`));
// };

// const Remove = (req, res, db) => {
//   const { id } = req.params;

//   db('user')
//     .where({ id })
//     .del()
//     .then(() => res.status(200).json('User deleted'))
//     .catch((err) => res.status(400).json(`Error - ${err}`));
// };


module.exports = {
  Get,
  Update,
  Add,
  Remove,
};
