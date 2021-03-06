const router = require("express").Router();
const {
	models: { User, Match }
} = require("../db");
module.exports = router;
const { requireUserToken } = require("./gatekeeper");

// ADMIN-ONLY ACCESS HERE ------------------------------
router.get("/", async (req, res, next) => {
	try {
		const users = await User.findAll({
			// explicitly select only the id and username fields - even though
			// users' passwords are encrypted, it won't help if we just
			// send everything to anyone who asks!
			attributes: ["id", "username", "mbti"]
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

// USER ACCESS HERE -----------------------------------
// GET /api/users/:id
router.get("/:id", requireUserToken, async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		res.json(user);
	} catch (error) {
		next(error);
	}
});

// GET /api/users/:id/matches
router.get("/:id/matches", async (req, res, next) => {
	try {
		const matchArray = await Match.findAll({
			where: {
				userId: req.params.id
			}
		});

		const yourMatchArray = await Promise.all(
			matchArray.map(async match => {
				return User.findByPk(match.yourMatchId);
			})
		);

		res.json(yourMatchArray);
	} catch (error) {
		next(error);
	}
});
