const Sequelize = require("sequelize");

const persons = {
  attributes: {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: { allowNull: false, type: Sequelize.STRING },
    lastName: { allowNull: false, type: Sequelize.STRING },
    birthdate: { allowNull: false, type: Sequelize.DATE },
    email: { allowNull: false, type: Sequelize.STRING },
    password: { allowNull: false, type: Sequelize.STRING },
    photo: { allowNull: true, type: Sequelize.BLOB },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  name: "persons",
};

module.exports = persons;
