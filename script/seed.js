"use strict";
const {
	db,
	models: { User, IdealMBTI, Chat, Participant, Message }
} = require("../server/db");

const surnameArray = require("./surnames.js");

const { uniqueNamesGenerator, names } = require("unique-names-generator");

const mbtiArray = [
	"INFP",
	"ENFP",
	"INFJ",
	"ENFJ",
	"INTJ",
	"ENTJ",
	"INTP",
	"ENTP",
	"ISFP",
	"ESFP",
	"ISTP",
	"ESTP",
	"ISFJ",
	"ESFJ",
	"ISTJ",
	"ESTJ"
];

const loveLanguageArray = [
	"words-of-affirmation",
	"quality-time",
	"receiving-gifts",
	"acts-of-service",
	"physical-touch"
];

// find random single whole number:
function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)];
}

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log("db synced!🌱");

	// Creating Users
	const users = await Promise.all([
		User.create({
			username: "cody123",
			firstName: "CoDy",
			lastName: "ydoc",
			password: "123",
			email: "cody@seed.js",
			mbti: "ENFJ",
			loveLanguage: "words-of-affirmation"
		}),
		User.create({
			username: "murphy123",
			firstName: "MuRpHy",
			lastName: "yhprum",
			password: "123",
			email: "murphy@seed.js",
			mbti: "ISFP",
			loveLanguage: "receiving-gifts"
		})
	]);

	for (let i = 0; i < 50; i++) {
		let randomNumComb = "";

		// for building usernames:
		for (let j = 0; j < 3; j++) {
			// Returns a random integer from 0 to 9:
			let addNum = Math.floor(Math.random() * 10);
			randomNumComb += addNum;
		}

		let firstName = uniqueNamesGenerator({ dictionaries: [names] });
		let lastName = pickRandom(surnameArray);
		let userFirst = firstName.toLowerCase()[0];
		let userLast = lastName.toLowerCase().slice();
		let username = userFirst + userLast + randomNumComb;
		let email = username + "@seed.js";
		let mbti = pickRandom(mbtiArray);
		let loveLanguage = pickRandom(loveLanguageArray);
		// let city = uniqueNamesGenerator({ dictionaries: [city] });
		// let state = uniqueNamesGenerator({ dictionaries: [state] });
		const users = await Promise.all([
			User.create({
				username: `${username}`,
				password: "123",
				email: `${email}`,
				firstName: `${firstName}`,
				lastName: `${lastName}`,
				mbti: `${mbti}`,
				loveLanguage: `${loveLanguage}`
				// city: `${city}`,
				// state: `${state}`,
			})
		]);
	}

	IdealMBTI.bulkCreate([
		{ mbti: "INFP", idealMBTI: "ENFJ" },
		{ mbti: "INFP", idealMBTI: "ENTJ" },

		{ mbti: "ENFP", idealMBTI: "INFJ" },
		{ mbti: "ENFP", idealMBTI: "INTJ" },

		{ mbti: "INFJ", idealMBTI: "ENFP" },
		{ mbti: "INFJ", idealMBTI: "ENTP" },

		{ mbti: "ENFJ", idealMBTI: "INFP" },
		{ mbti: "ENFJ", idealMBTI: "ISFP" },

		{ mbti: "INTJ", idealMBTI: "ENFP" },
		{ mbti: "INTJ", idealMBTI: "ENTP" },

		{ mbti: "ENTJ", idealMBTI: "INFP" },
		{ mbti: "ENTJ", idealMBTI: "INTP" },

		{ mbti: "INTP", idealMBTI: "ENTJ" },
		{ mbti: "INTP", idealMBTI: "ESTJ" },

		{ mbti: "ENTP", idealMBTI: "INFJ" },
		{ mbti: "ENTP", idealMBTI: "INTJ" },

		{ mbti: "ISFP", idealMBTI: "ENFJ" },
		{ mbti: "ISFP", idealMBTI: "ESFJ" },
		{ mbti: "ISFP", idealMBTI: "ESTJ" },

		{ mbti: "ESFP", idealMBTI: "ISFJ" },
		{ mbti: "ESFP", idealMBTI: "ISTJ" },

		{ mbti: "ISTP", idealMBTI: "ESFJ" },
		{ mbti: "ISTP", idealMBTI: "ESTJ" },

		{ mbti: "ESTP", idealMBTI: "ISFJ" },
		{ mbti: "ESTP", idealMBTI: "ISTJ" },

		{ mbti: "ISFJ", idealMBTI: "ESFP" },
		{ mbti: "ISFJ", idealMBTI: "ESTP" },

		{ mbti: "ESFJ", idealMBTI: "ISFP" },
		{ mbti: "ESFJ", idealMBTI: "ISTP" },

		{ mbti: "ISTJ", idealMBTI: "ESFP" },
		{ mbti: "ISTJ", idealMBTI: "ESTP" },

		{ mbti: "ESTJ", idealMBTI: "INTP" },
		{ mbti: "ESTJ", idealMBTI: "ISFP" },
		{ mbti: "ESTJ", idealMBTI: "ISTP" }
	]);

	// Adding User-Chat Associations
	await Promise.all([
		Chat.create({ userId: 1 }), // cody chatId: 1
		Chat.create({ userId: 1 }), // cody chatId: 2
		Chat.create({ userId: 2 }), // murphy chatId: 3
	]);

	// Adding Chat-Participant Associations
	await Promise.all([
		Participant.create({ userId: 2, chatId: 1 }), // murphy with cody
		Participant.create({ userId: 3, chatId: 2 }), // valry with cody
	]);

	// Adding Participant-Message Associations
	await Promise.all([
		Message.create({ participantId: 2, messageText: "how's it going" }),
		Message.create({ participantId: 2, messageText: "it's pretty hot" }),
	]);

	// const cody = await User.findByPk(1);
	// const murphy = await User.findByPk(2);
	// cody.addUser(murphy);

	console.log(`seeded ${users.length} users`);
	console.log(`seeded successfully`);
	return {
		users: {
			cody: users[0],
			murphy: users[1]
		}
	};
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
