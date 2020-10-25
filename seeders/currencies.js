const currenciesSchema = require("../schemas/currencies");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(currenciesSchema.name, [
      { name: "BITCOIN", currentPrice: 2000, lastDate: new Date(), userId: 1 },
      { name: "X-CASH", currentPrice: 0.2, lastDate: new Date(), userId: 2 },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(currenciesSchema.name, null, {}),
};
