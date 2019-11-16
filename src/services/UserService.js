
// Retorno de usuarios filtrando por id
const Get = (db, id) => db.select('*')
  .from('user').where({ id })
  .then((usr) => {
    if (usr.length) {
      return usr[0];
    }
    return null;
  })
  .catch((err) => Promise.reject(Error(err)));

const GetAll = (db) => db.select('username').from('user')
  .then((usr) => usr)
  .catch(() => Promise.reject(Error('Error trying to get list of usernames')));

const Add = (db, data) => db('user')
  .insert({
    ...data,
  })
  .then((item) => Promise.resolve({ username: data.username, type_id: data.type_id, id: item[0] }))
  .catch((err) => Promise.reject(Error(`Error while registering new user - ${err}`)));

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
  GetAll,
};
