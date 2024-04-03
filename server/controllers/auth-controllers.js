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
const register = async (req,res) =>{
    try {
        
        const {username,email,phone,password} = req.body;

        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(400).json("Email already exists");
        }

        // Hashed password
        // salt means -> kitna complex password bcrypt krna hai
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const userCreated = await User.create({username,email,phone,password:hashedPassword});

        

        res.status(201).json({
          msg:"Registeration successful",
          token: await userCreated.generateToken(),
          userId: userCreated._id.toString(),
        });
    } catch (error) {
        next(error);
    }
}
const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        // check if the user is already logged in or not
        const userExists = await User.findOne({email: email});
        if (!userExists) {
          return res.status(400).json("Invalid Credentials");
        }
        // compare the email and password
        // const isMatch = await bcryptjs.compare(password, userExists.password);
        const isMatch = await userExists.comparePassword(password);
        if(isMatch) {
            res.status(200).json({
                msg:"Login successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        }
        else {
            return res.status(400).json("Invalid Credentials");
        }
    } catch (error) {
        next(error);
    }
}
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