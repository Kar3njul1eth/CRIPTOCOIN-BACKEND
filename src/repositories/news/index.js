const { Op } = require("sequelize");
const models = require("../../../models");

class NewsRepository {
  getAll() {
    return models.news.findAll();
  }

  getNewByName(title) {
    return models.news.findAll({
      where: { title: { [Op.eq]: title } }
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
