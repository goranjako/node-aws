
import jwt from "jsonwebtoken";
import User from "../models/user";
import dotenv from "dotenv";
import { token } from "morgan";
dotenv.config();

class Auth {
  //register
  async register(req, res) {
    try {
      if (!req.body.userName || !req.body.password) {
        res.json({ success: false, msg: "Please pass username and password." });
      } else {
        const newUser = {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
        };
       const user=newUser;
       console.log(user)
        const token = jwt.sign(user, process.env.SECRET_TOKEN, {
          expiresIn: "1h",
        });
        console.log(token)
        //Send the jwt in the response
        return res.status(200).send({
          success: true,
          msg: "You are successfully register",
          token: token,
        });
      }
    } catch (err) {
      res.status(422).json({ success: false, msg: "User already exists." });
      
    }
  }
  //login
  login(req, res) {
    
}
}
export default new Auth();
