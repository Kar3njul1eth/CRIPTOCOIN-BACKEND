const Sequelize = require("sequelize");
const userSchema = require("../schemas/users");

const currencies = {
  attributes: {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    name: { allowNull: false, type: Sequelize.STRING },
    currentPrice: { allowNull: false, type: Sequelize.FLOAT },
    lastDate: { allowNull: false, type: Sequelize.DATE },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: userSchema.name, key: "id" },
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  name: "currencies",
};

module.exports = currencies;
