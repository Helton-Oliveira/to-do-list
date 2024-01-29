'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {  
        foreignKey: 'id',
      })
      Task.belongsTo(models.Category, {
        foreignKey: 'category',
      })
    }
  }
  Task.init({
    name_task: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
  });
  return Task;
};