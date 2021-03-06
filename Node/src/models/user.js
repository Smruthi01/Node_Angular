const { DataTypes } = require("sequelize");
const sequelize = require('../database/server');

const User = sequelize.define("User", {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
  },
  updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    }
});

module.exports = User;