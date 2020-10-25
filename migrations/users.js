const users = require("../schemas/users");

const migration = {
  up: async (queryInterface) =>
    await queryInterface.createTable(users.name, users.attributes),
  down: async (queryInterface) =>
    await queryInterface.dropTable(users.name, null),
};

module.exports = migration;
