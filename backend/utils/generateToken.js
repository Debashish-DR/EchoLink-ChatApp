import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (user, res) => {
    const token = jwt.sign({ userId : user._id },process.env.JWT_SECRET,{
            expiresIn: "15d",
});

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent XSS attacks across-site scripting attacks
        sameSite: "strict", //prevent CSRF
        secure : process.env.NODE_ENV !== "development",        
    });
}

export default generateTokenAndSetCookie