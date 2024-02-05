'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Category, {
        foreignKey: 'id',
      })
    }
  }
  Task.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: 'categories', key: 'id' }
    }
    }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
  });
  return Task;
};