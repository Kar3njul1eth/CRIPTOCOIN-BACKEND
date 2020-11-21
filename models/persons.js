const persons = require("../schemas/persons");

const model = (sequelize) => {
  const personsModel = sequelize.define(persons.name, persons.attributes);
  personsModel.associate = (models) => {
  personsModel.hasMany(models.persons);
  };
  return personsModel;
};

module.exports = model;
