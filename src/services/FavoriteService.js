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

const Get = (db, user_id, property_id) => new Promise((resolve, reject) => db('favorites')
  .select('*')
  .where({ user_id, property_id })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const GetByUser = (db, user_id) => new Promise((resolve, reject) => {
  db('favorites')
    .select('*')
    .where({ user_id })
    .andWhere('status', 'true')
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});


module.exports = {
  Add,
  Update,
  Get,
  GetByUser,
};
