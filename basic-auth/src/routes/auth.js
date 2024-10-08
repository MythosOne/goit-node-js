const express = require("express");

const AuthController = require("../controllers/auth");

const router = express.Router();
const jsonParser = express.json();

//Register routes
router.post("/register", jsonParser, AuthController.register);

// Login routes
router.post("/login", jsonParser, AuthController.login);

module.exports = router;
