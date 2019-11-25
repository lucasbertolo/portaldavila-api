
const VisitService = require('../services/VisitService');
const Visit = require('../model/Visit');

const Get = (req, res, db) => {
  const { id } = req.params;
  VisitService.Get(db, id)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'Visit not found' });
    })
    .catch(() => {
      res.status(400).json('Internal Error');
    });
};

const GetAll = (req, res, db) => {
  VisitService.GetAll(db)
    .then((item) => {
      if (item) { return res.status(200).json(item); }

      return res.status(200).json({ msg: 'Nenhuma visita encontrada' });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const Add = (req, res, db) => {
  const data = new Visit(req.body);
  VisitService.checkEntries(db, data)
    .then((item) => {
      if (item.length > 0) {
        res.status(500).json('There is already an entry for this user and property');
      } else {
        VisitService.Add(db, data)
          .then(() => res.status(200).json('Visit registered'))
          .catch(() => res.status(400).json('Internal Error'));
      }
    })
    .catch(() => res.status(400).json('Internal Error'));
};


const Update = (req, res, db) => {
  const { visit_id } = req.body;
  const data = new Visit(req.body);

  VisitService.Update(db, visit_id, data)
    .then(() => res.status(200).json('Successful updated'))
    .catch((err) => {
      console.log(err);
      res.status(500).json('Error while updating');
    });
};


module.exports = {
  Get,
  Add,
  GetAll,
  Update,
};
