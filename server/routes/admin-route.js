const express = require('express');
const {getAllUsers,getAllContacts} = require('../controllers/admin-controllers');
const router = express.Router();
router.route("/users").get(getAllUsers)
router.route("/contacts").get(getAllContacts);
module.exports = router;