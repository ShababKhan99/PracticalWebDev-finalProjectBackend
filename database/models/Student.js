const Sequelize = require('sequelize');
const { validate } = require('../db');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },

  gpa: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 4
    }
  },

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }

});

module.exports = Student;