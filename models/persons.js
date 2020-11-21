const persons = require("../schemas/persons");

const model = (sequelize) => {
  const personsModel = sequelize.define(persons.name, persons.attributes);
  
  return personsModel;
};

module.exports = model;
