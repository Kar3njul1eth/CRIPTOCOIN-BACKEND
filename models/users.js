const users = require("../schemas/users");

const model = (sequelize) => {
  const usersModel = sequelize.define(users.name, users.attributes);
  usersModel.associate = (models) => {
    usersModel.hasMany(models.currencies);
  };
  return usersModel;
};

module.exports = model;
