const handleRegister = (db, hash, email, username, phone, type_id) => db.transaction((trx) => {
  trx.insert({
    hash,
    username,
  })
    .into('login')
    .then(() => trx('user')
      .insert({
        username,
        email,
        phone,
        type_id,
      })
      .then((user) => {
        Promise.resolve(user[0]);
      }))
    .then(trx.commit)
    .catch(trx.rollback);
})
  .catch(() => Promise.reject(Error('Registering unable')));

const handleSignin = (db, username, password, bcrypt) => db.select('username', 'hash')
  .from('login')
  .where('username', '=', username)
  .then((data) => {
    const isValid = bcrypt.compareSync(password, data[0].hash);
    if (isValid) {
      return db.select('*').from('user')
        .where('username', '=', username)
        .then((user) => Promise.resolve(user[0]))
        .catch(() => Promise.reject(Error('Wrong credentials')));
    }
    return Promise.reject(Error('wrong credentials'));
  })
  .catch(() => Promise.reject(Error('wrong credentials')));

module.exports = {
  handleRegister,
  handleSignin,
};
