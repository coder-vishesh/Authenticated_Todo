const express = require("express")
const router = express.Router();
const { renderEdit } = require("../controllers/editControllers")
const { handleEditTasks } = require("../controllers/editControllers")

router.get("/:id", renderEdit)
router.post("/:id", handleEditTasks)

module.exports = router