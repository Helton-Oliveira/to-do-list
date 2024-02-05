'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.User, {
        foreignKey: 'id'
      })
      Category.hasMany(models.Task, {
        foreignKey: 'id',
      })
    }
  }
  Category.init({
    category:{
      type: DataTypes.STRING,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });
  return Category;
};