const currencies = require("../schemas/currencies");

const migration = {
  up: async (queryInterface) =>
    await queryInterface.createTable(currencies.name, currencies.attributes),
  down: async (queryInterface) =>
    await queryInterface.dropTable(currencies.name, null)
};

module.exports = migration;
