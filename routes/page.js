const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("main", { title: "건강한친구 | StrongFriend" });
});

module.exports = router;
