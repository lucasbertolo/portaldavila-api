const Add = (db, data) => new Promise((resolve, reject) => db('visit_schedule')
  .insert({
    ...data,
  })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Update = (db, id, data) => new Promise((resolve, reject) => db('visit_schedule')
  .update({
    ...data,
  })
  .where({ id })
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Get = (db, user_id) => new Promise((resolve, reject) => db('visit_schedule As vs')
  .join('property As p', 'p.id', 'vs.property_id')
  .join('property_photos As pp', 'pp.property_id', 'p.id')
  .join('user As u', 'u.id', 'vs.user_id')
  .select('p.*', 'u.*', 'pp.cdn As url', 'vs.id As visit_id', 'time_register', 'date_register', 'status', 'vs.property_id')
  .where({ user_id })
  .andWhere('pp.iscover', 'true')
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const GetAll = (db) => new Promise((resolve, reject) => db('visit_schedule As vs')
  .join('property As p', 'p.id', 'vs.property_id')
  .join('user As u', 'u.id', 'vs.user_id')
  .select('p.*', 'u.*', 'vs.id AS visit_id', 'time_register', 'date_register', 'status', 'vs.property_id')
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const Remove = (db, property_id) => new Promise((resolve, reject) => db('visit_schedule')
  .where({ property_id })
  .del()
  .then((res) => resolve(res))
  .catch((err) => reject(Error(err))));

const checkEntries = (db, data) => new Promise((resolve, reject) => {
  const { user_id, property_id } = data;
  db('visit_schedule')
    .select('*')
    .where({ user_id, property_id })
    .then((res) => resolve(res))
    .catch((err) => reject(Error(err)));
});

module.exports = {
  Add,
  Update,
  Get,
  GetAll,
  Remove,
  checkEntries,
};
