const express = require("express");
const { commit,stop_commit } = require("../controllers/commit.js");

const router = express.Router();

const config = require('../config.json');
let commitInterval = config.interval;

router.post("/commit",commit);
router.get("/stop_commit",stop_commit);

module.exports = router;