const news = require("../schemas/news");

const model2 = (sequelize) => {
  const newsModel = sequelize.define(news.name, news.attributes);
  return newsModel;
};

module.exports = model2;
