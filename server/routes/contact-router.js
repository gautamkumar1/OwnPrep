const express = require("express");
const router = express.Router();
const contactFrom = require("../controllers/contact-controllers")

router.route('/contact').post(contactFrom);

module.exports = router;
