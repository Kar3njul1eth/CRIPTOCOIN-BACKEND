const persons = require("../schemas/persons");

const migration = {
  up: async (queryInterface) =>
    await queryInterface.createTable(persons.name, persons.attributes),
  down: async (queryInterface) =>
    await queryInterface.dropTable(persons.name, null),
};

module.exports = migration;
