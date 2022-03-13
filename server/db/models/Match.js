const Sequelize = require("sequelize");
const db = require("../db");

const Match = db.define("match", {
	userId: {
		type: Sequelize.INTEGER
	},
	yourMatchId: {
		type: Sequelize.INTEGER
	}
});

module.exports = Match;