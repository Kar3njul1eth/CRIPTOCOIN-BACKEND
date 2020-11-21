const { Op } = require('sequelize');
const { DateTime } = require('luxon');
const models = require('../../../models');
const sha256 = require('crypto-js/sha256');

class PersonsRepository {
  getAll() {
    return models.persons.findAll({
      attributes: ['id', 'name', 'lastName', 'birthdate', 'email'],
    });
  }

  getPersonByName(name) {
    return models.persons.findAll({
      where: { name: { [Op.eq]: name } },
    });
  }

  getPhotoById(id) {
    return models.persons.findOne({
      attributes: ['photo'],
      where: { id: { [Op.eq]: id } },
    });
  }

  create(person) {
    const validation = this.validatePerson(person);
    if (validation === true) {
      return models.persons.create(this.formatPerson(person));
    }
    return validation;
  }

  delete(id) {
    return models.persons.destroy({ where: { id: { [Op.eq]: id } } });
  }

  update(person, id) {
    const validation = this.validatePerson(person);
    if (validation === true) {
      return models.persons.update(this.formatPerson(person), {
        where: { id: { [Op.eq]: id } },
      });
    }
    return validation;
  }

  formatPerson(person) {
    const formatedPerson = { ...person };
    const date = DateTime.fromISO(person.birthdate);
    const password = sha256(person.password).toString();
    formatedPerson.birthdate = date.toSQL();
    formatedPerson.password = password;
    return formatedPerson;
  }

  validatePerson(person) {
    if (
      !new RegExp('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$').test(
        person.password
      )
    ) {
      return {
        error:
          'La clave ingresada no es valida, debe tener minimo 8 caracteres entre mayusculas y miniculas y al menos un numero.',
        code: 406,
      };
    }
    return true;
  }
}

module.exports = PersonsRepository;
