/* eslint-disable camelcase */
function PropertyDetails(data) {
  this.property_id = data.property_id;
  this.url = data.url;
  this.alt = data.alt;
  this.isCover = data.isCover;

  return (
    this.property_id,
    this.url,
    this.alt,
    this.isCover
  );
}

module.exports = PropertyDetails;
