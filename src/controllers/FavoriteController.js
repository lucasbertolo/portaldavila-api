
const FavoriteService = require('../services/FavoriteService');
const Favorite = require('../model/Favorite');

const Get = (req, res, db) => {
  const { user_id } = req.params;
  FavoriteService.Get(db, user_id)
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
  console.log(data);
  FavoriteService.GetByProperty(db, data.property_id, data.user_id)
    .then((item) => {
      if (item) {
        FavoriteService.Update(db, data, item.id)
          .then(() => res.status(200).json('Favorite registered'))
          .catch(() => {
            res.status(400).json('Internal Error');
          });
      } else {
        FavoriteService.Add(db, data)
          .then(() => res.status(200).json('Favorite registered'))
          .catch(() => {
            res.status(400).json('Internal Error');
          });
      }
    })
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
  Add,
  Update,
};
