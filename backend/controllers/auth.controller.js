import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender}= req.body;

        if(password != confirmPassword){
            return res.status(400).json({error: "Password does not match"});
        }

        const user = await User.findOne({username: username});

        if(user){
            return res.status(400).json({error: "Username already exists"});
        }

        //HASHED PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //https://avatar-placeholder.iran.liara.run/

        const boyProfileImage = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
        const girlProfileImage = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profileImage: gender === "male"? boyProfileImage : girlProfileImage,
        });
        if(newUser){
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                profileImage: newUser.profileImage
            });
        }
        else{
            res.status(400).json({error: "Invalid User Data..."});
        }
    }
    catch(error){
        console.log("Error in signup", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
};
export const login = async(req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,  
            fullName: user.fullName,    
            username: user.username,
            gender: user.gender,
            profileImage: user.profileImage
        });
    }
    catch(error){
        console.log("Error in login", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
};
export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logout successful..."});
    }
    catch(error){
        console.log("Error in logout", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
}