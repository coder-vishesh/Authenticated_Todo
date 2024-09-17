const express = require("express");
const router = express.Router();
const { handleDelete } = require("../controllers/deleteController")

router.post("/:id", handleDelete)

module.exports = router