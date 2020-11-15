const newsSchema = require("../schemas/news");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(newsSchema.name, [
      { title: "Ethereum", description: "Subida de Ethreum", category:"Criptomonedas", lastDate: new Date(), userId: 1 },
      { title: "Ethereum", description: "Bajada de Ethreum", category:"Criptomonedas", lastDate: new Date(), userId: 2 },
      { title: "Bitcoin", description: "Peridas de Ethreum", category:"Criptomonedas", lastDate: new Date(), userId: 3 },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(newsSchema.name, null, {}),
};
