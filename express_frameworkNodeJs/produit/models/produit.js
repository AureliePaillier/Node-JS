'use strict';
module.exports = (sequelize, DataTypes) => {
  const produit = sequelize.define('produit', {
    name: DataTypes.STRING,
    prix: DataTypes.FLOAT,
    photo: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  produit.associate = function(models) {
    // associations can be defined here
  };
  return produit;
};