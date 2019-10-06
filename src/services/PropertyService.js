const Get = (req, db) => {
  const { id } = req.params;

  return db.select('*').from('property')
    .leftJoin('property_details', 'property.id', 'property_details.property_id')
    .leftJoin('property_features', 'property.id', 'property_features.property_id')
    .where({ id })
    .then((data) => data[0])
    .catch((err) => Promise.reject(Error(err)));
};


const AddProperty = (dataInfo, dataDetails, dataFeatures, dataPhotos, db) => {
  const info = new PropertyInfo(dataInfo);
  const details = new PropertyDetails(dataDetails);
  const features = new PropertyFeatures(dataFeatures);
  const photos = new PropertyPhotos(dataPhotos);


  //   const {
  //     neighborhood_id,
  //     position,
  //     price,
  //     purpose_id,
  //     type_id,
  //     area,
  //     building_area,
  //   } = req.body.data.info;

  //   const { creator_id } = req.body;

  // console.log(creator_id);

  db('property').insert({
    neighborhood_id,
    position,
    price,
    area,
    building_area,
    purpose_id,
    type_id,
    creator_id,
  }).then((resp) => {
    const id = resp[0];

    return db('property_details').insert({
      ...req.body.data.details,
      property_id: id,
    }).then(() => {
      db('property_features').insert({
        ...req.body.data.features,
        property_id: id,
      })
        .then()
        .catch((err) => console.log(err));
    })
      .then()
      .catch((err) => console.log(err));
  })
    .then(() => {
      res.status(200).json('Property registerd');
    })
    .catch((err) => {
      res.status(400).json(`Error while registering - ${err}`);
    });
};

module.exports = {
  Get,
};
