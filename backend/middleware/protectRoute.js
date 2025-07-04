import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async(req, res, next) => {
    try{
          const token = req.cookies.jwt;
          if(!token){
              return res.status(401).json({error: "Unauthorized...Token Not Found"});
          }

          const decoded = jwt.verify(token, process.env.JWT_SECRET);

          if(!decoded){
              return res.status(401).json({error: "Unauthorized...Invalid Token"});
          }

          const user = await User.findById(decoded.userId).select("-password");

          if(!user){
              return res.status(401).json({error: "Unauthorized...User Not Found"});
          }

          req.user = user;
          next();

    }catch(error){ 
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
}

export default protectRoute;