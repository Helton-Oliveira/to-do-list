const { cpfValidation } = require('../../helperFunctions/helperCpf.js');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Category, {  
        foreignKey: 'user_id',
        as: 'openCategories',
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30], 
          msg: 'The name field must have at least 3 letters'
        }
      }
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
      allowNull: false,
      validate:{
        isEmail: {
          args: true,
          msg: 'invalid email',
        }
      },
      unique: true, 
    },
    password: {
      type: DataTypes.STRING,
      validate: { 
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ ,
          msg: 'Invalid Passowrd'
        }
       }
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    paranoid: true,
  });
  return User;
};

