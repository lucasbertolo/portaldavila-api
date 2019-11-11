/* eslint-disable camelcase */
function PropertyDetails(data, id) {
  this.property_id = id;
  this.dormitory = data.dormitory;
  this.garage = data.garage;
  this.bathroom = data.bathroom;
  this.living_room = data.living_room;
  this.dining_room = data.dining_room;
  this.suite = data.suite;
  this.laundry = data.laundry;
  this.washbasin = data.washbasin;
  this.kitchen = data.kitchen;
  this.gourmet_space = data.gourmet_space;
  this.office = data.office;


  return (
    this.property_id,
    this.dormitory,
    this.garage,
    this.bathroom,
    this.visiting_room,
    this.dining_room,
    this.suite,
    this.laundry,
    this.washbasin,
    this.kitchen,
    this.gourmet_space,
    this.office
  );
}

module.exports = PropertyDetails;
