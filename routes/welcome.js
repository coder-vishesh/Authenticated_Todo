const express = require("express"); 
const router = express.Router();

const { authenticate } = require("../controllers/authenticate")
const { getAllTodos } = require("../controllers/userTodo")
const { logoutController } = require('../controllers/logout')
const userTodos = require("../controllers/userTodo")

router.get("/",authenticate, getAllTodos)


router.post("/", authenticate, userTodos.userTodo)

router.post("/logout", logoutController);

module.exports = router