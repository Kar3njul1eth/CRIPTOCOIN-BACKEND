const Sequelize = require("sequelize");

const users = {
  attributes: {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: { allowNull: false, type: Sequelize.STRING },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  name: "users",
};

module.exports = users;
