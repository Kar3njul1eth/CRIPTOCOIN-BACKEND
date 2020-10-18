const { Op } = require("sequelize");
const models = require("../../../models");

class NewsRepository {
  getAll() {
    return models.news.findAll();
  }

  getNewByName(name) {
    return models.news.findAll({
      where: { name: { [Op.eq]: name } }
    });
  }

  create(news) {
    return models.news.create(news);
  }

  delete(id) {
    return models.news.destroy({ where: { id: { [Op.eq]: id } } });
  }

  update(news, id) {
    return models.news.update(news, {
      where: { id: { [Op.eq]: id } }
    });
  }
}

module.exports = NewsRepository;
