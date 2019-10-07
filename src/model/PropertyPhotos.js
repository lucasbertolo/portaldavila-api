/* eslint-disable camelcase */
function PropertyDetails(data) {
  this.property_id = data.property_id;
  this.url = data.src;
  this.alt = data.alt;

  return (
    this.property_id,
    this.url,
    this.alt
  );
}

module.exports = PropertyDetails;
