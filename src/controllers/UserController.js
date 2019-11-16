const UserService = require('../services/UserService');
const User = require('../model/User');

const Get = (req, res, db) => {
  const { id } = req.params;

  UserService.Get(db, id)
    .then((item) => {
      if (item) {
        return res.json(item);
      }

      return res.status(404).json({ msg: 'User not found' });
    })
    .catch(() => res.status(400).json('Internal Error'));
};

const Add = (req, res, db) => {
  const data = new User(req.body);
  let isValid = true;
  UserService.GetAll(db)
    .then((usr) => {
      const hasEntry = usr.filter((x) => x.username === data.username);
      if (hasEntry.length > 0) {
        res.status(200).json({ msg: 'user already existent' });
        isValid = false;
      }
    })
    .then(() => {
      if (isValid) {
        UserService.Add(db, data)
          .then((item) => {
            res.status(200).json(item);
          })
          .catch(() => res.status(400).json('Internal error, contact the administrator'));
      }
    })
    .catch(() => res.status(400).json('Internal error, contact the administrator'));
};

const Update = (req, res, db) => {
  const { user_id } = req.body;
  const data = new User(req.body);

  UserService.Update(db, user_id, data)
    .then(() => res.status(200).json('Successful updated'))
    .catch(() => res.status(500).json('Error trying to update'));
};

const Remove = (req, res, db) => {
  const { id } = req.params;

  db('user')
    .where({ id })
    .del()
    .then(() => res.status(200).json('User deleted'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
};

// const setContactOption = (req,res,db) => {
//   const {user_id, contact_type} = req.body;

//   UserService.setContactOption(db, user_id, contact_type)
//     .then(() => res.status(200).json('Success'))
//     .catch(() => res.status(500).json('Error trying to update'))
// }
module.exports = {
  Get,
  Update,
  Add,
  Remove,
};
