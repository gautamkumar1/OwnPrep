const express = require('express');
const {getAllUsers,getAllContacts} = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-midlleware')
const router = express.Router();
router.route("/users").get(authMiddleware,getAllUsers);
router.route("/contacts").get(authMiddleware,getAllContacts);
module.exports = router;