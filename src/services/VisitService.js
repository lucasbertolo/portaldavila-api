const Add = (db, data) => new Promise((resolve, reject) => db('visit_schedule')
  .insert({
    ...data,
  })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Update = (db, id, data) => new Promise((resolve, reject) => {
  db('visit_schedule')
    .update({
      ...data,
    })
    .where({ id })
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});

const Get = (db, id) => new Promise((resolve, reject) => {
  db('visit_schedule')
    .select('*')
    .where({ id })
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});

const GetAll = (db) => new Promise((resolve, reject) => {
  db('visit_schedule')
    .select('*')
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});

// const Remove = (db, id) => new Promise((resolve, reject) => {

// })

module.exports = {
  Add,
  Update,
  Get,
  GetAll,
};
