const personsSchema = require("../schemas/persons");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(personsSchema.name, [
      { name: "Jersson", lastName: "Morales", birthdate:"30-12-2020", email: "jm@gmail.com", password: "1234", photo:"", id: 1 },
      { name: "Maria", lastName: "Lopez", birthdate:"30-12-2020", email: "ml@gmail.com", password: "1234", photo:"", id: 1 },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(personsSchema.name, null, {}),
};
