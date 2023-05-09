import express from "express"
import Hotel from "../models/Hotel.js";
import {countByCity, countByType, createHotels, deleteHotels, getHotels, getallHotels, updateHotels,getHotelRooms } from "../controllers/hotels.js";
const router = express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"


router.post("/",verifyAdmin, createHotels)

router.put("/:id",verifyAdmin, updateHotels)
router.delete("/:id",verifyAdmin, deleteHotels)

//get
router.get("/find/:id",getHotels)

//getall
router.get("/",getallHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
router.get("/room/:id",getHotelRooms)
export default router