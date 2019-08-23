'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    pass: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article,{
      foreignKey: 'authorId',
      onDelete: 'CASCADE'
    });
    User.belongsTo(models.Role,{
      foreignKey: 'roleId',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Comment,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return User;
};