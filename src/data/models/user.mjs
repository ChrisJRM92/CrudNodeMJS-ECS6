import { DataTypes } from 'sequelize';
import sequelize from '../../config/connection.mjs';

const User = sequelize.define('users', {

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

export default User;