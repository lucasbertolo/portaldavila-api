const Add = (db, data) => new Promise((resolve, reject) => db('favorites')
  .insert({
    ...data,
  })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Update = (db, data, id) => new Promise((resolve, reject) => db('favorites')
  .update({
    ...data,
  })
  .where({ id })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Get = (db, user_id) => new Promise((resolve, reject) => {
  db('favorites')
    .select('*')
    .where({ user_id })
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});

const GetByProperty = (db, property_id, user_id) => new Promise((resolve, reject) => {
  db('favorites')
    .select('*')
    .where({ property_id, user_id })
    .then((res) => resolve(res[0]))
    .catch((err) => reject(Error(err)));
});


module.exports = {
  Add,
  Update,
  Get,
  GetByProperty,
};
