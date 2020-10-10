const currencies = require("../schemas/currencies");

const model = (sequelize) => {
  const currenciesModel = sequelize.define(currencies.name, currencies.attributes);
  return currenciesModel;
};

module.exports = model;
