const express = require("express");
const controller = require("./controller")
const router = express.Router();

router.route('/sapipin').get(controller.sapipin)

module.exports = router