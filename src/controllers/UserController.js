
// Retorno de usuarios filtrando por id
const UserService = require('../services/UserService');

const Get = (req, res, db) => {
  const { id } = req.params;

  db.select('*').from('user').where({ id })
    .then((usr) => {
      if (usr.length) {
        res.json(usr[0]);
      } else {
        res.status(400).json('User not found');
      }
    })
    .catch((err) => res.status(400).json(`error getting user - ${err}`));
};

// Cadastro de novo usuario

const Add = (req, res, db) => {
  const {
    password,
    login,
  } = req.body;

  const data = {
    password, login,
  };

  UserService.CheckUsername(db, login)
    .then((item) => {
      console.log(item);
      // if (item.hasEntry) res.status(500).json('Email já cadastrado');
    })
    .catch(() => res.status(500).json('Erro interno, tente novamente mais tarde'));

  UserService.Add(db, data)
    .then(() => res.status(200).json('Register sucessful'))
    .catch((err) => res.status(400).json(`${err}`));
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
