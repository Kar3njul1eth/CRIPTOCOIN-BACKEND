const news = require("../schemas/news");

const migration = {
  up: async (queryInterface) =>
    await queryInterface.createTable(news.name, news.attributes),
  down: async (queryInterface) =>
    await queryInterface.dropTable(news.name, null)
};

module.exports = migration;
