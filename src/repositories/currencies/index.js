const { Op } = require("sequelize");
const models = require("../../../models");

class CurrenciesRepository {
  getAll() {
    return models.currencies.findAll();
  }

  getCurrencyByName(name) {
    return models.currencies.findAll({
      where: { name: { [Op.eq]: name } }
    });
  }

  create(currency) {
    return models.currencies.create(currency);
  }
}

module.exports = CurrenciesRepository;
