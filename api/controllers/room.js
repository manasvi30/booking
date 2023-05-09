import Room from "../models/Room.js"
import {createError} from "../utils/error.js"
import Hotel from "../models/Hotel.js"

export const createRoom = async (req,res,next)=>
{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push: {rooms: savedRoom._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
        
        }catch (err)
        {
            next(err)
        }
    };
    
export const updateRooms = async (req,res,next)=>
{
    try{
        const updateRoom =  await Room.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
         res.status(200).json(updateRoom)
    }catch(err)
    {
        next(err);
    }

}

export const updateRoomAvailability = async (req,res,next)=>
{
    try{
       await Room.updateOne({"roomnumbers._id": req.params.id},
       {
        $push : {
            "roomnumbers.$.unavalailableDates": req.body.date
        },
       })
         res.status(200).json("room status has been updated")
    }catch(err)
    {
        next(err);
    }

}
export const deleteRooms = async (req,res,next)=>
{
    const hotelId = req.params.hotelId;
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull: {rooms: req.params.id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Room has been deleted");
   }catch(err)
    {
        next(err);
    }
}
export const getRooms = async (req,res,next)=>
{
    try{
        const Rooms =  await Room.findById(req.params.id)
         res.status(200).json(Rooms)
    }catch(err)
    {

        next(err);
    }
}
export const getallRooms = async (req,res,next)=>
{
    
    try{
        const rooms =  await Room.find()
         res.status(200).json(rooms)
    }catch(err)
    {
        next(err);
    }
}

