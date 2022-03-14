//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const IdealMBTI = require("./models/IdealMBTI");
const Chat = require("./models/Chat");
const Participant = require("./models/Participant");
const Message = require("./models/Message");
const Match = require("./models/Match");
const Preference = require("./models/Preference");

// ASSOCIATIONS

// Chat has userId as FK
User.hasMany(Chat);
Chat.belongsTo(User);

// Participant has userId as FK
User.hasMany(Participant);
Participant.belongsTo(User);

// Participant has chatId as FK
Chat.hasMany(Participant);
Participant.belongsTo(Chat);

// Message has participantId as FK
Participant.hasMany(Message);
Message.belongsTo(Participant);

// User has matchId as FK
User.hasMany(Match);
Match.belongsTo(User);

// Preference has userId as FK
User.hasMany(Preference);
Preference.belongsTo(User);

module.exports = {
	db,
	models: {
		User,
		IdealMBTI,
		Chat,
		Participant,
		Message,
		Match,
		Preference
	}
};