const currencies = require("../schemas/currencies");

const model = (sequelize) => {
  const currenciesModel = sequelize.define(
    currencies.name,
    currencies.attributes
  );
  currenciesModel.associate = (models) => {
    currenciesModel.belongsTo(models.users);
  };
  return currenciesModel;
};

module.exports = model;
