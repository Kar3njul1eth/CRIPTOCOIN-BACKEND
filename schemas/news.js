const Sequelize = require("sequelize");

const news = {
  attributes: {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    title: { allowNull: false, type: Sequelize.STRING },
    description: { allowNull: false, type: Sequelize.STRING },
    category: { allowNull: false, type: Sequelize.STRING },
    lastDate: { allowNull: false, type: Sequelize.DATE },
    userId: { allowNull: false, type: Sequelize.INTEGER },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  },
  name: "news"
};

module.exports = news;
