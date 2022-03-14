const Sequelize = require("sequelize");
const db = require("../db");

const Preference = db.define("preference", {
    interestedIn: {
        type: Sequelize.ENUM('male', 'female', 'everyone'),
        allowNull: false
    },
    openToDrinking: {
        type: Sequelize.ENUM('true', 'false'),
        allowNull: false
    }
});

module.exports = Preference;
