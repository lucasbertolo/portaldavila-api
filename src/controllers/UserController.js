
// Retorno de usuarios filtrando por id
const UserService = require('../services/UserService');
const User = require('../model/User');

const Get = (req, res, db) => {
  const { username, password } = req.body.auth;
  UserService.Get(db, username, password)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'User not found' });
    })
    .catch(() => res.status(400).json('Internal Error'));
};

// Cadastro de novo usuario

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
    }).then(() => {
      if (isValid) {
        UserService.Add(db, data)
          .then(() => res.status(200).json('Register sucessful'))
          .catch(() => res.status(400).json('Internal error, contact the administrator'));
      }
    })
    .catch(() => res.status(400).json('Internal error, contact the administrator'));
};

// Atualização de usuario

const Update = (req, res, db) => {
  const { id } = req.params;
  const {
    pass,
    login,
  } = req.body;

  // Checar se é o próprio usuário trocando a senha e fazer o hash

  // validar se existe usuario com o mesmo login na troca

  // adicionar transaction

  db('user')
    .where({ id })
    .update({
      pass,
      login,
    })
    .then((data) => {
      if (data === 1) {
        res.status(200).json('User updated');
      } else res.status(400).json('Id inexistent');
    })
    .catch((err) => res.status(400).json(`erro - ${err}`));
};

// Remover usuario
const Remove = (req, res, db) => {
  const { id } = req.params;

  // Checar por token ou validar autorizacao para apagar usuario

  db('user')
    .where({ id })
    .del()
    .then(() => res.status(200).json('User deleted'))
    .catch((err) => res.status(400).json(`Error - ${err}`));
};

// trocar tipo de usuario

module.exports = {
  Get,
  Update,
  Add,
  Remove,
};
