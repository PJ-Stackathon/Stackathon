const Sequelize = require("sequelize");
const db = require("../db");

const IdealMBTI = db.define("idealMBTI", {
  mbti: {
    type: Sequelize.STRING(4),
  },
  idealMBTI: {
    type: Sequelize.STRING(4),
  },
});

module.exports = IdealMBTI;
