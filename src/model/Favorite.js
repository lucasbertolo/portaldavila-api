/* eslint-disable camelcase */
function Favorite(data) {
  this.property_id = data.property_id;
  this.user_id = data.user_id;
  this.status = data.status;

  return (
    this.status,
    this.property_id,
    this.user_id
  );
}

module.exports = Favorite;
