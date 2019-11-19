/* eslint-disable camelcase */
function Visit(data) {
  this.property_id = data.property_id;
  this.user_id = data.user_id;
  this.time_register = data.time_register;
  this.date_register = data.date_register;
  this.status = data.status;
  this.consultor_id = data.consultor_id;

  return (
    this.date_register,
    this.time_register,
    this.property_id,
    this.user_id,
    this.status,
    this.consultor_id
  );
}

module.exports = Visit;
