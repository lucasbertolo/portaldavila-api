/* eslint-disable camelcase */
function PropertyDetails(data) {
  this.property_id = data.property_id;
  this.url = data.url;
  this.alt = data.alt;

  return (
    this.property_id,
    this.url,
    this.alt,
    this.active
  );
}

module.exports = PropertyDetails;
