const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
});
