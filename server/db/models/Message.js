const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
	messageText: {
		type: Sequelize.TEXT
	}
});

module.exports = Message;
