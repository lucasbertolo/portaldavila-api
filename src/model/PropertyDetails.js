/* eslint-disable camelcase */
function PropertyDetails(data) {
  this.property_id = data.property_id;
  this.room = data.room;
  this.dormitory = data.dormitory;
  this.garage = data.garage;
  this.bathroom = data.bathroom;
  this.visiting_room = data.visiting_room;
  this.dining_room = data.dining_room;
  this.suite = data.suite;
  this.laundry = data.laundry;
  this.washbasin = data.washbasin;
  this.kitchen = data.kitchen;
  this.gourmet_space = data.gourmet_space;
  this.office = data.office;


  return (
    this.property_id,
    this.room,
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
