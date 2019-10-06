/* eslint-disable camelcase */
function PropertyFeatures(data) {
  this.description = data.description;
  this.air_conditioning = data.air_conditioning;
  this.pool = data.pool;
  this.balcony = data.balcony;
  this.barbecue_grill = data.barbecue_grill;
  this.stairway = data.area;
  this.garden = data.building_area;
  this.property_id = data.property_id;

  return (
    this.description,
    this.air_conditioning,
    this.pool,
    this.balcony,
    this.barbecue_grill,
    this.stairway,
    this.garden,
    this.property_id
  );
}

module.exports = PropertyFeatures;
