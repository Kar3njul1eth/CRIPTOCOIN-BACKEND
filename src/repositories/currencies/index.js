const { Op, col } = require("sequelize");
const models = require("../../../models");

class CurrenciesRepository {
  getAll() {
    return models.currencies.findAll({
      include: [
        {
          model: models.users,
          where: { user: col("currencies.userId") },
          attributes: ["id", "name"],
        },
      ],
    });
  }

  getCurrencyByName(name) {
    return models.currencies.findAll({
      where: { name: { [Op.eq]: name } },
    });
  }

  create(currency) {
    return models.currencies.create(currency);
  }

  delete(id) {
    return models.currencies.destroy({ where: { id: { [Op.eq]: id } } });
  }

  update(currency, id) {
    return models.currencies.update(currency, {
      where: { id: { [Op.eq]: id } },
    });
  }
}

module.exports = CurrenciesRepository;
