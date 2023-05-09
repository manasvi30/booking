import express from "express"
import Hotel from "../models/Hotel.js";
const router = express.Router();
import {createRoom, updateRooms,deleteRooms,getRooms,getallRooms,updateRoomAvailability} from "../controllers/room.js"
import {verifyAdmin} from "../utils/verifyToken.js"

router.post("/:hotelId",verifyAdmin, createRoom)

router.put("/:id",verifyAdmin, updateRooms)
router.put("/availability/:id", updateRoomAvailability)
router.delete("/:id/:hotelId",verifyAdmin, deleteRooms)

//get
router.get("/:id",verifyAdmin,getRooms)

//getall
router.get("/",getallRooms)

export default router