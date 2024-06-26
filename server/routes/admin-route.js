const express = require('express');
const adminController = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-midlleware')
const adminMiddleware = require('../middlewares/admin-middleware');
const router = express.Router();
// *-------------------------------
//* Users Route 📝
// *-------------------------------
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
// *-------------------------------
//* Contacts Route 📝
// *-------------------------------
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);
// *-------------------------------
//* Delete Route 📝
// *-------------------------------
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
  // *-------------------------------
//* Get single user data Route 📝
// *-------------------------------

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

    // *-------------------------------
//* Update Route 📝
// *-------------------------------
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
module.exports = router;