const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const car = sequelize.define('cars', {

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

module.exports = car;