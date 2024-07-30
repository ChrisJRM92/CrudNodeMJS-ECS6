const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const user = sequelize.define('users', {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
});

module.exports = user;