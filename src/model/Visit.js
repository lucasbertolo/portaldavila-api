/* eslint-disable camelcase */
function Visit(data) {
  this.property_id = data.property_id;
  this.user_id = data.user_id;
  this.time_register = data.time_register;

  return (
    this.property_id,
    this.user_id,
    this.time_register
  );
}

module.exports = Visit;
