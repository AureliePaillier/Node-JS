'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    note: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here

    Comment.belongsTo(models.Article,{
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    });

    Comment.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Comment;
};