const express = require("express");
const router = express.Router();
const Controller = require("../controllers/authcontrollers");


router.get("/hello", Controller);

module.exports = router;
