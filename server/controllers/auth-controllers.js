const User = require('../models/user-model')
const bcryptjs = require('bcryptjs');

// Controllers are used to handle your application logic,also used to process incoming requests.

/* --------------------------------
    HOME
 --------------------------------
*/

const home =  async (req,res) =>{
    try {
        console.log(req.body);
        res.status(200).json("Welcome To home page");
    } catch (error) {
        console.log(error);
    }
}
/* --------------------------------
    REGISTER
    1. Get registration data : Retrieved user data(username,email,phone,password)
    2. Check email existence : check if user is already registered
    3. Hash Password : securely hash the password
    4. Create user : create a new user with hash password
    5. Save to database : save user data to database
    6. Respond : respond with "Registration successful" or handle password error
 --------------------------------
*/
const register = async (req,res,next) =>{
    try {
        
        const {username,email,phone,password} = req.body;

        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hashed password
        // salt means -> kitna complex password bcrypt krna hai
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const userCreated = await User.create({username,email,phone,password:hashedPassword});

        

        res.status(201).json({
          message:"Registeration successful",
          token: await userCreated.generateToken(),
          userId: userCreated._id.toString(),
        });
    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check if the user exists in the database
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await userExists.comparePassword(password);
    if (isMatch) {
      // If the password is correct, generate a JWT token
      const token = await userExists.generateToken();
      res.status(200).json({
        message: "Login successful",
        email: userExists.email, // Include the user's email in the response
        token: token,
        userId: userExists._id.toString(),
      });
    } else {
      // If the password is incorrect, return an error message
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};

/* --------------------------------
    Create use Logic
 --------------------------------
*/
const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`Error from user route: ${error}`);
    }

};
module.exports = {home,register,login,user};