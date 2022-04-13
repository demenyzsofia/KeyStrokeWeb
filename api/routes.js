const express = require("express");
const controller = require("./controller")
const router = express.Router();

router.route('/sapipin').get(controller.sapipin)
router.route('/easy').get(controller.easy)
router.route('/keystroke2014').get(controller.keystroke2014)
router.route('/logicalstrong').get(controller.logicalstrong)
router.route('/strong').get(controller.strong)
router.route('/detectors').get(controller.datasetsBox)

module.exports = router