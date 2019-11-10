/* eslint-disable camelcase */
function PropertyFeatures(data, id) {
  this.description = data.description;
  this.air_conditioning = data.air_conditioning || 0;
  this.pool = data.pool || 0;
  this.balcony = data.balcony || 0;
  this.barbecue_grill = data.barbecue_grill || 0;
  this.stairway = data.stairway || 0;
  this.garden = data.garden || 0;
  this.property_id = id || 0;
  this.fire_security = data.fire_security || 0;
  this.camera_security = data.camera_security || 0;

  return (
    this.description,
    this.air_conditioning,
    this.pool,
    this.balcony,
    this.barbecue_grill,
    this.stairway,
    this.garden,
    this.camera_security,
    this.fire_security,
    this.property_id
  );
}

module.exports = PropertyFeatures;
