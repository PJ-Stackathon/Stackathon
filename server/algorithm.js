const {
	models: { User, IdealMBTI }
} = require("./db/models");
const { Op } = require("@sequelize/core");

function findMatches(user) {
	// do we need try an catch block?

	// scenario:
	// user interestedIn everyone
	// user prefers matches between age 25 and 30 (assuming inclusive)
	// user prefers someone who doesn't drink

	// const preferences = user.preferences
	// for testing purposes:
	// const preferences = {
	// 	interestedIn: "everyone",
	// 	ageMin: 25,
	// 	ageMax: 30,
	// 	openToDrinking: false
	// };

	const idealMBTIs = IdealMBTI.findAll({
		where: {
			mbti: user.mbti
		}
	});

	const users = User.findAll({
		where: {
			interestedIn: user.interestedIn, // string
			openToDrinking: user.openToDrinking, // boolean
			mbti: [...idealMBTIs], // find match with MBTIs in [...idealMBTIs]
			loveLanguage: user.loveLanguage // user's primary love language
		}
	});

	return users;
}

module.exports = {
	findMatches
};


// ageMin: { [Op.gte]: preferences.ageMin }, // >= 25
// ageMax: { [Op.lte]: preferences.ageMax }, // <= 30