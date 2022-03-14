const Sequelize = require("sequelize");

// npm i @sequelize/core
const { Op } = require("@sequelize/core");
const router = require("express").Router();
const {
	models: { User, Match, Preference, IdealMBTI }
} = require("../db");
module.exports = router;

const findMatches = async user => {
	const idealMBTIs = await IdealMBTI.findAll({
		where: {
			mbti: user.mbti
		}
	});
	const idealMBTIarray = idealMBTIs.map(idealMBTIobj => {
		return idealMBTIobj.idealMBTI;
	});
	const users = await User.findAll({
		where: {
			mbti: {
				[Op.or]: [...idealMBTIarray]
			},
			loveLanguage: user.loveLanguage
		}
	})
	return users;
};

router.post("/login", async (req, res, next) => {
	try {
		res.send({ token: await User.authenticate(req.body) });
	} catch (err) {
		next(err);
	}
});

router.post("/signup", async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		const matchArray = await findMatches(user);
		console.log("LOLOLOLOLOLOLOL", matchArray);

		matchArray.forEach(async match => {
			await Promise.all([
				Match.create({ userId: user.id, yourMatchId: match.id }),
				Match.create({ userId: match.id, yourMatchId: user.id })
			]);
		});
		res.send({ token: await user.generateToken() });
	} catch (err) {
		if (err.name === "SequelizeUniqueConstraintError") {
			res.status(401).send("User already exists");
		} else {
			next(err);
		}
	}
});

router.get("/me", async (req, res, next) => {
	try {
		res.send(await User.findByToken(req.headers.authorization));
	} catch (ex) {
		next(ex);
	}
});
