/* eslint-disable camelcase */
function PropertyInfo(data) {
  this.neighborhood_id = data.neighborhood_id || 0;
  this.position = data.position ? JSON.stringify(data.position) : null;
  this.price = data.price || 0;
  this.purpose_id = data.purpose_id || 0;
  this.type_id = data.type_id || 0;
  this.creator_id = 1;
  this.area = data.area;
  this.building_area = data.building_area;
  this.exchange = data.exchange;
  this.building_loan = data.building_loan;
  this.isvisible = data.isVisible || true;

  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area,
    this.exchange,
    this.building_loan
  );
}

module.exports = PropertyInfo;
