const express = require('express');
const {getAllUsers,getAllContacts} = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-midlleware')
const adminMiddleware = require('../middlewares/admin-middleware');
const router = express.Router();
router.route("/users").get(authMiddleware, adminMiddleware,getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware,getAllContacts);
module.exports = router;