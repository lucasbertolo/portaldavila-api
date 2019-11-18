/* eslint-disable camelcase */
function PropertyPhotos(data) {
  this.property_id = data.property_id;
  this.url = data.url;
  this.alt = data.alt;
  this.iscover = data.iscover;

  return (
    this.property_id,
    this.url,
    this.alt,
    this.iscover
  );
}

module.exports = PropertyPhotos;
