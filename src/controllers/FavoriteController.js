
const FavoriteService = require('../services/FavoriteService');
const Favorite = require('../model/Favorite');

const Get = (req, res, db) => {
  const { user_id, property_id } = req.params;
  FavoriteService.Get(db, user_id, property_id)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'Not found' });
    })
    .catch(() => {
      res.status(400).json('Internal Error');
    });
};

const GetByUser = (req, res, db) => {
  const { user_id } = req.params;

  FavoriteService.GetByUser(db, user_id)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'Not found' });
    })
    .catch(() => {
      res.status(400).json('Internal Error');
    });
};


const Add = (req, res, db) => {
  const data = new Favorite(req.body);

  FavoriteService.Get(db, data.user_id, data.property_id)
    .then((item) => {
      if (item.length > 0) {
        FavoriteService.Update(db, data, item[0].id)
          .then(() => res.status(200).json('Favorite registered'))
          .catch(() => res.status(400).json('Internal Error'));
      } else {
        FavoriteService.Add(db, data)
          .then(() => res.status(200).json('Favorite registered'))
          .catch(() => res.status(400).json('Internal Error'));
      }
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};


const Update = (req, res, db) => {
  const data = new Favorite(req.body);

  FavoriteService.Update(db, data)
    .then(() => res.status(200).json('Favorite updated'))
    .catch(() => {
      res.status(400).json('Internal Error');
    });
};


module.exports = {
  Get,
  GetByUser,
  Add,
  Update,
};
