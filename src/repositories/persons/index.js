const { Op } = require("sequelize");
const models = require("../../../models");

class PersonsRepository {
  getAll() {
    return models.persons.findAll();
  }

  getNewByName(name) {
    return models.persons.findAll({
      where: { name: { [Op.eq]: name } }
    });
  }

  create(persons) {
    return models.persons.create(persons);
  }

  delete(id) {
    return models.persons.destroy({ where: { id: { [Op.eq]: id } } });
  }

  update(persons, id) {
    return models.persons.update(persons, {
      where: { id: { [Op.eq]: id } }
    });
  }
}

module.exports = PersonsRepository;
