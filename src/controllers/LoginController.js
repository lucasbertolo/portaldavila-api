const jwt = require('jsonwebtoken');
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
        res.status(200).json({ existUser: 'User already existent' });
        isValid = false;
      }
    })
    .then(() => {
      if (isValid) {
        LoginService.handleRegister(db, hash, email, username, phone, type_id)
          .then((user) => res.status(200).json(user))
          .catch(() => res
            .status(400)
            .json({ msg: 'Erro ao registrar, tente novamente mais tarde' }));
      }
    });
};

const getAuthTokenId = (res, token) => {
  jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
    if (!err) {
      res.json(decoded);
    } else {
      res.status(500).json({ msg: 'Token not authorized' });
    }
  });
};

const signToken = ({
  username, id,
}) => {
  const jwtPayload = {
    username, userId: id,
  };
  return jwt.sign(jwtPayload, process.env.JWTSECRET, { expiresIn: '2 days' });
};

const createSessions = (user) => {
  const { id } = user;
  const token = signToken(user);
  return {
    success: 'true', userId: id, token,
  };
};
const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { username, password, token } = req.body;

  return token
    ? getAuthTokenId(res, token)
    : LoginService.handleSignin(db, username, password, bcrypt)
      .then((user) => (
        user.id && user.username
          ? createSessions(user)
          : Promise.reject(Error('Internal error creating token'))))
      .then((session) => res.json(session))
      .catch((err) => res.status(400).json(err));
};
module.exports = {
  handleRegister,
  signinAuthentication,
};
