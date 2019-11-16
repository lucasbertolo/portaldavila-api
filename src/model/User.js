/* eslint-disable camelcase */
function User(data) {
  console.log(data);
  this.type_id = data.type_id;
  this.email = data.email;
  this.username = data.username;
  this.phone = data.phone;
  this.contact_type = data.contact_type;

  return (
    this.type_id,
    this.email,
    this.username,
    this.phone,
    this.contact_type
  );
}

module.exports = User;
