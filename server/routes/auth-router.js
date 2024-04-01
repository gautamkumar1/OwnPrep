
const express = require('express');

const router = express.Router();
const authControllers = require('../controllers/auth-controllers');
const {signupSchema,loginSchema} = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')
const authMiddleware = require('../middlewares/auth-midlleware')
// get -> read data
// Post -> insert data

router.route('/').get(authControllers.home)

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route('/login').post(validate(loginSchema),authControllers.login)
router.route("/user").get(authMiddleware, authControllers.user);
 

module.exports = router;





/* --------------------------------
 NOTES
ONE way to configure
router.get('/',(req,res) => {
    res.status(200).send("Welcome To home page using router")
})
Second way to configure
router.route('/').get((req,res) => {});

router.get("/register", (req, res) => {
  res.status(200).send("Welcome To register page using router");
});
-----------------------------------
*/