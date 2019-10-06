/* eslint-disable camelcase */
function PropertyFeatures(data) {
  this.description = data.description;
  this.air_conditioning = data.air_conditioning || 0;
  this.pool = data.pool || 0;
  this.balcony = data.balcony || 0;
  this.barbecue_grill = data.barbecue_grill || 0;
  this.stairway = data.area || 0;
  this.garden = data.building_area || 0;
  this.property_id = data.property_id || 0;

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
