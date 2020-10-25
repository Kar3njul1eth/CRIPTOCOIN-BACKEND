const usersSchema = require("../schemas/users");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(usersSchema.name, [
      { name: "Jersson", id: 1 },
      { name: "María", id: 2 },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(usersSchema.name, null, {}),
};
