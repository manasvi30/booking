import mongoose from 'mongoose';
const RoomSchema  = new mongoose.Schema({

    
    tittle:{
        type:String,
        required:true
    },
     desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    roomnumbers: [{number:Number,unavalailableDates :{type: [Date]}}]

},
 {timestamps:true}
);
export default mongoose.model("Room",RoomSchema)