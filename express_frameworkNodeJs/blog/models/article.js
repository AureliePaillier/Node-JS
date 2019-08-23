'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.Category,{
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
    Article.belongsTo(models.User,{
      foreignKey: 'authorId',
      onDelete: 'CASCADE'
    });

    Article.hasMany(models.Comment,{
      foreignKey: 'articleId',
      onDelete: 'CASCADE'
    })
  };
  return Article;
};