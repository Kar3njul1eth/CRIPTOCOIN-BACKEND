const Sequelize = require("sequelize");

const news = {
  attributes: {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    titulo: { allowNull: false, type: Sequelize.STRING },
    descripcion: { allowNull: false, type: Sequelize.STRING },
    categoria: { allowNull: false, type: Sequelize.STRING },
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
