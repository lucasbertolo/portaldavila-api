/* eslint-disable camelcase */
function PropertyInfo(data) {
//   console.log('data', data);
  this.neighborhood_id = data.neighborhood_id;
  this.position = data.position;
  this.price = data.price;
  this.purpose_id = data.purpose_id;
  this.type_id = data.type_id;
  this.creator_id = 1;
  this.area = data.area;
  this.building_area = data.building_area;

  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area
  );
}

module.exports = PropertyInfo;
