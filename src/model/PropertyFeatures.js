/* eslint-disable camelcase */
function PropertyFeatures(data, id) {
  this.description = data.description;
  this.air_conditioning = data.airConditioner || false;
  this.pool = data.pool || false;
  this.balcony = data.balcony || false;
  this.barbecue_grill = data.barbecueGrill || false;
  this.stairway = data.stairway || false;
  this.garden = data.garden || false;
  this.property_id = id || 0;
  this.fire_security = data.fireSecurity || false;
  this.camera_security = data.cameraSecurity || false;

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
