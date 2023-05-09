import express from "express"
import { deleteUsers, getUsers, getallUsers, updateUsers } from "../controllers/usercontroll.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js"
const router = express.Router();

//{router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    //res.send("hello user, you are logged in")
//})

//router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    //res.send("hello user, you are logged in and you can delete your account")
//})

//router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    //res.send("hello admin, you are logged in and you can delete all your account")
//})}

router.put("/:id",verifyUser, updateUsers)
router.delete("/:id", deleteUsers)

//get
router.get("/:id",verifyUser,getUsers)

//getall
router.get("/",verifyAdmin,getallUsers)
export default router