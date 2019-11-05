/* eslint-disable camelcase */
function User(data) {
  this.type_id = data.type_id;
  this.email = data.email;
  this.username = data.username;
  this.password = data.password;
  this.phone = data.phone;

  return (
    this.type_id,
    this.email,
    this.username,
    this.password,
    this.phone
  );
}

module.exports = User;
