'use strict';
const { cpfValidation } = require('../../helperFunctions/helperCpf.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, {  
        foreignKey: 'user_id',
        as: 'openTasks'
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUnique: async (value) => {
          const isExist = await User.findOne({ where: { cpf: value } })
           if (isExist) throw new Error('This cpf already exists')
        },
        isValid: (cpf) => {
          if(!cpfValidation(cpf)) throw new Error('CPF validation failed')
        }
      }   
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    password: {
      type: DataTypes.STRING,
      validate: { 
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
       }
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};

