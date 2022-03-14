const Sequelize = require("sequelize");
const db = require("../db");

const Preference = db.define("preference", {
    interestedIn: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    openToDrinking: {
        type: Sequelize.ENUM('true', 'false'),
        allowNull: false
    }
});

module.exports = Preference;
