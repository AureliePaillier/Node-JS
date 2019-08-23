'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};