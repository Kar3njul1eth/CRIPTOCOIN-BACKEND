const { Op } = require("sequelize");
const models = require("../../../models");

class UserRepository {
  getAll() {
    return models.users.findAll();
  }

  getNewByName(name) {
    return models.users.findAll({
      where: { name: { [Op.eq]: name } }
    });
  }

  create(user) {
    return models.users.create(user);
  }

  delete(id) {
    return models.users.destroy({ where: { id: { [Op.eq]: id } } });
  }

  update(user, id) {
    return models.user.update(user, {
      where: { id: { [Op.eq]: id } }
    });
  }
}

module.exports = UserRepository;
