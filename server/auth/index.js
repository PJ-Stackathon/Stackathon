const router = require("express").Router();
const {
	models: { User, Match }
} = require("../db");
module.exports = router;

// When the Preference Table is created, uncomment line 8:
// const findMatches = require("../algorithm");

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
		// What if user didn't fill out all the information such as for all the preferences?
		const matchesArray = findMatches(user);
		matchesArray.forEach((match) => {
			Promise.all([
				Match.create({ userId: user.id, yourMatchId: match.id }),
				Match.create({ userId: match.id, yourMatchId: user.id }),
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
