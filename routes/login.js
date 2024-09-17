const express = require("express");
const  router = express.Router();
const bodyParser = require("body-parser");
const loginPage = require('../controllers/login')






router.get("/", loginPage.renderLoginPage);

router.post('/', loginPage.loginAuth);

module.exports = router;