const LoginService = require('../services/LoginService');
const UserService = require('../services/UserService');

const handleRegister = (req, res, db, bcrypt) => {
  const {
    email, username, password, phone, type_id,
  } = req.body;

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  let isValid = true;

  UserService.GetAll(db)
    .then((usr) => {
      const hasEntry = usr.filter((x) => x.username === username);
      if (hasEntry.length > 0) {
        res.status(200).json({ msg: 'Usuário já existente' });
        isValid = false;
      }
    }).then(() => {
      if (isValid) {
        LoginService.handleRegister(db, hash, email, username, phone, type_id)
          .then((user) => res.status(200).json(user))
          .catch(() => res.status(400).json({ msg: 'Erro ao registrar, tente novamente mais tarde' }));
      }
    });
};

const handleSignin = (req, res, db, bcrypt) => {
  const { username, password } = req.body;

  LoginService.handleSignin(db, username, password, bcrypt)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => res.status(400).json({ msg: 'Tente novamente mais tarde' }));
};

module.exports = {
  handleRegister,
  handleSignin,
};
