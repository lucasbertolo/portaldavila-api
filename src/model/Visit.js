/* eslint-disable camelcase */
function Visit(data) {
  this.property_id = data.property_id;
  this.user_id = data.user_id;
  this.time_register = data.time_register;
  this.date_register = data.date_register;

  return (
    this.date_register,
    this.time_register,
    this.property_id,
    this.user_id
  );
}

module.exports = Visit;