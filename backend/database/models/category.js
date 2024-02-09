'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'user'
      })
      Category.hasMany(models.Task, {
        foreignKey: 'id',
        as: 'tasks'
      })
    }
  }
  Category.init({
    name:{
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
  });
  return Category;
};
